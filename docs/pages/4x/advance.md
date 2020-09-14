# 进阶

## 查看信息

查看已添加的仓库及模板信息

```
$ fbi ls/list [factory] [flags]
```

**factory**

- 描述：仓库名字
- 类型：可选

**例子**

```
$ fbi ls factory-web
```

**flags**

- 描述：查看指定内容
- 类型：可选
- -a/--all：展示所有仓库信息
- -p/--projects：展示所有项目信息
- -v/--versions：展示 fbi 版本

**例子**

```
$ fbi ls -a
$ fbi ls -v
```

## 模板管理

### 通过远程仓库添加

```
$ fbi add <repositories...>
```

**repositories**

- 描述：模板仓库地址
- 类型：必需
- 取值：
  - 模板仓库模板模板名称，如：factory-web、fbi-js/factory-node
  - 远程 git 仓库地址，如：https://github.com/fbi-js/factory-web
  -
- 例子：

```
$ fbi add factory-web
# OR
$ fbi add fbi-js/factory-web
# OR
$ fbi add https://github.com/fbi-js/factory-web
```

### 添加本地模板

```
$ cd local-factory  // 切到本地要link的仓库目录下
$ fbi link
$ cd ..            // 切出当前仓库目录
$ fbi ls      // 查看仓库是否关联成功
```

### 解除本地模板链接

```
$ fbi unlink [factory]
```

**factory**

- 描述：模板名称
- 类型：可选
- 例子：

```
$ fbi unlink factory-web

# OR

$ cd factory-web // 先切换到需要unlink的仓库目录下
$ fbi unlink
```

### 移除模板

解除模板与 fbi 的链接并移除模板的本地文件

```
$ fbi remove <repositorie name>
```

**repositorie name**

- 描述：模板仓库地址
- 类型：必需
- 取值：factory 名字，如：factory-web
- 例子：

```
$ fbi remove factory-web
```

## 项目管理

### 初始化

```
$ fbi create <template|factory> [project] [-p]
```

**template**

- 描述：模板名称
- 类型：必需
- 取值：本地已添加模板名称，如：web
- 例子：

```shell
$ fbi create web
```

**factory**

- 描述：factory 名称
- 类型：必需
- 取值：
  - username/factory-name， 如：fbi-js/factory-web、factory-web
  - 完成的 factory 仓库地址，如：https://github.com/fbi-js/factory-web
- 例子：

```shell
$ fbi create fbi-js/factory-web
# OR
$ fbi create factory-web
# OR
$ fbi create https://github.com/fbi-js/factory-web
```

**project**

- 描述： 通过模板创建的新项目的名称
- 类型：可选
- 例子：

```shell
$ fbi create web my-project
```

**-p**

- 描述：package manage, 指定创建模板后安装相关依赖使用的包管理器，如： pnpm、yarn、npm，默认为 pnpm
- 类型：可选
- 例子：

```shell
$ fbi create web -p yarn
```

## 其他命令

```bash
$ fbi info // 查看context信息
$ fbi -v/--version
$ fbi -h/--help
```

## 模板开发

### 创建目录结构

按需求创建目录结构，推荐结构:

```
|-- fbi-project-name
|--|-- src
|--|--|-- commands // 模板运行的命令
|--|--|--|-- ...
|--|--|-- templates // 模板运行文件
|--|--|--|-- ...
|--|-- templates // 放模板文件夹
|--|--|-- ...
|--|-- .fbi.config.js // fbi配置文件，配置文档待补充
|--|-- package.json
```

### 任务开发

功能待开发

### 测试

开发及测试方式请参照 <https://github.com/fbi-js/dev-workspace>

### 提交到 git 仓库

如果想共享给别人，请把 git 仓库地址告诉对方
