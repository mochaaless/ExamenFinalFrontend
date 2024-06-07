import { FunctionComponent } from "preact";
import { Video } from "../types.ts"
import Header from "../islands/Header.tsx";

type Props = {
    videos: Video[]
    userid: string;
}

const VideoList: FunctionComponent<Props> = ({ videos, userid }) => {

    return(
        <>
        <Header/>
        <div className="video-list-container">
        {videos.map((video) => {
            return (
                <div key={video.id} className="video-item">
                    <a href={`${Deno.env.get("API_URL")}/video/${video.id}`} className="video-link">
                    <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="video-thumbnail" />
                    <div className="video-info">
                        <h3 className="video-title">{video.title}</h3>   
                        <p className="video-description">{video.description}</p>     
                    </div>
                </a>
            </div>
            )
            
        })}


          </div></>
    )
}

export default VideoList;