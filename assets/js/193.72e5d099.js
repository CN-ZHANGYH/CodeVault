(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{507:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"kvm-服务创建虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kvm-服务创建虚拟机"}},[s._v("#")]),s._v(" KVM 服务创建虚拟机")]),s._v(" "),t("h3",{attrs:{id:"掌握要点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#掌握要点"}},[s._v("#")]),s._v(" 掌握要点")]),s._v(" "),t("blockquote",[t("p",[s._v("（1）使用命令安装 KVM 组件。")]),s._v(" "),t("p",[s._v("（2）掌握 NAT 启动脚本的编写和使用。")]),s._v(" "),t("p",[s._v("（3）掌握在 NAT 模式下启动虚拟机。")])]),s._v(" "),t("h3",{attrs:{id:"基础准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础准备"}},[s._v("#")]),s._v(" 基础准备")]),s._v(" "),t("p",[t("strong",[s._v("1.")]),s._v(" 规划节点")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("IP")]),s._v(" 地址")]),s._v(" "),t("th",[s._v("主机名")]),s._v(" "),t("th",[s._v("节点")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("172.168.100.10")]),s._v(" "),t("td",[s._v("localhost")]),s._v(" "),t("td",[s._v("KVM")])])])]),s._v(" "),t("p",[s._v("**2.**使用 YUM 安装 KVM 的主要组件及工具")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install qemu-kvm openssl libvirt -y  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start libvirtd ")]),s._v("\n")])])]),t("p",[s._v("将/usr/libexec/qemu-kvm 链接为/usr/bin/qemu-kvm")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /usr/libexec/qemu-kvm /usr/bin/qemu-kvm ")]),s._v("\n")])])]),t("p",[t("strong",[s._v("3.")]),s._v(" 创建 NAT 模式 "),t("strong",[s._v("KVM")]),s._v(" 虚拟机")]),s._v(" "),t("p",[s._v("将 cirros-0.3.3-x86_64-disk.img 镜像与 qemu-ifup-NAT 脚本文件上传到系统/root 目录下。给脚本赋予执行权限。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls ")]),s._v("\ncirros-0.3.3-x86_64-disk.img  qemu-ifup-NAT \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod +x /root/qemu-ifup-NAT ")]),s._v("\n")])])]),t("p",[s._v("**4.**通过 qemu-kvm 命令启动 KVM 虚拟机。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# qemu-kvm  -m 1024 \\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-drive")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/cirros-0.3.3-x86_64-disk.img,if"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("virtio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-net")]),s._v(" nic,model"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("virtio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-net")]),s._v(" tap,script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/qemu-ifup-NAT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-nographic")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vnc")]),s._v(" :1 \n")])])]),t("p",[s._v("加载完成之后会进入登陆用户界面。")]),s._v(" "),t("p",[s._v("创建虚拟机完成后，cirros 用户登录虚拟机，输入用户名为 cirros，密码为 cubswin:)。然后输入 ip addr list 命令查询 IP 地址，最后输入 route -n 命令查询路由表。示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cirros: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("current")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v(".4 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uptime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  ____               ____  ____\n / __/ __ ____ ____ / __ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ __/\n/ /__ / // __// __// /_/ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___//_//_/  /_/   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("____/___/ \n   http://cirros-cloud.net\n\n\nlogin as "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cirros'")]),s._v(" user. default password: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cubswin:)'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sudo'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root.\nlocalhost login: cirros\nPassword: \n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr list\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16436")]),s._v(" qdisc noqueue \n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n    inet6 ::1/128 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" \n       valid_lft forever preferred_lft forever\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": eth0: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(":54:00:12:34:56 brd ff:ff:ff:ff:ff:ff\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".122.76/24 brd "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".122.255 scope global eth0\n    inet6 fe80::5054:ff:fe12:3456/64 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" \n       valid_lft forever preferred_lft forever\n       \n$ route "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" \nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".122.1   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         UG    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" eth0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".122.0   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0   U     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" eth0\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);