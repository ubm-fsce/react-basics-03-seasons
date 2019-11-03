import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <form>
        <label>Enter a username:</label>
        <input />
      </form>
    );
  }
  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<UserForm />, document.querySelector('#root'));
