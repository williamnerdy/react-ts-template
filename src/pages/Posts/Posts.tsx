import React from 'react';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import Post from '../../components/Post';
import Loading from '../../components/Loading';
import { getPosts } from '../../services/posts';
import { QUERY_STATUS } from '../../constants/http';

const PostsPage = () => {
  const { status, data, error } = useQuery('posts', getPosts);

  if (status === QUERY_STATUS.LOADING) {
    return <Loading />;
  }

  if (status === QUERY_STATUS.ERROR) {
    return <div>{error?.message}</div>;
  }

  return (
    <Container>
      {data?.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  );
};

export default PostsPage;
