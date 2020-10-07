import 'bulma/css/bulma.min.css';
import './styles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Elements', 'Components', 'Form', 'Layout', 'Legacy', ['Component Map']],
    },
  },
}
