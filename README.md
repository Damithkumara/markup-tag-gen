# Tag-Gen

Generate Markup Tags with ease

## Installation

```
npm i tag-gen
```

## Usage

Use the exported `tag` function to generate markup. You can nest them too.

### Examples:

```TS
import { tag } from 'tag-gen'
// const { tag } = require('tag-gen')

tag('div') // '<div></div>'

tag('div', { class: 'foo' }) // <div class="foo"></div>

tag('div', { class: 'foo bar baz', id: 'bar', style: 'color: red;', 'data-foo': 'bar', 'data-bar': 'foo' },  'Well in that case...') // '<div class="foo bar baz" id="bar" style="color: red;" data-foo="bar" data-bar="foo">Well in that case...</div>'
```

### Preview 1

```ts
tag(
    'div',
    { class: 'foo bar baz', id: 'bar', style: 'color: red;', 'data-foo': 'bar', 'data-bar': 'foo' },
    'Well in that case...'
)
```

The above statement will return markup for the following

## <div class="foo bar baz" id="bar"  style="color: red;" data-foo="bar" data-bar="foo">Well in that case...</div>

### Preview 2

> Nested tags

```TS
tag('div',
    {
        align: 'center'
    }
    tag('img',
        {
            src: 'https://placekitten.com/200/300'
        }
    )
)
```

<div align=center><img src="https://placekitten.com/200/300">=</div>
