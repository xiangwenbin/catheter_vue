# vue

> vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 目录结构

src 为源文件目录
    images 为图片资源
    css 为css目录
    js 为js目录
        components 为公共vue组件
            index.js 用来注册全局组件js
        pages 为页面入口目录
            app0 为一个单页应用入口
                components 为非公共vue组件
                global.js 全局對象
                main.js 单页应用入口js
                router.js 路由器
                eventBus.js  事件总线 ，用于兄弟组件通信
            app1 为一个单页应用入口

## 约定
js 目录及文件名首字母小写 
vue 组件文件名，根据官方推荐大写的来，一个组件的文件不予过大，超过300行代码，建议拆成多个组件


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
