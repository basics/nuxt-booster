import { ready } from '../utils/loader';

export default class Youtube {
  api;
  players = new Map();

  play (player) {
    this.pausePlayers();
    return player.playVideo();
  }

  pausePlayers (ignorePlayer) {
    Array.from(this.players.values())
      .filter(player => !ignorePlayer || (ignorePlayer && player !== ignorePlayer))
      .filter(player => player.getPlayerState)
      .forEach((player) => {
        player.getPlayerState() === this.api.PlayerState.PLAYING && player.pauseVideo();
      });
  }

  async createPlayer (...args) {
    this.api = await ready();
    const player = new this.api.Player(...args);

    player.addEventListener('onStateChange', ({ data }) => {
      if (this.api.PlayerState.PLAYING === data) {
        this.pausePlayers(player);
      }
    });

    this.add(player);
    return player;
  }

  add (player) {
    this.players.set(player.id, player);
  }

  remove (player) {
    this.players.delete(player.id);
    player.destroy();
  }
}
