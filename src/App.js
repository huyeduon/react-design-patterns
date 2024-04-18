import './App.css';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';

const UserInfoWithLoader = withUser(UserInfo, '234');

const App = () => {
  return (
    <>
      <UserInfoWithLoader />
    </>
  );
};

export default App;
