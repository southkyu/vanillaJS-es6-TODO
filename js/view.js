import { $ } from "./utils.js";
export default class View {
  constructor(template) {
    this.template = template;

    this.$todoList = $(".todo-list");
    this.$newTodo = $("#new-todo");
  }

  render(viewCmd, data) {
    const viewObj = {
      showEntries: () => {
        this._addItem(data);
      },
      clearNewTodo: () => {
        this.$newTodo.value = "";
      },
      removeItem: () => {
        this._removeItem(data);
      },
    };
    viewObj[viewCmd]();
  }

  bind(event, handler) {
    if (event === "newTodo") {
      this.$newTodo.addEventListener("change", () => {
        handler(this.$newTodo.value);
      });
    }
    if (event === "itemRomve") {
      this.$todoList.addEventListener("click", event => {
        const target = event.target;
        if (target.className === "destroy") {
          handler({ id: this._getItemId(target.parentNode, "li") });
        }
      });
    }
  }

  _addItem(id) {
    this.$todoList.innerHTML = this.template.insert(id);
  }

  _getItemId(element, tagName) {
    let li;
    if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
      li = element.parentNode;
    }
    return parseInt(li.dataset.id, 10);
  }

  _removeItem(id) {
    const elem = $(`[data-id="${id}"]`);
    this.$todoList.removeChild(elem);
  }
}
