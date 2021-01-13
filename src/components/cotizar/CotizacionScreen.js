import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/UseForm";
import { db } from "../../firebase/firebase-config";
export const CotizacionScreen = ({ history }) => {
  const state = useSelector((state) => state.cotizaciones);
  const [precio, setPrecio] = useState(0);
  const [upload, setUpload] = useState(true);
  useEffect(() => {
    let precio_final = 0;
    state.map((cotizacion) => {
      precio_final = precio_final + cotizacion.price;
    });
    setPrecio(precio_final);
  }, []);

  const [{ email }, handleChange] = useForm({
    email: "",
  });

  const handleBack = () => {
    history.push("/cotizar");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length <= 1) {
      return;
    }
    db.collection("cotizaciones")
      .add({ email, descripcion: state, precio })
      .then(() => {
        setUpload(false);
      });
  };

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <button
        onClick={handleBack}
        className="btn btn-outline-primary"
        style={{ marginBottom: "20px" }}
      >
        Regresar
      </button>
      {upload ? (
        <>
          <h1 className="text-center">
            Podemos hacer todo el trabajo mañana por:
          </h1>
          <p
            style={{ fontSize: "2rem", textAlign: "center", fontWeight: "800" }}
          >
            ${precio}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email"
              autoComplete="off"
              onChange={handleChange}
              value={email}
            ></input>
            <div>
              <button
                type="submit"
                className="btn btn-primary "
                style={{
                  margin: "25px 0 0 0",
                  display: "block",
                  width: "100%",
                }}
              >
                Contratar
              </button>
            </div>
          </form>
        </>
      ) : (
        <h1 className="text-center">Muy bien servicio contratado</h1>
      )}
    </div>
  );
};
