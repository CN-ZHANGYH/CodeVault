(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{350:function(a,n,s){"use strict";s.r(n);var t=s(7),e=Object(t.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"网络高可用设计方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络高可用设计方案"}},[a._v("#")]),a._v(" 网络高可用设计方案")]),a._v(" "),n("h3",{attrs:{id:"bonding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bonding"}},[a._v("#")]),a._v(" bonding")]),a._v(" "),n("p",[a._v("Linux bonding 驱动提供了一个把多个网络接口设备捆绑为单个的网络接口设置来使用，用于网络负载均衡及网络冗余 。")]),a._v(" "),n("h5",{attrs:{id:"bonding-应用方向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bonding-应用方向"}},[a._v("#")]),a._v(" "),n("strong",[a._v("bonding 应用方向")])]),a._v(" "),n("p",[a._v("① 网络负载均衡")]),a._v(" "),n("p",[a._v("对于 bonding 的网络负载均衡是人们在文件服务器中常用到的。比如把 3 块网卡，当做一块来用，解决一个 IP 地址，流量过大，服务器网络压力过大的问题。对于文件服务器来说，如 NFS 或 SAMBA 文件服务器，没有任何一个管理员会把内部网的文件服务器的 IP 地址弄很多个来解决网络负载的问题。如果在内网中，为了管理和应用上的方便，文件服务器大多是用同一个 IP 地址。对于一个百兆的本地网络来说，文件服务器在多个用户同时使用的情况下，网络压力是极大的，特别是 SAMABA 和 NFS 服务器。毕竟网线和网卡对数据的吞吐量是有限制的，如果在有限的资源的情况下，为了解决同一个 IP 地址，突破流量的限制，实现网络负载均衡，最好的办法就是 bonding。")]),a._v(" "),n("p",[a._v("② 网络冗余")]),a._v(" "),n("p",[a._v("对于服务器来说，网络设备的稳定也是比较重要的，特别是网卡。在生产型的系统中，网卡的可靠性就更为重要了。在生产型的系0中，大多通过硬件设备的冗余来提供服务器的可靠性和安全性，比如电源。bonding 也能为网卡提供冗余的支持。把多块网卡绑定到一个 IP 地址，当一块网卡发生物理性损坏的情况下，另一块网卡自动启用，并提供正常的服务，即默认情况下只有一块网卡工作，其它网卡做为备份。")]),a._v(" "),n("h5",{attrs:{id:"bonding-运用的注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bonding-运用的注意事项"}},[a._v("#")]),a._v(" "),n("strong",[a._v("bonding 运用的注意事项")])]),a._v(" "),n("p",[n("code",[a._v("bonding 的模式：0-6，7 种模式")])]),a._v(" "),n("p",[a._v("① 第一种模式：mod=0，"),n("strong",[a._v("即（balance-rr）Round-robin policy（平衡抡循环策略）")])]),a._v(" "),n("p",[a._v("特点：传输数据包顺序是依次传输（即第 1 个包走 eth0，下一个包就走 eth1.... 一直循环下去，直到最后一个传输完毕），此模式提供负载平衡和容错能力。但是如果一个连接或者会话的数据包从不同的接口发出的话，中途再经过不同的链路，在客户端很有可能会出现数据包无序到达的问题，而无序到达的数据包需要重新被发送，这样网络的吞吐量就会下降。")]),a._v(" "),n("p",[a._v("② 第二种模式：mod=1，"),n("strong",[a._v("即（active-backup）Active-backup policy（主-备份策略）")])]),a._v(" "),n("p",[a._v("特点：只有一个设备处于活动状态，当一个宕掉另一个马上由备份转换为主设备。MAC 地址是外部可见的，从外面看来，bond 的 MAC 地址是唯一的，以避免 switch（交换机）发生混乱。此模式只提供了容错能力。由此可见此算法的优点是可以提供高网络连接的可用性，但是它的资源利用率较低，只有一个接口处于工作状态，在有 N 个网络接口的情况下，资源利用率为 1/N。")]),a._v(" "),n("p",[a._v("③ 第三种模式：mod=2，"),n("strong",[a._v("即（balance-xor）XOR policy（平衡策略）")])]),a._v(" "),n("p",[a._v("特点：基于指定的传输 HASH 策略传输数据包。缺省的策略是：（源 MAC 地址 XOR 目标 MAC 地址）% slave 数量。其他的传输策略可以通过 xmit_hash_policy 选项指定，此模式提供负载平衡和容错能力。")]),a._v(" "),n("p",[a._v("④ 第四种模式：mod=3，"),n("strong",[a._v("即 broadcast（广播策略）")])]),a._v(" "),n("p",[a._v("特点：在每个 slave 接口上传输每个数据包，此模式提供了容错能力。")]),a._v(" "),n("p",[a._v("⑤ 第五种模式：mod=4，"),n("strong",[a._v("即（802.3ad）IEEE 802.3ad Dynamic link aggregation（IEEE 802.3ad 动态链接聚合）")])]),a._v(" "),n("p",[a._v("特点：创建一个聚合组，它们共享同样的速率和双工设定。根据 802.3ad 规范将多个 slave 工作在同一个激活的聚合体下。外出流量的 slave 选举是基于传输 HASH 策略，该策略可以通过 xmit_hash_policy 选项从缺省的 XOR 策略改变到其他策略。需要注意的是，并不是所有的传输策略都是 802.3ad 适应的，不同的实现可能会有不同的适应性。")]),a._v(" "),n("p",[a._v("​\t必要条件：")]),a._v(" "),n("p",[a._v("​\t条件 1：ethtool 支持获取每个 slave 的速率和双工设定。")]),a._v(" "),n("p",[a._v("​\t条件 2：switch（交换机）支持 IEEE 802.3ad Dynamic link aggregation。")]),a._v(" "),n("p",[a._v("​\t条件 3：大多数交换机需要经过特定配置才能支持 802.3ad 模式。")]),a._v(" "),n("p",[a._v("⑥ 第六种模式：mod=5，"),n("strong",[a._v("即（balance-tlb）Adaptive transmit load balancing（适配器传输负载均衡）")])]),a._v(" "),n("p",[a._v("特点：不需要任何特别的交换机支持的通道 bonding。在每个 slave 上根据当前的负载（根据速度计算）分配外出流量。如果正在接受数据的 slave 出故障了，另一个 slave 接管失败的 slave 的 MAC 地址。 该模式的必要条件：ethtool 支持获取每个 slave 的速率。")]),a._v(" "),n("p",[a._v("⑦ 第七种模式：mod=6，"),n("strong",[a._v("即（balance-alb）Adaptive load balancing（适配器适应性负载均衡）")])]),a._v(" "),n("p",[a._v("特点：该模式包含了 balance-tlb 模式，同时加上针对 IPV4 流量的接收负载均衡（Receive Load Balance，RLB），而且不需要任何交换机的支持。接收负载均衡是通过 ARP 协商实现的 bonding 驱动截获本机发送的 ARP 应答，并把源硬件地址改写为 bond 中某个 slave 的唯一硬件地址，从而使得不同的对端使用不同的硬件地址进行通信。")]),a._v(" "),n("h5",{attrs:{id:"bonding-驱动选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bonding-驱动选项"}},[a._v("#")]),a._v(" "),n("strong",[a._v("bonding 驱动选项")])]),a._v(" "),n("p",[a._v('bonding 驱动的选项是通过在加载时指定参数来设定的，可以通过 insmod 或 modprobe 命令的命令行参数来指定，但通常在/etc/modprobe.conf 配置文件中指定，或其他的配置文件中下面会列出可用的 bonding 驱动参数。如果参数没有指定，驱动会使用缺省参数。刚开始配置 bond 的时候，建议在一个终端窗口中运行 tail -f /var/log/messages 命令来观察 bonding 驱动的错误信息（/var/log/messages 一般会打印内核中的调试信息），有些参数必须要正确的设定，比如 miimon、 arp_interval 和 arp_ip_target，否则在链接故障时会导致严重的网络性能退化。仅极少的设备不支持 miimon，因此没有任何理由不使用它们。有些选项不仅支持文本值的设定，出于兼容性的考虑，也支持数值的设定，比如："mode=802.3ad" 和"mode=4"效果是一样的。具体的参数详细解释如下：')]),a._v(" "),n("p",[n("code",[a._v("① primay")])]),a._v(" "),n("p",[a._v("指定哪个 slave 成为主设备（primary device），取值为字符串，如 eth0，eth1 等。只要指定的设备可用，它将一直是激活的 slave。只有在主设备（primary device）断线时才会切换设备。这在某个 slave 设备优先使用的情形下很有用，比如，某个 slave 设备有更高的吞吐率。")]),a._v(" "),n("blockquote",[n("p",[a._v("注意："),n("strong",[a._v("primary")]),a._v(" 选项只对 "),n("strong",[a._v("active-backup")]),a._v(" 模式有效。")])]),a._v(" "),n("p",[n("code",[a._v("② updelay")])]),a._v(" "),n("p",[a._v("当发现一个链路恢复时，指定在激活该链路之前的等待时间，以毫秒计算。该选项只对 miimon 链路侦听有效。updelay 应该是 miimon 值的整数倍，如果不是，它将会被向下取整到最近的整数，缺省值为 0。")]),a._v(" "),n("p",[n("code",[a._v("③ arp_interval")])]),a._v(" "),n("p",[a._v("指定 ARP 链路监控频率，单位是毫秒（ms）。如果 APR 监控工作于以太兼容模式（模式 0 和模式 2）下，需要把交换机配置为在所有链路上均匀地分发网络包。如果交换机被配置为以 XOR 方式分发网络包，所有来自 ARP 目标的应答将会被同一个链路上的其他设备收到，这将会导致其他设备的失败。ARP 监控不应该和 miimon 同时使用。设定为 0 将禁止 ARP 监控，缺省值为 0。")]),a._v(" "),n("p",[n("code",[a._v("④ arp_ip_target")])]),a._v(" "),n("p",[a._v("指定一组 IP 地址用于 ARP 监控的目标，它只在 arp_interval > 0 时有效。这些 IP 地址是 ARP 请求发送的目标，用于判定到目标地址的链路是否工作正常。该设定值为 ddd.ddd.ddd.ddd 格式。多个 IP 地址通过逗号分隔。至少指定一个 IP 地址，最多可以指定 16 个 IP 地址，缺省值是没有 IP 地址的。")]),a._v(" "),n("p",[n("code",[a._v("⑤ downdelay")])]),a._v(" "),n("p",[a._v("指定一个时间，用于在发现链路故障后，等待一段时间然后禁止一个 slave，单位是毫秒（ms）。该选项只对 miimon 监控有效。downdelay 值应该是 miimon 值的整数倍，否则它将会被取整到最接近的整数倍，缺省值为 0。")]),a._v(" "),n("p",[n("code",[a._v("⑥ lacp_rate")])]),a._v(" "),n("p",[a._v("指定在 802.3ad 模式下，期望的链接对端传输 LACPDU 包的速率。其中选项有：slow 或者 0，请求对端每 30s 传输 LACPDU；fast 或者 1，请求对端每 1s 传输 LACPDU。缺省值是 slow。")]),a._v(" "),n("p",[n("code",[a._v("⑦ max_bonds")])]),a._v(" "),n("p",[a._v("为 bonding 驱动指定创建 bonding 设备的数量。例如，如果 max_bonds 为 3，而且 bonding 驱动还没有加载，那么 bond0、bond1、bond2 将会被创建，缺省值为 1。")]),a._v(" "),n("p",[n("code",[a._v("⑧ miimon")]),a._v(" 指定 MII（Media Independent Interface，介质无关接口）链路监控频率，单位是毫秒（ms）。这将决定驱动检查每个 slave 链路状态，频率为 0 表示禁止 MII 链路监控。100 可以作为一个很好的初始参考值，缺省值为 0。")]),a._v(" "),n("p",[n("code",[a._v("⑩ mode")]),a._v(" 指定 bonding 的策略。缺省是 balance-rr（round robin，循环赛）。可选的mode 包括：0、1、2、3、4、5、6。")]),a._v(" "),n("h5",{attrs:{id:"bonding-链路监测方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bonding-链路监测方法"}},[a._v("#")]),a._v(" "),n("strong",[a._v("bonding 链路监测方法")])]),a._v(" "),n("p",[a._v("官方文档里说有两种针对链路的监测方法（注意：这两种监测不能同时使用）。")]),a._v(" "),n("p",[n("code",[a._v("① 第一种")]),a._v("：miimon（这种方法是最常见的，此方法使用系统的 mii-tool 命令进行监测）模块加载设置（/etc/modprobe.conf）：")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Start of bonding configure ")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" bond0 bonding \noptions bond0 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("miimon")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mode")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),n("blockquote",[n("p",[a._v("注意：使用 "),n("strong",[a._v("cat /proc/net/bonding/bond0")]),a._v("，可查看 "),n("strong",[a._v("Bonding Mode: load")]),a._v(" "),n("strong",[a._v("balancing")]),a._v("（"),n("strong",[a._v("round-robin")]),a._v("）状态")])]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("Bonding Mode: load balancing "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("round-robin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \nMII Status: up \nMII Polling Interval "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" \nUp Delay "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" \nDown Delay "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" \n \nSlave Interface: ens33 \nMII Status: up \nSpeed: "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" Mbps \nDuplex: full \nLink Failure Count: "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" \nPermanent HW addr: 00:0c:29:5b:43:41 \nSlave queue ID: "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" \n \nSlave Interface: ens34 \nMII Status: up \nSpeed: "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" Mbps \nDuplex: full \nLink Failure Count: "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" \nPermanent HW addr: 00:0c:29:5b:43:4b Slave queue ID: "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" \n\n")])])]),n("p",[a._v("使用 mii-tool 命令进行检测网卡状态。")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("root@Web:~"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mii-tool ens33 ens34 ")]),a._v("\nens33: negotiated 1000baseT-FD flow-control, "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" ok \nens34: negotiated 1000baseT-FD flow-control, "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" ok \n")])])]),n("p",[a._v("缺点是这种方法只能监测交换机与该网卡之间的链路。如果它们之外的链路断了，而交换机本身没有问题，也就是说网卡和交换机之间还是 UP 状态，它是不会认为网络中断的，除非网卡是 DOWN 状态，它才会把链路转到另一块网卡上，就像是拔掉网线一样，或者把交换机端口 SHUT DOWN 一样。")]),a._v(" "),n("p",[n("code",[a._v("第二种")]),a._v("：arp（这种方法比较实用，可以把它看作是 arp 的 ping（二层 ping），但是可能会给网关造成一定的压力）模块加载设置（/etc/modprobe.conf）：")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" bond0 bonding \n  options bond0  "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arp_interval")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arp_ip_target")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.1 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mode")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("active-backup   "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("primary")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("eth0    \n")])])]),n("p",[a._v("解析如下： arp_interval=100，表示 arp 的检测时间，等同于 miimon=100 的作用， arp_ip_target=192.168.1.1，表示 arp 检测的目标 IP，必须是同网段的，最好就是网关。注意：如果使用 arp 来 ping 网关不通，那么在/proc/net/bonding/bond0 中会一会 DOWN，一会 UP。")]),a._v(" "),n("p",[a._v("优点是使用 arp 这种方法，如果交换机上出现问题，网络不通，它就会把链转到另一块网卡上，但是不管是哪种方法，在第一块网卡出现问题，链路转到第二块后，虽然第一块恢复正常，但是链路自己不会恢复。")])])}),[],!1,null,null,null);n.default=e.exports}}]);