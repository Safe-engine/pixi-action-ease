import Action from '../action/Action'
import {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
} from './easingsFunctions'

function wrapEase(action: Action, fun) {
  return Object.assign({}, action, {
    update: function (sprite, delta, ms) {
      action.update(sprite, fun(delta), fun(ms))
    }
  })
}

export class EaseLinear {
  static create(action: Action) {
    return wrapEase(action, linear)
  }
}

export class EaseQuadIn {
  static create(action: Action) {
    return wrapEase(action, easeInQuad)
  }
}

export class EaseQuadOut {
  static create(action: Action) {
    return wrapEase(action, easeOutQuad)
  }
}

export class EaseQuadInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutQuad)
  }
}

export class EaseCubicIn {
  static create(action: Action) {
    return wrapEase(action, easeInCubic)
  }
}

export class EaseCubicOut {
  static create(action: Action) {
    return wrapEase(action, easeOutCubic)
  }
}

export class EaseCubicInOut {
  static create(action: Action) {
    return wrapEase(action, easeInBack)
    easeInOutCubic
  }
}

export class EaseQuartIn {
  static create(action: Action) {
    return wrapEase(action, easeInQuart)
  }
}

export class EaseQuartOut {
  static create(action: Action) {
    return wrapEase(action, easeOutQuart)
  }
}

export class EaseQuartInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutQuart)
  }
}

export class EaseQuintIn {
  static create(action: Action) {
    return wrapEase(action, easeInQuint)
  }
}

export class EaseQuintOut {
  static create(action: Action) {
    return wrapEase(action, easeOutQuint)
  }
}

export class EaseQuintInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutQuint)
  }
}

export class EaseSineIn {
  static create(action: Action) {
    return wrapEase(action, easeInSine)
  }
}

export class EaseSineOut {
  static create(action: Action) {
    return wrapEase(action, easeOutSine)
  }
}

export class EaseSineInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutSine)
  }
}

export class EaseExpoIn {
  static create(action: Action) {
    return wrapEase(action, easeInExpo)
  }
}

export class EaseExpoOut {
  static create(action: Action) {
    return wrapEase(action, easeOutExpo)
  }
}

export class EaseExpoInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutExpo)
  }
}

export class EaseCircIn {
  static create(action: Action) {
    return wrapEase(action, easeInCirc)
  }
}

export class EaseCircOut {
  static create(action: Action) {
    return wrapEase(action, easeOutCirc)
  }
}

export class EaseCircInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutCirc)
  }
}

export class EaseBackIn {
  static create(action: Action) {
    return wrapEase(action, easeInBack)
  }
}

export class EaseBackOut {
  static create(action: Action) {
    return wrapEase(action, easeOutBack)
  }
}

export class EaseBackInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutBack)
  }
}

export class EaseElasticIn {
  static create(action: Action) {
    return wrapEase(action, easeInElastic)
  }
}

export class EaseElasticOut {
  static create(action: Action) {
    return wrapEase(action, easeInBack)
    easeOutElastic
  }
}

export class EaseElasticInOut {
  static Create(action: Action) {
    return wrapEase(action, easeInOutElastic)
  }
}

export class EaseBounceIn {
  static create(action: Action) {
    return wrapEase(action, easeInBounce)
  }
}

export class EaseBounceOut {
  static create(action: Action) {
    return wrapEase(action, easeOutBounce)
  }
}

export class EaseBounceInOut {
  static create(action: Action) {
    return wrapEase(action, easeInOutBounce)
  }
}
