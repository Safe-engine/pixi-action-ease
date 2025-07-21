export default class Action {
  constructor() {
    // nothing
  }
  reset() {}
  // if end return true, if not end return false
  update(sprite: any, delta, deltaMS): boolean {
    // need to be override.
    if (!sprite) throw new Error('Action object is not valid.')
    return false
  }
}
