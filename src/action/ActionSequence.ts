import Action from './Action'

export class Sequence extends Action {
  actions: Action[]
  _index: number
  static create(...action: Action[]) {
    return new Sequence(...action)
  }
  constructor(...actions) {
    super()
    this.actions = actions

    this.reset()
  }
  reset() {
    this._index = 0
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    if (this._index >= this.actions.length) {
      return true
    }
    const action = this.actions[this._index]

    const isEnd = action.update(sprite, delta, deltaMS)
    if (isEnd) {
      action.reset()
      this._index += 1
    }
    return false
  }
}
