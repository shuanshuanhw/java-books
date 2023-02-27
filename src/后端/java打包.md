### 1、手动打包jar 先打包jar，后再添加menifest.mf文件里的主类
先编译class文件，将编译后的Hello.class文件打成jar包<br>
jar -cvf hello.jar Hello.class<br>
c表示要创建一个新的jar包，v表示创建的过程中在控制台输出创建过程的一些信息，f表示给生成的jar包命名

### 2、手动打包jar，打包时指定manifest.mf文件和入口
jar -cvfme shuanshuan.jar huangwei.mf com.shuanshuan.Main com/shuanshuan/*.class<br>
主要是指定e参数，就能指定入口
