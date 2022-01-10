---
layout: layouts/get-started.njk
subsection: How to guides
title: Setting up JavaScript
---

Several dxw Pattern Library components use JavaScript to provide interactive features. In order to fully use these components you will need to add some code to your service to set up the JavaScript.

Inside the same documentation folder for the component you're creating (`docs/examples/example-component/`), add a `script.js` file with the script you want to use. The build process looks for all `.js` files in the components directory and sub-directories and includes them on dxw Frontend after executing the command `yarn run build:package`.
