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
