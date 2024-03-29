### 1、函数和计算属性的区别主要在于缓存，函数每次调用都会重新计算，计算属性是在属性有变化时进行计算。
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
### 2、浏览器会将大小转为小写
### 3、
v-bind 绑定动态属性 缩写 :
v-on 绑定触发函数 缩写@
v-once 一次性绑定值
v-model 双向绑定表单
v-html 绑定能解析html代码

### 4、如果你的组件有多个根元素，你需要定义哪些部分将接收这个 class。可以使用 $attrs 组件 property 执行此操作：
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
### 5、 CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名
```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
### 6、 为什么要加识别码
在标准还未确定时，部分浏览器已经根据最初草案实现了部分功能，为了与之后确定下来的标准进行兼容，所以每种浏览器使用了自己的私有前缀与标准进行区分，当标准确立后，各大浏览器将逐步支持不带前缀的css3新属性。
这种方式在业界上统称：识别码、前缀

//-ms代表【ie】内核识别码
//-moz代表火狐【firefox】内核识别码
//-webkit代表谷歌【chrome】/苹果【safari】内核识别码
//-o代表欧朋【opera】内核识别码

###7、v-show与v-if v-for
v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 display CSS property。
v-if 的元素是真正的会被移除
当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级。

### 8、 v-for可以将of代替in
```javascript
<div v-for="item of items"></div>

<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
```

### 9、v-for应用在数组或对象是不同
应用在数组时，有两个参数 value,index
应用在对象时，有三个参数 value name index name是指对象的key

###  10、当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。
为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一的 key attribute：
```javascript
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

### 11、template是模板占位符，起到div的包裹作用，但是渲染后不会出现在页面上
```html
            <template v-for="(item, index) in list" :key="item.id">
                <div>{{item.text}}--{{index}}</div>
                <span>{{item.text}}</span>
            </template>
```
### 12、@click.prevent函数会阻止触发dom的原始事件，而去执行特定的事件
```html
<!-- 示例 -->
    <a class="img-control" v-show="true" @click.prevent="goXxx()">修改</a>
```
解析：
a标签默认有自己的href属性，触发a标签后他会自动跳转对应的链接地址或执行的函数。
此处为了嵌套，避免调整样式所以引用a标签来处理，但为避免a标签的属性限制，因此引用@click.prevent函数来隔离默认操作

### 13、emits
1- 新建模板的时候，在模板内的代码，使用$emit('remove')
```html
app.component('todo-item', {
  template: `
          <li>
            {{ title }}
            <button v-on:click="$emit('remove')">Remove</button>
          </li>
        `,
  props: ['title'],
  emits: ['remove']
})
```
2- 在父框架使用模板的时候
```html
    <todo-item
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></todo-item>
```
### 14、有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法
```html
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

// ...
methods: {
warn(message, event) {
// 现在可以访问到原生事件
if (event) {
event.preventDefault()
}
alert(message)
}
}

```
### 15、在 HTML DOM 中有两种事件传播的方法：冒泡和捕获
在冒泡中，最内侧元素的事件会首先被处理，然后是更外侧的，在捕获中，最外侧元素的事件会首先被处理，然后是更内侧的
<br />addEventListener(event, function, useCapture);
<br />默认值是 false，将使用冒泡传播，如果该值设置为 true，则事件使用捕获传播。

### 16、事件修饰符
```html
    .stop
    .prevent
    .capture
    .self
    .once
    .passive
```
###17、v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值。
###18、如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符
```html
<input v-model.trim="msg" />
```
###19、创建一个 Vue 组件
```javascript
// 创建一个Vue 应用
const app = Vue.createApp({})

// 定义一个名为 button-counter 的新全局组件
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})

```

###18、浏览器将所有大写字符解释为小写。这意味着当你在 DOM 模板中使用时，驼峰 prop 名称和 event 处理器参数需要使用它们的 kebab-cased (横线字符分隔) 等效值：
```html
app.component('blog-post', {
  props: ['postTitle'],
  template: `
    <h3>{{ postTitle }}</h3>
  `
})

<blog-post post-title="hello!"></blog-post>
```

###19、组件的命名
全部小写<br />
包含连字符 (及：即有多个单词与连字符符号连接)

kebab-case、PascalCase
<br />
当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-component-name> 和 <MyComponentName> 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

###20、通常你希望每个 prop 都有指定的值类型
```javascript
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // 或任何其他构造函数
}
```
###21、爷爷组件传值给孙子组件的一种方法
父组件不用props，直接在调用孙组件时绑定数据，v-bind="$attrs"，在定义孙组件时用props定义参数。

###22、keep-alive是Vue提供的一个抽象组件，主要用于保留组件状态或避免重新渲染。微信小程序是自带缓存的，没有这个问题，这个问题存在h5页面
在返回的时候，可以做到不需要重新渲染，但是并不是所有的组件都需要被缓存，所以要在路由定义那里配置哪些路由需要被路由。
```javascript
1，定义两个出口 router-view
<keep-alive>
    <!-- 需要缓存的视图组件 -->
  <router-view v-if="$route.meta.keepAlive">
  </router-view>
</keep-alive>
​
<!-- 不需要缓存的视图组件 -->
<router-view v-if="!$route.meta.keepAlive">
</router-view>

2，在router配置中定义哪些需要缓存哪些不需要缓存

new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('./views/keep-alive/index.vue')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('./views/keep-alive/list.vue'),
            meta: {
                keepAlive: true //需要被缓存
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('./views/keep-alive/detail.vue')
        }
    ]
})

```

###23、Source Map 就是一个信息文件，里面存储了代码打包转换后的位置信息，实质是一个 json 描述文件，维护了打包前后的代码映射关系。
```javascript
开启 Source Map ：
devtool: "source-map",
如果还没用，就需要在浏览器的开发者工具 -- 设置 中勾选两个选项：1、enable javascript sourcemap 2、enable css sourcemap
```
###24、cross-env处理环境变量
直接在npm命令中带环境变量
```javascript
npm install --save-dev cross-env
{
    "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
}
}
```
也可以在env文件里定义环境变量，但在不同的操作系统下可能产生一些问题