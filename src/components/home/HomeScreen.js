import React from "react";
import { Navbar } from "../ui/Navbar";

export const HomeScreen = ({ history }) => {
  const handleCotizar = () => {
    history.push("/cotizar");
  };
  return (
    <>
      <Navbar />

      <div
        style={{ backgroundImage: "url(/assets/fondo.jpg)" }}
        className="contenedor"
      >
        <div className="message">
          Cotiza hoy y pinta tu casa mañana Cotiza 80% más rápido y pinta tu
          casa mañana
        </div>
        <button onClick={handleCotizar} className="btn btn-primary btn-cotizar">
          !Cotizar Hoy!
        </button>
      </div>
    </>
  );
};
