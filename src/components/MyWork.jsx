import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const MyWork = () => {

    // const [ imageUpload, setImageUpload ] = useState([]);

    const [ imageList, setImageList ] = useState([]);

    const imageListRef = ref(storage, "images/");

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            console.log(response);
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                })
            })
        })
    }, [])

    return(
        <div>
            <h2>my work!</h2>

            {
                imageList.map((url) => {
                    return <img className="my-work-img" src={url} />
                })
            }
        </div>
    )
}

export default MyWork;