import React, { useState, useEffect } from "react";

import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";



const LightboxTest = () => {

    const [ imageList, setImageList ] = useState([]);

    const imageListRef = ref(storage, "images/");


    const [slides, setSlides] = useState([]);

    const [ slideIdx, setSlideIndex ] = React.useState(-1);

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

    useEffect(() => {
        console.log("images set!");

      
            const newSlides = imageList.map(url => ({ src: url }));
            setSlides(newSlides);

       

        console.log(slides, "slides array");
    }, [imageList]);

    return(
        <div>
            lightbox test

            <div id="images">
                <h2>all the photos</h2>
                { 
                
                imageList.map((url, idx) => {
                    return <img key={`the key for the img map is at idx ${idx}`}  src={url} alt="photo of a tattoo by Joann Woods" height="250px" width="250px" 
                    onClick={() => setSlideIndex(idx)}
                    />
                })

                }

                <Lightbox 
                index={slideIdx}
                slides={slides}
                plugins={[Thumbnails]}
                open={slideIdx >= 0}
                close={() => setSlideIndex(-1)}
                />



            </div>
        </div>
    )
}

export default LightboxTest;