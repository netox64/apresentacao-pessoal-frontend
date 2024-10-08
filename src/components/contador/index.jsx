import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../redux/slice';

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); 

  return (
    <div>
      <h3 className="text-blue-700">Contador: {count}</h3>
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={() => dispatch(increment())}>Incrementar</button>
      <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700" onClick={() => dispatch(decrement())}>Decrementar</button>
      <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700" onClick={() => dispatch(reset())}>Resetar</button>
    </div>
  );
};
