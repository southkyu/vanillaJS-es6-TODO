export default class Storage {
  constructor(name) {
    this._dbName = name;
    this.todo = [];
  }

  findAll(callback) {
    callback.call(this, this.todo);
  }

  save(data, callback) {
    const todos = this.todo;

    const newData = {
      title: data,
      id: new Date().getTime(),
    };
    todos.push(newData);
    callback.call(this, todos);
  }

  remove(id, callback) {
    const todos = this.todo;

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i, 1);
        break;
      }
    }

    callback.call(this, todos);
  }
}
