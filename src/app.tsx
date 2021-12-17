/*
 * @Desc:
 * @Autor: cxt
 * @Date: 2021-11-08 10:31:11
 * @LastEditors: cxt
 * @LastEditTime: 2021-11-09 18:49:34
 */
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import Router from './router';

// TODO: 配置http请求工具
// TODO: 增加相关基建工程化配置的说明
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading。...。</div>}>
          <Router />
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
