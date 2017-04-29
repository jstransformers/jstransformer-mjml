# jstransformer-mjml

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-mjml.svg)](https://greenkeeper.io/)

[MJML](https://github.com/mjmlio/mjml) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mjml/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mjml)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-mjml/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-mjml)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-mjml/master.svg)](http://david-dm.org/jstransformers/jstransformer-mjml)
[![NPM version](https://img.shields.io/npm/v/jstransformer-mjml.svg)](https://www.npmjs.org/package/jstransformer-mjml)

## Installation

    npm install jstransformer-mjml

## API

```js
var mjml = require('jstransformer')(require('jstransformer-mjml'))

var input = `<mj-body>
  <mj-section>
    <mj-column>
      <mj-text>
        Hello World!
      </mj-text>
    </mj-column>
  </mj-section>
</mj-body>`

mjml.render(input).body
//=> The repsonsive HTML generated
```

## License

MIT
