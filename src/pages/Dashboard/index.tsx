/*
 * @Desc:
 * @Autor: cxt
 * @Date: 2021-11-08 08:54:09
 * @LastEditors: cxt
 * @LastEditTime: 2021-11-09 08:55:50
 */
import React from 'react';
import { Counter } from 'components/Counter';
import s from './index.scss';
const Dashboard = () => {
  return (
    <>
      <div className={s.content}> 1</div>
      <Counter />
    </>
  );
};
export default Dashboard;
