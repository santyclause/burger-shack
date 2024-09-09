import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
  name: { type: String, maxlength: 100 },
  price: { type: Number, min: 0 }
})