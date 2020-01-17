# Sparkgeo Shared Components
This documentation is a work in progress. 
## Consuming Components (WIP)
Note: keep a close eye on this repo's peer dependencies. When composing a component in another project, you will need to some or all of the peer dependencies listed here. 
### Likely Steps:
1. Import the component library `yarn add test-mmnoo-shared-components` 
1. Install the peer dependencies listed here in your project repo
1. If the component depends on `Grommet`, configure Grommet in your app. (Likely Wrap the contents of your App component like so: ` <Grommet> ... </Grommet>`)
1. Import a desired component in a file: `import {xxx} test-mmnoo-shared-components`, as of this release, the folowing TEST components are available: `Login`, `TextInput` (which overrides the Grommet TextInput), `InputErrorText` (a styled-component), `SparkgeoBaseTheme` (needs work regarding property naming), and every component from Grommet (so we could start using a repo like this to access Grommet components to make refactoring our project code bases easier). 
1. Use component like you normally would

## Developing Components
### Current Steps: (subject to change)
1. `yarn install`
1. `yarn test` to run tests
1. For visual inspection we currently have two options:
    *  A demo `create-react-app` app. To use it, run `yarn start`, and modify the files inside the `Demo` folder as you work.
    * Storybook. To use it run `yarn storybook`. This will compile and visualize all compoents with a `<component name>.stories.js` file name type. Please include these files within the component folder.
1. Because this is a shared components library, which has potential to create significant technical debt, all components need unit tests, so please write tests. If unsure about testing, ping Melissa for help. You are encouraged to play with Storybook. Its use over the CRA demo is up for discussion (like everything else in this repo actually!)
1. Please commit changes to separate branch and create a PR (non-temporary repo TBD). Because of the technical debt potential of this library, this repo has mandatory code reviews by the following developers [x, y, z]}
1. Currently, each PR against develop will include link to a Netlify deployment of the code in the PR. UX folks could review this as part of the PR process. A current deployment of the `develop` branch can also be viewed [here](https://compassionate-jepsen-7e2ea6.netlify.com/).
1. After your review, let the #xxxxxxxx channel on slack know about the availability of your component (?)

## To Do:

- [x] Configure with React Testing Library
- [x] Figure out simple development workflow for local visual testing (currently have both Storybook and a demo CRA to choose from)
- [x] Configure to play nice with Grommet
- [ ] Figure out how to elegantly deal with theming
- [ ] Refine Readme
- [x] Publish to npm for now?
- [ ] ~~Add basic instructions for working with Bit~~
- [x] Configure linter
- [ ] Make each component installable one-by-one for more refined version control. This is in anticipation of a project wanting to install two components, each with a different library version. Contenders: Bit (likely candidate), Lerna, RushJS, git subtrees (?), Nx. In the interim, there isnt any likely harm in publishing components one-by-one to Bit.dev if a project needs to consume different versions of components. 
- [x] install storybook
- [ ] research Storybook documentation add ons (if buy-in)
- [ ] explore more advanced Storybook features (if buy-in)
- [x] figure out how to automatically deploy storybook on push (using Netlify)

Initial library stucture inspired by ['Create Library of React Component'](https://dev.to/arpitjain_in/create-library-of-react-component-1fa8 ) article