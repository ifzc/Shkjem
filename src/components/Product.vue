<template>
    <div>
        <div class="pagetop" style="background-image: url(./static/pro_top.jpg);">
            <h1>产品中心</h1>
        </div>
        <div class="container overh">
            <div class="main">
                <div class="pull-left left-nav">
                    <div class="nav-list">
                        <div v-for="(item, index) in leftNavData" :key="item" @click="navActive(index)" :isContTab="index" :class="isContTab === index?'active':''">
                            <strong>{{item}}</strong>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="pull-right right-content">
                    <div class="line-group group_1">
                        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
                    </div>
                    <div class="line-group group_2">
                        <h3 class="ani-view fade-in-box">传统管理模式不足</h3>
                        <div class="triangle-facing-down ani-view fade-in-down"></div>
                        <div class="m_auto ani-view fade-in-down">
                            <div class="group-div ani-view fade-in-left">
                                <span><img src="../../static/product/product-group-icon_1.png" alt=""></span>
                                <p>质量检查、安全检查以抽查为主，难免存在遗漏，留下质量安全隐患。</p>
                            </div>
                            <div class="group-div ani-view fade-in-box">
                                <span><img src="../../static/product/product-group-icon_2.png" alt=""></span>
                                <p>数据统计、数据分析的缺失，无法为统计、分析、项目评估等工作提供数据支撑。</p>
                            </div>
                            <div class="group-div ani-view fade-in-right">
                                <span><img src="../../static/product/product-group-icon_3.png" alt=""></span>
                                <p>检查工作和检查记录文件脱节，无法做到同步对应；缺少影像文档，无法做到可追溯性。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="line-group group_3">
                        <h3 class="ani-view fade-in-up">平台目标</h3>
                        <h3 class="ani-view fade-in-box">TARGET</h3>
                        <div class="triangle-facing-down ani-view fade-in-down"></div>
                        <div class="group_img ani-view fade-in-box">
                            <img src="../../static/product_group_3_img.png" alt="">
                        </div>
                    </div>
                    <div class="line-group group_4">
                        <h3 class="ani-view fade-in-up">功能模块</h3>
                        <h3 class="ani-view fade-in-box">MODULAR</h3>
                        <div class="triangle-facing-down ani-view fade-in-down"></div>
                        <div class="group-div">
                            <ul style="margin-left: 10%">
                                <li class=" ani-view fade-in-right">
                                    <span><img src="../../static/product/product-group_4-icon_1.png" alt=""></span>质量控制模块</li>
                                <li class=" ani-view fade-in-right">
                                    <span><img src="../../static/product/product-group_4-icon_2.png" alt=""></span>知识库模块</li>
                                <li class=" ani-view fade-in-right">
                                    <span><img src="../../static/product/product-group_4-icon_3.png" alt=""></span>信息流程模块</li>
                                <li class=" ani-view fade-in-right">
                                    <span><img src="../../static/product/product-group_4-icon_4.png" alt=""></span>定位复核模块</li>
                            </ul>
                            <ul class=" ani-view fade-in-box" style="width: 35%;">
                                <img src="../../static/product_group_4_img.png" style="width: 100%;" alt="">
                            </ul>
                            <ul style="margin-right: 10%">
                                <li class=" ani-view fade-in-left">信息处理模块
                                    <span><img src="../../static/product/product-group_4-icon_5.png" alt=""></span>
                                </li>
                                <li class=" ani-view fade-in-left">材料设备模块
                                    <span><img src="../../static/product/product-group_4-icon_6.png" alt=""></span>
                                </li>
                                <li class=" ani-view fade-in-left">进度控制模块
                                    <span><img src="../../static/product/product-group_4-icon_7.png" alt=""></span>
                                </li>
                                <li class=" ani-view fade-in-left">安全管理模块
                                    <span><img src="../../static/product/product-group_4-icon_8.png" alt=""></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../router/http";
import Img from '../../static/pro_top.jpg'

const leftNav = ['视频播放', '模式的不同', '平台目标', '功能模块']
const heights = [560, 1150, 1600, 2350]


export default {
    data () {
        return {
            img: Img,
            leftNavData: [],
            isContTab: 0,
            playerOptions: {
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: true, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: "",

                    // 默认SRC
                    src: 'https://www.apple.com/105/media/cn/iphone-8/2017/95d4d604-018c-4bb3-a900-2d84eb37a5d7/tv-spots/portraits-of-her/iphone-8-portraits-of-her-cn-20171002_1280x720h.mp4',

                }],
                poster: "../../assets/images/case_head_bg.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                }
            }
        }
    },
    mounted () {
        this.leftNavData = leftNav
        axios
            .get("/DataDictionary/GetDataDictionaryAll", {
                params: {
                    key: "产品视频链接"
                }
            })
            .then(response => {
                let videourl = response.data[0].Content;
                this.playerOptions.sources[0].src = videourl
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    methods: {
        navActive (i) {
            if (window.ActiveXObject || "ActiveXObject" in window) {
                console.log("ie")
                this.isContTab = i
            } else {
                console.log("not ie")

                clearInterval(prsetinterval);

                this.isContTab = i
                let height = heights[i]
                let he = window.scrollY
                console.log(he)
                if (he == height) {
                    return;
                }
                let isup = he < height
                // 通过需要滚动距离取绝对值 得到滚动速度
                let spi = Math.abs(he - height) / 100
                // 取整 向上保留
                spi = Math.ceil(spi)
                // 取整 四舍五入 Math.round(spi)
                console.log(spi)
                // 开始操纵滚动条
                let count = 0
                var prsetinterval = setInterval((function () {
                    return function () {
                        if (he > height - (spi / 2) - 1 && he < height + (spi / 2) + 1) {
                            clearInterval(prsetinterval);
                        }
                        if (isup) {
                            he = he + spi
                            window.scrollTo(0, he)
                        }
                        else {
                            he = he - spi
                            window.scrollTo(0, he)
                        }
                        // 防止因为兼容性导致的死循环
                        count++
                        if (count > 2500) {
                            clearInterval(prsetinterval);
                        }
                    }
                })(), 1)
            }
        }
    },
    components: {
    }
}
</script>

<style scoped lang="less">
@import "product";
.main {
  width: 80.82%;
  margin: 0 auto;
}
</style>
