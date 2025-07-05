import { ready } from '../utils/loader';
import type { VimeoApi, VimeoApiPlayer } from '../utils/loader';

export default class Vimeo {
  api?: VimeoApi;
  players: VimeoApiPlayer[] = [];

  play(player: VimeoApiPlayer) {
    this.pausePlayers(player);
    return player.play();
  }

  pausePlayers(ignorePlayer?: VimeoApiPlayer) {
    return Promise.all(
      this.players
        .filter(
          player => !ignorePlayer || (ignorePlayer && player !== ignorePlayer)
        )
        .map(async player => {
          if (!(await player.getPaused())) {
            player.pause();
          }
        })
    );
  }

  async createPlayer(el: HTMLElement) {
    this.api = await ready();
    const player = new this.api.Player(el);

    player.on('playing', () => this.pausePlayers(player));

    this.add(player);
    return player;
  }

  add(player: VimeoApiPlayer) {
    this.players.push(player);
  }

  remove(player: VimeoApiPlayer) {
    this.players = this.players.filter(p => p !== player);
    player.destroy();
  }
}
