(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{420:function(t,a,s){"use strict";s.r(a);var r=s(7),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql概述"}},[t._v("#")]),t._v(" MySQL概述")]),t._v(" "),a("p",[t._v("在这一章节，我们主要介绍两个部分，数据库相关概念及MySQL数据库的介绍、下载、安装、启动及连接。")]),t._v(" "),a("h2",{attrs:{id:"数据库相关概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库相关概念"}},[t._v("#")]),t._v(" 数据库相关概念")]),t._v(" "),a("p",[t._v("在这一部分，我们先来讲解三个概念：数据库、数据库管理系统、SQL。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("名称")])]),t._v(" "),a("th",[a("strong",[t._v("全称")])]),t._v(" "),a("th",[a("strong",[t._v("简称")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("数据库")]),t._v(" "),a("td",[t._v("存储数据的仓库，数据是有组织的进行存储")]),t._v(" "),a("td",[t._v("DataBase（DB）")])]),t._v(" "),a("tr",[a("td",[t._v("数据库管理系统")]),t._v(" "),a("td",[t._v("操纵和管理数据库的大型软件")]),t._v(" "),a("td",[t._v("DataBase  Management  System  (DBMS)")])]),t._v(" "),a("tr",[a("td",[t._v("SQL")]),t._v(" "),a("td",[t._v("操作关系型数据库的编程语言，定义了一套操作关系型数据库统一"),a("strong",[t._v("标准")])]),t._v(" "),a("td",[t._v("Structured  Query  Language  (SQL)")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206111648242.png",alt:"image-20220610001545756"}})]),t._v(" "),a("p",[t._v("而目前主流的关系型数据库管理系统的市场占有率排名如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206100801322.png",alt:"image-20220610001603073"}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SQL Server")]),t._v("：Microsoft 公司推出的收费的中型数据库，C#、.net等语言常用。")]),t._v(" "),a("li",[a("code",[t._v("PostgreSQL")]),t._v("：开源免费的中小型数据库。")]),t._v(" "),a("li",[a("code",[t._v("DB2")]),t._v("：IBM公司的大型收费数据库产品。")]),t._v(" "),a("li",[a("code",[t._v("SQLLite")]),t._v("：嵌入式的微型数据库。Android内置的数据库采用的就是该数据库。")]),t._v(" "),a("li",[a("code",[t._v("MariaDB")]),t._v("：开源免费的中小型数据库。是MySQL数据库的另外一个分支、另外一个衍生产品，与MySQL数据库有很好的兼容性。")])]),t._v(" "),a("p",[t._v("而不论我们使用的是上面的哪一个关系型数据库， 终在操作时，都是使用SQL语言来进行统一操作，因为我们前面讲到SQL语言，是操作关系型数据库的"),a("strong",[t._v("统一标准")]),t._v("。所以即使我们现在学习的是MySQL，假如我们以后到了公司，使用的是别的关系型数据库，如：Oracle、DB2、SQLServer，也完全不用担心，因为操作的方式都是一致的。")]),t._v(" "),a("h2",{attrs:{id:"mysql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库"}},[t._v("#")]),t._v(" MySQL数据库")]),t._v(" "),a("h3",{attrs:{id:"版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206100801358.png",alt:"image-20220610001630768"}}),t._v(" "),a("p",[t._v("官方： "),a("a",{attrs:{href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("https://www.mysql.com/")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("MySQL官方提供了两种不同的版本：")]),t._v(" "),a("blockquote",[a("p",[t._v("社区版本（MySQL Community Server）免费， MySQL不提供任何技术支持")]),t._v(" "),a("p",[t._v("商业版本（MySQL Enterprise Edition）")]),t._v(" "),a("p",[t._v("收费，可以使用30天，官方提供技术支持")])]),t._v(" "),a("p",[t._v("本课程采用的是MySQL新的社区版-MySQL Community Server 8.0.26")]),t._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://downloads.mysql.com/archives/installer/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("https://downloads.mysql.com/archives/installer/")]),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206100801996.png",alt:"image-20220610001702473"}})]),t._v(" "),a("p",[t._v("也可以使用课程资料中提供的MySQL的安装包：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206111649333.png",alt:"image-20220610001710457"}})]),t._v(" "),a("h3",{attrs:{id:"启动停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动停止"}},[t._v("#")]),t._v(" 启动停止")]),t._v(" "),a("p",[t._v("MySQL安装完成之后，在系统启动时，会自动启动MySQL服务，我们无需手动启动了。")]),t._v(" "),a("p",[t._v("当然，也可以手动的通过指令启动停止，以管理员身份运行cmd，进入命令行执行如下指令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("net start mysql80 \nnet stop  mysql80\n")])])]),a("h3",{attrs:{id:"客户端连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端连接"}},[t._v("#")]),t._v(" 客户端连接")]),t._v(" "),a("p",[t._v("1). 方式一：使用MySQL提供的客户端命令行工具")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206100801510.png",alt:"image-20220610001930932"}})]),t._v(" "),a("p",[t._v("2). 方式二：使用系统自带的命令行工具执行指令")]),t._v(" "),a("p",[t._v("[]内为可选参数，如果需要连接远程的MySQL，需要加上这两个参数来指定远程主机IP、端口，如果连接本地的MySQL，则无需指定这两个参数。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mysql  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-P "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n\n参数：\n\t-h: MySQL服务所在的主机IP\n\t-P: MySQL服务端口号，默认3306\n\t-u: MySQL数据库用户名\n\t-p: MySQL数据库用户名对应的密码\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206100801277.png",alt:"image-20220610002212755"}})]),t._v(" "),a("blockquote",[a("p",[t._v("注意： 使用这种方式进行连接时，需要安装完毕后配置PATH环境变量。")])]),t._v(" "),a("h3",{attrs:{id:"数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),a("p",[t._v("1). 关系型数据库（RDBMS）")]),t._v(" "),a("p",[t._v("概念：建立在关系模型基础上，由多张相互连接的二维表组成的数据库。")]),t._v(" "),a("p",[t._v("而所谓二维表，指的是由行和列组成的表，如下图（就类似于Excel表格数据，有表头、有列、有行，还可以通过一列关联另外一个表格中的某一列数据）。我们之前提到的MySQL、Oracle、DB2、")]),t._v(" "),a("p",[t._v("SQLServer这些都是属于关系型数据库，里面都是基于二维表存储数据的。简单说，基于二维表存储数据的数据库就成为关系型数据库，不是基于二维表存储数据的数据库，就是非关系型数据库。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206100801253.png",alt:"image-20220610002228787"}})]),t._v(" "),a("p",[t._v("特点：")]),t._v(" "),a("p",[t._v("A.  使用表存储数据，格式统一，便于维护。")]),t._v(" "),a("p",[t._v("B.  使用SQL语言操作，标准统一，使用方便。")]),t._v(" "),a("p",[t._v("2). 数据模型")]),t._v(" "),a("p",[t._v("MySQL是关系型数据库，是基于二维表进行数据存储的，具体的结构图下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202206100802807.png",alt:"image-20220610002249053"}})]),t._v(" "),a("ul",[a("li",[t._v("我们可以通过MySQL客户端连接数据库管理系统DBMS，然后通过DBMS操作数据库。")]),t._v(" "),a("li",[t._v("可以使用SQL语句，通过数据库管理系统操作数据库，以及操作数据库中的表结构及数据。")]),t._v(" "),a("li",[t._v("一个数据库服务器中可以创建多个数据库，一个数据库中也可以包含多张表，而一张表中又可以包含多行记录。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);