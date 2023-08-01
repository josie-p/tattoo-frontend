import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const AddPhotos = () => {

    const [imageUpload, setImageUpload] = useState(null);

    const [imageList, setImageList] = useState([]);

    const uploadHelper = () => {
        if(imageUpload === null ) return;
        
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded");
            location.reload();
        })
        
    }

    return(
        <div id="upload-photos">
            <h4>upload photos of your work!</h4>

            <input id="image_input" type="file" accept="image/png, image/jpeg" onChange={(event) => {
                setImageUpload(event.target.files[0]);
            }} />

            <button id="upload-image-button" onClick={() => {
                uploadHelper();
            }} >Upload Image</button>


        </div>
    )
}

export default AddPhotos;
