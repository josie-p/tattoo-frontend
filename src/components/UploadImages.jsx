import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const UploadImages = () => {
    const [imageUpload, setImageUpload] = useState(null);

    const [imageList, setImageList] = useState([]);

    //trying to display image:
    const image_input = document.querySelector("#image_input");
    let uploaded_image = "";

    const uploadHelper = () => {
        if(imageUpload === null) return;

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)

        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded");
        })

    }

    
    return(
        <div>
            <h1>upload images component!</h1>
            
            <input id="image_input" type="file" accept="image/png, image/jpeg" onChange={(event) => {
                setImageUpload(event.target.files[0]);

                // const reader = new FileReader();

                // reader.addEventListener("load", () => {
                //     uploaded_image = reader.result;

                //     document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;


                // })

                // reader.readAsDataURL(event.target.files[0]);

                // console.log(event.target.files[0]);

                // document.getElementById("display_image").style.backgroundImage = `url(${event.target.files[0].name})`

            }} />
            <button onClick={() => {
                uploadHelper();
            }} >Upload Image</button>

            { imageList.map((url) => {
                return <img src={url} />
            }) }

            <div id="display_image"></div>


            
        </div>
    )
}

export default UploadImages;


// useEffect(() => {
//     listAll().then((response) => {
//         // console.log(response);
//         response.items.forEach((item) => {
//             getDownloadURL(item).then((url) => {
//                 setImageList((prev) => [...prev, url])
//             })
//         })
//     })
// }, [])