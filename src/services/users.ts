import api from '../configs/api';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get('/users');
  return data;
};
