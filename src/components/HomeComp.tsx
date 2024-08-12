import React, { useState, useRef } from "react";
import "./HomeComp.scss";

const HomeComp: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      uploadAndExtractText(file);
    }
  };

  const uploadAndExtractText = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/extract-text", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setExtractedText(data.summary); // Mostra o resumo gerado pelo ChatGPT
      } else {
        console.error("Failed to extract text from PDF.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="home-comp">
      <div className="top-bar">
        <button onClick={() => fileInputRef.current?.click()}>
          Upload PDF
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden-file-input"
          aria-label="Upload PDF"
        />
      </div>

      <div className="content">
        <div className="pdf-container">
          {pdfUrl && (
            <iframe src={pdfUrl} title="PDF Viewer" className="pdf-viewer" />
          )}
        </div>
        <div className="text-container">
          <h1 className="title">Texto Extraído</h1>
          <div className="extracted-text">
            {extractedText || "Nenhum texto extraído ainda."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
