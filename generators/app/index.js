'use strict'
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  initializing () {
    this.composeWith(require.resolve('generator-npm-init/app'), {
      license: 'MIT',
      author: {
        name: 'evaera',
        email: 'e@eryn.io',
        homepage: 'eryn.io'
      },
      main: 'dist/index.js',
      'skip-test': true,
      'skip-keywords': true,
      'skip-repo': true
    })
  }

  writing () {
    this.fs.copy(
      this.templatePath('**'),
      this.destinationRoot(),
      {
        globOptions: {
          dot: true
        }
      }
    )
  }

  install () {
    this.npmInstall([
      'ts-node',
      'tslint',
      'tslint-config-standard',
      'typescript',
      '@types/node'
    ], {
      'save-dev': true
    })

    this.npmInstall(['dotenv'])

    this.installDependencies({
      bower: false
    })
  }
}
