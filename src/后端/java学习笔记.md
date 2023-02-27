1、五个jdk的基本注解，都在java.lang包下：@Override @Deprecated @SuppressWarnings @SafeVarargs @FunctionalInterface
其中@SafeVarargs 好像要求方法需要声明final类型
2、五个jdk的用来注解其他注解的注解，都在java.lang.annotation包下，@Retention @Target @Documented @Inherited @Repeatable
3、interface想要定义有方法体的方法，需要声明为default，但是这样一来，interface和虚拟类就没什么区别了
4、注解分两类：标记注解 元数据注解 
元数据注解是指有包含成员变量的注解。

5、java8中为ElementType新增了两个枚举值：TYPE_PARAMETER和TYPE_USE。对应的含义：
TYPE_PARAMETER表示该注解能使用在自定义类型参数 class  MyClass<@myAnno String>{}
TYPE_USE表示该注解能使用在使用类型的任意语句
创建实例时使用MyClass<String> aClass = new @myAnnoUse MyClass<>();
类型强转时使用String str = (@myAnnoUse String) o;
方法形参中使用public String getUser(@myAnnoUse String  name, Integer age)
泛型中使用public String getClasses(List<@myAnnoUse User> list)

6、mysql两个ui工具 SQLLyog MySQLAdministrator 