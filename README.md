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

### 项目规划
可视化工具集，主要包含以下功能：

+ 已具备的功能
  - API-RBAC功能集管理：实现对单API和功能集的可视化配置
  - 自动生成Java中的Builder
  - 自动生成Java中的数据库层  
+ 开发中的功能
  - 代码生成管理
    + Json转Java对象
    + 自动生成Java中的对接层
    + 自动生成Java中的Controller层
+ 近期规划的功能
  - 博客发布
    + 博客管理、粉丝管理等等
    + 可视化图表  
  - 流程管理
  - 数据表管理
    + 数据表元数据管理
    + 以相同注释为维度进行管理
    + 以相同名字为维度进行管理
+ 远期规划的功能
  - 开发配置管理
  - 代码扫描
  - 自动化代码审计

### 项目介绍
![登录](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170047896-fc91f7b8-f059-4738-b1ab-5ad2838de475.png)

#### API管理
![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170309061-6186feaa-fdeb-40eb-93a3-44eea7bbc8bb.png)
可以查看关联详情，并绑定或解除关联
![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170365409-9497d6a0-01f8-458c-adf9-3a72bcf7ab1f.png)
![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170422930-b42141aa-b4c4-464f-bfb5-ab55f937070f.png)
同样的在另一个角度也可以做相同的事情，即绑定或解除关联
![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170477110-3a477713-12da-4900-9c90-12dd8e21e6f1.png)
![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170497211-f658ee40-b9dd-454f-9fb9-4f9748191162.png)

#### 代码生成工具
##### 自动生成builder（项目尽量不使用lombok）
新增

![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170669930-7e1362cb-6db3-4060-aec2-e576d99a919c.png)

详情和下载

![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170729183-a63e738a-415d-4d1c-88f1-0e6e24375f1f.png)

##### 数据库层生成
新增

![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170797228-b0ba0d78-48ae-43a7-a155-adf1ec33a0c6.png)

详情和下载

![](https://cdn.nlark.com/yuque/0/2022/png/25830095/1669170850601-70f59a0b-f71f-4e75-a733-4fe4e05afbeb.png)