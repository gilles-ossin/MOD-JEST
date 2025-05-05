[ENG] It is a JavaScript testing library inspired by Jest. 
Very lightweight, it's streamlined to run quickly in the console with colorful results. It works in frontend with of any framework and projects using: django, laravel, React, TypeScript, Node, Angular, Vue, and more.

[FR] Il permet de tester vos scripts et fonctions avant de les mettre en production. Il peut fournir un rapport personnalisable sur le fonctionnement de votre fonction.
Il suffit de configuer correctement et il vous dira si votre fonction marche correctement ou non, si elle génere des erreurs, lesquelles...

## HOW TO USE

### 1. Install from npm

```bash
npm install @dev-geos/mod-jest
```

### 1.1 Or load from CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/gilles-ossin/MOD-JEST@main/src/index.js"></script>
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
