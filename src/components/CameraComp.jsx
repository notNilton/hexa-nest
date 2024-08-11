import React, { useEffect, useRef, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { DataContext } from "../context/DataContext";
import "./CameraComp.scss";

const CameraComp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
  const [photoTaken, setPhotoTaken] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processingStage, setProcessingStage] = useState("");
  const { data } = useContext(DataContext);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError(t("cameraError"));
      }
    };

    getUserMedia();
  }, [t]);

  const capturePhoto = () => {
    setProcessing(true);
    setProcessingStage(t("sending"));
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const dataURL = canvasRef.current.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.href = dataURL;
      downloadLink.download = t("photoFilename");
      downloadLink.click();
      setPhotoTaken(true);
    }

    setTimeout(() => {
      setProcessingStage(t("waitingForResponse"));
    }, 2000);

    setTimeout(() => {
      setProcessingStage(t("finalized"));
      setProcessing(false);
    }, 5000);
  };

  const handleBackClick = () => {
    navigate("/input");
  };

  const dataEntries = Object.entries(data).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <div className="camera-comp">
      <div className="grid-container">
        <div className="grid-item reserved">
          <h3>{t("imageProcessingProgress")}</h3>
          {processing && (
            <div>
              <p>{processingStage}</p>
              <ProgressBar mode="indeterminate" />
            </div>
          )}
        </div>
        <div className="grid-item camera">
          <h1 className="header">{t("headerContent")}</h1>
          {error ? (
            <p>{error}</p>
          ) : (
            <div className="video-container">
              <video ref={videoRef} autoPlay playsInline />
            </div>
          )}
          <div className="buttons">
            <Button
              label={t("captureButton")}
              icon="pi pi-check"
              className="confirm-button"
              onClick={capturePhoto}
            />
            <Button
              label={t("nextPhaseButton")}
              icon="pi pi-lock"
              className={`next-phase-button ${
                photoTaken ? "enabled" : "disabled"
              }`}
              disabled={!photoTaken}
            />
            <Button
              label={t("backButton")}
              icon="pi pi-arrow-left"
              className="back-button"
              onClick={handleBackClick}
            />
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </div>
        </div>
        <div className="grid-item data">
          <h3>{t("receivedData")}</h3>
          <div className="data-grid">
            {dataEntries.map((entry, index) => (
              <div key={index} className="data-cell">
                <strong>{entry.key}:</strong> {entry.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraComp;
