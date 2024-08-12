import React, { useState, useRef } from "react";
import "./HomeComp.scss";

const HomeComp: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click
  };

  return (
    <div className="home-comp">
      <div className="top-bar">
        <button onClick={handleButtonClick}>Upload PDF</button>
        <button>Gerar Análise</button>
        <button>Anonimizar</button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden-file-input" // Applying a class instead of inline styles
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
          <h1>Welcome to Home Page</h1>
          <p>This is the main landing page of the application.</p>
          <p>
            You can upload a PDF file on the left, and it will be displayed
            here. On the right, you can have your content or any other relevant
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
