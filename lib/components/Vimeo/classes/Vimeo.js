import { ready } from '../utils/loader';

export default class Vimeo {
  api;
  players = [];

  play (player) {
    this.pausePlayers(player);
    return player.play();
  }

  pausePlayers (ignorePlayer) {
    return Promise.all(this.players
      .filter(player => !ignorePlayer || (ignorePlayer && player !== ignorePlayer))
      .map(async (player) => {
        !(await player.getPaused()) && player.pause();
      }));
  }

  async createPlayer (...args) {
    this.api = await ready();
    const player = new this.api.Player(...args);

    player.on('playing', () => this.pausePlayers(player));

    this.add(player);
    return player;
  }

  add (player) {
    this.players.push(player);
  }

  remove (player) {
    this.players = this.players.filter(p => p !== player);
    player.destroy();
  }
}
