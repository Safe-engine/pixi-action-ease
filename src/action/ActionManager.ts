import { Sprite, EventEmitter, uid } from 'pixi.js'
import Action from './Action'

export class Animation extends EventEmitter {
  _id: string
  sprite: Sprite
  action: Action
  _started: boolean
  _ended: boolean
  _active: boolean
  isPause: boolean = false
  constructor(sprite: Sprite, action: Action) {
    super()
    this._id = `_${uid()}`
    this.sprite = sprite
    this.action = action

    this._started = false
    this._ended = false
    this._active = false
  }

  update(delta: number, deltaMS: number) {
    if (!this._started) {
      // start event
      this.emit('start', deltaMS)
      this._started = true
      this._active = true
    }

    // do some update
    if (!this.isPause && !this.sprite.destroyed) {
      this._ended = this.action.update(this.sprite, delta, deltaMS)
    }
    if (this._ended && this._active) {
      // end event
      this.emit('end', deltaMS)
      this._active = false
    }
  }

  isEnded() {
    return this._ended
  }

  stop() {
    this._ended = true
  }
}

export class ActionManager {
  actions: { [key: string]: Animation }
  _actionsToDelete: Animation[]
  _last: number
  constructor() {
    this.actions = {} // the actions need to be done.
    this._actionsToDelete = []

    this._last = 0
  }

  update(delta: number) {
    let deltaMS
    // calculate deltaMS
    if (!delta && delta !== 0) {
      deltaMS = this._getDeltaMS()
      delta = deltaMS / 1000
    } else {
      deltaMS = delta * 1000
    }
    /* eslint no-restricted-syntax: 1 */
    for (const _id in this.actions) {
      if (Object.prototype.hasOwnProperty.call(this.actions, _id)) {
        const animation = this.actions[_id]
        // 更新 action
        animation.update(delta, deltaMS)
        // if action is end, remove it.
        if (animation.isEnded()) {
          this._actionsToDelete.push(animation)
        }
      }
    }

    if (this._actionsToDelete.length) {
      for (let i = 0; i < this._actionsToDelete.length; i += 1) {
        this._remove(this._actionsToDelete[i])
      }
      this._actionsToDelete.length = 0
    }
  }

  // run action
  runAction(sprite: Sprite, action: Action) {
    // add into actions to be done.
    const animation = new Animation(sprite, action)
    this.actions[animation._id] = animation
    return animation
  }

  // cancel action
  cancelAction(animation: Animation) {
    // add into to be deleted.
    this._actionsToDelete.push(animation)
  }

  _remove(animation: Animation) {
    delete this.actions[animation._id]
  }

  _getDeltaMS() {
    if (this._last === 0) this._last = Date.now()
    const now = Date.now()
    const deltaMS = now - this._last
    this._last = now
    return deltaMS
  }
}
export const actionManager = new ActionManager()
