import Action from './Action'

export class CallFunc extends Action {
  func: any
  static create(func: () => void) {
    return new CallFunc(func)
  }
  constructor(func) {
    super()
    this.func = func || function () { }

    this.reset()
  }
  reset() { }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    this.func()
    this.reset()
    return true
  }
}
