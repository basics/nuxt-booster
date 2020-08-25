export default class Critical {
  constructor (state = false) {
    this.state = state
  }

  get () {
    return this.state
  }

  set (state) {
    this.state = this.state || state
  }
}
