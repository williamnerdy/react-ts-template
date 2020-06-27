import React from 'react';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import User from '../../components/User';
import Loading from '../../components/Loading';
import { getUsers } from '../../services/users';
import { QUERY_STATUS } from '../../constants/http';

const HomePage = () => {
  const { status, data, error } = useQuery('users', getUsers);

  if (status === QUERY_STATUS.LOADING) {
    return <Loading />;
  }

  if (status === QUERY_STATUS.ERROR) {
    return <div>{error?.message}</div>;
  }

  return (
    <Container>
      {data?.map((user) => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}
    </Container>
  );
};

export default HomePage;
