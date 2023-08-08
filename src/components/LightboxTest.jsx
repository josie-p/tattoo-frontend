import React, { useState, useEffect } from "react";

import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import PhotoAlbum from "react-photo-album";


const LightboxTest = () => {

    const [ imageList, setImageList ] = useState([]);

    const imageListRef = ref(storage, "images/");

    // const [open, setOpen] = React.useState(false);
    const [ slideIdx, setIndex ] = React.useState(-1);

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
            lightbox test

            <div id="images">
                <h2>all the photos</h2>
                { 
                
                imageList.map((url, idx) => {
                    return <img key={`the key for the img map is at idx ${idx}`}  src={url} alt="photo of a tattoo by Joann Woods" height="250px" width="250px" 
                    onClick={() => setIndex(idx)}
                    />
                })

                }

                <Lightbox 
                index={slideIdx}
                slides={imageList}
                open={slideIdx >= 0}
                close={() => setIndex(-1)}
                />



            </div>
        </div>
    )
}

export default LightboxTest;