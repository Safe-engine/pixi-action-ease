import Action from '../action/Action'
import * as easing from './easingsFunctions'

function wrapEase(action: Action, fun): Action {
  return Object.assign({}, action, {
    update: function (sprite, delta, ms) {
      action.update(sprite, fun(delta), fun(ms))
    },
  })
}

export function easeLinear(action: Action) {
  return wrapEase(action, easing.linear)
}

export function easeQuadIn(action: Action) {
  return wrapEase(action, easing.easeInQuad)
}

export function easeQuadOut(action: Action) {
  return wrapEase(action, easing.easeOutQuad)
}

export function easeQuadInOut(action: Action) {
  return wrapEase(action, easing.easeInOutQuad)
}

export function easeCubicIn(action: Action) {
  return wrapEase(action, easing.easeInCubic)
}

export function easeCubicOut(action: Action) {
  return wrapEase(action, easing.easeOutCubic)
}

export function easeCubicInOut(action: Action) {
  return wrapEase(action, easing.easeInBack)
}

export function easeQuartIn(action: Action) {
  return wrapEase(action, easing.easeInQuart)
}

export function easeQuartOut(action: Action) {
  return wrapEase(action, easing.easeOutQuart)
}

export function easeQuartInOut(action: Action) {
  return wrapEase(action, easing.easeInOutQuart)
}

export function easeQuintIn(action: Action) {
  return wrapEase(action, easing.easeInQuint)
}

export function easeQuintOut(action: Action) {
  return wrapEase(action, easing.easeOutQuint)
}

export function easeQuintInOut(action: Action) {
  return wrapEase(action, easing.easeInOutQuint)
}

export function easeSineIn(action: Action) {
  return wrapEase(action, easing.easeInSine)
}

export function easeSineOut(action: Action) {
  return wrapEase(action, easing.easeOutSine)
}

export function easeSineInOut(action: Action) {
  return wrapEase(action, easing.easeInOutSine)
}

export function easeExpoIn(action: Action) {
  return wrapEase(action, easing.easeInExpo)
}

export function easeExpoOut(action: Action) {
  return wrapEase(action, easing.easeOutExpo)
}

export function easeExpoInOut(action: Action) {
  return wrapEase(action, easing.easeInOutExpo)
}

export function easeCircIn(action: Action) {
  return wrapEase(action, easing.easeInCirc)
}

export function easeCircOut(action: Action) {
  return wrapEase(action, easing.easeOutCirc)
}

export function easeCircInOut(action: Action) {
  return wrapEase(action, easing.easeInOutCirc)
}

export function easeBackIn(action: Action) {
  return wrapEase(action, easing.easeInBack)
}

export function easeBackOut(action: Action) {
  return wrapEase(action, easing.easeOutBack)
}

export function easeBackInOut(action: Action) {
  return wrapEase(action, easing.easeInOutBack)
}

export function easeElasticIn(action: Action) {
  return wrapEase(action, easing.easeInElastic)
}

export function easeElasticOut(action: Action) {
  return wrapEase(action, easing.easeInBack)
}

export function easeElasticInOut(action: Action) {
  return wrapEase(action, easing.easeInOutElastic)
}

export function easeBounceIn(action: Action) {
  return wrapEase(action, easing.easeInBounce)
}

export function easeBounceOut(action: Action) {
  return wrapEase(action, easing.easeOutBounce)
}

export function easeBounceInOut(action: Action) {
  return wrapEase(action, easing.easeInOutBounce)
}
