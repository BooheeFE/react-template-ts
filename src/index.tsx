/*
 * @Desc:
 * @Autor: cxt
 * @Date: 2021-11-08 08:54:09
 * @LastEditors: cxt
 * @LastEditTime: 2021-11-09 08:52:15
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.querySelector('#root'));

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
