
import * as api from '../lib/api';


export default class Starting extends React.Component {

  constructor() {
    super()
  }

  onStartClick = () => {
    api.startGame({ gameId: this.props.gameState.id })
  }

  render() {
    return (
      <div>
        <h1>Waiting for the game to start</h1>
        <h3><strong>Players in the game:</strong></h3>
        {
          this.props.gameState.players.map( player => (
            <div>{ player.name }</div>
          ))
        }
        <button
          className="large"
          onClick={ this.onStartClick }
        >
          Start Game
        </button>
      </div>
    )
  }
}