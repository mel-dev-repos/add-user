import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import "./tableDashboard.css";
const UploadImg = ({ handelChange, name }) => {
  const [preview, setPreview] = React.useState("");
  const [drop, setDrop] = React.useState(false);

  const handleEnter = (e) => {
    e.preventDefault(); // prevent reloadnig
    e.stopPropagation(); // prevent bubbling and capturing
  };

  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrop(true);

    const [file] = e.target.files || e.dataTransfer.files;
    console.log(file);
    uploadFile(file);
  };

  function uploadFile(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const fileRes = reader.result;
      setPreview(fileRes);
      handelChange({ target: { name: "image", value: fileRes } });
    };

    reader.onerror = () => {
      console.log("There is a problem while uploading...");
    };
  }

  return (
    <>
      <div
        onDragEnter={(e) => handleEnter(e)}
        onDragLeave={(e) => handleLeave(e)}
        onDragOver={(e) => handleOver(e)}
        onDrop={(e) => handleUpload(e)}
        className="upload drag-drop-zone"
      >
        <BsCloudUpload className="uploadIcon" />
        Drag & Drop your files here <br />
        <div className="upload-button">
          <input
            type="file"
            name={name}
            className="upload-file"
            accept="image/*"
            onChange={(e) => handleUpload(e)}
          />
        </div>
      </div>
      <img
        src={preview}
        alt="drag-and-drop-img"
        className={drop ? "drag-and-drop-img" : "hidden-img"}
      />
    </>
  );
};

export default UploadImg;
