# pixi-action-ease
pixijs action and ease
# Usage
```
import { actionManager } from 'pixi-action-ease'
...
  app.ticker.add(() => {
    actionManager.update(app.ticker.deltaTime / 60)
  })
```
```
import { callFuncAction, moveByAction, sequenceAction } from 'pixi-action-ease'
  const sprite = new Sprite('frame')
  const seq = sequenceAction(
    moveByAction(2, Vec2(0, 20)),
    callFuncAction(() => {
      sprite.destroy()
    }),
  )
  const animation = actionManager.runAction(sprite, seq)
```
