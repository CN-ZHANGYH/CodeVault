(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{435:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx高可用"}},[t._v("#")]),t._v(" Nginx高可用")]),t._v(" "),a("h2",{attrs:{id:"什么是keepalived"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是keepalived"}},[t._v("#")]),t._v(" 什么是Keepalived")]),t._v(" "),a("p",[t._v("Keepalived是一个免费开源的，用C编写的类似于layer3, 4 & 7交换机制软件，具备我们平时说的第3层、第4层和第7层交换机的功能。主要提供loadbalancing（负载均衡）和 high-availability（高可用）功能，负载均衡实现需要依赖Linux的虚拟服务内核模块（ipvs），而高可用是通过VRRP协议实现多台机器之间的故障转移服务。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181114103932859.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTM5MjUx,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),a("p",[t._v("上图是Keepalived的功能体系结构，大致分两层：用户空间（user space）和内核空间（kernel space）。")]),t._v(" "),a("h2",{attrs:{id:"keepalived特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived特点"}},[t._v("#")]),t._v(" Keepalived特点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("**"),a("code",[t._v("内核空间：")]),t._v("**主要包括IPVS（IP虚拟服务器，用于实现网络服务的负载均衡）和NETLINK（提供高级路由及其他相关的网络功能）两个部份。")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("用户空间：")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("WatchDog：负载监控checkers和VRRP进程的状况")])]),t._v(" "),a("li",[a("p",[t._v("VRRP Stack：负载负载均衡器之间的失败切换FailOver，如果只用一个负载均稀器，则VRRP不是必须的。")])]),t._v(" "),a("li",[a("p",[t._v("Checkers：负责真实服务器的健康检查healthchecking，是keepalived最主要的功能。换言之，可以没有VRRP Stack，但健康检查healthchecking是一定要有的。")])]),t._v(" "),a("li",[a("p",[t._v("IPVS wrapper：用户发送设定的规则到内核ipvs代码")])]),t._v(" "),a("li",[a("p",[t._v("Netlink Reflector：用来设定vrrp的vip地址等。")])]),t._v(" "),a("li",[a("p",[t._v("Keepalived的所有功能是配置keepalived.conf文件来实现的。")])])])])]),t._v(" "),a("h2",{attrs:{id:"keepalived实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived实现"}},[t._v("#")]),t._v(" Keepalived实现")]),t._v(" "),a("ul",[a("li",[t._v("需要两台nginx服务器")]),t._v(" "),a("li",[t._v("需要keepalived")]),t._v(" "),a("li",[t._v("需要虚拟IP")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/02/50cf6d99b1d04309.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"配置高可用准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置高可用准备工作"}},[t._v("#")]),t._v(" 配置高可用准备工作")]),t._v(" "),a("ul",[a("li",[t._v("需要两台服务器192.168.0.136和192.168.0.137")]),t._v(" "),a("li",[t._v("在两台服务器安装nginx")]),t._v(" "),a("li",[t._v("在两台服务器安装keepalived")])]),t._v(" "),a("h3",{attrs:{id:"_1、两台服务器安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、两台服务器安装nginx"}},[t._v("#")]),t._v(" 1、两台服务器安装nginx")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@apache ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@apache ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yum install -y  nginx")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2、两台服务器安装keepalived"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、两台服务器安装keepalived"}},[t._v("#")]),t._v(" 2、两台服务器安装Keepalived")]),t._v(" "),a("p",[t._v("安装之后，在etc/里面生成目录keepalived，有文件keepalived.conf")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yum install -y keepalived")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx2 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yum install -y keepalived")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /etc/keepalived/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx1 keepalived"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll")]),t._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3598")]),t._v(" Oct  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" keepalived.conf    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#基本的配置都是这这里完成")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2、配置keepalived"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置keepalived"}},[t._v("#")]),t._v(" 2、配置Keepalived")]),t._v(" "),a("p",[t._v("keepalived的配置文件详解，配置成如下配置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx1 keepalived"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "127.0.0.1 LVS_DEVEL" >> /etc/hosts ')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx2 keepalived"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "127.0.0.1 LVS_DEVEL" >> /etc/hosts ')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx1 keepalived"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat keepalived.conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Configuration File "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" keepalived\n\t\nglobal_defs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局模块")]),t._v("\n   notification_email "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     acassen@firewall.loc\n     failover@firewall.loc\n     sysadmin@firewall.loc\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   notification_email_from Alexandre.Cassen@firewall.loc\n   smtp_server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".200.1\n   smtp_connect_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n   router_id LVS_DEVELBACK  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问到主机")]),t._v("\n   vrrp_skip_check_adv_addr\n   vrrp_garp_interval "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n   vrrp_gna_interval "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvrrp_script chk_http_port "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行脚本")]),t._v("\n\tscript "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/nginx_check.sh"')]),t._v("   \n    interval "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检测脚本执行的间隔")]),t._v("\n    weight "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvrrp_instance VI_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state MASTER        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 备份服务器上将MASTER修改成BACKUP")]),t._v("\n    interface eth0\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定网卡名称")]),t._v("\n    virtual_router_id "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主备机的virtual_router_id必须相同")]),t._v("\n    priority "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主备机取值不同的优先级，主机值比较大，备份值比较小")]),t._v("\n    advert_int "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    authentication "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        auth_type PASS\n        auth_pass "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    track_script "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chk_http_port\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    virtual_ipaddress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟IP地址")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.119\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3、编写执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、编写执行脚本"}},[t._v("#")]),t._v(" 3、编写执行脚本")]),t._v(" "),a("p",[t._v("该脚本是存放在opt下面的")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx1 opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat nginx_check.sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" nginx - no-header "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        systemctl start nginx\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" nginx --no-header "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("killall")]),t._v(" keepalived\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4、启动测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动测试"}},[t._v("#")]),t._v(" 4、启动测试")]),t._v(" "),a("p",[t._v("重启服务之后通过访问192.168.0.119的虚拟ip")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl restart keepalived")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nginx2 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl restart keepalived")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/02/cdb72fb92d1f65cf.png",alt:""}})])])}),[],!1,null,null,null);a.default=n.exports}}]);