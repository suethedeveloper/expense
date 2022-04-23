import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import Task from './types/Task';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  //@ts-ignore
  const fetchTasks = async (taskText?:string) => {
    
    setIsLoading(true);
    setError('');
    const url = `https://${process.env.REACT_APP_FIREBASE_KEY}.firebaseio.com/tasks.json`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks:Task[] = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong!');
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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