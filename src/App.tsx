import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import Task from './types/Task';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const url = `https://${process.env.REACT_APP_FIREBASE_KEY}.firebaseio.com/tasks.json`;

  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj: {
      [key: string | number]: { text: string };
    }) => {
      const loadedTasks = [] as Task[];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks({ url }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;