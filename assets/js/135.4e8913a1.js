(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{447:function(a,s,e){"use strict";e.r(s);var t=e(7),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"通过docker安装服务了解容器的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过docker安装服务了解容器的使用"}},[a._v("#")]),a._v(" 通过Docker安装服务了解容器的使用")]),a._v(" "),s("h2",{attrs:{id:"docker安装mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装mysql"}},[a._v("#")]),a._v(" Docker安装Mysql")]),a._v(" "),s("h3",{attrs:{id:"拉取一个mysql镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取一个mysql镜像"}},[a._v("#")]),a._v(" 拉取一个mysql镜像")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull mysql:5.7.32\n")])])]),s("h3",{attrs:{id:"设置mysql的参数指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置mysql的参数指标"}},[a._v("#")]),a._v(" 设置Mysql的参数指标")]),a._v(" "),s("ul",[s("li",[a._v("Mysql服务的端口号为"),s("code",[a._v("3306")])]),a._v(" "),s("li",[a._v("基本的变量为如下：")]),a._v(" "),s("li",[a._v("MYSQL_ROOT_PASSWORD      "),s("code",[a._v("root用户的密码")])]),a._v(" "),s("li",[a._v("MYSQL_DATABASE           "),s("code",[a._v("指定创建数据库")])]),a._v(" "),s("li",[a._v("Mysql的配置文件为         /etc/mysql/conf.d  或者 /etc/mysql/mysql.conf.d")])]),a._v(" "),s("h3",{attrs:{id:"基本启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本启动服务"}},[a._v("#")]),a._v(" 基本启动服务")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("  mysql:5.7.32 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("   给root用户指定密码\n")])])]),s("h3",{attrs:{id:"带参数启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带参数启动"}},[a._v("#")]),a._v(" 带参数启动")]),a._v(" "),s("p",[a._v("启动一个Mysql后台运行 指定root用户密码和开放"),s("code",[a._v("3306")]),a._v("端口号 指定容器名字 "),s("code",[a._v("使用数据卷")]),a._v("将数据持久化到宿主机 以配置文件启动 要更改所有表使用 "),s("code",[a._v("UTF-8")]),a._v("的默认编码和整理:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3307")]),a._v(":3306 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" mysqldata:/var/lib/mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--character-set-server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf8mb4  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" mysqlconfig:/etc/mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nmysql:5.6 \n")])])]),s("h2",{attrs:{id:"docker安装redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装redis"}},[a._v("#")]),a._v(" Docker安装Redis")]),a._v(" "),s("h3",{attrs:{id:"下载redis镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载redis镜像"}},[a._v("#")]),a._v(" 下载redis镜像")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull redis:5.0.10\n")])])]),s("h3",{attrs:{id:"启动reids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动reids"}},[a._v("#")]),a._v(" 启动reids")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v(":6379 redis:5.0.10\n")])])]),s("h3",{attrs:{id:"开启redis持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启redis持久化"}},[a._v("#")]),a._v(" 开启redis持久化")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" redis "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" redis redis-server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--appendonly")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n一旦开启持久化后 持久化生产aof文件会被放入容器的/data中\n")])])]),s("h3",{attrs:{id:"通过连接redis-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过连接redis-cli"}},[a._v("#")]),a._v(" 通过连接redis-cli")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" some-network "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rm")]),a._v(" redis redis-cli "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" some-redis\n")])])]),s("h3",{attrs:{id:"修改配置文件-以配置文件启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件-以配置文件启动"}},[a._v("#")]),a._v(" 修改配置文件 以配置文件启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6380")]),a._v(":6379 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/redis.conf:/usr/local/redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" redis  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nredis:5.0.10 redis-server  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n/usr/local/etc/redis/redis.conf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nredis:5.0.10\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);