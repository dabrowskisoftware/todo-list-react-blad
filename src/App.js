import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { Container } from "./Container/styled";
import { useTasks } from "./useTasks";

function App() {
  const {
    tasks,
    hideDone,
    toggleHideDone,
    addNewTask,
    removeTask,
    toggleTaskDone,
    markAllDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllDone={markAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
