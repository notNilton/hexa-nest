import React, { useContext, useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Divider } from "primereact/divider";
import { DataContext } from "../context/DataContext";
import "./InputComp.scss";
import "primeflex/primeflex.css";

const InputComp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const [nextPhaseEnabled, setNextPhaseEnabled] = useState(false);

  const inputs = useMemo(
    () => [
      "OD-Esf",
      "OE-Esf",
      "AD",
      "OD-Eixo",
      "OE-Eixo",
      "PL",
      "OD-DNP",
      "OE-DNP",
      "Diametro",
      "OD-Cil",
      "OE-Cil",
      "Prisma",
    ],
    []
  );

  const [inputValues, setInputValues] = useState(() =>
    inputs.map((label) => data[label] || null)
  );
  const [errors, setErrors] = useState(Array(inputs.length).fill(false));

  const handleInputChange = (value, index) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);

    const newErrors = [...errors];
    newErrors[index] = value === null || value === "";
    setErrors(newErrors);
  };

  const handleConfirmClick = () => {
    const newErrors = inputValues.map(
      (value) => value === null || value === ""
    );
    setErrors(newErrors);
    setNextPhaseEnabled(!newErrors.includes(true));
  };

  const handleNextPhaseClick = () => {
    const jsonData = inputs.reduce((acc, label, index) => {
      acc[label] = inputValues[index];
      return acc;
    }, {});
    setData(jsonData);

    const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inputValues.json";
    a.click();
    URL.revokeObjectURL(url);

    navigate("/camera");
  };

  useEffect(() => {
    setInputValues(inputs.map((label) => data[label] || null));
  }, [data, inputs]);

  return (
    <div className="input-comp">
      <div className="grid-container">
        <h1 className="grid-item">{t("inputComponentHeader")}</h1>
        <div className="grid-item">
          <div className="inputs-grid">
            {inputs.map((label, index) => (
              <div key={index} className="input-field">
                <label>{t(label)}</label>
                <InputNumber
                  value={inputValues[index]}
                  mode="decimal"
                  minFractionDigits={1}
                  maxFractionDigits={4}
                  className="p-inputnumber"
                  useGrouping={false}
                  onValueChange={(e) => handleInputChange(e.value, index)}
                />
                {errors[index] && (
                  <small className="p-error">{t("errorMessage")}</small>
                )}
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <div className="buttons">
          <Button
            label={t("footerButton")}
            icon="pi pi-check"
            className="confirm-button"
            onClick={handleConfirmClick}
          />
          <Button
            label={t("nextPhaseButton")}
            icon="pi pi-arrow-right"
            className={`next-phase-button ${
              nextPhaseEnabled ? "enabled" : "disabled"
            }`}
            disabled={!nextPhaseEnabled}
            onClick={handleNextPhaseClick}
          />
        </div>
      </div>
    </div>
  );
};

export default InputComp;
