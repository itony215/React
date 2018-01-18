class InputField extends React.Component {
  render() {
    return <input {...this.props} type="text" />;
  }
}

// ！！！這裡出錯 編輯模式跳不回去 因input 後面接的屬性只有placeholder 但在編輯模式有多屬性要傳進來！！！

/*
class InputField extends React.Component {
  render() {
    let { placeholder } = this.props;
    return <input type="text" placeholder={placeholder} />;
  }
}
*/

window.App.InputField = InputField;
