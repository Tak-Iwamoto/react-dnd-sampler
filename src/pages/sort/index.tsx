import { useSetRecoilState } from 'recoil';
import { Users } from '../../containers/Users';
import { usersState } from '../../recoil/atom/users';

const UserList = () => {
  const setUsers = useSetRecoilState(usersState);
  // const userSelector = selector({
  //   key: 'userSelector',
  //   get: ({ get }) => {
  //     const users = get(usersState);
  //     return users.filter((user) => user.id > 2);
  //   },
  // });
  const changeUsers = () => {
    setUsers((previous) => [
      ...previous,
      {
        id: 2,
        name: 'updated Mary',
      },
    ]);
  };

  const updateUsers = (id: number) => {
    setUsers((previous) => [
      ...previous.map((user) => {
        if (user.id !== id) {
          return user;
        }
        return {
          ...user,
          name: `updated ${id}`,
        };
      }),
    ]);
  };

  return (
    <div className='flex flex-col justify-center'>
      <div>
        <Users />
      </div>
      <div>
        <button
          className='bg-green-300 hover:bg-green-400 w-auto'
          onClick={() => updateUsers(3)}
        >
          change
        </button>
      </div>
    </div>
  );
};

export default UserList;
