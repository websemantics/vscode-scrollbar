```
┌─────────────────────────────────────────────────────┬─┬───────────────────────┐
│  ╭─╮╭─╮┬─╮╭─╮┬  ┬  ╭─╮┬─╮                           │ │                       │
│  ╰─╮│  ├┬╯│ ││  │  ├┤ ├┬╯                           ▐█▊                       │
│  ╰─╯╰─╯┴╰─╰─╯┴─╯┴─╯╰─╯┴╰─                           ▐█▊ ◀─ Knob               │
│                                                     ▐█▊                       │
│                           Horizantle Orientation    │ │                       │
│                                    │                │ │ ◀─ Transparent Track  │
│                                    ▼                │ │                       │
├──────────────────────────▄▄▄▄▄▄▄▄▄▄▄▄───────────────┤ │                       │
└──────────────────────────▀▀▀▀▀▀▀▀▀▀▀▀───────────────┴─┴───────────────────────┘
```

Synthetic scrollbar with transparent track and style-able knob, Visual Stuido Code style.

Try [Demo](https://websemantics.github.io/vscode-scrollbar/)

## Usage

Consider the following markup

```html
<main class="container">
    <div id="content"></div>
</main>
```

And the following style,

```css
#content {
    width: 2000px;
    height: 2000px;
}
```

To enable the Vscode-style scroller to manager such a large content element, import the javascript / css files of this project into a new html page then create an instance of the `Scroller` class (see [Demo](https://websemantics.github.io/vscode-scrollbar/))

```js
const scroller = new Scroller(document.querySelector('.container'))

window.onresize = () => {
    scroller.resize()
}
```

To adjust the `knob` size, attach the `resize` method of the `Scroller` instance with window resize event as show above.

That's all, enjoy!

## Support

Need help or have a question? post a questions at [StackOverflow](https://stackoverflow.com/questions/tagged/vscode-scrollbar+web+semantics)

*Please don't use the issue trackers for support/questions.*

## Contributions

We are more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :)

## Copyright and license

[MIT license](http://opensource.org/licenses/mit-license.php)
Copyright (c) Web Semantics, Inc.