# React Typescript Package Boilerplate with Eslint, Jest & React Testing Library

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) 
![Github CI](https://github.com/daphnesmit/react-typescript-package-boilerplate/actions/workflows/build_test_deploy.yml/badge.svg)

This is a boilerplate that you can use to scaffold a React Typescript package. 
It includes build and test scripts and everything you need to get your package up and running within seconds!

## Table Of Contents

1. [Installation](#installation)
2. [Development](#development)
3. [Production Build](#production-build)
4. [Linting](#linting)
5. [Testing](#testing)
6. [Committing and linting commits](#committing-and-linting-commits)
7. [Targeting browsers](#targeting-browsers)
8. [Roadmap](#roadmap)

## Installation
Use the package manager [NPM](https://www.npmjs.com/) to install all dependencies of this project. You can do so by running the following command in your CLI `npm install`.


## Development 
You can start developing by running `npm start`. This will spin up a local environment which runs [Storybook](https://storybook.js.org/).


## Production Build
To build the library you can run `npm run build`.


## Linting
Please install the appropriate plugins in you IDE of preference to lint your code the right way. 

### Eslint
While developing your code will be linted with ESLint using config defined in `.eslintrc.js`. 
NOTE! Please don't install prettier. This setup uses ESLint for all JS linting and formatting

### Autoformatting on save in VSCode
To turn on autoformatting on save in VSCode follow the following guidelines:

- Download the [VSCode ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and following the instructions.

- Make sure to change your settings.json in VSCode and add the following lines in the json:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

### EditorConfig
Whitespace is managed by [EditorConfig](https://editorconfig.org/).


## Testing

### Unit Testing With Jest & React Testing Library
Unit tests are written in [Jest](https://jestjs.io/) using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/).

For each component tests should be added, at the very least a test to check if the component renders without crashing.  
Preferably more meaningful tests specific for the component should be added.


## Committing and linting commits

### GIT Flow
In GIT we use the Bitbucket [feature branch model](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), this model has one main concept and that is that all feature development should take place in a dedicated branch instead of the `master` branch. This makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the master branch will never contain broken code

### Branch naming
`feature/`: All features / new functions / major refactorings are done in feature branches, which branch off of and are merged back into the develop branch (usually after some kind of peer review).

`release`: When enough features have accumulated or the next release time frame comes near, a new release branch is branched off of develop, which is solely dedicated to testing /bug fixing and any cleanup necessary (e.g. changing some path names, different default values for instrumentation etc.).

`master`: Once the QA is satisfied with the quality, the release branch is merged into master (and also back to develop). This is what is shipped to/used by the customers.
Note: Any commit in master is a merge commit (either from a release or a hotfix branch) and represents a new release that is shipped to the customer.

`hotfix/`: If a major problem is found after release, the fix is developed in a hotfix branch, that is branched off of the master. Those are the only branches that will ever
branch off of master.

For a normal feature or bugfix, the branch should be named as: feature/{name-with-dashes}.

### Semantic versioning
For releasing new versions of our component library we use semantic versioning as you most likely have seen in other libraries. Semantic versioning looks like `x.y.z` or in an use case `1.4.5`. The first digit stands for a major release that most perhaps has some breaking changes. The second digits stands for new features and the last digit is often bugfixes.

The following tags inside a commit will trigger an release note:
### **Type**
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### **Footer**
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit closes.
The breaking change must be in the commit body and not in the subject, the subject is the first line and the line after is the body. Easiest way to create a breaking change is to add it to your existing types as the example below:
```text
perf: WHAT CHANGED

BREAKING CHANGE: short description
Long description what is breaking
```

### Help with your commits!
Not everybody is equally skilled in formatting git commits themselved.
Therefor to help you with semantic commits you can use [commitizen](https://github.com/commitizen/cz-cli).

Just follow their readme or our quickstart:
```
npm install -g commitizen
```

If you want to commit your changes.

First add your changes:
```
git add -A
```

Then use the commitizen semantic commit wizard by running:
```
npx cz
```

Follow the wizards steps and voilá you have made a semantic commit!

### Release channels
The following branches are configured and will trigger the semantic releasing when the above tagges are added:
- master
- release => pre-release
- develop => pre-release

## Targeting Browsers
In the `.browserslistrc` is specified which browsers are targeted during build.Rollup produces a modern and legacy package build.
To change the targeted browsers change the config of `.browserslistrc` and check out the [browserslist docs](https://github.com/browserslist/browserslist).

