class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        <span>Item {this.props.index}</span>
        <button>X</button>
      </li>
    );
  }
}

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfItem: [1, 2, 3, 4, 5] };
  }
  render() {
    /*let list = [];
    let item;
    for (let i = 1; i < this.state.numberOfItem; i++) {
      item = <TodoItem index={i} />;
      list.push(item);
    }
    return React.createElement("ul", null, list);*/
    const { numberOfItem } = this.state;
    let items = numberOfItem.map(item => <TodoItem index={item} />);
    return <ul>{items}</ul>;
  }
}
window.App.Todolist = Todolist;
