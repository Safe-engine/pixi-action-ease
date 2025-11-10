import Action from './Action'

export class JumpTo extends Action {
  time: number
  x: number
  y: number
  _time: number
  height: number
  jumps: number
  startX: number = null
  startY: number = null

  static create(t: number, x: Vec2 | number, y?: number, height: number = 100, jumps: number = 1) {
    if (typeof x === 'object') {
      return new JumpTo(x.x, x.y, t, height, jumps)
    }
    return new JumpTo(x, y, t, height, jumps)
  }

  constructor(x: number, y: number, time: number, height: number = 100, jumps: number = 1) {
    super()
    this.time = time * 1000
    this.x = x
    this.y = y
    this.height = height
    this.jumps = jumps

    this.reset()
  }

  reset() {
    this._time = this.time
    this.startX = null
    this.startY = null
  }

  update(sprite, delta, deltaMS) {
    if (this.startX === null || this.startY === null) {
      this.startX = sprite.x
      this.startY = sprite.y
    }

    const pos = sprite.position
    const progress = (this.time - this._time) / this.time

    // Calculate horizontal movement
    const speedX = ((this.x - this.startX) / this._time) * deltaMS
    sprite.x += speedX

    // Calculate vertical movement with parabolic motion
    const amplitude = this.height
    const omega = this.jumps * Math.PI * 2
    const newY = this.startY + (this.y - this.startY) * progress -
                amplitude * Math.abs(Math.sin(omega * progress))
    sprite.y = newY

    this._time -= deltaMS

    if (this._time <= 0) {
      sprite.x = this.x
      sprite.y = this.y
      this.reset()
      return true
    }
    return false
  }
}

export class JumpBy extends Action {
  time: number
  x: number
  y: number
  _time: number
  height: number
  jumps: number
  startX: number = null
  startY: number = null
  tx: number = null
  ty: number = null

  static create(t: number, x: Vec2 | number, y?: number, height: number = 100, jumps: number = 1) {
    if (typeof x === 'object') {
      return new JumpBy(x.x, x.y, t, height, jumps)
    }
    return new JumpBy(x, y, t, height, jumps)
  }

  constructor(x: number, y: number, time: number, height: number = 100, jumps: number = 1) {
    super()
    this.time = time * 1000
    this.x = x
    this.y = y
    this.height = height
    this.jumps = jumps

    this.reset()
  }

  reset() {
    this._time = this.time
    this.startX = null
    this.startY = null
    this.tx = null
    this.ty = null
  }

  update(sprite, delta, deltaMS) {
    if (this.startX === null || this.startY === null) {
      this.startX = sprite.x
      this.startY = sprite.y
      this.tx = this.startX + this.x
      this.ty = this.startY + this.y
    }

    const progress = (this.time - this._time) / this.time

    // Calculate horizontal movement
    const speedX = ((this.tx - this.startX) / this._time) * deltaMS
    sprite.x += speedX

    // Calculate vertical movement with parabolic motion
    const amplitude = this.height
    const omega = this.jumps * Math.PI * 2
    const newY = this.startY + (this.ty - this.startY) * progress -
                amplitude * Math.abs(Math.sin(omega * progress))
    sprite.y = newY

    this._time -= deltaMS

    if (this._time <= 0) {
      sprite.x = this.tx
      sprite.y = this.ty
      this.reset()
      return true
    }
    return false
  }
}
