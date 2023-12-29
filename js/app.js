import Controller from "./controller.js";
import Model from "./model.js";
import Storage from "./storage.js";
import Template from "./template.js";
import View from "./view.js";

class App {
  constructor() {
    console.log("App Created");
    this.storage = new Storage();
    this.model = new Model(this.storage);
    this.template = new Template();
    this.view = new View(this.template);
    this.controller = new Controller(this.model, this.view);
  }
}

const app = new App();
console.log(app);
