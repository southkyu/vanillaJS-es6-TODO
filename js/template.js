export default class Template {
  constructor() {
    this.template = `
        <li data-id="{{id}}" class="{{completed}}">
            <div class="view">
                <input class="toggle" type="checkbox" {{checked}}>
                <label>{{title}}</label>
                <button class="destroy"></button>
            </div>
        </li>
        `;
  }

  insert(data) {
    console.log("Template.insert method execute!");

    let view = "";
    for (let i = 0; i < data.length; i++) {
      let template = this.template;
      let completed = "";
      let checked = "";

      if (data[i].completed) {
        completed = "completed";
        checked = "checked";
      }

      template = template.replace("{{id}}", data[i].id);
      template = template.replace("{{title}}", data[i].title);
      template = template.replace("{{completed}}", completed);
      template = template.replace("{{checked}}", checked);

      view = view + template;
    }
    return view;
  }
}
