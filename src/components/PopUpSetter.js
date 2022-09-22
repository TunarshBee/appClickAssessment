import "../components/css/VideoPlayer.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormDetail } from "../store/actions/FormDetail";
import Form from "react-bootstrap/Form";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import Grid from "@mui/material/Unstable_Grid2";

const FormTemplates = ({ setText, text, setPage }) => {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState();

  const [textColor, setTextColor] = useState();

  const [fSize, setFSize] = useState();

  const [formposition, setFormposition] = useState();

  const [popTime, setPupTime] = useState();

  const [file, setFile] = useState("");
  const [videoPlaceH, setVideoPlaceH] = useState(true);
  const [videoUrl, setVideoUrl] = useState("");
  const [videfile, setVidefile] = useState("");
  const [first, setFirst] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);
  const formDetails = {
    theme: theme,
    textColor: textColor,
    fontSize: fSize,
    formposition: formposition,
    popTime: popTime,
    text: text,
    videoPlaceH: videoPlaceH,
    videoUrl: videoUrl,
    videfile: videfile,
  };

  const saveDetail = () => {
    dispatch(FormDetail(formDetails));
    setPage(1);
  };
  const uploadVideo = (e) => {
    const file = e.target.files[0];
    const vidUrl = URL.createObjectURL(file);
    setFile(vidUrl);
    setVidefile(vidUrl);
    console.log(vidUrl);
    setSaveBtn(true);
  };

  const style1 = {
    position: "relative",
    top: "10%",
    maxWidth: "275px",
    backgroundColor: theme,
    bordeRadius: " 5px 40px",
  };

  const style2 = {
    margin: "20px auto 3px",
    padding: "40px 2px 20px",
    position: "relative",
    top: "10%",
    maxWidth: "275px",
    backgroundColor: theme,
    borderRadius: "100px",
  };
  const [temp, setTemp] = useState(style1);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#222a68',
    width:"20%",
    position:'relative',
    '&:hover': {
      backgroundColor: '#222a68f2',
    },
  }));

  return (
    <div className="formTemplates">
      <CssBaseline />
      <Container>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}

        <Stack spacing={10} direction="column">
          <Stack spacing={2} direction="column">
            {/* <Link> */}
              <Button
                variant="contained"
                onClick={(e) => setFirst(!first)}
                disableElevation
              >
                Create Interactive Video
              </Button>
            {/* </Link> */}
            {first && (
              <div className="videoInpu">
                <Stack spacing={15} direction="row">
                  <ColorButton
                    variant="contained"
                    component="label"
                    disableElevation
                    
                  >
                    Upload File
                    <input
                    className="abs"
                      type="file"
                      hidden
                      accept="video/*"
                      onChange={(e) => {
                        uploadVideo(e);
                      }}
                    />
                  </ColorButton>

                  <TextField
                    id="standard-basic"
                    accept="video/*"
                    onChange={(e) => {
                      let url = e.target.value.split("v=")[1];
                      setVideoPlaceH(false);
                      setVideoUrl(url);

                      setTimeout(() => {
                        setVidefile("");
                      }, 1000);
                      setSaveBtn(true);
                    }}
                    label="Paste a YouTube Video Url"
                    variant="standard"
                  />
                </Stack>
              </div>
            )}
          </Stack>

          <TextField
            type="text"
            placeholder="Enter a popup text"
            variant="standard"
            value={text}
            onChange={setText}
            style={{ color: textColor, fontSize: fSize + "px" }}
          />

          <Stack>
            <Grid
              container
              spacing={0}
              sx={{ flexGrow: 1 }}
              columns={18}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid xs={6}>
                <span>
                  {/* <Form.Label htmlFor="backcolor">Pop Up Time</Form.Label> */}
                  <TextField
                  type="number"
                    id="standard-basic"
                    onChange={(e) => setPupTime(e.target.value)}
                    label="type pop up time in sec"
                    variant="standard"
                    
                  />
                </span>
              </Grid>
              <Grid xs={6}>
                <span>
                  <Form.Label htmlFor="backcolor">Background Color</Form.Label>
                  <Form.Control
                    type="color"
                    id="backcolor"
                    defaultValue="#563"
                    name="backcolor"
                    title="Choose your color"
                    onChange={(e) => {
                      setTheme(e.target.value);
                      temp === style2 ? setTemp(style2) : setTemp(style1);
                    }}
                  />
                </span>
              </Grid>
              <Grid xs={6}>
                <span>
                  <Form.Label htmlFor="exampleColorInput">
                    Text Color
                  </Form.Label>
                  <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                    onChange={(e) => {
                      setTextColor(e.target.value);
                    }}
                  />
                </span>
              </Grid>
            </Grid>
            <Stack>
              <br /> <br />
              {saveBtn && (
                <Link to={"/preview"}>
                  <Button
                    variant="contained"
                    onClick={saveDetail}
                    disableElevation
                  >
                    save
                  </Button>
                </Link>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default FormTemplates;
