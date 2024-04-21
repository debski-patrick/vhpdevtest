import { defineStore } from 'pinia';

export interface UserInfo {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  address: string;
  phone: string;
  email: string;
  date: Date;
  usertype: string;
}

export const useUserStore = defineStore('user', () => {
  const userList = reactive<UserInfo[]>([]);

  function createUser(user: any) {
    const currentYear: number = new Date().getFullYear();

    const data: UserInfo = {
      ...user,
      id: userList.length + 1,
      age: currentYear - user.date.getFullYear(),
      date: user.date,
    };
    userList.push(data);
  }

  function updateUser(user: any) {
    const currentYear: number = new Date().getFullYear();

    const data: UserInfo = {
      ...user,
      age: currentYear - user.date.getFullYear(),
    };

    userList.splice(user.id - 1, 1, data);
    console.log(userList);
  }

  function deleteUser(id: number) {
    userList.splice(id - 1, id);
  }

  return { userList, createUser, updateUser, deleteUser };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
