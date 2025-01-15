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
import { callFunc, moveBy, sequence } from 'pixi-action-ease'
  const sprite = new Sprite('frame')
  const seq = sequence(
    moveBy(2, Vec2(0, 20)),
    callFunc(() => {
      sprite.destroy()
    }),
  )
  const animation = actionManager.runAction(sprite, seq)
```
