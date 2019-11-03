import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMsg: error.message })
    );
  }

  state = { latitude: null, errorMsg: '' };

  renderContent() {
    if (this.state.errorMsg && !this.state.latitude) {
      return <div> >errorMsg : {this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.latitude) {
      return (
        <div>
          <SeasonDisplay latitude={this.state.latitude}></SeasonDisplay>
        </div>
      );
    }
    return <Spinner message='LOADING ..... plese Accept location request' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
