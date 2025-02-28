import { ready } from '../utils/loader.js';

export default class Youtube {
  api?: typeof YT;
  players: YT.Player[] = [];

  play(player: YT.Player) {
    this.pausePlayers();
    return player.playVideo();
  }

  pausePlayers(ignorePlayer?: YT.Player) {
    Array.from(this.players.values())
      .filter(
        player => !ignorePlayer || (ignorePlayer && player !== ignorePlayer)
      )
      .filter(player => player.getPlayerState)
      .forEach(player => {
        if (player.getPlayerState() === this.api?.PlayerState.PLAYING) {
          player.pauseVideo();
        }
      });
  }

  async createPlayer(elt: HTMLElement, options?: YT.PlayerOptions) {
    this.api = await ready();
    const player = new this.api.Player(elt, options);

    player.addEventListener('onStateChange', ({ data }) => {
      if (this.api?.PlayerState.PLAYING === data) {
        this.pausePlayers(player);
      }
    });

    this.add(player);
    return player;
  }

  add(player: YT.Player) {
    this.players.push(player);
  }

  remove(player: YT.Player) {
    this.players = this.players.filter(p => p !== player);
    player.destroy();
  }
}
