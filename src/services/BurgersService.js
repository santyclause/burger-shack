import { dbContext } from "../db/DbContext.js";

class BurgersService {


  async getBurgers() {
    const burgers = dbContext.Burgers.find();
    return burgers;
  }

  async createBurger(burgerData) {
    const burger = dbContext.Burgers.create(burgerData);
    return burger;
  }

  async deleteBurger(burgerId) {
    const burgerToDel = dbContext.Burgers.findById(burgerId);
    if (burgerToDel.status == 404) {
      return burgerToDel;
    } else {
      dbContext.Burgers.deleteOne(burgerId);
      return "Burger Deleted";
    }
  }
}

export const burgersService = new BurgersService();