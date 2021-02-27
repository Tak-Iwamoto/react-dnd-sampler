import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { UserRow } from '../components/UserRow';
import { usersState } from '../recoil/atom/users';

export const Users: VFC = () => {
  const users = useRecoilValue(usersState);
  return (
    <div>
      {users.map((user) => (
        <UserRow user={user} />
      ))}
    </div>
  );
};
