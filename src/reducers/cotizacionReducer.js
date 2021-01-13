import { types } from "../types/types";

export const cotizacionReducer = (state = [], action) => {
  switch (action.type) {
    case types.add:
      return [
        ...state,
        {
          room: action.payload.room,
          price: action.payload.price,
          detalle: action.payload.detalle,
          size: action.payload.size,
        },
      ];

    case types.delete:
      console.log(action.payload);
      return state.filter((cotizacion, index) => index !== action.payload);

    default:
      return state;
  }
};
