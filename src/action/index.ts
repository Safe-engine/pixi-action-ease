export { ActionManager, actionManager, Animation } from './ActionManager'
import Action from './Action'
import { AlphaBy, AlphaTo } from './ActionAlpha'
import { Blink } from './ActionBlink'
import { CallFunc } from './ActionCallFunc'
import { DelayTime } from './ActionDelay'
import { FadeIn, FadeOut } from './ActionFade'
import { MoveBy, MoveTo } from './ActionMove'
import { PivotBy, PivotTo } from './ActionPivot'
import { Repeat } from './ActionRepeat'
import { RotateBy, RotateTo } from './ActionRotate'
import { ScaleBy, ScaleTo } from './ActionScale'
import { Sequence } from './ActionSequence'
import { SkewBy, SkewTo } from './ActionSkew'
import { Spawn } from './ActionSpawn'
import { TintBy, TintTo } from './ActionTint'

export { Action }
export const moveTo = MoveTo.create
export const scaleTo = ScaleTo.create
export const rotateTo = RotateTo.create
export const fadeIn = FadeIn.create
export const skewTo = SkewTo.create
export const pivotTo = PivotTo.create
export const tintTo = TintTo.create
export const alphaTo = AlphaTo.create
export const blink = Blink.create
export const repeat = Repeat.create
export const repeatForever = (action: Action) => Repeat.create(action)
export const sequence = Sequence.create
export const spawn = Spawn.create
export const delayTime = DelayTime.create
export const callFunc = CallFunc.create
export const moveBy = MoveBy.create
export const scaleBy = ScaleBy.create
export const rotateBy = RotateBy.create
export const fadeOut = FadeOut.create
export const skewBy = SkewBy.create
export const pivotBy = PivotBy.create
export const tintBy = TintBy.create
export const alphaBy = AlphaBy.create
export const REPEAT_FOREVER = Number.MAX_VALUE - 1
