(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{413:function(s,t,e){"use strict";e.r(t);var o=e(55),n=Object(o.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Linux常见错误排查")]),s._v(" "),e("h2",{attrs:{id:"sshd-no-hostkeys-available-exiting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sshd-no-hostkeys-available-exiting"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://www.cnblogs.com/tianziru/p/5522350.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("sshd: no hostkeys available — exiting"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("在开启SSHD服务时报错.\n==sshd re-exec requires execution with an absolute path==\n用绝对路径启动,也报错如下:")]),s._v(" "),e("p",[s._v("==Could not load host key: /etc/ssh/ssh_host_key\nCould not load host key: /etc/ssh/ssh_host_rsa_key\nCould not load host key: /etc/ssh/ssh_host_dsa_key\nDisabling protocol version 1. Could not load host key\nDisabling protocol version 2. Could not load host key\nsshd: "),e("strong",[s._v("no****hostkeysavailable")]),s._v(" — exiting==\n解决过程:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key\nssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key\n/usr/sbin/sshd\n")])])]),e("p",[s._v("如果上述两个文件存在，仍然出现这个错误，那么试试 chmod 600 上述两个文件。之后应该可以解决。")])])}),[],!1,null,null,null);t.default=n.exports}}]);