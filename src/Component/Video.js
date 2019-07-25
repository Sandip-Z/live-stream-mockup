import React from 'react'
const Video = ({size})=>{
    return(
        <div>
            <div className="row">
                <div className={"col s" + size+" black video-player-dummy z-depth-2" }>
                    Live Stream Video
                </div>
            </div>
        </div>
    )
}

export default Video