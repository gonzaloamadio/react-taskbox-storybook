import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';

// automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);
// configure(require.context('../src/', true, /\.stories\.js$/), module);

// With this one, I thin you have to also have the Module.js file
//
// const req = require.context('../src', true, /\.stories.js$/);
const req = requireContext('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
