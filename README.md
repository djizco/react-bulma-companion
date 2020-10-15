# React Bulma Companion


A set of React Components for the [Bulma](http://bulma.io/) CSS framework.

The current Bulma version this library supports is `0.9.1`. To use an older version of Bulma with this library, please reference the **Legacy Support** section.

React Bulma Companion works as a **companion** to Bulma's CSS classes. It doesn't include any CSS itself. This allows you to import Bulma and customize it in any way you choose.

## Why use React Bulma Companion

React Bulma Companion was created for a few reasons.

- No CSS: The main reason React Bulma Companion was created was to have a Bulma component library that doesn't include any CSS. This allows you to install Bulma separately and still use these components without any duplicate stylesheets.

- Easy to use: React Bulma Companion is built with a simple API and easy-to-read [documentation](http://react-bulma-companion.surge.sh/) that is based on the original [Bulma docs](https://bulma.io/documentation/). It is slightly opinionated in what elements it uses under the hood, while leaving you enough customization to take full advantage of Bulma's features.

- Legacy Support: Because React Bulma Companion works completely by adding and removing Bulma classes, it isn't directly tied to any specific stylesheets. This makes it possible for components to be compatible with multiple versions of Bulma. A legacy support section has been added to help you use React Bulma Companion with older versions of Bulma.

## Configure Bulma

Because React Bulma Companion doesn't include any CSS, you must import and configure Bulma yourself. Please follow instructions on the [Bulma Github page](https://github.com/jgthms/bulma). This gives you flexibility and control of your bulma installation.

## Installation

```bash
npm install react-bulma-companion
```

## How to Use

For basic use, you can simply import your components directly from the library. This is only recommended if you don't care about your final bundle size.

```javascript
import { Button, Table } from 'react-bulma-companion';

const { Button, Table } = require('react-bulma-companion');
```

To take advantage of **tree shaking**, you can import each component individually from the `lib` folder.

```javascript
import Button from 'react-bulma-companion/lib/Button';
import Table from 'react-bulma-companion/lib/Table'
```

Bundled versions can be located in the `dist` folder.

## Component Documentation

React Bulma Companion's [component documentation](http://react-bulma-companion.surge.sh/) was built with Storybook.

## Legacy Support

The current Bulma version this library supports is `0.9.1`, however React Bulma Companion was created with the idea of legacy support in mind.

Legacy-compatible versions of React Bulma Companion can be found at `dist/legacy/react-bulma-companion-[version].js` where the `version` number on the file name is for the **Bulma version** you are using.

Legacy index files are also created in the `lib` folder allowing you to easily important legacy components.

```javascript
import { Button, Table } from 'react-bulma-companion/dist/legacy/react-bulma-companion-[version]';

import { Button, Table } from 'react-bulma-companion/lib/[version]';
```

If you are planning to stick with the above setup and are using webpack, I recommend setting up a [webpack alias](https://webpack.js.org/configuration/resolve/#resolvealias) to clean up your imports.

```javascript
module.exports = {
  resolve: {
    alias: {
      'react-bulma-companion': 'react-bulma-companion/lib/[version]',
    },
  },
};
```

To use **tree shaking** with a legacy version of Bulma, you must import the correct components. Please reference the **legacy component map** in the [documentation](http://react-bulma-companion.surge.sh/?path=/docs/legacy-component-map--page) to see which component you should use with your version. Legacy components are labeled with its **latest compatible version**.

```javascript
import Button from 'react-bulma-companion/lib/Button-[version]';
```

Legacy Bulma Versions Supported: `0.9.0`

## To Do

- [ ] Add Modifier Classes
- [ ] Typescript Support
- [ ] Legacy Support for more Bulma versions: `0.8.1`, `0.7.5`, `0.6.2`, `0.5.3`, etc.
