# color-scheme-change [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/color-scheme-change/master.svg
[travis-url]: https://travis-ci.org/feross/color-scheme-change
[npm-image]: https://img.shields.io/npm/v/color-scheme-change.svg
[npm-url]: https://npmjs.org/package/color-scheme-change
[downloads-image]: https://img.shields.io/npm/dm/color-scheme-change.svg
[downloads-url]: https://npmjs.org/package/color-scheme-change
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Detect system color scheme changes on the web (Dark Mode)

Listen for changes to the system color scheme in the web browser. Detect when
the system switches between Light Mode and Dark Mode.

Built for and used on [BitMidi](https://bitmidi.com), a free MIDI database. Works in the browser with [browserify](https://browserify.org/)!

## install

```
npm install color-scheme-change
```

## usage

```js
import colorSchemeChange from 'color-scheme-change'

colorSchemeChange(colorScheme => {
  console.log(`Entering ${colorScheme} mode`)
  // Prints either "Entering dark mode" or "Entering light mode"
})
```

## API

### `remove = colorSchemeChange(onChange)`

Listen for changes to the system color scheme in the web browser. Detect when
the system switches between Light Mode and Dark Mode.

#### `onChange`

A callback function of the following interface: `function(colorScheme) {}` where
`colorScheme` is either `'light'` or `'dark'`. The function is called whenever
the system enters Light Mode or Dark Mode, respectively.

#### `remove`

When the returned `remove` function is called, all event listeners are cleaned
up and the `onChange` function will no longer be called when the system color
scheme changes.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](https://feross.org).
