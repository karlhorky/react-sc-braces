# react-sc-braces

> Curly braces to indicate elements in diagrams (built in React and styled-components)

<img src="screenshot.png" width="100%" />

For vanilla HTML + CSS, check out the [Codepen](https://codepen.io/karlhorky/pen/vwmqqv).

## Install

This component is intended for use with React and styled-components. If you're using those libraries already, just copy and paste the component file [`Brace.js`](./Brace.js) into your codebase. This hasn't been published as a package yet, because publishing CSS packages is not great with the current state of tooling in 2019.

## [Demo](https://codesandbox.io/s/reactscbraces-gpjv3)

## Examples

```jsx
{/* Set brace and text colors to #fff, with annotation text */}
<Brace side="top" width="120px" color="#fff">
  JavaScript
</Brace>

{/* Set brace color to crimson (text color defaults to #000) */}
<Brace side="left" height="120px" braceColor="crimson" />

{/* Default to #000 brace and text colors */}
<Brace side="top" width="300px" />

{/* Default to top side and auto width */}
<Brace />
```

## Props

| prop         | values                                          | default |
| ------------ | ----------------------------------------------- | ------- |
| `side`       | `top`, `bottom`, `left`, or `right`             | `top`   |
| `color`      | CSS color for both the curly brace and the text | `#000`  |
| `braceColor` | CSS color for the curly brace                   | `#000`  |
| `textColor`  | CSS color for the text                          | `#000`  |
| `width`      | width of the `top` and `bottom` side braces     | unset   |
| `height`     | height of the `left` and `right` side braces    | unset   |
| `fontSize`   | font size                                       | unset   |
| `fontFamily` | font family                                     | unset   |

## Credit

Heavily inspired by [Lauren Herda](https://github.com/lrenhrda)'s [Codepen](https://codepen.io/lrenhrda/pen/hkLIe).
