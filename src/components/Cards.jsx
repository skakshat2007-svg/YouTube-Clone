import { useState,useEffect } from "react";

export default function Cards({video, channelImgUrl}){
    let thumbnail = video.snippet.thumbnails.medium.url;
    let title = video.snippet.title;
    let channelName = video.snippet.channelTitle;
    let viewCount = video.statistics.viewCount;
    let views=''
    if(viewCount>=1000000)
        views = ((viewCount/1000000).toFixed(1)).toString()+'m views'
    else if(viewCount>=100000)
        views = Math.round((viewCount/1000)).toString()+'k views'
    else if(viewCount>=1000)
        views = ((viewCount/1000).toFixed(1)).toString()+'k views'
    else
        views = viewCount.toString()+' views'
    return (
        <div className="video-container">
            <img src={thumbnail} alt="thumbail" className="thumbnail"/>
            <div className="card-video-details">
                <div>
                    <img src={channelImgUrl} alt="Channel Image" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{channelName}</p>
                    <p>{views}</p>
                </div>
            </div>
        </div>
    )
}