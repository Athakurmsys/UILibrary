# UI LIBRARY 

**Step 1: Go to the NodeJS website and download NodeJS**
<!-- Go to the NodeJS website and download NodeJS -->
<!-- Make sure Node and NPM are installed and their PATHs defined -->
[Here is the NodeJS website.](https://nodejs.org/en/download/).

*download the LTS (Long-Term Support) version*

**Step 2: Make sure Node and NPM are installed and their PATHs defined**

*Once you have NodeJS downloaded and installed, you will want to make sure that Node is in fact installed properly by running the following command in a terminal*

`node -v`

*This should return a version number like this:*

`v14.15.0`

*When you install Node, you also install Node Package Manager, commonly referred to as simply NPM. As the command line is concerned you will most likely be interacting with NPM way more than with Node. I will explain what it does in a bit, but for now, just check that NPM is installed and it’s PATH is correct. To check these do the same thing you did for node:*

`npm -v`

*This will return a similar looking number, like:*

`6.14.8`

**Step 3: Clone Project from github**

*http url : `git clone https://github.com/Athakurmsys/UILibrary.git`*

**step 4: Install Packages**

<!-- Once the cloning is done just move to the main directory -->

`cd <Project Name>`

<!-- Once move to the directory run -->

`npm install` *its help to install all the necessary packages required in the project*

**step 5: Making A build file**

<!-- step 1. To rollup your css -->

`npm run rollup`

*it will add a css changes in dist folder*

<!-- step 2. To make a build -->

`npm run build`

*it will create a dist folder with minified code* for production build

## step 6: Publish npm package to npm registery**

**Creating an account on the website**

<!-- Go to the npm signup page -->

In the user signup form, type in the fields:

***Username***: *The username that will be displayed when you publish packages or interact with other npm users on npmjs.com. Your username must be lower case, and can contain hyphens and numerals*.

***Email address***: *Your public email address will be added to the metadata of your packages and will be visible to anyone who downloads your packages. We will also send email to this account when you update packages, as well as occasional product updates and information*.
***Password***: *Your password must meet our password guidelines*.

**Testing your new account with npm login**

<!--On the command line, type the following command: -->

`npm login`

 *When prompted, enter your ***username***, ***password***, and ***email address*** *

 *If you have two-factor authentication enabled, when prompted, enter a ***one-time password*** *.

 *To test that you have successfully logged in, type:*

 `npm whoami`

 ## Publishing scoped public packages

 *To publish your scoped public package to the ***npm registry, run***:*

`npm publish --access public`

## Example

<!-- Once build is publish to npm -->

<!-- Step 1. Install npm package in your project -->

`npm i @athakur0211/uilibrary`

<!-- Once install its ready for use -->
```
import React from 'react'
import {Typography} from '@athakur0211/uilibrary';

const App =()=>{
    return <Typography varient="h3"> Hello React </Typography>
}
export default App
````









