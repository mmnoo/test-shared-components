# Sparkgeo Shared Components
This documentation is a work in progress. 
## Consuming Components (WIP)
Keep a close eye on this repo's peer dependencies. When composing a component in another project, you will need to some or all of the peer dependencies listed here. 
### Likely Steps:
1. Import the desired component `yarn add xxxxxxx` 
1. Install the peer dependencies listed here in your project repo
1. If the component depends on `Grommet`, configure Grommet in your app. (Likely Wrap the contents of your App component like so: ` <Grommet> ... </Grommet>`)
1. 

## Developing Components
### Current Steps: (subject to change)
1. `yarn install`
1. `yarn test` to run tests
1. For visual inspection, run `yarn start`, modify the files inside the `module` folder
1. Because this is a shared components library which has potential to create significant technical debt, all components need unit tests, so please write tests. If unsure about testing, ping Melissa for help.
1. Please commit changes to separate branch and create PR. Because of the technical debt potential of this library, this repo has mandatory code reviews by the following developers [x, y, z]}
1. We still need to figure out a good process for Al to review components in terms of UX... does it make sense for him to be a mandatory code reviewer and we use something magical to deploy the code inside to Module folder for visual inspection?
1. After your review, let the #xxxxxxxx channel on slack know about the availability of your component if it is new or significantly refactored

## To Do:

- [ ] Figure out how to install components one by one istead of installing the whole component library
- [ ] Configure with React Testing Library
- [ ] Figure out simple development workflow for local visual testing
- [ ] Configure to play nice with Grommet
- [ ] Figure out how to elegantly deal with theming
- [ ] Refine Readme
- [ ] figure out where components live and versioning long-term (Bit.dev for now)
- [ ] Add basic instructions for working with Bit
- [ ] Configure linter

Initial library stucture inspired by ['Create Library of React Component'](https://dev.to/arpitjain_in/create-library-of-react-component-1fa8 ) article