/*
 * @Desc:
 * @Autor: cxt
 * @Date: 2021-11-08 08:54:09
 * @LastEditors: cxt
 * @LastEditTime: 2021-11-09 18:51:36
 */
import React from 'react';

interface ITestProps {
  name: string;
  age: number;
}

const Test: React.FC<ITestProps> = ({ name, age }) => (
  <div>
    I am{name}, {age}!!!
  </div>
);

export default Test;
