# React Bulma Companion

A set of React Components for the [Bulma](http://bulma.io/) CSS framework. Check out the [component documentation](http://react-bulma-companion.surge.sh/).

React Bulma Companion works as a **companion** to Bulma's CSS classes. It doesn't include any CSS itself. This allows you to import Bulma and customize it in any way you choose.

This library supports bulma versions `0.9.x` and has been updated for `0.9.4`.

## Why use React Bulma Companion

React Bulma Companion was created for a few reasons.

- No CSS: The main reason React Bulma Companion was created was to have a Bulma component library that doesn't include any CSS. This allows you to install Bulma separately and still use these components without any duplicate stylesheets.

- Easy to use: React Bulma Companion is built with a simple API and easy-to-read [documentation](http://react-bulma-companion.surge.sh/) that is based on the original [Bulma docs](https://bulma.io/documentation/). It allows you to easily take full advantage of Bulma's features.

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

You can also see React Bulma Companion in use [here](https://github.com/djizco/mern-boilerplate/tree/master/client/components).


## The Element Component

Under the hood, React Bulma Companion renders every component as an [Element](http://react-bulma-companion.surge.sh/?path=/docs/elements-element--color) component. This gives every component access to all the helper classes that Bulma has to offer. You may also pass a ref to every component through the `domRef` property.
