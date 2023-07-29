import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const {
    message, loading, fetched,
  } = useSelector(
    (state) => state.greetings,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMessage());
    }
  }, [dispatch, fetched]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <h1>Home</h1>
      <p>{message}</p>
    </>
  );
};

export default Greeting;
