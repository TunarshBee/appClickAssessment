import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FormDetail } from "../store/actions/FormDetail";
const UrlInput = () => {
  const formStyle = useSelector((state) => state.FormDetail);

const dispatch = useDispatch();
    const [form, setForm] = useState();
    const [videoUrl, setVideoUrl] = useState();
  const [videofile, setVideofile] = useState();
  const [videoPlaceH, setVideoPlaceH] = useState(true);

  const formDetails = {
    videoUrl: videoUrl,
    videoPlaceH: videoPlaceH,
    videofile:videofile,
  };

  const uploadVideo = (e) => {
    setVideoUrl(false);
    const file = e.target.files[0];
    const vidUrl = URL.createObjectURL(file);
    console.log(vidUrl)
    setVideoPlaceH(false);
    setVideofile(vidUrl);
    dispatch(FormDetail(formDetails));

  };
 
  return (
      <div>
         <input
        type="text"
        placeholder="Past YouTube Video Url"
        onChange={(e) => {
            let url = e.target.value.split("v=")[1];
            setVideoPlaceH(false);
            setVideofile(false);
            setVideoUrl(url);
            console.log(videoUrl)
            // setTimeout(() => {
            //     setForm(true);
            // }, formStyle.popTime + 2000);
            // dispatch(FormDetail(formDetails));
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
          console.log(videoPlaceH, videoUrl, videofile)
        }}
      />
    </div>
  )
}

export default UrlInput