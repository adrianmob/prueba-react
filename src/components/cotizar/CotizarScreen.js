import React, { useState } from "react";
import { useForm } from "../../hooks/UseForm";
import { RadioItem } from "./RadioItem";
import { useDispatch, useSelector } from "react-redux";
import { cotizarAdd } from "../../actions/cotizar";
import { CotizacionesItem } from "./CotizacionesItem";
import { Navbar } from "../ui/Navbar";
export const CotizarScreen = ({ history }) => {
  const radioItemsCuarto = [
    { desc: "Cuarto", img: "cuarto.jpg", price: 100 },
    { desc: "Cocina", img: "cocina.jpg", price: 110 },
    { desc: "Baño", img: "bano.jpg", price: 120 },
    { desc: "Sala", img: "sala.jpg", price: 130 },
    { desc: "Comedor", img: "comedor.jpg", price: 140 },
    { desc: "Fachada", img: "fachada.jpg", price: 150 },
  ];

  const radioItemsDetalles = [
    { desc: "Minimos Detalles", titulo: "Solo Paredes", price: 10 },
    {
      desc: "Detalles(no albañilería)",
      titulo: "Paredes con detalles",
      price: 20,
    },
    { desc: "Minimos Detalles", titulo: "Paredes y techo", price: 30 },
    {
      desc: "Detalles(no albañilería)",
      titulo: "Paredes con detalles y techo",
      price: 40,
    },
  ];

  const radioItemsTamano = [
    {
      desc: "Área total de fachada no mayor 45mts2 de muros",
      titulo: "Standar",
      price: 60,
    },
    {
      desc: "Área total de fachada de 46 mts a 70mts2 de muros",
      titulo: "Grande",
      price: 80,
    },
  ];

  const [{ cuarto, detalle, size }, handleChange, reset] = useForm({
    cuarto: "",
    detalle: "",
    size: "",
  });

  const dispatch = useDispatch();

  const state = useSelector((state) => state.cotizaciones);

  const handleAdd = () => {
    if (cuarto.length <= 0 || detalle.length <= 0 || size.length <= 0) {
      return false;
    }
    const price_cuarto = radioItemsCuarto[cuarto].price;
    const precio_detalle = radioItemsDetalles[detalle].price;
    const price_size = radioItemsTamano[size].price;
    const precio_final = price_cuarto + precio_detalle + price_size;

    const cotizacion = {
      room: radioItemsCuarto[cuarto].desc,
      detalle: radioItemsDetalles[detalle].titulo,
      size: radioItemsTamano[size].titulo,
      price: precio_final,
    };

    dispatch(cotizarAdd(cotizacion));
    reset();
  };

  const handleCotizar = () => {
    history.push("/cotizacion");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: "center", padding: "20px" }}>
          Cotización en linea
        </h1>

        <div className="informacion">
          <p>Proceso Sencillo</p>
          <small>
            Agregar el cuarto que quieres cotizar. Después debes seleccionar
            "Agregar Cuarto" y regresa al principio para seguir escogiendo mas
            cuartos
          </small>
        </div>

        <div className="pasos" style={{ margin: "10px 0 10px 0" }}>
          <p>Paso 1: Cuarto</p>
          <small>Escoge el cuarto que quieres pintar</small>
          <div className="contenedor-items">
            {radioItemsCuarto.map((item, i) => (
              <RadioItem
                value={i}
                desc={item.desc}
                img={item.img}
                name={"cuarto"}
                valor={cuarto}
                key={i}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>

        <div className="pasos">
          <p>Paso 2: Detalles</p>
          <small>
            Escoge la opción que aplique a la habitación que deseas pintar
          </small>
          <div className="contenedor-items">
            {radioItemsDetalles.map((item, i) => (
              <RadioItem
                value={i}
                valor={detalle}
                desc={item.desc}
                titulo={item.titulo}
                name={"detalle"}
                key={i}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>

        <div className="pasos">
          <p>Paso 3: Tamaño</p>
          <small>Escoger el tamaño del cuarto</small>
          <div className="contenedor-items">
            {radioItemsTamano.map((item, i) => (
              <RadioItem
                value={i}
                valor={size}
                desc={item.desc}
                titulo={item.titulo}
                name={"size"}
                key={i}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>

        <div className="pasos" style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "1.6rem" }}>Revisar Cuartos</p>
          <small>Agregar y quitar cuartos</small>
          <div className="contenedor-items">
            {state.map((cotizacion, i) => (
              <CotizacionesItem
                detalle={cotizacion.detalle}
                size={cotizacion.size}
                room={cotizacion.room}
                key={i}
                valor={i}
              />
            ))}
          </div>
          <div>
            <button
              style={{ margin: "20px 0 0 0" }}
              onClick={handleAdd}
              className="btn btn-outline-primary"
            >
              Agregar Cuarto
            </button>
          </div>
        </div>

        <div>
          <button
            style={{ margin: "20px 0 20px 0", display: "block", width: "100%" }}
            className="btn btn-primary"
            onClick={handleCotizar}
          >
            Cotizar
          </button>
        </div>
      </div>
    </>
  );
};
