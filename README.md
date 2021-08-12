# markup-tag-gen

Generate Markup Tags with ease

## Installation

```
npm i markup-tag-gen
```

## Usage

Use the exported `tag` function to generate markup. You can nest them too.

### Examples:

```TS
import { tag } from 'markup-tag-gen'
// const { tag } = require('markup-tag-gen')

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

The above statement will return markup for the following:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/1TTrjJ7/Screenshot-2021-08-12-HTML-Code-Editor.png" alt="Screenshot-2021-08-12-HTML-Code-Editor" border="0"></a>

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

The above statement will return markup for the following:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/pfTvtwz/Screenshot-2021-08-12-HTML-Code-Editor-2.png" alt="Screenshot-2021-08-12-HTML-Code-Editor-2" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />
