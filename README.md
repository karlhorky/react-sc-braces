# react-sc-braces

> Curly braces to indicate elements in diagrams (built in React and styled-components)

<img src="screenshot.png" width="100%" />

For vanilla HTML + CSS, check out the [Codepen](https://codepen.io/karlhorky/pen/vwmqqv).

## Install

This component is intended for use with React and styled-components. If you're using those libraries already, just copy and paste the component file [`Brace.js`](./Brace.js) into your codebase. This hasn't been published as a package yet, because publishing CSS packages is not great with the current state of tooling in 2019.

## [Demo](https://codesandbox.io/s/reactscbraces-gpjv3)

## Props

- `side`: `top`, `bottom`, `left`, or `right` (defaults to `top`)
- `braceColor`: CSS color for the curly brace (defaults to `#000`)
- `width`: width of the `top` and `bottom` side braces
- `height`: height of the `left` and `right` side braces

## Credit

Heavily inspired by [Lauren Herda](https://github.com/lrenhrda)'s [Codepen](https://codepen.io/lrenhrda/pen/hkLIe).
