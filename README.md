# Shanghai kejian engineering management

> 科健工程管理有限公司企业官网 前端

一个业余时间（三周）的外包项目 最终成品：<http://www.shkjem.com>
主分支已更新至改进版，老版本源码移至 Release  

如果是学习的话推荐学习新版本 链接 <http://kejian.filog.cn/>
另外有些同学在问后端的代码 这里 <https://github.com/ifzc/KeJian.Core.Api>

## 新版本改进

1. 整体重构，结构升级为最新 vue-cli
2. 代码优化，去除引用的静态js文件
3. 图片加载加入懒加载，整体性能提升很大
4. 视频采用 vue-video-player 处理兼容性
5. 首页全屏滚动样式由静态文件 fullpage.js 改为 vue-awesome-swiper
6. 样式调整，提升了自适应能力

## 组件列表

1. vue-router
2. element-ui
3. axios
4. vue-video-player (视频组件)
5. vue-awesome-swiper (首页滚动组件)
6. vue-lazyload (图片懒加载)

## Project setup

``` powershell
npm install
```

### Compiles and hot-reloads for development

```powershell
npm run serve
```

### Compiles and minifies for production

```powershell
npm run build
```

### Docker

> 使用 Docker 发布镜像至镜像服务器
> 镜像地址（可拉取）：ccr.ccs.tencentyun.com/ifengzctest/kjweb:v1

```powershell
# 第一步构建镜像
docker build -t fengzctest.kjweb:v1 .

# 第二部登录镜像仓库
docker login --username 100001190206 ccr.ccs.tencentyun.com

# 查看镜像列表
docker images

# 添加Tag
docker tag [ImageId] ccr.ccs.tencentyun.com/ifengzctest/kjweb:v1 

# 推送镜像至镜像服务器
docker push ccr.ccs.tencentyun.com/ifengzctest/kjweb:[tag]
```
