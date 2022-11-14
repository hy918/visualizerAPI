# 后端可视化工具集
![License](https://img.shields.io/badge/license-MIT-yellow)
![Framework](https://img.shields.io/badge/framework-react-brightgreen)
![Language](https://img.shields.io/badge/language-javascript-brightgreen)

### 简介
使用`react`框架构建的一个将后端各类工具进行可视化的开源项目，旨在帮助后端开发者快速
进行开发，系统对接，数据库开发，代码审计，架构设计和学习。

### 使用方法
```shell
yarn install
npm run build
```
如果需要在本地使用，则执行 `yarn start`即可。

### 项目说明
可视化工具集，主要包含以下功能：

+ 已具备的功能
  - API-RBAC功能集管理：实现对单API和功能集的可视化配置
+ 开发中的功能
  - 代码生成管理
    + 自动生成Java中的Builder
    + 自动生成Java中的数据库层
    + 自动生成Java中的对接层
    + 自动生成Java中的Controller层
+ 近期规划的功能
  - 流程管理
  - 数据表管理
    + 数据表元数据管理
    + 以相同注释为维度进行管理
    + 以相同名字为维度进行管理
+ 远期规划的功能
  - 开发配置管理
  - 代码扫描
  - 自动化代码审计