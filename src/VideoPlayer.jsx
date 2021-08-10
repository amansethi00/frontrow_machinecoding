import React, { useState, useEffect } from 'react'
import videosJSON from "./data";
import "./VideoPlayer.css";
export const VideoPlayer = ({ currentVid }) => {
    console.log({ currentVid })
    const [localSrc, setlocalSrc] = useState(videosJSON[currentVid].sources);
    useEffect(() => {
        setlocalSrc(videosJSON[currentVid].sources)

    }, [currentVid])
    return (
        <video src={localSrc} type="video/mp4" className="player" height="400" controls />

    )
}

