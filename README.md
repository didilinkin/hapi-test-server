# hapi-test-server
Hapi 测试服务器
> **特别说明**:
>
> 本项目 基于 `hapi@18.1.0`, 注意查看最新版的文档, 而不是 `hapi@17`!!!
>
> 数据库环境, 请自行配置 (PostgreSQL 最新版), 其他类型数据库不提供 帮助文档
>
> 请自行配置 **.env/** 文件夹, 可参考较早版本 **env/** 参考文件格式

### Tips
Swaggered 文档 - http://localhost:3000/doc

### 插件介绍
* hapi-swagger 自动生成 Swagger - [文档](https://github.com/glennjones/hapi-swagger/blob/master/optionsreference.md)
* hapi-swaggered 自带 swagger-ui 文档, 目前已切换至 `hapi-swaggered`
* @hapi/basic - [文档 (项目依赖包已迁移)](https://www.npmjs.com/package/@hapi/basic)
* Joi 校验数据机构 - [文档]()

### 关于 `commit message`
* `type`: commit 的类型
* `feat`: 新特性
* `fix`: 修改问题
* `refactor`: 代码重构
* `docs`: 文档修改
* `style`: 代码格式修改, 注意不是 css 修改
* `test`: 测试用例修改
* `chore`: 其他修改, 比如构建流程, 依赖管理.
* `scope`: commit 影响的范围, 比如: route, component, utils, build...
* `subject`: commit 的概述, 建议符合 50/72 formatting
* `body`: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting
* `footer`: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

### Hapi 插件收集

### Todo List
- [x] DB
- [ ] DB => model
- [ ] view & template pug2
- [ ] static
- [x] husky
- [ ] inert => public
