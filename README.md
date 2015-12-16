# trailpack-core

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Core Trailpack. This pack is required by all [Trails](http://trailsjs.io)
applications, and is reponsible for validating the API definition (the stuff in
api/), merging environment-specific configuration, binding context on
Controllers, Services, and Policies, and other important and fundamental
things.

## Usage
The core trailpack should always be loaded in your trailpack config.

```js
// config/trailpack.js
module.exports = {
  // ...
  packs: [
    require('trailpack-core')
  ]
}
```

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/trailsjs/trailpack-core/blob/master/LICENSE)

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

