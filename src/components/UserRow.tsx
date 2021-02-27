import { VFC } from 'react';
import { User } from '../recoil/atom/users';

type Props = {
  user: User;
};

export const UserRow: VFC<Props> = ({ user }) => {
  return (
    <div className='grid grid-cols-2 gap-x-1 justify-items-center'>
      <div>{user.name}</div>
    </div>
  );
};
