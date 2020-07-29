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
      'skip-repo': true,
      scripts: {
        start: 'ts-node src/index.ts'
      }
    })

    this.composeWith(require.resolve('generator-git-init'))
  }

  writing () {
    this.fs.copy(
      this.templatePath('static/**'),
      this.destinationRoot(),
      {
        globOptions: {
          dot: true
        }
      }
    )

    this.fs.copyTpl(
      this.templatePath('dynamic/**'),
      this.destinationRoot(),
      {
        year: new Date().getFullYear()
      },
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
      'eslint',
      'eslint-config-prettier',
      'eslint-plugin-prettier',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'typescript',
      '@types/node',
      '@types/node-fetch'
    ], {
      'save-dev': true
    })

    this.npmInstall(['dotenv', 'node-fetch'])

    this.installDependencies({
      bower: false
    })
  }
}
