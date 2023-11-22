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
import { CallFunc, MoveBy, Sequence } from 'pixi-action-ease'
  const sprite = new Sprite('frame')
  const seq = Sequence.create(
    MoveBy.create(2, Vec2(0, 20)),
    CallFunc.create(() => {
      sprite.destroy()
    }),
  )
  const animation = actionManager.runAction(sprite, seq)
```
