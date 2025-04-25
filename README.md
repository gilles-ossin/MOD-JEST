# MOD-JEST
It is a JavaScript testing framework inspired by Jest. Very lightweight, it's streamlined to run quickly in the console with colorful results. It works in frontend with of any framework and projects using: django, laravel,  React, TypeScript, Node, Angular, Vue, and more.
## HOW TO USE

### 1. Install from npm

```bash
npm install @dev-geos/mod-jest
```

### 2. Import and Use it

```js
import { describe, test, expect } from '@dev-geos/mod-jest'

// Test de la fonction init()
describe('init()', () => {

  test('DIV Exists', () => {
      var res = false
      var div = document.querySelectorAll('.div')
      if (div) res = true

      expect(res).toBe(true); // selon le comportement attendu
   })

   test('HTMLElement exists', () => {
      var div = document.querySelectorAll('.div2')
      var res = false
      if (div) res = true

      expect(res).toBe(true)
  })
})
```

### 3. Result in console
(*Refresh your webpage*)

```bash
************************************************* ... 
[ Test 1 :  init()  ]
✔ DIV Exists
✖  HTMLElement exists. ReferenceError: div is undefined

```

#### It'all. Thanks !
