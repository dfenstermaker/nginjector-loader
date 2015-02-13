# ngInjector-loader
Webpack loader to resolve angular-injector functions

Simple wrapper around angular-injector to allow it to be used as a loader. Can be used
as a config loader like so:

```json
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], loader: "ngInjector-loader" }
    ]
  }
```

Or it can be used as a require loader (but not the recommended use case) like so:

```javascript
  require("ngInjector!./name/of/file.js")
```

The output of the above is to take functions wrapped in ng and output a function wrapped in an array
with it's parameters properly injected.

input:

```javascript
  ng( function ($scope, $attrs) {} )
```

output:

```javascript
  ["$scope", "$attrs", function ($scope, $attrs) {}]
```
### angular-inject docs:
https://www.npmjs.com/package/angular-injector
