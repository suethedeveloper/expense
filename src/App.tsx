
import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
// import { User } from './type';

function App() {
  const [usersList, setUsersList] = useState<any>([]);
  const addUserHandler = (username: string, age: number) => {
    setUsersList((prevUsersList: {}[]) => [
        ...prevUsersList,
        { username, age, id: Math.random().toString() },
      ]);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      { usersList.length && <UsersList users={usersList} />}
    </div>
  ); 
}

export default App;