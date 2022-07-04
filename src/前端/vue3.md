# 1、函数和计算属性的区别主要在于缓存，函数每次调用都会重新计算，计算属性是在属性有变化时进行计算。
在不考虑缓存计算成本的前提下，函数可以取代计算属性
这也同样意味着下面的计算属性将永远不会更新，因为 Date.now () 不是响应式依赖：
```javascript
computed: {
  now() {
    return Date.now()
  }
}
```
Vue 提供了一种更通用的方式来观察和响应当前活动的实例上的数据变动：侦听属性。
老实说，侦听属性和计算属性真的非常类似，有着很高的取代性。
***
# 2、浏览器会将大小转为小写
# 3、
v-bind 绑定动态属性 缩写 :
v-on 绑定触发函数 缩写@
v-once 一次性绑定值
v-model 双向绑定表单
v-html 绑定能解析html代码

# 4、如果你的组件有多个根元素，你需要定义哪些部分将接收这个 class。可以使用 $attrs 组件 property 执行此操作：
```html
<div id="app">
  <my-component class="baz"></my-component>
</div>

const app = Vue.createApp({})

app.component('my-component', {
  template: `
    <p :class="$attrs.class">Hi!</p>
    <span>This is a child component</span>
  `
})
```
# 5、 CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名
```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
# 6、 为什么要加识别码
在标准还未确定时，部分浏览器已经根据最初草案实现了部分功能，为了与之后确定下来的标准进行兼容，所以每种浏览器使用了自己的私有前缀与标准进行区分，当标准确立后，各大浏览器将逐步支持不带前缀的css3新属性。
这种方式在业界上统称：识别码、前缀

//-ms代表【ie】内核识别码
//-moz代表火狐【firefox】内核识别码
//-webkit代表谷歌【chrome】/苹果【safari】内核识别码
//-o代表欧朋【opera】内核识别码

#7、v-show与v-if v-for
v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 display CSS property。
v-if 的元素是真正的会被移除
当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级。

# 8、 v-for可以将of代替in
```javascript
<div v-for="item of items"></div>

<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
```