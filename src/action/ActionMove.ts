import Action from './Action'

export class MoveTo extends Action {
  time: number
  x: any
  y: any
  _time: any
  static create(t: number, x: Vec2 | number, y?: number) {
    if (typeof x === 'object') {
      return new MoveTo(x.x, x.y, t)
    }
    return new MoveTo(x, y, t)
  }
  constructor(x, y, time) {
    super()
    this.time = time * 1000
    this.x = x
    this.y = y

    this.reset()
  }
  reset() {
    this._time = this.time
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const pos = sprite.position
    const speedX = ((this.x - pos.x) / this._time) * deltaMS
    const speedY = ((this.y - pos.y) / this._time) * deltaMS

    sprite.x += speedX
    sprite.y += speedY

    this._time -= deltaMS
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.x = this.x
      sprite.y = this.y

      this.reset()
      return true
    }
    return false
  }
}

export class MoveBy extends Action {
  time: number
  x: any
  y: any
  _time: any
  tx = null
  ty = null
  static create(t: number, x: Vec2 | number, y?: number) {
    if (typeof x === 'object') {
      return new MoveBy(x.x, x.y, t)
    }
    return new MoveBy(x, y, t)
  }
  constructor(x, y, time) {
    super()
    this.time = time * 1000
    this.x = x
    this.y = y

    this.reset()
  }
  reset() {
    this._time = this.time
    this.tx = null // target x
    this.ty = null // target y
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const pos = sprite.position
    if (this.tx === null || this.ty === null) {
      this.tx = pos.x + this.x
      this.ty = pos.y + this.y
    }

    const speedX = ((this.tx - pos.x) / this._time) * deltaMS
    const speedY = ((this.ty - pos.y) / this._time) * deltaMS

    sprite.x += speedX
    sprite.y += speedY

    this._time -= deltaMS
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.x = this.tx
      sprite.y = this.ty
      this.reset()
      return true
    }
    return false
  }
}
