# json-cookie-cutter [![Build Status](https://travis-ci.org/ajoslin/json-cookie-cutter.svg?branch=master)](https://travis-ci.org/ajoslin/json-cookie-cutter)

> Same API as [cookie-cutter](https://github.com/substack/cookie-cutter), plus JSON stringify/parse on set/get.


## Install

```
$ npm install --save json-cookie-cutter
```


## Usage

```js
var cookie = require('json-cookie-cutter')

cookie.set('hello', {world: true})
cookie.get('hello') // => {world: true})
```

## API

See [cookie-cutter](https://github.com/substack/cookie-cutter).


## License

MIT © [Andrew Joslin](http://ajoslin.com)
