import React, { useState } from 'react'
import videosJSON from "./data";
import { VideoPlayer } from './VideoPlayer';
export const VideoModal = ({ openModal, setOpenModal }) => {
    const [currentVid, setCurrentVide] = useState(0);
    console.log(videosJSON)
    return (
        <div style={{ display: openModal ? "block" : "none", backgroundColor: "black", position: "relative" }} >
            {currentVid !== 0 && <button onClick={() => setCurrentVide(prev => prev - 1)}  >
                <img src="https://d3qcdw78qm4j9k.cloudfront.net/public/web/icons/prev_btn.svg" alt="next-button" />
            </button>}
            {
                currentVid !== videosJSON.length - 1 && <button onClick={() => setCurrentVide(prev => prev + 1)} >
                    <img src="https://d3qcdw78qm4j9k.cloudfront.net/public/web/icons/next_btn.svg" alt="next-button" />
                </button>
            }
            <button onClick={() => setOpenModal(false)} style={{ position: "absolute", right: "0" }} >Close Modal</button>

            <h2 style={{ color: "white" }} >{videosJSON[currentVid].title}</h2>
            <h3 style={{ color: "white" }}>{videosJSON[currentVid].subtitle}</h3>
            <p>{videosJSON[currentVid].description}</p>
            <VideoPlayer currentVid={currentVid} />

        </div>

    )
}

