class TodoHeader extends React.Component {
  render() {
    const { name, username, todoCount } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <span>
          哈囉，{username} ：你有 {todoCount} 項未完成待辦事項
        </span>
      </div>
    );
  }
}
TodoHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  username: React.PropTypes.string,
  todoCount: React.PropTypes.number
};
TodoHeader.defaultProps = {
  name: "Tony的待辦清單",
  username: "Tony",
  todoCount: 0
};
window.App.TodoHeader = TodoHeader;
