
import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import { User } from './type';

function App() {
  //@ts-ignore
  const [usersList, setUsersList] = useState<Array>([]);

  const addUserHandler = (props: User) => {
    setUsersList((prevUsersList: {}[]) => [
        ...prevUsersList,
        { username: props.username, age: props.age, id: Math.random().toString() },
      ]);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
    </div>
  ); 
}

export default App;