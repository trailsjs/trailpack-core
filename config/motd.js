const _ = require('lodash')

module.exports = {

  hr: `---------------------------------------------------------------`,

  info: {

    start: `Starting...`,
    stop: `Shutting down...`,
    initialized: `All trailpacks are loaded.`,
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
          ORM               : ${app.config.database.orm}
          Stores            : ${Object.keys(app.config.database.stores)}
        Web Server Info
          Engine            : ${app.config.web.engine}
          Routes            : ${app.routes.length}
          Port              : ${app.config.web.port}`
      )
    },

  },

  silly: {

    stop: `
      Happy trails to you, until we meet again.
      - Dale Evans
    `,

    ready (app) {
      return (
        ` API
          Models            : ${_.keys(_.omit(app.api.models, 'inspect'))}
          Controllers       : ${_.keys(_.omit(app.api.controllers, 'inspect'))}
          Policies          : ${_.keys(_.omit(app.api.policies, 'inspect'))}
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
