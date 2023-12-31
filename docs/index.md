---
home: true
tagline: A library for manipulating SVG/Path2D curves.
---

<div align="center">
	<p>
		<a href="https://www.npmjs.org/package/pathed">
			<img src="https://img.shields.io/npm/v/pathed.svg?style=flat-square" alt="npm version">
		</a>
		&nbsp;
		<a href="http://spdx.org/licenses/MIT">
			<img src="https://img.shields.io/npm/l/pathed.svg?style=flat-square" alt="npm license">
		</a>
		&nbsp;
		<img src="https://github.com/baku89/pathed/actions/workflows/ci.yml/badge.svg" alt="CI test result" />
	</p>
</div>

```js:pathed
const path = [
	['M', [10, 50]],
	['C', [34, 100], [75, 0], [90, 50]],
]
stroke(path, 'plum')

const c = Path.circle([50, 50], 40)
stroke(c, 'PaleGreen', 1)

const r = Path.rectangle([10, 10], [50, 50])
stroke(r, 'PowderBlue')

const t = Path.regularPolygon([50, 50], 30, 5)
stroke(t, 'MediumSlateBlue')
```

Pathed is a low-level toolkit for manipulating SVG/Path2D paths, which includes creating primitives, calculating positions/normals/tangents, offsetting, and resampling paths. All functions are provided in a functional programming manner, and the path data is represented as a plain object with immutability.

Currently, the library heavily depends on [Bazier.js](https://pomax.github.io/bezierjs) by [Pomax](https://github.com/Pomax) and [Paper.js](http://paperjs.org) by [Jürg Lehni
](https://github.com/lehni) -- or it might be said that this library is a thin wrapper for them to provide FP-oriented interfaces. Although I'm going to rewrite the whole library with zero dependencies for performance and file size, please consider sponsoring them if you think it'd be useful.

## API

See the full documentation on [API](./api)

- [Path](./api/modules/Path): The core module for manipulating paths.
- [Bezier](./api/modules/Bezier): The cubic bezier functions which wraps Bezier.js.
- [BBox](./api/modules/BBox): The functions for handling bounding boxes.
- [Type Aliases](./api#type-aliases)

## Getting Started

### Installation

```sh:no-line-numbers
yarn add pathed
```

```js:no-line-numbers
import {Path} from 'pathed'

const circle = Path.circle([0, 0], 100)

// For SVG's path element
const d = Path.toSVG(circle)
svgPathElement.setAttribute('d', d)

// For Canvas API
const path2d = Path.toPath2D(circle)
context.stroke(path2d)
```

### Example

::: tip
All code blocks in this documentation are editable and you can try out with Pathed.
:::

@[code js:pathed](./examples/primitives.js)
