import "./Preview.css";
import { useState } from "react";
import { useSelector } from "react-redux";
const Preview = () => {
  const formStyle = useSelector((state) => state.FormDetail);

  const [videoUrl, setVideoUrl] = useState();
  const [videofile, setVideofile] = useState();
  const [videoPlaceH, setVideoPlaceH] = useState(true);
  const [vidCurrentTime, setVidCurrentTime] = useState();

  const [form, setForm] = useState(false);
  const uploadVideo = (e) => {
    setVideoUrl(false);
    const file = e.target.files[0];
    const vidUrl = URL.createObjectURL(file);
    setVideofile(vidUrl);
    
    setVideoPlaceH(false);
  };
  return (
    <div className="preview">
      <h5>Paste a Youtube link, choose a video file or drag and drop a video file</h5> <br />
      {vidCurrentTime < 20 && form === true && (
        <div
          className="template"
          style={
            formStyle.formposition === "left" ? { left: "5%" } : { right: "1%" }
          }
        >
          <form
            style={{
              backgroundColor: formStyle.theme,
            }}
          >
            <h6
              style={{
                margin: " 0px 10px",
                padding: "3px 6px",
                backgroundColor: "silver",
                display: "flex",
                borderRadius: "50px",
                float: "right",
                color: "blue",
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
              onClick={() => {
                setForm(false);
              }}
            >
              
              X
            </h6>
                {formStyle.text && (<h4>{formStyle.text}</h4>)}
                {formStyle.file && (
                  <video
                  src={formStyle.file}
                  controlsList=""
                  controls
                  id="video"
                  width="200px"
                  height="100px"
                  onPlay={(e) => {
                    setInterval(() => {
                      setVidCurrentTime(e.target.currentTime);
                    }, 1000);
      
                    setTimeout(() => {
                      setForm(true);
                    }, formStyle.popTime);
                  }}
                  onPause={(e) => {
                    setVidCurrentTime(e.target.currentTime);
                    console.log(vidCurrentTime);
                  }}
                ></video>
                )}
          </form>
        </div>
      )}
      <div className="videoBox">
        {videoPlaceH && (
          <div className="placeholder">
            <img
              src="https://mobileinternist.com/wp-content/uploads/2022/07/youtube-thumbnails-not-showing.png?ezimgfmt=ng%3Awebp%2Fngcb31%2Frs%3Adevice%2Frscb31-1"
              width="100%"
              alt="Video Loader"
            />
          </div>
        )}
        {videofile && (
          <video
            src={videofile}
            controlsList=""
            controls
            id="video"
            onPlay={(e) => {
              setInterval(() => {
                setVidCurrentTime(e.target.currentTime);
              }, 1000);

              setTimeout(() => {
                setForm(true);
              }, formStyle.popTime);
            }}
            onPause={(e) => {
              setVidCurrentTime(e.target.currentTime);
              console.log(vidCurrentTime);
            }}
          ></video>
        )}

        {videoUrl && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <input
        type="text"
        placeholder="Past YouTube Video Url"
        onChange={(e) => {
          let url = e.target.value.split("v=")[1];
          setVideoPlaceH(false);
          setVideofile(false);
          setVideoUrl(url);

          setTimeout(() => {
            setForm(true);
          }, formStyle.popTime + 2000);
        }}
      />
      <h4
        style={{ margin: "0px", color: "blue", display: "flex" }}
      >
        OR
      </h4>
      <label htmlFor="file">Drag and Drop</label>
      <input
        type="file"
        name="file"
        id="file"
        accept="video/*"
        onChange={(e) => {
          uploadVideo(e);
        }}
      />
    </div>
  );
};

export default Preview;
