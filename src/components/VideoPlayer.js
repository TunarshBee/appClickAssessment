import "../components/css/PopUp.css";
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
    
      <br />
      {vidCurrentTime && form === true && formStyle.text && (
        <div
          className="template"
          style={
            formStyle.formposition === "left" ? { left: "5%" } : { right: "1%" }
          }
        >
          <form
            style={{
              backgroundColor: formStyle.theme,
              color: formStyle.textColor,
              fontSize: formStyle.fontSize,
            }}
          >
            <h6
              style={{
                margin: " 0px 10px",
                padding: "3px 6px",
                backgroundColor: "transparent",
                display: "flex",
                borderRadius: "50px",
                float: "right",
                color: "red",
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
              onClick={() => {
                setForm(false);
              }}
            >
              X
            </h6>
            {formStyle.text && (
              <h4
                style={{
                  borderRadius: "10px",
                }}
              >
                {formStyle.text}

              </h4>
            )}
            {formStyle.fle && (
              <h4
                style={{
                  borderRadius: "10px",
                }}
              >
                <img src={formStyle.fle} width="100px" height="100px" alt="popup i" />
                
              </h4>
            )}
          </form>
        </div>
      )}
      <div className="videoBox">
        {formStyle.videfile && (
          <video
            src={formStyle.videfile}
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
            }}
          ></video>
        )}

        {formStyle.videoUrl && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${formStyle.videoUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
            }}
            
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Preview;
