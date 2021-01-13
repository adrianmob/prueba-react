import React from "react";
import { useDispatch } from "react-redux";
import { cotizarDelete } from "../../actions/cotizar";

export const CotizacionesItem = ({ room, detalle, size, valor }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(cotizarDelete(id));
  };
  return (
    <div className="card" style={{ padding: "20px", margin: "20px" }}>
      <h3>{room}</h3>
      <p>Detalles: {detalle}</p>
      <p>Tamaño: {size}</p>
      <div>
        <button
          onClick={() => {
            handleDelete(valor);
          }}
          className="btn btn-outline-danger"
        >
          Quitar
        </button>
      </div>
    </div>
  );
};
