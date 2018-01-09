class TodoHeader extends React.Component {
  render() {
    let { title, username, todoCount } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <span>
          哈囉，{username} : 你有 {todoCount + 1} 項未完成的待辦事項
        </span>
      </div>
    );
  }
}
//設計防呆的 React 元件 驗證元件參數 (props) 的方法
TodoHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  username: React.PropTypes.string,
  todoCount: React.PropTypes.number
};
//定義元件參數 (props) 的預設值
TodoHeader.defaultProps = {
  title: "tony的待辦事項",
  username: "tony",
  todoCount: 0
};
window.App.TodoHeader = TodoHeader;
