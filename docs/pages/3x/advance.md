# 进阶

## 查看信息

```
$ fbi ls [item] [item]
```

**item**

- 空: 查看当前目录可用的任务和模板
- config/configs : 查看 FBI 全局配置
- store/stores : 查看模板仓库信息
- util/utils : 查看可用工具类

**例子**

```
$ fbi ls
```

```
$ fbi ls config
```

```
$ fbi ls store
```

```
$ fbi ls util
```

```
$ fbi ls config store util
```

### `configs` 全局配置说明

- 查看：`$ fbi ls config`
- 设置：`$ fbi set`
- 使用：`ctx.configs`

| 项                          |         说明         |                                                                                         默认值 |
| --------------------------- | :------------------: | ---------------------------------------------------------------------------------------------: |
| \_DATA_ROOT (只读)          |     本地仓库目录     |                                                                         /Users/{yourname}/.fbi |
| \_STORE_FILE (只读)         |   仓库信息文件路径   |                                                              /Users/{yourname}/.fbi/store.json |
| \_CUSTOM_CONFIG_FILE (只读) |  自定义配置文件路径  |                                                     /Users/{yourname}/.fbi/configs.custom.json |
| LOG_LEVEL                   |       日志级别       |                                                                                           info |
| LOG_PREFIX                  |       日志前缀       |                                                                                         FBI..> |
| NPM                         |       npm 别名       |                                                                                            npm |
| NPM_OPTIONS                 |       npm 参数       |                                                                                             空 |
| TASK_PREFIX                 |     任务模板前缀     |                                                                                      fbi-task- |
| TEMPLATE_PREFIX             |     项目模板前缀     |                                                                                   fbi-project- |
| TEMPLATE_TASK               | 模板内任务文件目录名 |                                                                                            fbi |
| TEMPLATE_CONFIG             |   模板配置文件路径   |                                                                                 fbi/options.js |
| TEMPLATE_INIT_IGNORE        | 初始化项目时的忽略项 | node_modules,.DS_Store,.svn,.git,<br>dst,dist,package.json,fbi,yarn.lock,<br>package-lock.json |
| TEMPLATE_ADD_IGNORE         |  添加模板时的忽略项  |                                                                   .DS_Store,.svn,.git,dst,dist |
| VERSION_SEPARATOR           |      版本分隔符      |                                                                                              @ |

## 运行任务

```
$ fbi <task> [params] [mode]
```

**task**

- 描述：任务名称或别名
- 类型：必需
- 例子：

```
$ fbi <task> [params] [mode]
```

**task**

- 描述：任务名称或别名
- 类型：必需
- 例子：

```
$ fbi s
# 或
$ fbi serve
```

**params**

- 描述：任务参数 (由模板任务开发者提供。接收参数并在任务文件里处理。)
- 类型：可选
- 例子：

```
$ fbi s -port=4000  # 在4000端口启动服务
```

```
$ fbi b -test       # 为测试环境构建项目
```

**mode**

- 描述：模式
- 类型：可选
- 取值：
  - -T: 在模板环境
  - -G: 在全局环境
- 例子：

```
$ fbi s -T # 运行模板任务`s`
```

```
$ fbi s -G # 运行全局任务`s`
```

```
$ fbi s -port=4000 -G # 运行全局任务`s`，在 4000 端口启动服务
```

## 模板管理

### 添加

```
$ fbi add <template>
```

**template**

- 描述：模板路径
- 类型：必需
- 取值：
  - 远程 git 仓库地址，如：https://github.com/fbi-templates/fbi-project-vue.git
  - 本地模板路径，如：path/to/local/template
  - . : 当前目录
- 例子：

```
$ fbi add https://github.com/fbi-templates/fbi-project-vue.git
$ fbi add ./my-tmpl-a
$ fbi add .
```

### 更新

```
$ fbi up <template>
$ fbi update <template>
```

**template**

- 描述：模板名称
- 类型：必需
- 例子：

```
$ fbi up vue
$ fbi update vue
```

### 删除

```
$ fbi rm <template>
$ fbi remove <template>
```

**template**

- 描述：模板名称
- 类型：必需
- 例子：

```
$ fbi rm vue
$ fbi remove vue
```

## 项目管理

### 初始化

```
$ fbi init <template>[@<version>] [project] [option]
```

**template**

- 描述：模板名称或路径
- 类型：必需
- 取值：
  - 远程 git 仓库地址，如：https://github.com/fbi-templates/fbi-project-vue.git
  - 本地模板名称，如：vue
- 例子：

```shell
$ cd path/to/project
$ fbi init https://github.com/fbi-templates/fbi-project-vue.git
$ fbi init vue
```

**version**

- 描述：模板版本号
- 类型：可选
- 例子：

```shell
$ cd path/to/project
$ fbi init vue@1.0.1
```

**project**

- 描述：项目路径
- 类型：可选
- 例子：

```
$ fbi init vue@1.0.1 path/to/project
```

**option**

- 描述：模板选项
- 类型：可选
- 取值：
  - 空: 只有项目源码，和指定模板名称
  - -o/-option: 带上项目配置
  - -t/-task: 带上项目配置和任务
  - -a/-all: 所有文件(除.git 目录外)，基于已有模版生成新的模版
- 例子：

```
$ fbi init vue my-project
$ fbi init vue my-project -o
$ fbi init vue my-project -t
$ fbi init vue my-project -a
```

> 在已有项目上执行 fbi init [option], 只更新指定的 option, 不更新 src。

### 切换模板版本

```
$ fbi use <version>
```

**version**

- 描述：模板版本号
- 类型：必需
- 取值：可通过 fbi ls store 查看特定模板的版本号，详情参考
- 例子：

```shell
$ cd path/to/project
$ fbi init https://github.com/fbi-templates/fbi-project-vue.git
$ fbi init vue
```

## 模板开发

### 创建目录结构

按需求创建目录结构，推荐结构:

```
|-- fbi-project-name
|--|-- src
|--|--|-- ...
|--|-- fbi
|--|--|-- options.js
|--|--|-- build.js
|--|-- package.json
```

### 任务开发

1.fbi 目录内新建任务文件  
2.正常编写任务文件  
3.配置任务别名和说明  
在 package.json 内添加 fbi 字段，示例：

```JSON
"fbi": {
    "template": {
      "name": "fbi-project-mod"
    },
    "tasks": {
      "build": {
        "alias": "b",
        "desc": "Build the project."
      },
      "serve": {
        "alias": "s",
        "desc": "Compile the code and start the development server."
      }
    }
  }
```

### 测试

```shell
$ fbi add .

$ cd path/to/test/workspace
$ fbi init 项目模板名称 项目名称   # 可通过 fbi ls 查看刚刚添加成功的项目模板

$ cd 项目目录
$ fbi ls # 查看可用任务
$ fbi 任务名称或任务别名
```

### 提交到 git 仓库

如果想共享给别人，请把 git 仓库地址告诉对方

## 依赖管理

### 自动安装依赖

在检测到所需依赖不存在的情况下，FBI 会自动安装如下依赖:

- 模板的开发依赖 `devDependencies`
- 项目的生产依赖 `dependencies`

会触发自动安装依赖的情形:

- `$ fbi init <template>`
- `$ fbi <task>`

### 手动安装依赖

```shell
$ cd path/to/project
$ fbi install
```

## 接入 FBI

待补充
