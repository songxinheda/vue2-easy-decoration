## Commit 提交格式：

``` js
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

任意一行 commit 信息不得超过 100 个字符

### Revert

如果当前 commit 包含之前的 commit 的回滚操作, 则必须以 `revert: ` 开头, 后面跟着被撤销 commit 的 header. 在 Body 中只能这样写: `This reverts commit <hash>.`

e.g.

```
revert: refactor(root): Refact the framework

This reverts commit 667ecc1.
```

###  Header

header 是单独一行, 由 type 、 scope 、 subject 组成且其中每一个都是必须的

#### type 

用于提供说明本次提交的类型，只允许以下值：
- feat (添加新功能)
- fix (修补bug)
- docs (只有文档的改动)
- style (代码格式,比如说添加遗漏的分号,空格)
- refactor (代码重构)
- perf (性能优化)
- test (添加测试)
- chore (构建流程以及辅助工具的变动)

#### scope

可以使任意值, 不过我们这里为了便于管理，限制成三个值:
- root (全局范围)
- module (模块)
- location (局部功能)
- none (不影响, docs 和 style 使用)

#### subject

这个是改动内容的简单描述:
- 使用动词，第一人称现在时，比如 "change", 而不是 "changed" 或 "changes"
- 第一个字母小写
- 结尾不加句号（.）

### Body

不是必需的. 是对本次提交的详细描述, 可多行. 
- 就像 subject 一样, 比如 "change", 而不是 "changed" 或 "changes"
- 说明修改代码的目的并且与之前的代码作对比

### Footer

不是必需的. 用于记录本项目中因为 review 不通过而进行的修改. 如果是针对 review 进行的修改则是必需的



