import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import mwTest from "./styling/mwTest.css";

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
            <div id="title-my-work">

            <h2>check out my work!</h2>
            </div>

            <div id="images" >

            {
                imageList.map((url, idx) => {
                  return (  
                  <div key={`the key for the img map is at idx ${idx}`}> 

                {/* <img className="my-work-img"  src={url} alt="photo of a tattoo by Joann Woods" onClick={() => {
                    document.getElementById(`myModal${idx}`).style.display = "block";
                }}  /> */}

                <img className={idx === 0 || idx === 7 ? "my-work-img change-grid-img" : "my-work-img"}  src={url} alt="photo of a tattoo by Joann Woods" onClick={() => {
                    document.getElementById(`myModal${idx}`).style.display = "block";
                }}  />

                  <div id={`myModal${idx}`} className="modal" >

                        <div className="modal-content" >
                        <span className="close" onClick={() => {
                            document.getElementById(`myModal${idx}`).style.display = "none";
                        }}  >&times;</span>
                        <img className="my-work-img-modal" src={url} alt="photo of a tattoo by Joann Woods" />
                        </div>
                  </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default MyWork;