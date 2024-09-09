import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
  }


  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getBurgers();
      response.send(burgers);
    } catch (error) {
      next(error);
    }
  }

  async createBurger(request, response, next) {
    try {
      const burger = await burgersService.createBurger(request.body);
      response.send(burger);
    } catch (error) {
      next(error);
    }
  }

  async deleteBurger(request, response, next) {
    try {
      const burgerRes = await burgersService.deleteBurger(request.params.burgerId);
      response.send(burgerRes);
    } catch (error) {
      next(error);
    }
  }
}