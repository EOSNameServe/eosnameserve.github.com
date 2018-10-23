# ens

> ens front page

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

+ 未登录点击 login -> getIdentity -> 显示当前需要绑定的账号，currentAccountName
+ 已登录 -> 点击 logout -> scatter.forgetIdentity()
+ 已登录，点击绑定，校验表单内容，直接 push action
+ 未登录，点击绑定，进行登录 -> getIdentity


  
