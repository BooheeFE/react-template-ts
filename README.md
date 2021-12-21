# H5-template

使用 webpack5 react17 typescript 创建基础 H5 框架

node 版本必须大于等于 14.18.0

添加了 @commitlint/cli 规范化 eslint stylelint prettier 代码规范化
通过 husky 触发 git commit 钩子 对代码以及 commit msg 进行规范化校验

## CICD 配置文件还是自己加就好，就没有放在模板里

## 通过 postcss-px-to-viewport 插件实现 px 转 vw

https://github.com/evrone/postcss-px-to-viewport

## webpack5 的使用方法 webpack-dev-server 的配置就去 webpack api 中找

https://webpack.docschina.org/concepts/

## @reduxjs/toolkit 的使用方法

https://www.jianshu.com/p/3f4e6fef4d89
https://redux-toolkit.js.org/api/configureStore

## react-router v6 的使用方法

[v5 - v6 迁移指南](https://blog.csdn.net/weixin_40906515/article/details/104957712)
https://reactrouter.com/docs/en/v6

## ts 中文教程

https://jkchao.github.io/typescript-book-chinese/

#### about `context.getPhysicalFilename is not a function`

https://charles-stover.medium.com/resolving-prettier-react-context-getphysicalfilename-is-not-a-function-52a250f68291

```linux
  yarn analyzer 展示包体积
  yarn prettier-format 根据配置格式化全局文件
  yarn lint 对代码使用eslint进行lint
```

##### 项目中使用 @babel/preset-typescript 没有使用 ts-loader 的原因是 经过实际编译考察 项目为业务逻辑相关 使用 @babel/preset-typescript 配置简单打包速度较快 不需要再去配置 ts-loader 的东西增加心智负担
