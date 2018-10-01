# markdown-it plugin

HTML コメント内文字により特定の文字列に変換します。`markdown-it-container`を参考にしています。

```
<!-- pagebreak -->
```
を
```htnml
<div style="page-break-before:always"></div>
```
のように変換することを目的にしています。

## API

```js
var md = require('markdown-it')()
            .use(require('markdown-it-custom-html-comment'), name [, options]);
```
Params:

- __name__ - container name (mandatory)
- __options:__
   - __render__ - optional, renderer function for opening/closing tokens.

## Example

```js
var md = require('markdown-it')({
    html: true
    });
md.use(require('markdown-it-custom-html-comment'), 'pagebreak', {
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/pagebreak/);
        if (m) {
            return '<div style="page-break-before:always"></div>'
        }
        return '';
    }
});
console.log(md.render('<!-- pagebreak -->')); // <div style="page-break-before:always"></div>
```