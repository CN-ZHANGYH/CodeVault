(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{440:function(t,s,a){"use strict";a.r(s);var e=a(7),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"service-mesh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh"}},[t._v("#")]),t._v(" Service Mesh")]),t._v(" "),s("h2",{attrs:{id:"概念篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念篇"}},[t._v("#")]),t._v(" 概念篇")]),t._v(" "),s("ul",[s("li",[t._v("Service Mesh产生的原因")]),t._v(" "),s("li",[t._v("Service Mesh的演讲过程")]),t._v(" "),s("li",[t._v("Service Mesh的核心功能")])]),t._v(" "),s("h2",{attrs:{id:"service-mesh的起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh的起源"}},[t._v("#")]),t._v(" Service Mesh的起源")]),t._v(" "),s("h3",{attrs:{id:"为什么会出现service-mesh技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现service-mesh技术"}},[t._v("#")]),t._v(" 为什么会出现Service Mesh技术？")]),t._v(" "),s("p",[t._v("因为现有的微服务存在着一些问题，具体有哪些问题，期中有两个特性非常重要：")]),t._v(" "),s("p",[s("code",[t._v("微服务架构的特性")])]),t._v(" "),s("ul",[s("li",[t._v("特点1： 围绕业务构建团队")]),t._v(" "),s("li",[t._v("特点2： 去中心化的数据管理")])]),t._v(" "),s("p",[s("code",[t._v("微服务架构的优势")])]),t._v(" "),s("ul",[s("li",[t._v("团队层面： 内聚，独立开发业务，没有依赖")]),t._v(" "),s("li",[t._v("产品层面： 服务批次独立，独立部署，没有依赖")])]),t._v(" "),s("h3",{attrs:{id:"为什么网络通信是微服务架构痛点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么网络通信是微服务架构痛点"}},[t._v("#")]),t._v(" 为什么网络通信是微服务架构痛点？")]),t._v(" "),s("p",[t._v("分布式计算的8个谬论（Fallacies of Distributed Computing Explained）")]),t._v(" "),s("ul",[s("li",[t._v("网络是可靠的 网络延迟是0")]),t._v(" "),s("li",[t._v("宽带是无限的 网络是安全的")]),t._v(" "),s("li",[t._v("网络拓扑从不改变 只有一个管理员")]),t._v(" "),s("li",[t._v("传输成本是0 网络是同构的")])]),t._v(" "),s("h3",{attrs:{id:"如何管理和控制服务间通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何管理和控制服务间通信"}},[t._v("#")]),t._v(" 如何管理和控制服务间通信？")]),t._v(" "),s("ul",[s("li",[t._v("服务注册/发现")]),t._v(" "),s("li",[t._v("路由,流量转移")]),t._v(" "),s("li",[t._v("弹性能力（熔断，超时，重试）")]),t._v(" "),s("li",[t._v("安全")]),t._v(" "),s("li",[t._v("可观察性")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("以上的功能所有组在一起，就是我们所说的service mesh")])])]),t._v(" "),s("h2",{attrs:{id:"service-mesh的发展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh的发展"}},[t._v("#")]),t._v(" Service Mesh的发展")]),t._v(" "),s("p",[t._v("第一阶段：控制逻辑和业务逻辑耦合")]),t._v(" "),s("p",[t._v("第二阶段：公共库")]),t._v(" "),s("p",[t._v("第三阶段：代理")]),t._v(" "),s("p",[t._v("第四阶段：边车模式（Sidecar）")]),t._v(" "),s("p",[t._v("第五阶段: Service Mesh的出现")]),t._v(" "),s("p",[t._v("Service Mesh演进总结：")]),t._v(" "),s("p",[s("code",[t._v("逻辑耦合")]),t._v(" > "),s("code",[t._v("公共库")]),t._v(" > "),s("code",[t._v("代理")]),t._v(" > "),s("code",[t._v("Sidecar")]),t._v(" > "),s("code",[t._v("Service Mesh")]),t._v(" > "),s("code",[t._v("Service MeshV2")])]),t._v(" "),s("h2",{attrs:{id:"什么是service-mesh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是service-mesh"}},[t._v("#")]),t._v(" 什么是Service Mesh？")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("一言以蔽之：Service Mesh 是微服务时代的 TCP/IP 协议。")])])]),t._v(" "),s("ul",[s("li",[t._v("微服务 (Microservices) 是一种软件架构风格，它是以专注于单一责任与功能的小型功能区块 (Small Building Blocks) 为基础，利用模块化的方式组合出复杂的大型"),s("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A61901608%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用程序"),s("OutboundLink")],1),t._v("，各功能区块使用与"),s("strong",[t._v("语言无关")]),t._v(" (Language-Independent/Language agnostic) 的 API 集相互通信。")]),t._v(" "),s("li",[t._v("目前业界跟微服务相关的开发平台和框架更是不胜枚举：Spring Cloud， Service Fabric，Linkerd，Envoy，Istio ...")])]),t._v(" "),s("h3",{attrs:{id:"service-mesh的主要功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh的主要功能"}},[t._v("#")]),t._v(" Service Mesh的主要功能")]),t._v(" "),s("h4",{attrs:{id:"_1-流量控制🚀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-流量控制🚀"}},[t._v("#")]),t._v(" "),s("code",[t._v("1.流量控制🚀")])]),t._v(" "),s("ul",[s("li",[t._v("路由，流量转移")]),t._v(" "),s("li",[t._v("超时重试，熔断")]),t._v(" "),s("li",[t._v("故障注入，流量镜像")])]),t._v(" "),s("h4",{attrs:{id:"_2-策略🚀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-策略🚀"}},[t._v("#")]),t._v(" "),s("code",[t._v("2.策略🚀")])]),t._v(" "),s("ul",[s("li",[t._v("流量限制")]),t._v(" "),s("li",[t._v("黑白名单")])]),t._v(" "),s("h4",{attrs:{id:"_3-网络安全🚀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络安全🚀"}},[t._v("#")]),t._v(" "),s("code",[t._v("3.网络安全🚀")])]),t._v(" "),s("ul",[s("li",[t._v("授权以及身份认证")])]),t._v(" "),s("h4",{attrs:{id:"_4-可观察性🚀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-可观察性🚀"}},[t._v("#")]),t._v(" "),s("code",[t._v("4.可观察性🚀")])]),t._v(" "),s("ul",[s("li",[t._v("指标收集和展示")]),t._v(" "),s("li",[t._v("日志收集")]),t._v(" "),s("li",[t._v("分布式追踪")])]),t._v(" "),s("h3",{attrs:{id:"与kubernetes的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与kubernetes的关系"}},[t._v("#")]),t._v(" 与Kubernetes的关系")]),t._v(" "),s("p",[s("strong",[t._v("Kubernetes🌊")])]),t._v(" "),s("ul",[s("li",[t._v("解决容器编排与调度的问题")]),t._v(" "),s("li",[t._v("本质上是管理应用生命周期（调度器）")]),t._v(" "),s("li",[t._v("给予Service Mesh 支持和帮助")])]),t._v(" "),s("p",[s("strong",[t._v("Service Mesh🌊")])]),t._v(" "),s("ul",[s("li",[t._v("解决服务间网络通信问题")]),t._v(" "),s("li",[t._v("本质上是管理服务通信（代理）")]),t._v(" "),s("li",[t._v("是对Kubernetes网络功能方面的扩展和延伸。")])]),t._v(" "),s("h3",{attrs:{id:"与api网关的异同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与api网关的异同点"}},[t._v("#")]),t._v(" 与API网关的异同点")]),t._v(" "),s("p",[t._v("API网关")]),t._v(" "),s("ul",[s("li",[t._v("负载均衡")]),t._v(" "),s("li",[t._v("服务发现")]),t._v(" "),s("li",[t._v("流量控制")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec02e92ab3f51d9129d424.png"}}),t._v(" "),s("p",[t._v("功能有重叠，但角色不同。")]),t._v(" "),s("p",[s("code",[t._v("Service Mesh在应用内部，而API网关在应用之上（边界）")])]),t._v(" "),s("h3",{attrs:{id:"有哪些主流的service-mesh产品"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有哪些主流的service-mesh产品"}},[t._v("#")]),t._v(" 有哪些主流的Service Mesh产品？")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("时间")]),t._v(" "),s("th",[t._v("相关的Service Mesh的产品")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("2016")])]),t._v(" "),s("td",[t._v("Linkerd、Envoy")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("2017")])]),t._v(" "),s("td",[t._v("Linkerd1.0、Envoy、Istio0.1发布、Conduit发布")]),t._v(" "),s("td",[t._v("Linkerd1.0、Envoy加入CNCF")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("2018")])]),t._v(" "),s("td",[t._v("Istio1.0发布、Envoy稳定发布、Conduit并入Linkerd2.0")]),t._v(" "),s("td",[t._v("Conduit是国内大厂研发")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("2019")])]),t._v(" "),s("td",[t._v("Istio1.1发布、AWS APP Mesh GA、Google Traffic Director beta发布、Kong发布Kuma、Mosn、")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("2020")])]),t._v(" "),s("td",[t._v("Isitio1.5发布")]),t._v(" "),s("td",[t._v("3月份一直到后面在迭代更新")])])])]),t._v(" "),s("h2",{attrs:{id:"什么是istio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是istio"}},[t._v("#")]),t._v(" 什么是Istio？")]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("现在最火的后端架构无疑是**"),s("code",[t._v("微服务")]),s("strong",[t._v("了，微服务将之前的单体应用拆分成了许多独立的服务，好处自然很多，但是随着应用的越来越大，微服务暴露出来的问题也就随之而来了，微服务越来越多，管理越来越麻烦，特别是要你部署一套新环境的时候，你就能体会到这种痛苦了，随之而来的")]),s("code",[t._v("服务发现、负载均衡、Trace跟踪、流量管理、安全认证等等")]),t._v("**问题。如果从头到尾完成过一套微服务框架的话，你就会知道这里面涉及到的东西真的非常多。对于 Java 领域来说还有 Spring Cloud 这种完整的微服务框架，但是也仅仅局限于 Java 语言。当然随着微服务的不断发展，微服务的生态也不断完善，最近就发现新一代的微服务开发就悄然兴起了，那就是 "),s("code",[t._v("Service Mesh（服务网格）")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"istio的介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istio的介绍"}},[t._v("#")]),t._v(" Istio的介绍")]),t._v(" "),s("p",[t._v("官方定义： 它是一个完全开源的"),s("code",[t._v("服务网格")]),t._v("，作为"),s("code",[t._v("透明")]),t._v("的一层接入到现有的分布式应用中，它也是一个平台，可以与任何日志、遥测和策略系统进行集成。Istio多样化的特性让你能够成功而且高效地运行微"),s("code",[t._v("服务框架")]),t._v("，并"),s("code",[t._v("提供保护")]),t._v("，"),s("code",[t._v("连接和监控微服务")]),t._v("的统一方法。")]),t._v(" "),s("p",[s("strong",[t._v("优势：")])]),t._v(" "),s("ul",[s("li",[t._v("轻松构建服务网格")]),t._v(" "),s("li",[t._v("应用代码无需更改")]),t._v(" "),s("li",[t._v("功能功强大")])]),t._v(" "),s("p",[s("strong",[t._v("Istio核心功能：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("流量控制")]),t._v("： 路由、流量转移、弹性、测试、")]),t._v(" "),s("li",[s("code",[t._v("安全")]),t._v("： 认证、授权")]),t._v(" "),s("li",[s("code",[t._v("可观察性")]),t._v("： 指标、日志、追踪")]),t._v(" "),s("li",[s("code",[t._v("策略")]),t._v("： 限流、黑白名单")])]),t._v(" "),s("h3",{attrs:{id:"istio的使命"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istio的使命"}},[t._v("#")]),t._v(" Istio的使命")]),t._v(" "),s("p",[t._v("Istio的意义")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("实际上是让你重新定义了微服务的开发方式，让你可以轻松的在你的微服务架构中植入Service Mesh技术。")])]),t._v(" "),s("li",[t._v("大幅度降低微服务的应用的开发门槛，让你只关注业务的本身，不用去考虑如何添加很多网络控制相关的功能，或者是类库。")]),t._v(" "),s("li",[t._v("它使用了统一的运维和开发方式，来简化微服务的开发流程。")])]),t._v(" "),s("p",[t._v("Istio的战略使命")]),t._v(" "),s("ul",[s("li",[t._v("istio 是由"),s("code",[t._v("Google、IBM、Lyft")]),t._v("等共同开源的 Service Mesh（服务网格）框架，于2017年初开始进入大众视野。所以它有这三家公司支撑着。")])]),t._v(" "),s("h3",{attrs:{id:"istio的架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istio的架构"}},[t._v("#")]),t._v(" Istio的架构")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("Istio1.0的架构")])])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec02f62ab3f51d9129e23a.png"}}),t._v(" "),s("p",[s("strong",[s("code",[t._v("Istio1.1架构")])])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec03032ab3f51d9129f0e6.png"}}),t._v(" "),s("p",[s("strong",[s("code",[t._v("Istio的架构之伤")])])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec030e2ab3f51d9129fcd2.png"}}),t._v(" "),s("p",[s("strong",[t._v("复杂是万恶之源，学会停止焦虑，爱上单体————Istio团队")])]),t._v(" "),s("p",[t._v("原有的架构复杂性：")]),t._v(" "),s("ul",[s("li",[t._v("维护性")]),t._v(" "),s("li",[t._v("多组件分离的必要性")]),t._v(" "),s("li",[t._v("伸缩性")]),t._v(" "),s("li",[t._v("安全性")])]),t._v(" "),s("p",[s("strong",[s("code",[t._v("架构1.5版本")])])]),t._v(" "),s("ul",[s("li",[t._v("重建控制平面")]),t._v(" "),s("li",[t._v("整合istod")]),t._v(" "),s("li",[t._v("废弃Mixer")]),t._v(" "),s("li",[t._v("添加新特性")]),t._v(" "),s("li",[t._v("性能提升")]),t._v(" "),s("li",[t._v("Bug修复")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec031b2ab3f51d912a0b17.png"}}),t._v(" "),s("h3",{attrs:{id:"istio核心功能流量控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istio核心功能流量控制"}},[t._v("#")]),t._v(" Istio核心功能流量控制")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("Istio流量控制能力")])])]),t._v(" "),s("p",[s("strong",[t._v("主要功能：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("路由、流量转移")])]),t._v(" "),s("li",[s("code",[t._v("流量进出")])]),t._v(" "),s("li",[s("code",[t._v("网络弹性能力")])]),t._v(" "),s("li",[s("code",[t._v("测试相关")])])]),t._v(" "),s("p",[s("strong",[t._v("核心资源：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("虚拟服务（Virtual Service）")])]),t._v(" "),s("li",[s("code",[t._v("目标规则（Destination Rule）")])]),t._v(" "),s("li",[s("code",[t._v("网关（Gateway）")])]),t._v(" "),s("li",[s("code",[t._v("服务入口（Service Entry）")])]),t._v(" "),s("li",[s("code",[t._v("Sidecar")])])]),t._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"虚拟服务-virtual-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟服务-virtual-service"}},[t._v("#")]),t._v(" 虚拟服务（Virtual Service）")])])]),t._v(" "),s("ul",[s("li",[t._v("将流量路由到给定的目标地址")]),t._v(" "),s("li",[t._v("请求地址与真实的工作负载解耦")]),t._v(" "),s("li",[t._v("包含一组路由规则")]),t._v(" "),s("li",[t._v("通常和目标规则（Destination Rule）成对出现")]),t._v(" "),s("li",[t._v("丰富的路由匹配规则")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec03262ab3f51d912a1540.png"}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("h4",{attrs:{id:"目标规则-destination-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标规则-destination-rule"}},[t._v("#")]),t._v(" 目标规则（Destination Rule）")])])]),t._v(" "),s("p",[s("code",[t._v("定义虚拟服务路由目标地址的真实地址，即子集（subnet）")])]),t._v(" "),s("p",[t._v("设置负载均衡的方式")]),t._v(" "),s("ul",[s("li",[t._v("随机")]),t._v(" "),s("li",[t._v("权重")]),t._v(" "),s("li",[t._v("最少请求数")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("h4",{attrs:{id:"网关-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网关-gateway"}},[t._v("#")]),t._v(" 网关（Gateway）")])])]),t._v(" "),s("p",[t._v("管理进出的网格流量")]),t._v(" "),s("p",[t._v("处在网格的边界")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec03332ab3f51d912a214e.png"}}),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("h4",{attrs:{id:"sidecar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidecar"}},[t._v("#")]),t._v(" Sidecar")])])]),t._v(" "),s("p",[t._v("调整Envoy代理接管的端口和协议")]),t._v(" "),s("p",[t._v("限制Envoy代理可访问的服务")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec03332ab3f51d912a2151.png"}}),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("h4",{attrs:{id:"网络弹性和测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络弹性和测试"}},[t._v("#")]),t._v(" 网络弹性和测试")])])]),t._v(" "),s("p",[t._v("弹性能力： 超时 重试 熔断")]),t._v(" "),s("p",[t._v("测试能力： 故障注入 流量镜像")]),t._v(" "),s("h3",{attrs:{id:"istio服务的可观察性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istio服务的可观察性"}},[t._v("#")]),t._v(" Istio服务的可观察性")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("什么是可观察性？")])]),t._v(" "),s("ul",[s("li",[t._v("可观察性!=监控")]),t._v(" "),s("li",[t._v("从开发者的角度探究系统的状态")]),t._v(" "),s("li",[t._v("组成： 指标、日志、追踪")])])]),t._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"指标-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指标-metrics"}},[t._v("#")]),t._v(" 指标（Metrics）")])])]),t._v(" "),s("p",[t._v("以聚合的方式监控和理解系统行为")]),t._v(" "),s("p",[s("strong",[t._v("Istio中的指标分类：")])]),t._v(" "),s("ul",[s("li",[t._v("代理级别的指标"),s("code",[t._v("（Proxy-level）")])]),t._v(" "),s("li",[t._v("服务级别的指标"),s("code",[t._v("（Service-level）")])]),t._v(" "),s("li",[t._v("控制平面指标"),s("code",[t._v("（Control plane）")])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("h4",{attrs:{id:"代理级别的指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理级别的指标"}},[t._v("#")]),t._v(" 代理级别的指标")])])]),t._v(" "),s("ul",[s("li",[t._v("收集目标： sidecar代理")]),t._v(" "),s("li",[t._v("资源粒度上的网格监控")]),t._v(" "),s("li",[t._v("容许指定收集的代理（针对性的调试）")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec03462ab3f51d912a33bb.png"}}),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("h4",{attrs:{id:"服务级别的指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务级别的指标"}},[t._v("#")]),t._v(" 服务级别的指标")])])]),t._v(" "),s("ul",[s("li",[t._v("用于监控服务的通信")]),t._v(" "),s("li",[t._v("四个基本服务监控的需求： 延迟、流量、错误、饱和")]),t._v(" "),s("li",[t._v("默认指标导出到Prometheus（可自定义和更改）")]),t._v(" "),s("li",[t._v("可根据需求开启和关闭")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("h4",{attrs:{id:"访问日志-access-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问日志-access-logs"}},[t._v("#")]),t._v(" 访问日志（Access logs）")])])]),t._v(" "),s("ul",[s("li",[t._v("通过应用产生的事件来了解系统")]),t._v(" "),s("li",[t._v("包括了完整的元数据信息（目标、源）")]),t._v(" "),s("li",[t._v("生成位置可选（本地、远端、如filebeat）")]),t._v(" "),s("li",[t._v("日志内容：\n"),s("ul",[s("li",[s("code",[t._v("应用日志")])]),t._v(" "),s("li",[s("code",[t._v("Envoy日志 kubectl logs -l app=demo -c istio-proxy")])])])])]),t._v(" "),s("h3",{attrs:{id:"istio的安全架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istio的安全架构"}},[t._v("#")]),t._v(" Istio的安全架构")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec03522ab3f51d912a3f70.png"}}),t._v(" "),s("h4",{attrs:{id:"认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证"}},[t._v("#")]),t._v(" 认证")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("认证方式")])]),t._v(" "),s("li",[s("strong",[t._v("策略存储")])]),t._v(" "),s("li",[s("strong",[t._v("支持兼容模式")])])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.imgdb.cn/item/61ec035d2ab3f51d912a4a7d.png"}}),t._v(" "),s("h4",{attrs:{id:"认证方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证方式"}},[t._v("#")]),t._v(" 认证方式")]),t._v(" "),s("p",[s("code",[t._v("对等认证（Peer authentication）")])]),t._v(" "),s("ul",[s("li",[t._v("用于服务间身份认证")]),t._v(" "),s("li",[t._v("Mutual TLS（mTLS）")])]),t._v(" "),s("p",[s("code",[t._v("请求认证（Request authentication）")])]),t._v(" "),s("ul",[s("li",[t._v("用于终端用户身份认真")]),t._v(" "),s("li",[t._v("JSON Web Token（JWT）")])]),t._v(" "),s("h4",{attrs:{id:"认证策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证策略"}},[t._v("#")]),t._v(" 认证策略")]),t._v(" "),s("ul",[s("li",[t._v("配置方式")]),t._v(" "),s("li",[t._v("配置生效范围： [网格、命名空间、工作负载（服务）]")]),t._v(" "),s("li",[t._v("策略的更新")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" security.istio.io/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PeerAuthentication\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("only\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mtls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" STRICT\n")])])]),s("h4",{attrs:{id:"授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权"}},[t._v("#")]),t._v(" 授权")]),t._v(" "),s("ul",[s("li",[t._v("授权级别")]),t._v(" "),s("li",[t._v("策略分发")]),t._v(" "),s("li",[t._v("授权引擎")]),t._v(" "),s("li",[t._v("无需显式启用")])]),t._v(" "),s("h4",{attrs:{id:"授权策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权策略"}},[t._v("#")]),t._v(" 授权策略")]),t._v(" "),s("p",[t._v("通过创建AuthorizationPolicy实现")]),t._v(" "),s("p",[t._v("组成部分")]),t._v(" "),s("ul",[s("li",[t._v("选择器（Selector）")]),t._v(" "),s("li",[t._v("行为（Action）")]),t._v(" "),s("li",[t._v("规则列表（Rules）\n"),s("ul",[s("li",[t._v("来源（from）")]),t._v(" "),s("li",[t._v("操作（to）")]),t._v(" "),s("li",[t._v("匹配条件（when）")])])])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" security.istio.io/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AuthorizationPolicy\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpbin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("policy\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpbin\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ALLOW\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("principals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster.local/ns/default/sa/sleep"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/info*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request.auth.claims"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("iss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://foo.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"授权策略的设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权策略的设置"}},[t._v("#")]),t._v(" 授权策略的设置")]),t._v(" "),s("p",[t._v("范围（目标）设置：metadata/namespace/selector")]),t._v(" "),s("p",[t._v("匹配值： 精确、模糊、前缀、后缀")]),t._v(" "),s("p",[t._v("全部容许和拒绝")]),t._v(" "),s("p",[t._v("自定义条件")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" security.istio.io/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AuthorizationPolicy\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tester\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里是匹配范围")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" products     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#包括使用selector选择范围")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ALLOW\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/info"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" security.istio.io/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AuthorizationPolicy\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" allow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("all\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里是匹配范围")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里表示全部")]),t._v("\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request.headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);