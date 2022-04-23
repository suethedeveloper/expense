import Section from '../UI/Section';
import TaskForm from './TaskForm';
import Task from '../../types/Task';
import useHttp from '../../hooks/use-http';

const NewTask = (props: {onAddTask: (task: Task) => void}) => {
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();
  
  const createTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask: Task = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText: string) => {
    const url = `https://${process.env.REACT_APP_FIREBASE_KEY}.firebaseio.com/tasks.json`;
    sendTaskRequest({
      url,
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    }, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
