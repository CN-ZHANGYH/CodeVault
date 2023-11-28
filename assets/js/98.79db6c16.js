(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{412:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springboot-日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-日志"}},[t._v("#")]),t._v(" SpringBoot 日志")]),t._v(" "),s("p",[t._v("日志其实就是记录程序日常运行的信息，主要作用如下：")]),t._v(" "),s("ul",[s("li",[t._v("编程期调试代码")]),t._v(" "),s("li",[t._v("运营期记录信息")]),t._v(" "),s("li",[t._v("记录日常运营重要信息（峰值流量、平均响应时长……）")]),t._v(" "),s("li",[t._v("记录应用报错信息（错误堆栈）")]),t._v(" "),s("li",[t._v("记录运维过程数据（扩容、宕机、报警……）")])]),t._v(" "),s("p",[t._v("​")]),t._v(" "),s("h2",{attrs:{id:"日志的基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志的基本使用"}},[t._v("#")]),t._v(" 日志的基本使用")]),t._v(" "),s("h3",{attrs:{id:"_1-代码中使用日志工具记录日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码中使用日志工具记录日志"}},[t._v("#")]),t._v(" 1.代码中使用日志工具记录日志")]),t._v(" "),s("p",[t._v("​\t\t日志的使用格式非常固定，直接上操作步骤：")]),t._v(" "),s("p",[s("strong",[t._v("步骤①")]),t._v("：添加日志记录操作")]),t._v(" "),s("div",{staticClass:"language-JAVA extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/books"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warn..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"springboot is running...2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上述代码中log对象就是用来记录日志的对象，下面的log.debug，log.info这些操作就是写日志的API了。")]),t._v(" "),s("p",[s("strong",[t._v("步骤②")]),t._v("：设置日志输出级别")]),t._v(" "),s("p",[t._v("​\t\t日志设置好以后可以根据设置选择哪些参与记录。这里是根据日志的级别来设置的。日志的级别分为6种，分别是：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("TRACE")]),t._v("：运行堆栈信息，使用率低")]),t._v(" "),s("li",[s("code",[t._v("DEBUG")]),t._v("：程序员调试代码使用")]),t._v(" "),s("li",[s("code",[t._v("INFO")]),t._v("：记录运维过程数据")]),t._v(" "),s("li",[s("code",[t._v("WARN")]),t._v("：记录运维过程报警数据")]),t._v(" "),s("li",[s("code",[t._v("ERROR")]),t._v("：记录错误堆栈信息")]),t._v(" "),s("li",[s("code",[t._v("FATAL")]),t._v("：灾难信息，合并计入ERROR")])]),t._v(" "),s("p",[t._v("一般情况下，开发时候使用DEBUG，上线后使用INFO，运维信息记录使用WARN即可。下面就设置一下日志级别：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启debug模式，输出调试信息，常用于检查系统运行状况")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("这么设置太简单粗暴了，日志系统通常都提供了细粒度的控制")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启debug模式，输出调试信息，常用于检查系统运行状况")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置日志级别，root表示根节点，即整体应用日志级别")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n")])])]),s("p",[t._v("还可以再设置更细粒度的控制")]),t._v(" "),s("p",[s("strong",[t._v("步骤③")]),t._v("：设置日志组，控制指定包对应的日志输出级别，也可以直接控制指定包对应的日志输出级别")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置日志组")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义组名，设置当前组中所包含的包")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ebank")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.itheima.controller\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" warn\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为对应组设置日志级别")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ebank")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n    \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为对包设置日志级别")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("com.itheima.controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n")])])]),s("p",[t._v("说白了就是总体设置一下，每个包设置一下，如果感觉设置的麻烦，就先把包分个组，对组设置，没了，就这些。")]),t._v(" "),s("p",[s("strong",[t._v("总结")])]),t._v(" "),s("ol",[s("li",[t._v("日志用于记录开发调试与运维过程消息")]),t._v(" "),s("li",[t._v("日志的级别共6种，通常使用4种即可，分别是DEBUG，INFO,WARN,ERROR")]),t._v(" "),s("li",[t._v("可以通过日志组或代码包的形式进行日志显示级别的控制")])]),t._v(" "),s("h3",{attrs:{id:"_2-优化日志对象创建代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-优化日志对象创建代码"}},[t._v("#")]),t._v(" 2.优化日志对象创建代码")]),t._v(" "),s("p",[t._v("写代码的时候每个类都要写创建日志记录对象，这个可以优化一下，使用前面用过的lombok技术给我们提供的工具类即可。")]),t._v(" "),s("div",{staticClass:"language-JAVA extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/books"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这一句可以不写了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("导入lombok后使用注解搞定，日志对象名为log")]),t._v(" "),s("div",{staticClass:"language-JAVA extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个注解替代了下面那一行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/books"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这一句可以不写了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("总结")])]),t._v(" "),s("ol",[s("li",[t._v("基于lombok提供的"),s("code",[t._v("@Slf4j")]),t._v("注解为类快速添加日志对象")])]),t._v(" "),s("h3",{attrs:{id:"_3-日志输出格式控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-日志输出格式控制"}},[t._v("#")]),t._v(" 3.日志输出格式控制")]),t._v(" "),s("p",[t._v("日志已经能够记录了，但是目前记录的格式是SpringBoot给我们提供的，如果想自定义控制就需要自己设置了。先分析一下当前日志的记录格式。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/image-20211206123431222.png",alt:"image-20211206123431222"}})]),t._v(" "),s("p",[t._v("​\t\t对于单条日志信息来说，日期，触发位置，记录信息是最核心的信息。级别用于做筛选过滤，PID与线程名用于做精准分析。了解这些信息后就可以DIY日志格式了。本课程不做详细的研究，有兴趣的小伙伴可以学习相关的知识。下面给出课程中模拟的官方日志模板的书写格式，便于大家学习。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d %clr(%p) --- [%16t] %clr(%-40.40c){cyan} : %m %n"')]),t._v("\n")])])]),s("p",[s("strong",[t._v("总结")])]),t._v(" "),s("ol",[s("li",[t._v("日志输出格式设置规则")])]),t._v(" "),s("h3",{attrs:{id:"_4-日志文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-日志文件"}},[t._v("#")]),t._v(" 4.日志文件")]),t._v(" "),s("p",[t._v("日志信息显示，记录已经控制住了，下面就要说一下日志的转存了。日志不能仅显示在控制台上，要把日志记录到文件中，方便后期维护查阅。")]),t._v(" "),s("p",[t._v("对于日志文件的使用存在各种各样的策略，例如每日记录，分类记录，报警后记录等。这里主要研究日志文件如何记录。")]),t._v(" "),s("p",[t._v("记录日志到文件中格式非常简单，设置日志文件名即可。")]),t._v(" "),s("div",{staticClass:"language-YAML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.log\n")])])]),s("p",[t._v("虽然使用上述格式可以将日志记录下来了，但是面对线上的复杂情况，一个文件记录肯定是不能够满足运维要求的，通常会每天记录日志文件，同时为了便于维护，还要限制每个日志文件的大小。下面给出日志文件的常用配置方式：")]),t._v(" "),s("div",{staticClass:"language-YAML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rollingpolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        \t"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-file-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3KB\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file-name-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.%d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("yyyy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("MM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".%i.log\n")])])]),s("p",[t._v("以上格式是基于logback日志技术设置每日日志文件的设置格式，要求容量到达3KB以后就转存信息到第二个文件中。文件命名规则中的"),s("code",[t._v("%d")]),t._v("标识日期，%i是一个递增变量，用于区分日志文件。")]),t._v(" "),s("p",[s("strong",[t._v("总结")])]),t._v(" "),s("ol",[s("li",[t._v("日志记录到文件")]),t._v(" "),s("li",[t._v("日志文件格式设置")])])])}),[],!1,null,null,null);s.default=e.exports}}]);