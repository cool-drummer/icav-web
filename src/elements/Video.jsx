import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  // URL del video de YouTube que deseas mostrar
  // const youtubeUrl = "https://ibthemespro.com/resource/deski/intro_3.mp4";
  const youtubeUrl = "https://www.youtube.com/watch?v=-TP16SfRqwE";

  return (
    <div className="video-container">
      <ReactPlayer
        url={youtubeUrl}
        width="100%"
        height="56.25vw"
        playing={true}
        muted={true}
        loop={true}
        controls={false}
        config={{
          file: {
            attributes: {
              onContextMenu: (e) => e.preventDefault(), // Desactiva el menú contextual
            },
          },
        }}
      />
    </div>
  );
};

export default Video;
