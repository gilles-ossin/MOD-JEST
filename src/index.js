/* MOD-JEST 1.0.0 (https://mod-css.com)
* dev-GEOS (Gilles OSSIN) - dev@mod-css.com 
* Edited at 25th, April 25, 
* Licensed GPL-3
*/
var nb=1;export function describe(o,t){t(),++nb}export function test(o,t){try{const e=t();e instanceof Promise?e.then((()=>toConsole(o,!0))).catch((t=>toConsole(o,!1,t))):toConsole(o,!0)}catch(t){toConsole(o,!1,t)}}export function expect(o){return{toBe(t){if(o!==t)throw new Error(`Expected "${t}", Returned "${o}"`)}}}function toConsole(o,t,e=null){}