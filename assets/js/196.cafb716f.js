(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{510:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ansible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Ansible")])]),s._v(" "),a("h3",{attrs:{id:"ansible安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible安装"}},[s._v("#")]),s._v(" Ansible安装")]),s._v(" "),a("p",[s._v("在Redhat8 上安装ansible")]),s._v(" "),a("p",[a("code",[s._v("使用epel-release库")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".使用阿里的镜像源\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ansible ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-8.repo")]),s._v("\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2595")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2595")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13657")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" --:--:-- --:--:-- --:--:-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13586")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 安装epel-release库\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@anasible ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 安装ansible\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@anasible ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y ansible")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 确认安装：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ansible ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ansible --version ")]),s._v("\nansible "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.9")]),s._v(".25\n  config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /etc/ansible/ansible.cfg\n  configured module search path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/root/.ansible/plugins/modules'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/share/ansible/plugins/modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  ansible python module location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/lib/python3.6/site-packages/ansible\n  executable location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/bin/ansible\n  python version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),s._v(".8 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default, Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":45:45"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GCC "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.3")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20191121")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Red Hat "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.3")]),s._v(".1-5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"ansible配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible配置文件"}},[s._v("#")]),s._v(" Ansible配置文件")]),s._v(" "),a("p",[s._v("配置文件")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("/etc/ansible/ansible.cfg")])]),s._v(" 主配置文件,配置ansible工作特性(一般无需修改)")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("/etc/ansible/hosts")])]),s._v("     主机清单(将被管理的主机放到此文件)")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("/etc/ansible/roles/")])]),s._v("    存放角色的目录")]),s._v(" "),a("p",[s._v("程序")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/usr/bin/ansible")]),s._v("      主程序，临时命令执行工具")]),s._v(" "),a("li",[a("code",[s._v("/usr/bin/ansible-doc")]),s._v("    查看配置文档，模块功能查看工具")]),s._v(" "),a("li",[a("code",[s._v("/usr/bin/ansible-galaxy")]),s._v("  下载/上传优秀代码或Roles模块的官网平台")]),s._v(" "),a("li",[a("code",[s._v("/usr/bin/ansible-playbook")]),s._v(" 定制自动化任务，编排剧本工具")]),s._v(" "),a("li",[a("code",[s._v("/usr/bin/ansible-pull")]),s._v("   远程执行命令的工具")]),s._v(" "),a("li",[a("code",[s._v("/usr/bin/ansible-vault")]),s._v("   文件加密工具")]),s._v(" "),a("li",[a("code",[s._v("/usr/bin/ansible-console")]),s._v(" 基于Console界面与用户交互的执行工具")])]),s._v(" "),a("h3",{attrs:{id:"ansible主要配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible主要配置文件"}},[s._v("#")]),s._v(" Ansible主要配置文件")]),s._v(" "),a("ul",[a("li",[s._v("Ansible 配置文件/etc/ansible/ansible.cfg （一般保持默认）")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ansible ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim  /etc/ansible/ansible.cfg  ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#inventory     = /etc/ansible/hosts      # 主机列表配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#library       = /usr/share/my_modules/  # 库文件存放目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#remote_tmp    = $HOME/.ansible/tmp      # 临时py命令文件存放在远程主机目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#local_tmp     = $HOME/.ansible/tmp      # 本机的临时命令执行目录  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#forks         = 5                       # 默认并发数,同时可以执行5次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudo_user     = root                    # 默认sudo 用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ask_sudo_pass = True                    # 每次执行ansible命令是否询问ssh密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ask_pass      = True                    # 每次执行ansible命令是否询问ssh口令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#remote_port   = 22                      # 远程主机的端口号(默认22)")]),s._v("\n\n \n\n建议优化项： \n\nhost_key_checking "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" False               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查对应服务器的host_key，建议取消注释")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/ansible.log           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件,建议取消注释")]),s._v("\nmodule_name   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认模块")]),s._v("\n")])])]),a("h3",{attrs:{id:"ansible主机清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible主机清单"}},[s._v("#")]),s._v(" Ansible主机清单")]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"inventory-主机清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-主机清单"}},[s._v("#")]),s._v(" Inventory 主机清单")])]),s._v(" "),a("li",[a("h4",{attrs:{id:"ansible的主要功用在于批量主机操作-为了便捷地使用其中的部分主机-可以在inventory-file中将其分组命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible的主要功用在于批量主机操作-为了便捷地使用其中的部分主机-可以在inventory-file中将其分组命名"}},[s._v("#")]),s._v(" ansible的主要功用在于批量主机操作，为了便捷地使用其中的部分主机，可以在inventory file中将其分组命名")])]),s._v(" "),a("li",[a("h4",{attrs:{id:"默认的inventory-file为-etc-ansible-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认的inventory-file为-etc-ansible-hosts"}},[s._v("#")]),s._v(" 默认的inventory file为/etc/ansible/hosts")])]),s._v(" "),a("li",[a("h4",{attrs:{id:"inventory-file可以有多个-且也可以通过dynamic-inventory来动态生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-file可以有多个-且也可以通过dynamic-inventory来动态生成"}},[s._v("#")]),s._v(" inventory file可以有多个，且也可以通过Dynamic Inventory来动态生成")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("/etc/ansible/hosts文件格式")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("inventory文件遵循INI文件风格，中括号中的字符为组名。")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("可以将同一个主机同时归并到多个不同的组中；")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("此外，当如若目标主机使用了非默认的SSH端口，还可以在主机名称之后使用冒号加端口号来标明")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("ntp.magedu.com 不分组,直接加")])])])]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("     webservers组\n\n   www1.magedu.com:2222  可以指定端口\n   www2.magedu.com\n\n   \n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbservers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n   db1.magedu.com\n   db2.magedu.com\n   db3.magedu.com\n")])])]),a("p",[s._v("如果主机名称遵循相似的命名模式，还可以使用列表的方式标识各主机")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("   [websrvs]\n\n   www[1:100].example.com   ip: 1-100\n\n\n   [dbsrvs]\n\n   db-[a:f].example.com     dba-dbff\n")])])]),a("h3",{attrs:{id:"ansible使用协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible使用协议"}},[s._v("#")]),s._v(" Ansible使用协议")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("通过ssh协议，实现对远程主机的配置管理，应用部署，任务执行等功能所以，先配置ansible主控端基于密钥认证的方式来联系各个被管理的节点")])]),s._v(" "),a("li",[a("strong",[s._v("例如：利用sshpass批量实现基于key验证")])])]),s._v(" "),a("h3",{attrs:{id:"ansible的免密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible的免密"}},[s._v("#")]),s._v(" Ansible的免密")]),s._v(" "),a("p",[s._v("针对部署少量的服务，可以使用SSH免密的方式让ansible母机可以直接远程操控子机")]),s._v(" "),a("p",[a("strong",[s._v("配置SSH免密")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密钥")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ansible ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-keygen ")]),s._v("\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/root/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nCreated directory "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/root/.ssh'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:YrOLZcZcLd8XaRavKFoT+iA60z0k5S2F0+hAmZH0gC8 root@ansible\nThe key"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s randomart image is:\n+---[RSA 3072]----+\n|     o+=         |\n|    . =o         |\n|     o  .+    .  |\n|    E o =.o    + |\n|     .+=S+o   = .|\n|     +.==+.o + o |\n|     .O+o.= o o  |\n|    o*.oo= o .   |\n|    oo. ...      |\n+----[SHA256]-----+\n\n#授权子机\n[root@ansible ~]# ssh-copy-id 192.168.1.107\n/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: \"/root/.ssh/id_rsa.pub\"\nThe authenticity of host '")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.107 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.107"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' can'")]),s._v("t be established.\nECDSA key fingerprint is SHA256:abAQ3Mvy1GW7gRO1XwIptGILQf2L3G0gJApXVPRFpkE.\nAre you sure you want to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" connecting "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes/no/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fingerprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n/usr/bin/ssh-copy-id: INFO: attempting to log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" with the new key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" remain to be installed -- "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you are prompted now it is to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" the new keys\nroot@192.168.1.107"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s password: \n\nNumber of key(s) added: 1\n\nNow try logging into the machine, with:   \"ssh '")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.107'\"\nand check to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" sure that only the key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" you wanted were added.\n")])])]),a("h3",{attrs:{id:"ansible系列命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible系列命令"}},[s._v("#")]),s._v(" Ansible系列命令")]),s._v(" "),a("p",[a("code",[s._v("Ansible系列命令")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ansible ansible-doc ansible-playbook ansible-vault ansible-console ansible-galaxy ansible-pull\n\n$ ansible-doc: 显示模块帮助\n   ansible-doc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("            显示所有模块的文档\n       -l, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("    列出可用模块\n       -s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--snippet")]),s._v(" 显示指定模块的playbook片段"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("简化版,便于查找语法"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n\n示例：\n   ansible-doc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("      列出所有模块\n   ansible-doc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("    查看指定模块帮助用法\n   ansible-doc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" 查看指定模块帮助用法   \n")])])]),a("p",[a("code",[s._v("ansible通过ssh实现配置管理、应用部署、任务执行等功能，建议配置ansible端能基于密钥认证的方式联系各被管理节点")])]),s._v(" "),a("h3",{attrs:{id:"ansible命令语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible命令语法"}},[s._v("#")]),s._v(" Ansible命令语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ansible "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host-pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-m module_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nansible +被管理的主机"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" +模块  +参数\n\n   "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\t\t\t\t显示版本\n   "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" module\t\t\t\t指定模块，默认为command\n   "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\t    \t\t\t\t详细过程 –vv -vvv更详细\n   --list-hosts\t\t\t\t显示主机列表，可简写 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("\n   -k, --ask-pass     \t\t 提示输入ssh连接密码,默认Key验证\n   -C, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--check")]),s._v("        \t\t 检查，并不执行\n   -T, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("TIMEOUT      执行命令的超时时间,默认10s\n   -u, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("REMOTE_USER     执行远程执行的用户\n   -b, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--become")]),s._v("               代替旧版的sudo切换\n    --become-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("USERNAME    指定sudo的runas用户,默认为root\n   -K, --ask-become-pass      提示输入sudo时的口令\n")])])]),a("h3",{attrs:{id:"ansible的host-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible的host-pattern"}},[s._v("#")]),s._v(" Ansible的Host-pattern")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ansible的Host-pattern\n\n匹配主机的列表\n   All ：表示所有Inventory中的所有主机\n\n       ansible all –m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n\n   * :通配符\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*表示所有主机"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       ansible "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.* "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*srvs"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("       \n\n   或关系 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v("\n\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"websrvs:appsrvs"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n       ansible “192.168.1.10:192.168.1.20” "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n\n   逻辑与 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":&"')]),s._v("\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"websrvs:&dbsrvs"')]),s._v(" –m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("   \n       在websrvs组并且在dbsrvs组中的主机\n\n   逻辑非 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":!"')]),s._v("\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'websrvs:!dbsrvs'")]),s._v(" –m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n       在websrvs组，但不在dbsrvs组中的主机\n       注意：此处为单引号\n\n   综合逻辑\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'websrvs:dbsrvs:&appsrvs:!ftpsrvs'")]),s._v(" –m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n\n   正则表达式\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"websrvs:&dbsrvs"')]),s._v(" –m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n       ansible "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~(web|db).*\\.magedu\\.com"')]),s._v(" –m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n")])])]),a("h3",{attrs:{id:"ansible命令执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible命令执行过程"}},[s._v("#")]),s._v(" Ansible命令执行过程")]),s._v(" "),a("p",[a("code",[s._v("ansible命令执行过程")])]),s._v(" "),a("ol",[a("li",[s._v("加载自己的配置文件 默认/etc/ansible/ansible.cfg")]),s._v(" "),a("li",[s._v("加载自己对应的模块文件，如command")]),s._v(" "),a("li",[s._v("通过ansible将模块或命令生成对应的临时py文件，")]),s._v(" "),a("li",[s._v("并将该文件传输至远程服务器的对应执行用户$HOME/.ansible/tmp/ansible-tmp-数字/XXX.PY文件")]),s._v(" "),a("li",[s._v("给文件+x执行")]),s._v(" "),a("li",[s._v("执行并返回结果")]),s._v(" "),a("li",[s._v("删除临时py文件，sleep 0退出")])]),s._v(" "),a("p",[a("code",[s._v("执行状态：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("绿色")]),s._v("：执行成功并且不需要做改变的操作")]),s._v(" "),a("li",[a("code",[s._v("黄色")]),s._v("：执行成功并且对目标主机做变更")]),s._v(" "),a("li",[a("code",[s._v("红色")]),s._v("：执行失败")])]),s._v(" "),a("h3",{attrs:{id:"ansible使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible使用示例"}},[s._v("#")]),s._v(" Ansible使用示例")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("示例\n   以wang用户执行ping存活检测\n       ansible all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" wang "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v("\n\n   以wang sudo至root执行ping存活检测\n       ansible all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" wang "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v("\n\n   以wang sudo至mage用户执行ping存活检测\n       ansible all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" wang "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" --become-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mage\n\n   以wang sudo至root用户执行ls\n       ansible all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" wang "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls /root'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" --become-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-K")]),s._v("\n\n   ansible ping模块测试连接\n   ansible "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".38.126,192.168.38.127 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" \n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);