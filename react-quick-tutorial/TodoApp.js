// 1. 使用元件類別前，記得先從 window.App 中取出
const { InputField, TodoHeader, Todolist } = window.App;

class TodoApp extends React.Component {
  render() {
    let headerProps = {
      title: "我的待辦事項",
      username: "Tony",
      todoCount: 99
    };
    let { title, username, ...other } = headerProps;
    return (
      <div>
        <TodoHeader title={title} username={username} {...other} />
        <InputField />
        <Todolist />
      </div>
    );
  }
}

// 3. 將元件類別 (TodoApp) 定義在 window.App 下：
//    這可以讓其他 JS 檔使用該元件類別
window.App.TodoApp = TodoApp;
