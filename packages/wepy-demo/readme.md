## Compiler fixes

### Fixes for `.vue` files

`import` fixes:

`wepy-compiler-typescript`:

```javascript
content = content.replace(/(import[^']+'[^']+)\.vue(');?\n/g, '$1$2')
content = content.replace(/(import[^"]+"[^"]+)\.vue(");?\n/g, '$1$2')
```

`wepy-cli`:

`compile-template` file:

(around line 485)

```javascript
var tempPath = definePath;
if (/\.vue$/.test(tempPath)) {
    tempPath = tempPath.replace(/(\.vue$)/, '');
}
if (tempPath.indexOf('.') === -1) {
    var opath = _path2.default.parse(template.src);
    definePath = _resolve2.default.resolveAlias(tempPath, opath);
} else {
    definePath = _path2.default.resolve(template.src, '..' + _path2.default.sep + template.components[comid]);
}
```

`compile-wepy` file:

(around line 500):
```javascript
tmp = wpy.template.components[k];
// TODO: SFC 后缀名配置
if ( /(\.vue)$/.test(tmp)) {
    tmp = tmp.replace(/(\.vue)$/, '');
}

if (tmp.indexOf('.') === -1) {
    requires.push(tmp);
} else {
    requires.push(_path2.default.join(opath.dir, wpy.template.components[k]));
}
```

Fixes for Typescript type declaration:

(around line 125):

```javascript
var match = rst.script.code.match(/[\s\r\n]config(?:\s*\:\s*[_a-zA-z]\w+)?\s*=[\s\r\n]*/);
```
