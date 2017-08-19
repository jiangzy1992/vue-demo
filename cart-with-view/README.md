# cart-with-view

> vue-demo2

## Build Setup

``` bash
cd cart-with-view
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

过程中犯的错误：
# product.vue / product.js
1.import store from './store' 写成 import * as store from './store' vue报$dispatch is not a function 错误，意思是找不到store及其方法
2.判断v-bind:class {active}时候判断条件 == 写成 = 触发mutation错误检查了很久才发现
3.使用bootstrape时候用glyphicon时候图标后的文字需要加个空格会美观很多
4.对mutation的payload和参数结构理解不到位，在product页面传changeStyle()方法时弄了很多错误使用参数结构的用法
# cart.vue / cart.js / actions.js getters.js
1.关于bootstrape的图标与字体对齐，用div包裹span下的图标，然后文字放在图片的span前或者后，最好加一个空格
2.checkbox跟字体的对齐，最简单方法vertical-align: -3px(原理百度了，没找到，不怎么懂，感觉从属性上来说是强制单/复选框下移)
3.总价值计算
#nav.vue
1.购物车总数量角标计算的时候没有报错，但是影响了后续视图的生成
2.
