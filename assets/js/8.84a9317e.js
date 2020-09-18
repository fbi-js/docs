(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{419:function(t,a,e){"use strict";e.r(a);var s=e(33),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"进阶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[t._v("#")]),t._v(" 进阶")]),t._v(" "),e("h2",{attrs:{id:"查看信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[t._v("#")]),t._v(" 查看信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi ls [item] [item]\n")])])]),e("p",[e("strong",[t._v("item")])]),t._v(" "),e("ul",[e("li",[t._v("空: 查看当前目录可用的任务和模板")]),t._v(" "),e("li",[t._v("config/configs : 查看 FBI 全局配置")]),t._v(" "),e("li",[t._v("store/stores : 查看模板仓库信息")]),t._v(" "),e("li",[t._v("util/utils : 查看可用工具类")])]),t._v(" "),e("p",[e("strong",[t._v("例子")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi ls\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi ls config\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi ls store\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi ls util\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi ls config store util\n")])])]),e("h3",{attrs:{id:"configs-全局配置说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configs-全局配置说明"}},[t._v("#")]),t._v(" "),e("code",[t._v("configs")]),t._v(" 全局配置说明")]),t._v(" "),e("ul",[e("li",[t._v("查看："),e("code",[t._v("$ fbi ls config")])]),t._v(" "),e("li",[t._v("设置："),e("code",[t._v("$ fbi set")])]),t._v(" "),e("li",[t._v("使用："),e("code",[t._v("ctx.configs")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("_DATA_ROOT (只读)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("本地仓库目录")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("/Users/{yourname}/.fbi")])]),t._v(" "),e("tr",[e("td",[t._v("_STORE_FILE (只读)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("仓库信息文件路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("/Users/{yourname}/.fbi/store.json")])]),t._v(" "),e("tr",[e("td",[t._v("_CUSTOM_CONFIG_FILE (只读)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自定义配置文件路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("/Users/{yourname}/.fbi/configs.custom.json")])]),t._v(" "),e("tr",[e("td",[t._v("LOG_LEVEL")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("日志级别")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("info")])]),t._v(" "),e("tr",[e("td",[t._v("LOG_PREFIX")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("日志前缀")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("FBI..>")])]),t._v(" "),e("tr",[e("td",[t._v("NPM")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("npm 别名")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("npm")])]),t._v(" "),e("tr",[e("td",[t._v("NPM_OPTIONS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("npm 参数")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("空")])]),t._v(" "),e("tr",[e("td",[t._v("TASK_PREFIX")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("任务模板前缀")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("fbi-task-")])]),t._v(" "),e("tr",[e("td",[t._v("TEMPLATE_PREFIX")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("项目模板前缀")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("fbi-project-")])]),t._v(" "),e("tr",[e("td",[t._v("TEMPLATE_TASK")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板内任务文件目录名")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("fbi")])]),t._v(" "),e("tr",[e("td",[t._v("TEMPLATE_CONFIG")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板配置文件路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("fbi/options.js")])]),t._v(" "),e("tr",[e("td",[t._v("TEMPLATE_INIT_IGNORE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("初始化项目时的忽略项")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("node_modules,.DS_Store,.svn,.git,"),e("br"),t._v("dst,dist,package.json,fbi,yarn.lock,"),e("br"),t._v("package-lock.json")])]),t._v(" "),e("tr",[e("td",[t._v("TEMPLATE_ADD_IGNORE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("添加模板时的忽略项")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v(".DS_Store,.svn,.git,dst,dist")])]),t._v(" "),e("tr",[e("td",[t._v("VERSION_SEPARATOR")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("版本分隔符")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("@")])])])]),t._v(" "),e("h3",{attrs:{id:"stores-仓库信息说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stores-仓库信息说明"}},[t._v("#")]),t._v(" "),e("code",[t._v("stores")]),t._v(" 仓库信息说明")]),t._v(" "),e("ul",[e("li",[t._v("查看： "),e("code",[t._v("$ fbi ls store")])]),t._v(" "),e("li",[t._v("使用："),e("code",[t._v("ctx.stores")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("示例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("project/task")])]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("/Users/{yourname}/.fbi/fbi-project-simple")])]),t._v(" "),e("tr",[e("td",[t._v("version")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板版本信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false: 不支持版本控制"),e("br"),t._v('{"latest":"v3.1.0","current":"v3.1.0","all":["v3.0.0","v3.1.0"]}')])]),t._v(" "),e("tr",[e("td",[t._v("repository")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板来源路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[e("a",{attrs:{href:"https://github.com/fbi-templates/fbi-project-mod.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/fbi-templates/fbi-project-mod.git"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Node service, npm module template.")])]),t._v(" "),e("tr",[e("td",[t._v("tasks")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("模板内含任务")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("build,serve")])])])]),t._v(" "),e("h3",{attrs:{id:"utils-内置工具类说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utils-内置工具类说明"}},[t._v("#")]),t._v(" utils 内置工具类说明")]),t._v(" "),e("ul",[e("li",[t._v("查看： "),e("code",[t._v("$ fbi ls util")])]),t._v(" "),e("li",[t._v("使用："),e("code",[t._v("ctx.utils[分类][方法] / ctx.utils[方法]")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("分类")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("fs")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("stat,mkdirp,exist,existSync,read,"),e("br"),t._v("write,copy,remove,list,isEmptyDir,homeDir")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("文件操作类")])]),t._v(" "),e("tr",[e("td",[t._v("style")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("bold,italic,underline,inverse,white,"),e("br"),t._v("grey,black,blue,cyan,green,magenta,red,"),e("br"),t._v("yellow,normal")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("文本样式类")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("isJson,isObject,isArray,isTaskFile,"),e("br"),t._v("isPath,isGitUrl")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("类型判断类")])]),t._v(" "),e("tr",[e("td",[t._v("git")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("is,clone,pull,tags,currentTag,"),e("br"),t._v("currentBranch,checkout,getBranchs")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("git 操作类")])]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("isAbsolute,isRelative,normalize,cwd,join,dir")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("path 操作类")])]),t._v(" "),e("tr",[e("td",[t._v("Logger")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("debug,info,success,warn,error,log")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("日志类， 使用方法 ：const log = new ctx.utils.Logger(); log.info(‘’)")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("argvParse")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("终端参数解析")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("assign")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("json 深合并")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("dateFormat")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("日期时间格式化")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("exec")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("spawn 的 promise 版")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("flow")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("终端交互方法")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("promisify")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("promise 化")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("sequence")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("顺序执行多个 promise")])])])]),t._v(" "),e("p",[t._v("特殊工具类 logger 使用："),e("code",[t._v("ctx.logger[方法]")])]),t._v(" "),e("h2",{attrs:{id:"运行任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行任务"}},[t._v("#")]),t._v(" 运行任务")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi <task> [params] [mode]\n")])])]),e("p",[e("strong",[t._v("task")])]),t._v(" "),e("ul",[e("li",[t._v("描述：任务名称或别名")]),t._v(" "),e("li",[t._v("类型：必需")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi <task> [params] [mode]\n")])])]),e("p",[e("strong",[t._v("task")])]),t._v(" "),e("ul",[e("li",[t._v("描述：任务名称或别名")]),t._v(" "),e("li",[t._v("类型：必需")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi s\n# 或\n$ fbi serve\n")])])]),e("p",[e("strong",[t._v("params")])]),t._v(" "),e("ul",[e("li",[t._v("描述：任务参数 (由模板任务开发者提供。接收参数并在任务文件里处理。)")]),t._v(" "),e("li",[t._v("类型：可选")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi s -port=4000  # 在4000端口启动服务\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi b -test       # 为测试环境构建项目\n")])])]),e("p",[e("strong",[t._v("mode")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模式")]),t._v(" "),e("li",[t._v("类型：可选")]),t._v(" "),e("li",[t._v("取值：\n"),e("ul",[e("li",[t._v("-T: 在模板环境")]),t._v(" "),e("li",[t._v("-G: 在全局环境")])])]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi s -T # 运行模板任务`s`\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi s -G # 运行全局任务`s`\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi s -port=4000 -G # 运行全局任务`s`，在 4000 端口启动服务\n")])])]),e("h2",{attrs:{id:"模板管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板管理"}},[t._v("#")]),t._v(" 模板管理")]),t._v(" "),e("h3",{attrs:{id:"添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加"}},[t._v("#")]),t._v(" 添加")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi add <template>\n")])])]),e("p",[e("strong",[t._v("template")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模板路径")]),t._v(" "),e("li",[t._v("类型：必需")]),t._v(" "),e("li",[t._v("取值：\n"),e("ul",[e("li",[t._v("远程 git 仓库地址，如：https://github.com/fbi-templates/fbi-project-vue.git")]),t._v(" "),e("li",[t._v("本地模板路径，如：path/to/local/template")]),t._v(" "),e("li",[t._v(". : 当前目录")])])]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi add https://github.com/fbi-templates/fbi-project-vue.git\n$ fbi add ./my-tmpl-a\n$ fbi add .\n")])])]),e("h3",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi up <template>\n$ fbi update <template>\n")])])]),e("p",[e("strong",[t._v("template")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模板名称")]),t._v(" "),e("li",[t._v("类型：必需")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi up vue\n$ fbi update vue\n")])])]),e("h3",{attrs:{id:"删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi rm <template>\n$ fbi remove <template>\n")])])]),e("p",[e("strong",[t._v("template")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模板名称")]),t._v(" "),e("li",[t._v("类型：必需")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi rm vue\n$ fbi remove vue\n")])])]),e("h2",{attrs:{id:"项目管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目管理"}},[t._v("#")]),t._v(" 项目管理")]),t._v(" "),e("h3",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi init <template>[@<version>] [project] [option]\n")])])]),e("p",[e("strong",[t._v("template")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模板名称或路径")]),t._v(" "),e("li",[t._v("类型：必需")]),t._v(" "),e("li",[t._v("取值：\n"),e("ul",[e("li",[t._v("远程 git 仓库地址，如：https://github.com/fbi-templates/fbi-project-vue.git")]),t._v(" "),e("li",[t._v("本地模板名称，如：vue")])])]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" path/to/project\n$ fbi init https://github.com/fbi-templates/fbi-project-vue.git\n$ fbi init vue\n")])])]),e("p",[e("strong",[t._v("version")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模板版本号")]),t._v(" "),e("li",[t._v("类型：可选")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" path/to/project\n$ fbi init vue@1.0.1\n")])])]),e("p",[e("strong",[t._v("project")])]),t._v(" "),e("ul",[e("li",[t._v("描述：项目路径")]),t._v(" "),e("li",[t._v("类型：可选")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi init vue@1.0.1 path/to/project\n")])])]),e("p",[e("strong",[t._v("option")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模板选项")]),t._v(" "),e("li",[t._v("类型：可选")]),t._v(" "),e("li",[t._v("取值：\n"),e("ul",[e("li",[t._v("空: 只有项目源码，和指定模板名称")]),t._v(" "),e("li",[t._v("-o/-option: 带上项目配置")]),t._v(" "),e("li",[t._v("-t/-task: 带上项目配置和任务")]),t._v(" "),e("li",[t._v("-a/-all: 所有文件(除.git 目录外)，基于已有模版生成新的模版")])])]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi init vue my-project\n$ fbi init vue my-project -o\n$ fbi init vue my-project -t\n$ fbi init vue my-project -a\n")])])]),e("blockquote",[e("p",[t._v("在已有项目上执行 "),e("code",[t._v("fbi init [option]")]),t._v(", 只更新指定的 option, 不更新 src。")])]),t._v(" "),e("h3",{attrs:{id:"切换模板版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换模板版本"}},[t._v("#")]),t._v(" 切换模板版本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fbi use <version>\n")])])]),e("p",[e("strong",[t._v("version")])]),t._v(" "),e("ul",[e("li",[t._v("描述：模板版本号")]),t._v(" "),e("li",[t._v("类型：必需")]),t._v(" "),e("li",[t._v("取值：可通过 fbi ls store 查看特定模板的版本号，详情参考")]),t._v(" "),e("li",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" path/to/project\n$ fbi init https://github.com/fbi-templates/fbi-project-vue.git\n$ fbi init vue\n")])])]),e("h2",{attrs:{id:"模板开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板开发"}},[t._v("#")]),t._v(" 模板开发")]),t._v(" "),e("h3",{attrs:{id:"创建目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录结构"}},[t._v("#")]),t._v(" 创建目录结构")]),t._v(" "),e("p",[t._v("按需求创建目录结构，推荐结构:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("|-- fbi-project-name\n|--|-- src\n|--|--|-- ...\n|--|-- fbi\n|--|--|-- options.js\n|--|--|-- build.js\n|--|-- package.json\n")])])]),e("h3",{attrs:{id:"任务开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务开发"}},[t._v("#")]),t._v(" 任务开发")]),t._v(" "),e("p",[t._v("1.fbi 目录内新建任务文件"),e("br"),t._v("\n2.正常编写任务文件"),e("br"),t._v("\n3.配置任务别名和说明"),e("br"),t._v("\n在 package.json 内添加 fbi 字段，示例：")]),t._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fbi"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"template"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fbi-project-mod"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tasks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alias"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Build the project."')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alias"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Compile the code and start the development server."')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ fbi "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" path/to/test/workspace\n$ fbi init 项目模板名称 项目名称   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可通过 fbi ls 查看刚刚添加成功的项目模板")]),t._v("\n\n\b$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" 项目目录\n$ fbi "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看可用任务")]),t._v("\n$ fbi 任务名称或任务别名\n")])])]),e("h3",{attrs:{id:"提交到-git-仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交到-git-仓库"}},[t._v("#")]),t._v(" 提交到 git 仓库")]),t._v(" "),e("p",[t._v("如果想共享给别人，请把 git 仓库地址告诉对方")]),t._v(" "),e("h2",{attrs:{id:"依赖管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖管理"}},[t._v("#")]),t._v(" 依赖管理")]),t._v(" "),e("h3",{attrs:{id:"自动安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动安装依赖"}},[t._v("#")]),t._v(" 自动安装依赖")]),t._v(" "),e("p",[t._v("在检测到所需依赖不存在的情况下，FBI 会自动安装如下依赖:")]),t._v(" "),e("ul",[e("li",[t._v("模板的开发依赖 "),e("code",[t._v("devDependencies")])]),t._v(" "),e("li",[t._v("项目的生产依赖 "),e("code",[t._v("dependencies")])])]),t._v(" "),e("p",[t._v("会触发自动安装依赖的情形:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$ fbi init <template>")])]),t._v(" "),e("li",[e("code",[t._v("$ fbi <task>")])])]),t._v(" "),e("h3",{attrs:{id:"手动安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动安装依赖"}},[t._v("#")]),t._v(" 手动安装依赖")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" path/to/project\n$ fbi "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h2",{attrs:{id:"接入-fbi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接入-fbi"}},[t._v("#")]),t._v(" 接入 FBI")]),t._v(" "),e("p",[t._v("待补充")])])}),[],!1,null,null,null);a.default=v.exports}}]);