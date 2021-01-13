import { types } from "../types/types";

export const cotizarAdd = ({ room, detalle, price, size }) => {
  return {
    type: types.add,
    payload: {
      room,
      detalle,
      price,
      size,
    },
  };
};

export const cotizarDelete = (id) => {
  return {
    type: types.delete,
    payload: id,
  };
};
