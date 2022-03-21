import Card from '../UI/Card';
import classes from './UsersList.module.css';
import { User} from '../../type';

const UsersList = (props: {users: User[] }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: User) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;