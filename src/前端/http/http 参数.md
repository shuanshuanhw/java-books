### 1、Accept属于http请求头，用以描述客户端能够处理的媒体格式，根据顺序和q值，告诉服务器自己优先希望返回什么媒体格式
```javascript
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
```
### 2、Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。
```javascript
Content-Type: text/html;charset=UTF-8
```
### 3、Accept-Encoding 是浏览器发给服务器,声明浏览器支持的编码类型的
```javascript
Accept-Encoding: gzip, deflate, br
```
### 4、Content-Encoding 说明服务端选定的编码信息，浏览器在拿到响应正文后，依据Content-Encoding进行解压。
服务端也可以返回未压缩的正文，但这种情况不允许返回Content-Encoding

### 5、Accept-Language 表示浏览器所支持的语言。
```javascript
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
```
### 6、Cache-Control 缓存策略 类似功能的 优先级，Pragma -> Cache-Control -> Expires
在springboot配置 spring.resources.cache.cachecontrol.max-age=36000，会影响静态资源，但是不影响ico图标
在springboot配置过滤器，设置cachecontrol时间，会对网页和ico图标请求有作用，但不影响静态资源
但是，无论网页请求有没设置缓存，似乎每次都会发起重新请求
Cache-Control放在请求头，应该是向服务器要求提供符合缓存策略的资源

老实说，我感觉缓存全关了就完了，有点麻烦
### 7、Connection HTTP持久连接允许在事务处理结束之后将TCP连接保持在打开状态，以便为未来的HTTP请求重用现存的连接。在事务处理结束之后仍然保持在打开状态的TCP连接被称为持久连接。
1- Connection: keep-alive , 开启HTTP持久连接，HTTP 1.1默认值
2- Connection: close , 关闭HTTP持久连接，HTTP 1.0默认值
Keep-Alive应该是在启用Keep-Alive的情况下，才有作用的参数，在请求头和响应头都有存在。

### 8、Cookie 每次向服务器提交请求，都会将客户端Cookie池里的键值对全都带上
### 9、host http1.0是没有host字段的，http1.1在http1.0的基础之上增加了TCP长连接之外，还增加了更多的请求头和响应头来改进和扩充http1.0的功能，其中包括在请求头增加host字段。
host可以为空值，但不能缺失，host主要用来处理相同ip地址相同端口里映射到不同文件夹出来的不同虚拟主机，用域名去对应。
### 10、User-Agent 中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等。
### 11、Referer 请求的来源，主要用于判断是不是同个网站发起的请求，防止CSRF安全问题。这个字段是可选的。客户端发送请求的时候，自主决定是否加上该字段。
用户在地址栏输入网址，或者选中浏览器书签，就不发送Referer字段。
主要是以下三种场景，会发送Referer字段。
（1）用户点击网页上的链接。
（2）用户发送表单。
（3）网页加载静态资源，比如加载图片、脚本、样式。

### 12、Transfer-Encoding