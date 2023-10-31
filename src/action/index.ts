import ActionManager from './ActionManager'
export { Animation } from './ActionManager'
import { MoveTo, MoveBy } from './ActionMove'
import { ScaleTo, ScaleBy } from './ActionScale'
import { RotateTo, RotateBy } from './ActionRotate'
import { FadeIn, FadeOut } from './ActionFade'
import { SkewTo, SkewBy } from './ActionSkew'
import { PivotTo, PivotBy } from './ActionPivot'
import { Blink } from './ActionBlink'
import { TintTo, TintBy } from './ActionTint'
import { AlphaTo, AlphaBy } from './ActionAlpha'
import { Repeat } from './ActionRepeat'
import { Sequence } from './ActionSequence'
import { Spawn } from './ActionSpawn'
import { DelayTime } from './ActionDelay'
import { CallFunc } from './ActionCallFunc'
import { default as Action } from './Action'
import { Color } from 'pixi.js'

export { Action }
export const actionManager = new ActionManager()

export function moveToAction(t: number, { x, y }: { x: number, y: number }) {
  return new MoveTo(x, y, t)
}
export function moveByAction(t: number, { x, y }: { x: number, y: number }) {
  return new MoveBy(x, y, t)
}
export function scaleToAction(t: number, { x, y }: { x: number, y: number }) {
  return new ScaleTo(x, y, t)
}
export function scaleByAction(t: number, { x, y }: { x: number, y: number }) {
  return new ScaleBy(x, y, t)
}
export function rotateToAction(t: number, r: number) {
  return new RotateTo(r, t)
}
export function rotateByAction(t: number, r: number) {
  return new RotateBy(r, t)
}
export function fadeInAction(t: number) {
  return new FadeIn(t)
}
export function fadeOutAction(t: number) {
  return new FadeOut(t)
}
export function skewToAction(t: number, { x, y }: { x: number, y: number }) {
  return new SkewTo(x, y, t)
}
export function skewByAction(t: number, { x, y }: { x: number, y: number }) {
  return new SkewBy(x, y, t)
}
export function pivotToAction(t: number, { x, y }: { x: number, y: number }) {
  return new PivotTo(x, y, t)
}
export function pivotByAction(t: number, { x, y }: { x: number, y: number }) {
  return new PivotBy(x, y, t)
}
export function blinkAction(t: number, count: number) {
  return new Blink(count, t)
}
export function tintToAction(t: number, tint: Color) {
  return new TintTo(tint, t)
}
export function tintByAction(t: number, tint: Color) {
  return new TintBy(tint, t)
}
export function alphaToAction(t: number, alpha: number) {
  return new AlphaTo(alpha, t)
}
export function alphaByAction(t: number, alpha: number) {
  return new AlphaBy(alpha, t)
}
export function repeatAction(action: Action, count: number) {
  return new Repeat(action, count)
}
export function sequenceAction(...action: Action[]) {
  return new Sequence(...action)
}
export function spawnAction(...action: Action[]) {
  return new Spawn(...action)
}
export function delayTimeAction(t: number) {
  return new DelayTime(t)
}
export function callFuncAction(func: () => void) {
  return new CallFunc(func)
}
