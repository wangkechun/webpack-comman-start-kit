# webpack-comman-start-kit [![Build Status](https://travis-ci.org/wangkechun/webpack-comman-start-kit.svg?branch=master)](https://travis-ci.org/wangkechun/webpack-comman-start-kit)


# 开始
```
npm i 
npm run build-common  
npm start
open http://localhost:3000

```


# 目录结构
build 

# 特性
- 预打包第三方模块，大大提高webpack热重载速度，控制在300ms以内。
- 包含两个示例应用：hello(纯react应用示例)，hello-redux(redux应用示例)
- react-jade支持

# 常用

```
Lifecycle scripts included in app:
  start # 启动开发服务器
    node server.js
  test # 运行单元测试
    ava

available via `npm run-script`:
  release # 生产模式编译应用代码
    NODE_ENV=production webpack
  build # 编译应用代码
    NODE_ENV=development webpack
  clear 

  build-common # 编译第三方库代码
    cd common && NODE_ENV=development webpack --config ./webpack.config.js
  release-common # 生产模式编译第三方库代码
    cd common && NODE_ENV=production webpack --config ./webpack.config.js
  testwatch # 自动运行单元测试
    ava --watch
```

