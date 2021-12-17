/*
 * @Desc:
 * @Autor: cxt
 * @Date: 2021-11-09 08:54:02
 * @LastEditors: cxt
 * @LastEditTime: 2021-11-09 08:54:03
 */
import React from 'react';
import { RootState } from 'src/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from 'src/store/slice/counterSlice';
export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
