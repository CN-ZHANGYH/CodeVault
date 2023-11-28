(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{493:function(v,t,_){"use strict";_.r(t);var r=_(7),a=Object(r.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"raid-简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid-简述"}},[v._v("#")]),v._v(" RAID 简述")]),v._v(" "),t("h3",{attrs:{id:"什么是raid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是raid"}},[v._v("#")]),v._v(" 什么是RAID？")]),v._v(" "),t("p",[t("code",[v._v("磁盘阵列（Redundant Arrays of Independent Disks，RAID）")]),v._v("，是把多个物理磁盘组成一个阵列，当作一个逻辑磁盘使用。它将数据以分段或条带的方式储存在不同的磁盘中，这样可以通过在多个磁盘上同时存储和读取数据，来大幅提高存储系统的数据吞吐量。使用 RAID 的主要目的是为了在发生单点故障时保存数据，当使用单个磁盘来存储数据，如果它损坏了，那么就没有机会取回已有的数据了。为了防止数据丢失人们需要一个容错的方法，所以，可以使用多个磁盘组成 RAID 阵列。")]),v._v(" "),t("p",[v._v("简单地说，其好处就是：")]),v._v(" "),t("p",[v._v("​\t⚫ 极强的容错能力，保证了数据的安全；")]),v._v(" "),t("p",[v._v("​\t⚫ 较佳的 I/O 传输率，有效的匹配了 CPU、内存的速度；")]),v._v(" "),t("p",[v._v("​\t⚫ 较大的存储量，保证了海量数据的存储；")]),v._v(" "),t("p",[v._v("​\t⚫ 较低的性能价格比。")]),v._v(" "),t("h3",{attrs:{id:"主流raid等级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主流raid等级"}},[v._v("#")]),v._v(" 主流RAID等级")]),v._v(" "),t("p",[v._v("磁盘阵列根据其使用的技术不同而划分了等级，称为 RAID level，目前公认的标准是 RAID0～RAID 5。其中的 level 并不代表技术的高低，RAID 5 并不高于 RAID 4 ，RAID 0 并不低于RAID 2 ，至于选择哪一种 RAID 需视用户的需求而定。")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("RAID-0")])])]),v._v(" "),t("p",[v._v("​    "),t("code",[v._v("RAID-0 被称为条带模式（stripe）")]),v._v("。数据在此种 RAID 等级是分散存储，每个磁盘放置所要存储数据的一部分，读写性能得到了提升，需要的磁盘数为多于或等于两块磁盘，磁盘可用空间为磁盘数*最小磁盘的大小。")]),v._v(" "),t("p",[v._v("​    当数据写入 RAID 时，数据会被切割成一块一块，然后依序放到不同的磁盘，如图 3-6-1 所示。一方面读写性能得到了提升，但另一方面，由于数据切割分散存储于不同磁盘，一旦其中一块磁盘损坏，RAID 上面所有数据都会损坏。因此，从数据安全方面考虑，重要数据不适合使用 RAID-0。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202204111249871.png",alt:""}})]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[v._v("RAID-1")])])]),v._v(" "),t("p",[v._v("​    "),t("code",[v._v("RAID-1 被称作镜像模式（mirror）")]),v._v("，此种模式是让同一份完整的数据在多块不同的磁盘上存储。当数据写入 RAID 时，把每一份数据复制成相同的两份，分别放入两块磁盘中存放。这种模式可以实现数据备份作用。当其中一块磁盘损坏时，数据不受影响，如图 3-6-2 所示。但此种模式需要复制多份数据到各个磁盘，在大量写入的情况下，写性能会降低；由于可以从不同磁盘读入数据，因此读性能会有略微提升。需要的磁盘数为多于或等于两块磁盘，磁盘可用空间为磁盘数*最小磁盘的大小/ 2。")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[v._v("RAID-5")])])]),v._v(" "),t("p",[v._v("​    "),t("code",[v._v("RAID-5 对性能和数据备份进行了均衡考虑")]),v._v("，实现方式是使用 3 块或 3 块以上磁盘组成磁盘阵列。数据写入方式类似于 RAID-0，但区别是在每个循坏写入过程中，轮流在其中一块磁盘存储其他几个磁盘数据的同位校验码（parity），同位检验码为同位其他数据相与或所得，当其中任何一个磁盘损坏时，可通过其他磁盘的校验码来重建磁盘的数据。但当多于一块磁盘损坏时，数据则无法恢复。")]),v._v(" "),t("p",[v._v("​    RAID-5 对读性能有较好的提升，由于写入时需要对数据进行同位校验码计算，所以写性能的提升较低于读性能的提升。磁盘可用空间为：（磁盘数-1）*最小磁盘的大小。")]),v._v(" "),t("p",[v._v("​    另外，当其中一块磁盘损坏后，如果没有预备磁盘顶替，则每一次读取数据都需要经过数据校验计算出损坏磁盘的数据，RAID 工作于降级状态，对性能有极大的影响。RAID 6 在RAID 5 的基础上增加多一块磁盘当校验盘，即支持两块磁盘做校验盘。")]),v._v(" "),t("p",[v._v("![](https://gitee.com/cn-zhangyh/images/raw/master/屏幕截图 2022-02-09 141602.jpg)")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[v._v("RAID 10")])])]),v._v(" "),t("p",[v._v("​    RAID 10 为混合类型，即 RAID 0 和 RAID 1 的组合，先把多个磁盘分组组成 RAID 1，再把这些分组一起组成 RAID 0。当数据写入时，先以 RAID 0 方式将数据分散到各个 RAID 1 组，再以 RAID 1 的方式复制多份数据在磁盘上完整存储.")]),v._v(" "),t("p",[v._v("​    由于工作方式既有 RAID 0 又有 RAID 1，所以 RAID 1+0 混合模式具有提升读写速度，又有数据备份功能，但同一 RAID 1 分组中不允许同时坏两块磁盘。此种方式需要 4 块以上磁盘，磁盘可用空间为磁盘数*最小磁盘的大小/2。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202204111249549.png",alt:"image-20220209142832790"}})]),v._v(" "),t("h3",{attrs:{id:"raid的实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid的实现方式"}},[v._v("#")]),v._v(" RAID的实现方式")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("基于硬件 RAID 卡方式")])])]),v._v(" "),t("p",[v._v("​    在一个基于总线的主机系统中，通过连接硬盘到单独一个 CPU 和 RAID 卡上，在操作系统中添加硬件卡驱动程序的方式来实现 RAID。这种卡有自己的 BIOS 和 Firmware，卡上带有处理器、协处理器、缓存等，可以做包括奇偶校验和数据分段在内的所有工作。主控总线方案通常用在 PCI（Peripheral Component Interconnect，外设部件互连标准）总线系统上。最基本的规则是主控总线速度越快，RAID 子系统的速度就越快。")]),v._v(" "),t("p",[v._v("主要表现为：")]),v._v(" "),t("p",[v._v("​\t①  外接式磁盘阵列：通过 PCI 或 PCI-E 扩展卡提供适配能力。")]),v._v(" "),t("p",[v._v("​\t②  内接式磁盘阵列：主板上集成的 RAID 控制器。")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("基于软件的方式")])])]),v._v(" "),t("p",[v._v("​    通过操作系统软件实现，在操作系统中集成了 RAID 的功能。这种方式的优点是不用额外的硬件就可以获得较高的数据安全，费用较低。缺点是所有的 RAID 功能都由主机处理来承担，占用较多的系统资源。mdadm 命令用于管理系统软件 RAID 磁盘阵列。其格式为： madam [模式] <RAID 设备名称> [选项] <成员设备名称>  mdadm 管理 RAID 阵列的动作。")]),v._v(" "),t("p",[t("code",[v._v("mdadm")]),v._v(" 管理 RAID 阵列的动作")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("作用")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Assemble")]),v._v(" "),t("td",[v._v("将设备加入到以前定义的阵列")])]),v._v(" "),t("tr",[t("td",[v._v("Build")]),v._v(" "),t("td",[v._v("创建一个没有超级块的阵列")])]),v._v(" "),t("tr",[t("td",[v._v("Create")]),v._v(" "),t("td",[v._v("创建一个新的阵列，每个设备具有超级块")])]),v._v(" "),t("tr",[t("td",[v._v("Manage")]),v._v(" "),t("td",[v._v("管理阵列（如添加和删除）")])]),v._v(" "),t("tr",[t("td",[v._v("Misc")]),v._v(" "),t("td",[v._v("允许单独对阵列中的某个设备进行操作（如停止阵列）")])]),v._v(" "),t("tr",[t("td",[v._v("Follow or  Monitor")]),v._v(" "),t("td",[v._v("监控状态")])]),v._v(" "),t("tr",[t("td",[v._v("Grow")]),v._v(" "),t("td",[v._v("改变阵列的容量或设备数目")])])])]),v._v(" "),t("p",[t("code",[v._v("madam")]),v._v(" 管理 RAID 阵列的参数")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("作用")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("-a")]),v._v(" "),t("td",[v._v("检测设备名称")])]),v._v(" "),t("tr",[t("td",[v._v("-n")]),v._v(" "),t("td",[v._v("指定设备数量")])]),v._v(" "),t("tr",[t("td",[v._v("-l")]),v._v(" "),t("td",[v._v("指定 RAID 级别")])]),v._v(" "),t("tr",[t("td",[v._v("-C")]),v._v(" "),t("td",[v._v("创建")])]),v._v(" "),t("tr",[t("td",[v._v("-v")]),v._v(" "),t("td",[v._v("显示过程")])]),v._v(" "),t("tr",[t("td",[v._v("-f")]),v._v(" "),t("td",[v._v("模拟设备损坏")])]),v._v(" "),t("tr",[t("td",[v._v("-r")]),v._v(" "),t("td",[v._v("移除设备")])]),v._v(" "),t("tr",[t("td",[v._v("-a")]),v._v(" "),t("td",[v._v("添加设备")])]),v._v(" "),t("tr",[t("td",[v._v("-Q")]),v._v(" "),t("td",[v._v("查看摘要信息")])]),v._v(" "),t("tr",[t("td",[v._v("-D")]),v._v(" "),t("td",[v._v("查看详细信息")])]),v._v(" "),t("tr",[t("td",[v._v("-S")]),v._v(" "),t("td",[v._v("停止阵列")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);