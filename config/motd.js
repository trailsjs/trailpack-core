/*eslint max-len: 0 */
const _ = require('lodash')

module.exports = {

  info: {
    start: 'Starting...',
    stop: 'Shutting down...',
    initialized: 'All trailpacks are loaded.',
    ready (app) {
      return (
        `---------------------------------------------------------------
        ${new Date()}
        Basic Info
          Application       : ${app.pkg.name}
          Version           : ${app.pkg.version}
          Environment       : ${process.env.NODE_ENV}`
      )
    }
  },

  debug: {
    ready (app) {
      return (
        ` Database Info
          ORM               : ${_.get(app.config, 'database.orm') || 'NOT INSTALLED'}
          Stores            : ${_.get(app.config, 'database.orm') ? Object.keys(app.config.database.stores) : 'N/A'}
        Web Server Info
          Engine            : ${_.get(app.config, 'web.engine') || 'NOT INSTALLED'}
          Port              : ${_.get(app.config, 'web.engine') ? _.get(app, 'config.web.port') : 'N/A'}
          Routes            : ${(app.routes || [ ]).length}`
      )
    }
  },

  silly: {
    stop: `
      Happy trails to you, until we meet again.
      - Dale Evans
    `,

    ready (app) {
      return (
        ` API
          Models            : ${_.keys(app.api.models)}
          Controllers       : ${_.keys(app.api.controllers)}
          Policies          : ${_.keys(app.api.policies)}
          Trailpacks        : ${_.map(app.packs, pack => pack.name)}`
        )
    },

    initialized: `
                                                 /
                                     \\       , //
                                     |\\.--._/|//
                                    /\\ ) ) ).'/
                                   /(  \\  // /
                                  /(   J'((_/ \\
                                 / ) | _\\     /
                                /|)  \\  eJ    L
                               /  )   L   \\/   \\
                              /  \\    J   (\\   /
           _....___          | \\      \\   \\'''
    ,.._.-'        '''--...-||\\     -. \\   \\
  .'.=.'                    '         '.\\ [ Y
 /   /                                  \\]  J
|   |          \\                        A  J
|    \\          Y                      ( |]/|
J     \\         /._                    -tI/ |
 L     )       /   /'-------.,           ''-:.
 J   .'      ,'  ,' ,      .  ''-.__          \\
  \\ T      ,'  ,'   )\\    /|        ';'---7   /
   \\|    ,'L  Y...-' / _.' /          \\  /   /
    J   Y  |  J    .'-'   /         ,--.(   /
     L  |  J   L -'     .'         /  |    /\\
      \\   L'-J   L____,.-''       |  _.-'   |
       |   L  ) _.'\\                    ) _.'\\
       \\    \\(''    \\                  (''    \\
        ) _.'\\'-....'                   '-....'
       (''    \\
        '-.___/
    `
  }
}

