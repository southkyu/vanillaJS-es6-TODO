export default class Model {
  constructor(storage) {
    this.storage = storage;
  }
  remove(id, callback) {
    return this.storage.remove(id, callback);
  }
  read(callback) {
    return this.storage.findAll(callback);
  }
  create(title, callback) {
    return this.storage.save(title, callback);
  }
}
