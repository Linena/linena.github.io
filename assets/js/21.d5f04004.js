(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{456:function(e,n,t){"use strict";t.r(n);var s=t(12),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Dockerfile")]),e._v(" "),t("ul",[t("li",[e._v("from")]),e._v(" "),t("li",[e._v("label")]),e._v(" "),t("li",[e._v("run 执行命令并创建新的image layer")]),e._v(" "),t("li",[e._v("workdir 除了设置文件目录")]),e._v(" "),t("li",[e._v("add 添加并解压")]),e._v(" "),t("li",[e._v("copy 复制文件")]),e._v(" "),t("li",[e._v("env")]),e._v(" "),t("li",[e._v("volume")]),e._v(" "),t("li",[e._v("network")]),e._v(" "),t("li",[e._v("cmd 设置容器"),t("strong",[e._v("启动后")]),e._v("执行的命令")]),e._v(" "),t("li",[e._v("entrypoint 设置同期"),t("strong",[e._v("启动时")]),e._v("运行的命令")])]),e._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" centos\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("LABEL")]),e._v(" author=orangbus\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" yum install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("y vim\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WORKDIR")]),e._v(" /home/Code\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ENV")]),e._v(" PHP_VERSION 7.4\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" yum install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("y mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("server="),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${PHP_VERSION}"')]),e._v("\n")])])]),t("p",[t("strong",[e._v("shell:")]),e._v(" entrypoint echo $name")]),e._v(" "),t("p",[t("strong",[e._v("exec:")]),e._v('  entrypoint ["/bin/bash","-c","echo $name"]')]),e._v(" "),t("p",[e._v("删除退出的容器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker rm $(docker ps -qa)\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('## emby \nEMBY_IMAGE=emby/embyserver\nEMBY_HTTP_PORT=8085\nEMBY_HTTPS_PORT=8086\nEMBY_CONFIG_PATH=./emby/config\nEMBY_SHAREDIR_PATH=./emby/gd\n\n# emby\n    emby:\n      container_name: emby\n      image: ${EMBY_IMAGE}\n      restart: always\n      ports:\n      - "${EMBY_HTTP_PORT}:8096"\n      - "${EMBY_HTTPS_PORT}:8920"\n      environment:\n        UID: 1000\n        GID: 100\n        GIDLIST: 100\n        DEVICE: /dev/dri:/dev/dri\n        RUNTIME: nvidia\n      volumes:\n      - ${EMBY_CONFIG_PATH}:/config\n      - ${EMBY_SHAREDIR_PATH}:/mnt/gd\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);