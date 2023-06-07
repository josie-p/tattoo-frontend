import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadImages = () => {
    const [imageUpload, setImageUpload] = useState(null);

    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/");
    const uploadHelper = () => {
        if(imageUpload === null) return;

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)

        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded");
        })

    }

    useEffect(() => {
        listAll().then((response) => {
            // console.log(response);
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return(
        <div>
            <h1>upload images component!</h1>
            
            <input type="file" accept="image/png, image/jpeg" onChange={(event) => {
                setImageUpload(event.target.files[0])
            }} />
            <button onClick={() => {
                uploadHelper();
            }} >Upload Image</button>

            { imageList.map((url) => {
                return <img src={url} />
            }) }
            
        </div>
    )
}

export default UploadImages;