import { dbContext } from "../db/DbContext.js";

class BurgersService {


  async getBurgers() {
    const burgers = dbContext.Burgers.find();
    return burgers;
  }
}

export const burgersService = new BurgersService();