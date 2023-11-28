(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{472:function(s,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"为系统守护进程预留计算资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为系统守护进程预留计算资源"}},[s._v("#")]),s._v(" 为系统守护进程预留计算资源")]),s._v(" "),t("p",[s._v("Kubernetes 的节点可以按照 "),t("code",[s._v("Capacity")]),s._v(" 调度。"),t("u",[s._v("默认情况下 pod 能够使用节点全部可用容量")]),s._v("。 这是个问题，因为节点自己通常运行了不少驱动 OS 和 Kubernetes 的系统守护进程。 除非为这些系统守护进程留出资源，否则它们将与 pod 争夺资源并导致节点资源短缺问题")]),s._v(" "),t("p",[s._v("kubelet 公开了一个名为 'Node Allocatable' 的特性，有助于为系统守护进程预留计算资源。 Kubernetes 推荐集群管理员按照每个节点上的工作负载密度配置 Node Allocatable")]),s._v(" "),t("h2",{attrs:{id:"节点可分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点可分配"}},[s._v("#")]),s._v(" 节点可分配")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/cn-zhangyh/image/main/img/202204191423440.png",alt:"image-20220419142320279"}})]),s._v(" "),t("p",[s._v("​\t'Allocatable' 被定义为 pod 可用计算资源量。调度器不会超额申请 'Allocatable'。目前支持 CPU, memory 和 ephemeral-storage 参数")]),s._v(" "),t("h3",{attrs:{id:"启动qos和pod级别的cgroups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动qos和pod级别的cgroups"}},[s._v("#")]),s._v(" 启动Qos和Pod级别的cgroups")]),s._v(" "),t("p",[s._v("为了恰当的在节点范围实施节点可分配约束，你必须通过 "),t("code",[s._v("--cgroups-per-qos")]),s._v(" 标志启用新的 cgroup 层次结构。这个标志是默认启用的。")]),s._v(" "),t("p",[s._v("启用后，"),t("code",[s._v("kubelet")]),s._v(" 将在其管理的 cgroup 层次结构中创建所有终端用户的 Pod")]),s._v(" "),t("h3",{attrs:{id:"配置cgroup驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置cgroup驱动"}},[s._v("#")]),s._v(" 配置cgroup驱动")]),s._v(" "),t("p",[t("code",[s._v("kubelet")]),s._v(" 支持在主机上使用 cgroup 驱动操作 cgroup 层次结构。驱动通过 "),t("code",[s._v("--cgroup-driver")]),s._v(" 标志配置")]),s._v(" "),t("p",[s._v("支持的参数值如下：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("cgroupfs")]),s._v("是默认的驱动，在主机上直接操作 cgroup 文件系统以对 cgroup 沙箱进行管理")]),s._v(" "),t("li",[t("code",[s._v("systemd")]),s._v("是可选的驱动，使用 init 系统支持的资源的瞬时切片管理 cgroup 沙箱")])]),s._v(" "),t("p",[t("u",[s._v("取决于相关容器运行时的配置，操作员可能需要选择一个特定的 cgroup 驱动 来保证系统正常运行")])]),s._v(" "),t("h2",{attrs:{id:"配置资源预留"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置资源预留"}},[s._v("#")]),s._v(" 配置资源预留")]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("Kubectl describe node")]),s._v(" 命令查看节点可分配资源的数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe nodes master ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nCapacity:\n  cpu:                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n  ephemeral-storage:  104846316Ki\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             8009440Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nAllocatable:\n  cpu:                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n  ephemeral-storage:  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("96626364666")]),s._v("\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             7907040Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("Capacity：所有资源")]),s._v(" "),t("p",[s._v("Allocatable ：分配资源")])]),s._v(" "),t("h3",{attrs:{id:"kube预留值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kube预留值"}},[s._v("#")]),s._v(" Kube预留值")]),s._v(" "),t("p",[t("strong",[t("code",[s._v("方法一")])])]),s._v(" "),t("p",[s._v("要选择性地对 kubernetes 系统守护进程上执行"),t("code",[s._v("kube-reserved")]),s._v("保护，需要把 kubelet 的"),t("code",[s._v("--kube-reserved-cgroup")]),s._v("标志的值设置为 kube 守护进程的父控制组。推荐将 kubernetes 系统守护进程放置于顶级控制组之下。理想情况下每个系统守护进程都应该在其自己的子控制组中运行。")]),s._v(" "),t("blockquote",[t("p",[s._v("请注意，如果 "),t("code",[s._v("--kube-reserved-cgroup")]),s._v(" 不存在，Kubelet 将 不会 创建它。 如果指定了一个无效的 cgroup，Kubelet 将会失败")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Kubelet 标志")]),s._v(": "),t("code",[s._v("--kube-reserved=[cpu=100m][,][memory=100Mi][,][ephemeral-storage=1Gi][,][pid=1000]")])]),s._v(" "),t("li",[t("strong",[s._v("Kubelet 标志")]),s._v(": "),t("code",[s._v("--kube-reserved-cgroup=")])])]),s._v(" "),t("p",[s._v("kubernetes 系统守护进程记述其资源预留值。该配置并非用来给以 Pod 形式运行的系统守护进程保留资源。"),t("code",[s._v("kube-reserved")]),s._v(" 通常是节点上 "),t("code",[s._v("pod 密度")]),s._v(" 的函数。")]),s._v(" "),t("p",[s._v("除了 "),t("code",[s._v("cpu")]),s._v("，"),t("code",[s._v("内存")]),s._v(" 和 "),t("code",[s._v("ephemeral-storage")]),s._v(" 之外，"),t("code",[s._v("pid")]),s._v(" 可用来指定为 kubernetes 系统守护进程预留指定数量的进程 ID。")]),s._v(" "),t("ul",[t("li",[s._v("修改/var/lib/kubelet/config.yaml")])]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /var/lib/kubelet/config.yaml")]),s._v("\n···\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enforceNodeAllocatable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" pods\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("reserved\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 kube 预留资源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubeReserved")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 500m\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1Gi\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ephemeral-storage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1Gi\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubeReservedCgroup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /kubelet.slice\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 kube 资源预留的 cgroup")]),s._v("\n")])])]),t("ul",[t("li",[s._v("重启服务")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart kubelet")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# journalctl -u kubelet.service -f")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'报错:'")]),s._v("\nApr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":04:44 master kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30669")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": F0413 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":04:44.171621   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30669")]),s._v(" kubelet.go:1383"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Failed to start ContainerManager Failed to enforce Kube Reserved Cgroup Limits on "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/kubelet.slice"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubelet"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" cgroup does not exist\nApr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":04:44 master systemd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": kubelet.service: main process exited, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v("/n/a\nApr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":04:44 master systemd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Unit kubelet.service entered failed state.\nApr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":04:44 master systemd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": kubelet.service failed.\n")])])]),t("blockquote",[t("p",[s._v("指定的 kubelet 这个 cgroup 不存在，但是由于子系统较多，具体是哪一个子系统不存在不好定位，我们可以将 kubelet 的日志级别调整为 "),t("code",[s._v("v=4")]),s._v(" ，就可以看到具体丢失的 cgroup 路径")])]),s._v(" "),t("ul",[t("li",[s._v("修改/var/lib/kubelet/kubeadm-flags.env")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /var/lib/kubelet/kubeadm-flags.env")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_KUBEADM_ARGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--v=4 --container-runtime=remote --container-runtime-endpoint=/run/containerd/containerd.sock --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.6"')]),s._v("\n")])])]),t("ul",[t("li",[s._v("再次重启")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart kubelet")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查看到具体不存在的路径")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload  ")]),s._v("\nApr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":07:24 master kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2501")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I0413 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":07:24.753039    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2501")]),s._v(" cgroup_manager_linux.go:276"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" The Cgroup "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" has some missing paths: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/sys/fs/cgroup/cpuset/kubelet.slice /sys/fs/cgroup/cpu,cpuacct/kubelet.slice /sys/fs/cgroup/systemd/kubelet.slice /sys/fs/cgroup/pids/kubelet.slice /sys/fs/cgroup/cpu,cpuacct/kubelet.slice /sys/fs/cgroup/hugetlb/kubelet.slice /sys/fs/cgroup/memory/kubelet.slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("ul",[t("li",[s._v("创建路径")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /sys/fs/cgroup/cpuset/kubelet.slice")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /sys/fs/cgroup/cpu,cpuacct/kubelet.slice ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /sys/fs/cgroup/systemd/kubelet.slice")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /sys/fs/cgroup/pids/kubelet.slice ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /sys/fs/cgroup/cpu,cpuacct/kubelet.slice")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /sys/fs/cgroup/hugetlb/kubelet.slice ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /sys/fs/cgroup/memory/kubelet.slice")]),s._v("\n")])])]),t("ul",[t("li",[s._v("再次重启并查看，发现一切正常就ok了")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart kubelet")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# journalctl -u kubelet -f")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\nSep 09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36 ydzs-node4 kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I0909 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36.382811   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),s._v(" cgroup_manager_linux.go:273"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" The Cgroup "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" has some missing paths: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/sys/fs/cgroup/cpu,cpuacct/kubelet.slice /sys/fs/cgroup/memory/kubelet.slice /sys/fs/cgroup/systemd/kubelet.slice /sys/fs/cgroup/pids/kubelet.slice /sys/fs/cgroup/cpu,cpuacct/kubelet.slice /sys/fs/cgroup/cpuset/kubelet.slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nSep 09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36 ydzs-node4 kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I0909 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36.383002   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),s._v(" factory.go:170"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Factory "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"systemd"')]),s._v(" can handle container "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/system.slice/run-docker-netns-db100461211c.mount"')]),s._v(", but ignoring.\nSep 09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36 ydzs-node4 kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I0909 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36.383025   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),s._v(" manager.go:908"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ignoring container "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/system.slice/run-docker-netns-db100461211c.mount"')]),s._v("\nSep 09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36 ydzs-node4 kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": F0909 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":57:36.383046   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20427")]),s._v(" kubelet.go:1381"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Failed to start ContainerManager Failed to enforce Kube Reserved Cgroup Limits on "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/kubelet.slice"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubelet"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" cgroup does not exist\n\n")])])]),t("ul",[t("li",[s._v("可以通过查看 cgroup 里面的限制信息校验是否配置成功（查看内存的限制信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /sys/fs/cgroup/memory/kubelet.slice/memory.limit_in_bytes ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查看节点信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Capacity:\n  cpu:                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n  ephemeral-storage:  104846316Ki\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             8009440Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nAllocatable:\n  cpu:                3500m\n  ephemeral-storage:  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95552622842")]),s._v("\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             6858464Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\n")])])]),t("p",[s._v("​\t可以看到分配的 Allocatable 值就变成了 Kube 预留过后的值了，证明 Kube 预留成功了")]),s._v(" "),t("p",[t("strong",[t("code",[s._v("方法二")])])]),s._v(" "),t("ul",[t("li",[s._v("查看节点信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Capacity:\n  cpu:                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n  ephemeral-storage:  104846316Ki\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             8009440Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nAllocatable:\n  cpu:                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n  ephemeral-storage:  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("96626364666")]),s._v("\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             7907040Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\n")])])]),t("ul",[t("li",[s._v("修改/etc/sysconfig/kubelet")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/sysconfig/kubelet")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_EXTRA_ARGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--system-reserved=cpu=100m,memory=1Gi,ephemeral-storage=1Gi'")]),s._v("\n")])])]),t("ul",[t("li",[s._v("重启并查看")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart kubelet")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe nodes master ")]),s._v("\nCapacity:\n  cpu:                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n  ephemeral-storage:  104846316Ki\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             8009440Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nAllocatable:\n  cpu:                3900m\n  ephemeral-storage:  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95552622842")]),s._v("\n  hugepages-2Mi:      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             6858464Ki\n  pods:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\n")])])]),t("h3",{attrs:{id:"驱逐阈值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#驱逐阈值"}},[s._v("#")]),s._v(" 驱逐阈值")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Kubelet 标志")]),s._v(": "),t("code",[s._v("--eviction-hard=[memory.available<500Mi]")])])]),s._v(" "),t("p",[s._v("节点级别的内存压力将导致系统内存不足，这将影响到整个节点及其上运行的所有 Pod。节点可以暂时离线直到内存已经回收为止。")]),s._v(" "),t("p",[s._v("为了防止（或减少可能性）系统内存不足，kubelet 提供了 资源不足 管理。驱逐操作只支持"),t("code",[s._v("memory")]),s._v(" 和 "),t("code",[s._v("ephemeral-storage")]),s._v("。通过"),t("code",[s._v("--eviction-hard")]),s._v("标志预留一些内存后，当节点上的可用内存降至保留值以下时，"),t("code",[s._v("kubelet")]),s._v("将尝试驱逐 Pod。 如果节点上不存在系统守护进程，Pod 将不能使用超过"),t("code",[s._v("capacity-eviction-hard")]),s._v("所指定的资源量。因此，为驱逐而预留的资源对 Pod 是不可用的")]),s._v(" "),t("p",[s._v("上面我们还提到可分配的资源还和 kubelet 驱逐的阈值有关。节点级别的内存压力将导致系统内存不足，这将影响到整个节点及其上运行的所有 Pod，节点可以暂时离线直到内存已经回收为止，我们可以通过配置 kubelet 驱逐阈值来防止系统内存不足。驱逐操作只支持内存和 ephemeral-storage 两种不可压缩资源。当出现内存不足时，调度器不会调度新的 Best-Effort QoS Pods 到此节点，当出现磁盘压力时，调度器不会调度任何新 Pods 到此节点。")]),s._v(" "),t("p",[s._v("我们这里为master节点配置如下所示的硬驱逐阈值：")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /var/lib/kubelet/config.yaml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("evictionHard")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置硬驱逐阈值")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory.available")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"300Mi"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodefs.available")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10%"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enforceNodeAllocatable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" pods\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("reserved\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubeReserved")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 500m\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1Gi\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ephemeral-storage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1Gi\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubeReservedCgroup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /kubelet.slice\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])])]),t("h3",{attrs:{id:"显式保留的-cpu-列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显式保留的-cpu-列表"}},[s._v("#")]),s._v(" 显式保留的 CPU 列表")]),s._v(" "),t("p",[t("strong",[s._v("特性状态：")]),s._v(" "),t("code",[s._v("Kubernetes v1.17 [stable]")])]),s._v(" "),t("p",[t("strong",[s._v("Kubelet 标志")]),s._v(": "),t("code",[s._v("--reserved-cpus=0-3")])]),s._v(" "),t("p",[t("code",[s._v("reserved-cpus")]),s._v(" 旨在为操作系统守护程序和 kubernetes 系统守护程序保留一组明确指定编号的 CPU。"),t("code",[s._v("reserved-cpus")]),s._v(" "),t("u",[s._v("适用于不打算针对 cpuset 资源为操作系统守护程序和 kubernetes 系统守护程序定义独立的顶级 cgroups 的系统。")])]),s._v(" "),t("p",[s._v("如果 Kubelet 没有 指定参数 "),t("code",[s._v("--system-reserved-cgroup")]),s._v(" 和 "),t("code",[s._v("--kube-reserved-cgroup")]),s._v("，则 "),t("code",[s._v("reserved-cpus")]),s._v(" 的设置将优先于 "),t("code",[s._v("--kube-reserved")]),s._v(" 和 "),t("code",[s._v("--system-reserved")]),s._v(" 选项。")]),s._v(" "),t("h3",{attrs:{id:"实施节点可分配约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实施节点可分配约束"}},[s._v("#")]),s._v(" 实施节点可分配约束")]),s._v(" "),t("p",[t("strong",[s._v("Kubelet 标志")]),s._v(": "),t("code",[s._v("--enforce-node-allocatable=pods[,][system-reserved][,][kube-reserved]")])]),s._v(" "),t("p",[s._v("调度器将 'Allocatable' 视为 Pod 可用的 "),t("code",[s._v("capacity")]),s._v("（资源容量）。")]),s._v(" "),t("p",[t("code",[s._v("kubelet")]),s._v(" 默认对 Pod 执行 'Allocatable' 约束。 无论何时，如果所有 Pod 的总用量超过了 'Allocatable'，驱逐 Pod 的措施将被执行。可通过设置 kubelet "),t("code",[s._v("--enforce-node-allocatable")]),s._v(" 标志值为 "),t("code",[s._v("pods")]),s._v(" 控制这个措施。")]),s._v(" "),t("p",[s._v("可选地，通过在同一标志中同时指定 "),t("code",[s._v("kube-reserved")]),s._v(" 和 "),t("code",[s._v("system-reserved")]),s._v(" 值， 可以使 "),t("code",[s._v("kubelet")]),s._v(" 强制实施 "),t("code",[s._v("kube-reserved")]),s._v(" 和 "),t("code",[s._v("system-reserved")]),s._v("约束。")]),s._v(" "),t("blockquote",[t("p",[s._v("请注意，要想执行 "),t("code",[s._v("kube-reserved")]),s._v(" 或者 "),t("code",[s._v("system-reserved")]),s._v(" 约束，需要对应设置 "),t("code",[s._v("--kube-reserved-cgroup")]),s._v(" 或者 "),t("code",[s._v("--system-reserved-cgroup")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);