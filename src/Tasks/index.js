import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <ToggleDoneButton onClick={() => toggleTaskDone(task.idx)}>
          {task.done ? "✓" : ""}
        </ToggleDoneButton>
        <Content done={task.done}>{task.content}</Content>
        <RemoveButton onClick={() => removeTask(task.id)}>🗑</RemoveButton>
      </Item>
    ))}
  </List>
);

export default Tasks;
