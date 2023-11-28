(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{354:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker-compose部署redis主从哨兵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose部署redis主从哨兵"}},[t._v("#")]),t._v(" Docker-compose部署Redis主从哨兵")]),t._v(" "),s("h3",{attrs:{id:"_1-主从复制概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制概述"}},[t._v("#")]),t._v(" 1. 主从复制概述")]),t._v(" "),s("p",[t._v("主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)；数据的复制是单向的，只能由主节点到从节点。")]),t._v(" "),s("p",[t._v("默认情况下，每台Redis服务器都是主节点；且一个主节点可以有多个从节点(或没有从节点)，但一个从节点只能有一个主节点。")]),t._v(" "),s("p",[s("strong",[t._v("主从复制的作用")])]),t._v(" "),s("p",[t._v("主从复制的作用主要包括：")]),t._v(" "),s("ol",[s("li",[t._v("数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。")]),t._v(" "),s("li",[t._v("故障恢复：当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复；实际上是一种服务的冗余。")]),t._v(" "),s("li",[t._v("负载均衡：在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务（即写Redis数据时应用连接主节点，读Redis数据时应用连接从节点），分担服务器负载；尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高Redis服务器的并发量。")]),t._v(" "),s("li",[t._v("高可用基石：除了上述作用以外，主从复制还是哨兵和集群能够实施的基础，因此说主从复制是Redis高可用的基础")])]),t._v(" "),s("h3",{attrs:{id:"_2-实验环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实验环境"}},[t._v("#")]),t._v(" 2. 实验环境")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker version")]),t._v("\nClient: Docker Engine - Community\n Version:           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.10")]),t._v(".12\n API version:       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.41")]),t._v("\n Go version:        go1.16.12\n Git commit:        e91ed57\n Built:             Mon Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":45:41 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("\n OS/Arch:           linux/amd64\n Context:           default\n Experimental:      "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\nServer: Docker Engine - Community\n Engine:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.10")]),t._v(".12\n  API version:      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.41")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Go version:       go1.16.12\n  Git commit:       459d0df\n  Built:            Mon Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":44:05 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("\n  OS/Arch:          linux/amd64\n  Experimental:     "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n containerd:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),t._v(".12\n  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d\n runc:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".2\n  GitCommit:        v1.0.2-0-g52b36a2\n docker-init:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.19")]),t._v(".0\n  GitCommit:        de40ad0\n")])])]),s("h3",{attrs:{id:"_3-架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-架构"}},[t._v("#")]),t._v(" 3. 架构")]),t._v(" "),s("p",[t._v("典型的哨兵架构图如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202204111158522.png",alt:"img"}})]),t._v(" "),s("p",[t._v("它由两部分组成，哨兵节点和数据节点：")]),t._v(" "),s("ul",[s("li",[t._v("哨兵节点：哨兵系统由一个或多个哨兵节点组成，哨兵节点是特殊的redis节点，不存储数据。")]),t._v(" "),s("li",[t._v("数据节点：主节点和从节点都是数据节点。")])]),t._v(" "),s("h3",{attrs:{id:"_4-部署主从"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署主从"}},[t._v("#")]),t._v(" 4. 部署主从")]),t._v(" "),s("blockquote",[s("p",[t._v("目的：1个主节点、2个从节点和3个哨兵节点")])]),t._v(" "),s("p",[t._v("⚫创建一个家目录用于存放Redis集群的compose的文件。")]),t._v(" "),s("p",[t._v("⚫注意，如果设置了Redis客户端访问密码"),s("strong",[t._v("requirepass")]),t._v("， 那么也要设置相同的副本集同步密码"),s("strong",[t._v("masterauth")]),t._v("。")]),t._v(" "),s("p",[t._v("⚫另外我们后面使用哨兵模式能够完成故障转移，现有的Master可能会变成Slave，故在当前Master容器中也要携带masterauth参数。")]),t._v(" "),s("p",[t._v("⚫执行"),s("strong",[t._v("docker-compose up -d")]),t._v("会产生3个Redis容器，分别映射到宿主机"),s("strong",[t._v("6380、6381、6382")]),t._v("端口， 默认连接在"),s("strong",[t._v("go-default")]),t._v("网桥。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir -p /home/Docker/docker-compose/redis && cd /home/Docker/docker-compose/redis")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat docker-compose.yaml ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("master\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("requirepass 123456  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("masterauth 123456\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 6380"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 6381"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slaveof redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("master 6379 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("requirepass 123456 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("masterauth 123456\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 6382"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slaveof redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("master 6379 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("requirepass 123456 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("masterauth 123456\n")])])]),s("p",[t._v("运行并且查看当前的docker-compose进程。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-compose up -d ")]),t._v("\nCreating network "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redis_default"')]),t._v(" with the default driver\nCreating redis-slave-2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating redis-slave-1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating redis-master  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-compose ps ")]),t._v("\n    Name                   Command               State                    Ports                  \n-------------------------------------------------------------------------------------------------\nredis-master    docker-entrypoint.sh redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   Up      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:6380-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("/tcp,:::6380-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("/tcp\nredis-slave-1   docker-entrypoint.sh redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   Up      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:6381-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("/tcp,:::6381-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("/tcp\nredis-slave-2   docker-entrypoint.sh redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   Up      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:6382-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("/tcp,:::6382-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("/tcp\n")])])]),s("h3",{attrs:{id:"_5-部署哨兵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-部署哨兵"}},[t._v("#")]),t._v(" 5.部署哨兵")]),t._v(" "),s("p",[t._v("⚫很明显我们即将搭建的Sentinel容器需要能访问到以上3个容器，故需要在形成"),s("strong",[t._v("Sentinel的Dokcer-compose")]),t._v(" 使用外置的"),s("code",[t._v("redis-default")]),t._v("网桥。")]),t._v(" "),s("p",[t._v("⚫创建数据卷，将redis哨兵的需要的配置文件通过"),s("strong",[t._v("数据卷持久化挂载")]),t._v("。")]),t._v(" "),s("p",[t._v("⚫查看当前"),s("strong",[t._v("docker网络")]),t._v("，需要查看当前新增的redis主从是使用的那个网络。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker network ls ")]),t._v("\nNETWORK ID     NAME            DRIVER    SCOPE\nf5cf83b79660   bridge          bridge    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v("\ndc1bc35819ac   go_default      bridge    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里查看的是使用这个")]),t._v("\n7216b238150c   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v("\nd0504c7747a7   none            null      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v("\n")])])]),s("p",[t._v("⚫编写"),s("strong",[t._v("docker-compose")]),t._v("的yaml文件。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pwd")]),t._v("\n/home/Docker/docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose/redis/sentinel\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat docker-compose.yaml ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sentinel1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26379:26379"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sentinel /usr/local/etc/redis/sentinel.conf\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./sentinel1.conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/etc/redis/sentinel.conf\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sentinel2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26380:26379"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sentinel /usr/local/etc/redis/sentinel.conf\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./sentinel2.conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/etc/redis/sentinel.conf\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sentinel3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26381:26379"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sentinel /usr/local/etc/redis/sentinel.conf\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./sentinel3.conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/etc/redis/sentinel.conf\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" go_default\n")])])]),s("p",[t._v("⚫创建哨兵文件，将如下内容拷贝进去。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat  sentinel1.conf ")]),t._v("\nport "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" /tmp\nsentinel monitor mymaster "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.26")]),t._v(".0.4 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("    \nsentinel auth-pass mymaster "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\nsentinel down-after-milliseconds mymaster "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("\nsentinel parallel-syncs mymaster "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsentinel failover-timeout mymaster "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180000")]),t._v("\nsentinel deny-scripts-reconfig "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意，以上 172.26.0.4是之前Redis Master/slave启动之后Master节点的IP，通过"),s("strong",[t._v("docker inspect [containerIP]"),s("strong",[t._v("获取, 这里我们要配合设置")]),t._v("Master/Slave")]),t._v("访问密码。")])]),t._v(" "),s("p",[t._v("⚫复制两份"),s("strong",[t._v("sentinel1.conf")]),t._v("文件，容器挂载需要.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp sentinel1.conf sentinel2.conf ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp sentinel1.conf sentinel3.conf ")]),t._v("\n")])])]),s("p",[t._v("⚫运行并且查看当前的进程。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-compose up -d ")]),t._v("\nCreating redis-sentinel-2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating redis-sentinel-1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating redis-sentinel-3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 sentinel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-compose ps ")]),t._v("\n      Name                    Command               State                          Ports                       \n---------------------------------------------------------------------------------------------------------------\nredis-sentinel-1   docker-entrypoint.sh redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   Up      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:26379-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("/tcp,:::26379-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("/tcp,6379/tcp                                                       \nredis-sentinel-2   docker-entrypoint.sh redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   Up      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:26380-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("/tcp,:::26380-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("/tcp,6379/tcp                                                       \nredis-sentinel-3   docker-entrypoint.sh redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   Up      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:26381-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("/tcp,:::26381-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("/tcp,6379/tcp       \n")])])]),s("h3",{attrs:{id:"_6-验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-验证"}},[t._v("#")]),t._v(" 6.验证")]),t._v(" "),s("p",[t._v("⚫进入"),s("strong",[t._v("redis-master")]),t._v("容器查看主从关系。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@control01 redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it redis-master /bin/bash ")]),t._v("\nroot@58af77dcfefa:/data"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redis-cli -h localhost")]),t._v("\nlocalhost:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" auth "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\nOK\nlocalhost:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" info replication\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replication")]),t._v("\nrole:master\nconnected_slaves:2\nslave0:ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.27")]),t._v(".0.2,port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(",state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("online,offset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("826")]),t._v(",lag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nslave1:ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.27")]),t._v(".0.4,port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(",state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("online,offset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("826")]),t._v(",lag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nmaster_failover_state:no-failover\nmaster_replid:337f0e6d5d9cd7bf50c7b8f08997ea9c5807642b\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:826\nsecond_repl_offset:-1\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:1\nrepl_backlog_histlen:826\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);