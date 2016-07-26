# trailpack-core

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Core Trailpack. This pack is required by all [Trails](http://trailsjs.io)
applications, and is reponsible for validating the API definition (the stuff in
api/), merging environment-specific configuration, binding context on
Controllers, Services, and Policies, and other important and fundamental
things.

In particular, this trailpack includes and configures two very important
things:
- Logging
- Internationalization (i18n)

## Install

```sh
$ npm install --save trailpack-core
```

## Usage

### Configuration
The core trailpack should always be loaded in your trailpack config.

```js
// config/main.js
module.exports = {
  // ...
  packs: [
    require('trailpack-core')
  ]
}
```

### Logging
This trailpack exposes the configured logger (in `config.log`) on the main `app`
object. See [archetype/config/log.js](https://github.com/trailsjs/trailpack-core/tree/master/archetype/config/log.js)
for an example configuration.

```js
// api/controllers/ExampleController.js
module.exports = class ExampleController extends Controller {

  /**
   * Logs the querystring
   */
  exampleHandler (req, res) {
    this.log.debug(req.query)
  }
}
```

### Internationalization
This trailpack also exposes the i18next translator function on the main `app`
object as `app.__` and `app.t`. See [archetype/config/i18n.js](https://github.com/trailsjs/trailpack-core/tree/master/archetype/config)
for an example configuration.

```js
// config/locales/en.json
{
  "helloworld": "Hello World"
}
```

```js
// api/controllers/ExampleController.js
module.exports = class ExampleController extends Controller {

  /**
   * Returns the string "Hello World" if locale is set to "en"
   */
  exampleHandler (req, res) {
    this.app.t('helloworld')
  }
}
```

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/trailsjs/trailpack-core/blob/master/LICENSE)

<img src="http://i.imgur.com/dCjNisP.png">

[npm-image]: https://img.shields.io/npm/v/trailpack-core.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-core
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-core/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trailpack-core
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-core.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-core
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-core.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trailpack-core
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs

