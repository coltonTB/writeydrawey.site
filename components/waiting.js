import RoughNotation from './rough-notation'
import Button from './button'
import Logo from './logo'
import TurnTimer from './turn-timer'
import * as api from '../lib/api'
import { GAME_STATE, TURN_LIMIT } from '../backend/constants'
import GameOverviewNav from './game-overview-nav'

export default class Starting extends React.Component {

  onNextRoundClick = () => {
    try {
      api.nextRound({
        gameId: this.props.gameState.id,
        round: this.props.gameState.round
      }).then( this.props.onUpdateState )
    } catch (e) {
      console.log(e)
    }
  }

  onEndGameClick = () => {
    try {
      api.endGame({
        gameId: this.props.gameState.id
      }).then( this.props.onUpdateState )
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { gameState, viewer } = this.props
    const numRounds = gameState.options.rounds
    const isAdminPlayer = gameState.admin === viewer.userId
    let playersReadyMap = {}, numPlayersReady = 0
    gameState.players.forEach( p => {
      const isPlayerReady = gameState.playerInput.find( item => (
        item.playerId === p.playerId && item.round === gameState.round
      ))
      if(isPlayerReady) {
        numPlayersReady++
      }
      playersReadyMap[ p.playerId ] = isPlayerReady
    })

    const allPlayersReady = numPlayersReady === gameState.players.length
    const roundTimer = gameState.timers.find( item => item.round === gameState.round && item.playerId === '0');

    return (
      <div className="content-container">
        <div className="nav">
          <Logo />
          <GameOverviewNav {...this.props} />
        </div>
        <div className="waiting flex-container">
          <div className="players">
            {
              this.props.gameState.players
                .map( p => (
                  <div className="rough-notation-wrapper">
                    <RoughNotation
                      className="TEST"
                      style="strike-through"
                      toggle={ playersReadyMap[ p.playerId ]}
                      key={ p.playerId + playersReadyMap[p.playerId ]}
                    >
                      <h3>
                          { p.playerName }
                      </h3>
                    </RoughNotation>
                  </div>
                ))
            }
          </div>
          <div className="bottom-margin">
            {
              isAdminPlayer &&
              this.props.gameState.state === GAME_STATE.STARTING && (
                <Button onClick={ this.onNextRoundClick } type="3">
                  Start Game
                </Button>
              )
            }
            {
              isAdminPlayer && allPlayersReady &&
              this.props.gameState.state === GAME_STATE.PLAYING && (
                <Button onClick={ this.onNextRoundClick } type="3">
                  Next Round
                </Button>
              )
            }
            {
              isAdminPlayer && allPlayersReady &&
              this.props.gameState.state === GAME_STATE.PLAYING && (
                <Button onClick={ this.onEndGameClick } type="5">
                  End Game
                </Button>
              )
            }
          </div>
          <div>
            {
              roundTimer && roundTimer.end > new Date().getTime() && (
                <h2>
                  Next round in <TurnTimer timer={ roundTimer } />
                </h2>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
