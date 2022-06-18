import styled from "@emotion/styled";
import { useEffect, useState, useRef } from "react";
import "./tableDashboard.css";
const imageMimeType = /image\/(png|jpg|jpeg)/i;

function Upload({ handelChange, name }) {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
          handelChange({ target: { name: "image", value: result } });
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <>
      <form style={{ marginTop: "15px" }}>
        <p> OR</p>
        <label htmlFor="image" className="choosFileButton">
          Choose a file
          <input
            type="file"
            id="image"
            hidden
            name={name}
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
          />
        </label>
        <p id="file_name"></p>
        {fileDataURL ? (
          <img
            src={fileDataURL}
            alt="choosen-photo"
            className="choosen-photo"
          />
        ) : null}
      </form>
    </>
  );
}
export default Upload;
