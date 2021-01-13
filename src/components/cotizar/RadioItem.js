import React from "react";

export const RadioItem = ({
  name,
  img,
  desc,
  value,
  titulo,
  handleChange,
  valor,
}) => {
  return (
    <div
      className="card"
      style={{
        margin: "10px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        fontSize: "1.4rem",
      }}
    >
      {img ? (
        <img
          src={`/assets/${img}`}
          style={{ width: "300px", height: "300px" }}
        ></img>
      ) : (
        titulo
      )}

      <div className="card-body">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={value}
            checked={parseInt(value) === parseInt(valor)}
            onChange={handleChange}
          />
          <label className="form-check-label">{desc}</label>
        </div>
      </div>
    </div>
  );
};
