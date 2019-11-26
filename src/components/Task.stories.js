import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// action() allows us to create a callback that appears in the actions panel of
// the Storybook UI when clicked. So when we build a pin button,
// we’ll be able to determine in the test UI if a button click is successful.
// <Task {...actions}> is equivalent to
// <Task onPinTask={actions.onPinTask} onArchiveTask={actions.onArchiveTask}>.
export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// There are two basic levels of organization in Storybook:
// the component and its child stories.
// Think of each story as a permutation of a component.
// You can have as many stories per component as you need.
// To initiate Storybook we first call the storiesOf()
// function to register the component. We add a display name for the component
// –the name that appears on the sidebar in the Storybook app-.
// To define our stories, we call add() once for each of our test states to generate a story.
// Returns a rendered element (i.e. a component class with a set of props) in a given state
// --exactly like a React Stateless Functional Component
storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
