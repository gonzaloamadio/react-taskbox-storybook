import React from "react";
import { storiesOf } from "@storybook/react";

import { PureTaskList } from "./TaskList";
import { task, actions } from "./Task.stories";

export const defaultTasks = [
  { ...task, id: "1", title: "Task 1" },
  { ...task, id: "2", title: "Task 2" },
  { ...task, id: "3", title: "Task 3" },
  { ...task, id: "4", title: "Task 4" },
  { ...task, id: "5", title: "Task 5" },
  { ...task, id: "6", title: "Task 6" }
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
];

// addDecorator() allows us to add some “context” to the rendering of each task.
// In this case we add padding around the list to make it easier to visually verify.
// Decorators are a way to provide arbitrary wrappers to stories.
// In this case we’re using a decorator to add styling. They can also be used to
// wrap stories in “providers” –i.e. library components that set React context.
storiesOf("TaskList", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <PureTaskList tasks={defaultTasks} {...actions} />)
  .add("withPinnedTasks", () => (
    <PureTaskList tasks={withPinnedTasks} {...actions} />
  ))
  .add("loading", () => <PureTaskList loading tasks={[]} {...actions} />)
  .add("empty", () => <PureTaskList tasks={[]} {...actions} />);
