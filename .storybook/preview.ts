import { Preview } from '@storybook/react-webpack5';

import 'bulma/css/bulma.min.css';
import './styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Elements', 'Components', 'Form', 'Layout'],
      },
    },
  }
};

export default preview;
