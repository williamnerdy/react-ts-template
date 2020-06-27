import api from '../configs/api';

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await api.get('/posts');
  return data;
};
