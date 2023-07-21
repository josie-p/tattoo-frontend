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
        <div id="my-work-page">
            <h2>my work!</h2>

            {
                imageList.map((url, idx) => {
                  return (  
                    /*
                    -onclick of the image, a class is added 
                    */
                  <div key={`the key for the img map is at idx ${idx}`}> 

                <img className="my-work-img"  src={url} onClick={() => {
                    document.getElementById(`myModal${idx}`).style.display = "block";
                }}  />

                  <div id={`myModal${idx}`} className="modal" >

                        <div className="modal-content" >
                        <span className="close" onClick={() => {
                            document.getElementById(`myModal${idx}`).style.display = "none";
                        }}  >&times;</span>
                        <img className="my-work-img-modal" src={url} />
                        </div>
                  </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default MyWork;