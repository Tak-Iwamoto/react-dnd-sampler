import { atom } from 'recoil';

export type User = {
  name: string;
  age: number;
};

export type SortableUser = User & { index: number };

const userData: SortableUser[] = [
  { name: 'Tom', age: 20, index: 1 },
  { name: 'Mary', age: 25, index: 2 },
  { name: 'Jun', age: 30, index: 3 },
];

export const usersState = atom({
  key: 'allUsers',
  default: userData,
});
