import * as api from '../lib/api';

export default class Home extends React.Component {

  onCreateClick() {
    api.createNewGame();
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Writey Drawey Game.</h1>
        <p>
          We didn't find an in-progress game at this location.
        </p>
        <button
          className="large"
          onClick={ this.onCreateClick }
        >
          Create a new game
        </button>
        <iframe id="drawingCanvas" src="/canvas/index.html" />
      </div>
    )
  }
}