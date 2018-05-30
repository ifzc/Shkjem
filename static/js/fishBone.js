$.fn.fishBone = function(data) {
    var colors = ['#F89782', '#1A84CE', '#F7A259', '#43A6DA', '#F9BF3B', '#88C7CC', '#EF6D5F', '#60A96E', '#F03852', '#3A9284'];

    ////对应插件颜色下标，8：红色、2：橘黄、4：黄色、7：绿色
    //var sourceDataColor = { "工作": 8, "运输": 2, "转移": 4, "在库": 7 };
    //var sourceDataColorDirection = { "工作": "top", "运输": "top", "转移": "top", "在库": "bottom" };

    //对应插件颜色下标，8：红色、2：橘黄、4：黄色、7：绿色
    var sourceDataColor = { "red": 8, "green": 7 };
    var sourceDataColorDirection = { "red": "top", "green": "bottom" };

    /**入口*/
    //1.创建dom
    $(this).children().remove();
    $(this).append(creataFishBone(data));
    //2.自适应
    var rowcount = fixWindow();
    //3.翻页滚动效果
    jQuery(".fishBone").slide({
        titCell: ".hd ul",
        mainCell: ".bd>ul",
        autoPage: true,
        effect: "left",
        autoPlay: false,
        scroll: rowcount,
        vis: rowcount
    });

    /**自适应 平均分布*/
    function fixWindow() {
        //item所占的宽度 = 自身宽度+marginleft
        var item = $(".fishBone .bd .item");
        var marginleft = parseInt(item.css('margin-left'));
        var item_w = item.width() + marginleft;

        //显示区域
        var bd_w = $(".fishBone .bd").width();
        //能显示的个数 取整
        var rowcount = parseInt(bd_w / item_w);
        if (rowcount > item.size()) {
            //rowcount = item.size();
            $(".fishBone .prevLeftImg,.fishBone .nextRightImg").hide();
        } else {
            $(".fishBone .prevLeftImg").hide();
        }
        //设置新的宽度使其平均分布
        var item_w_temp = bd_w / rowcount - marginleft;
        item.width(item_w_temp);
        return rowcount;
    };
    /**li左边框线颜色 border-left-color 动态获取*/
    function getColor(i) {
        var length = colors.length;
        var color = 'gray';
        if (i <= length - 1) {
            color = colors[i];
        } else {
            color = colors[i % length];
        }
        return color;
    };
    /**轴线上圆点位置纵坐标，见图片line-point.png*/
    function getLinePointY(i) {
        var length = colors.length;
        var y = 0;
        if (i <= length - 1) {
            y = -i * 20;
        } else {
            y = -(i % length) * 20;
        }
        return y + "px";
    };
    /**第一行日期圆点位置纵坐标，图片line-first.png*/
    function getLineFirstY(i) {
        var length = colors.length;
        var y = 0;
        if (i <= length - 1) {
            y = -i * 60;
        } else {
            y = -(i % length) * 60;
        }
        return y + "px";
    };
    /** .title-left背景纵坐标，0px开始，见图片title.png*/
    function getTitleLeftY(i) {
        var length = colors.length;
        var y = 0;//图片位置
        if (i <= length - 1) {
            y += -i * 60;
        } else {
            y += -(i % length) * 60;
        }
        return y + "px";
    };
    /** .title-center背景纵坐标，600px开始，见图片title.png*/
    function getTitleCenterY(i) {
        var length = colors.length;
        var y = -598;//图片位置
        if (i <= length - 1) {
            y += -i * 60;
        } else {
            y += -(i % length) * 60;
        }
        return y + "px";
    };
    /**.title-right背景纵坐标，1200px开始，见图片title.png*/
    function getTitleRightY(i) {
        var length = colors.length;
        var y = -1200;//图片位置
        if (i <= length - 1) {
            y += -i * 60;
        } else {
            y += -(i % length) * 60;
        }
        return y + "px";
    };
    /**创建dom结构*/
    function creataFishBone(data) {
        var fishBone = $("<div class='fishBone'/>");
        var wrapper = $("<div class='wrapper'></div>");
        var bd = $("<div class='bd'></div>");
        var ul_item = $("<ul/>");
        //遍历数据
        $(data).each(function (index) {
            var colorIndex = sourceDataColor[data[index].colorLevel] === undefined ? 7 : sourceDataColor[data[index].colorLevel];
            var colorDirection = sourceDataColorDirection[data[index].colorLevel] === undefined ? "bottom" : sourceDataColorDirection[data[index].colorLevel];
            console.log()
            var itemclass = itemClass(index);//显示在轴上方或下方标识 top/bottom
            var color = getColor(colorIndex);
            var lineFirstY = getLineFirstY(colorIndex);
            var titleLeftY = getTitleLeftY(index);//index
            var titleCenterY = getTitleCenterY(index);
            var titleRightY = getTitleRightY(index);

            var ul = $("<ul></ul>");
            //遍历封装属性
            if(itemclass=='top'){
                $.each(this, function (name, value) {
                    if (name === "Content") {
                        var postionY = colorDirection != "top" ? -31 : 9;
                        var postionC = colorDirection != "top" ? "colorD" : "";
                        //var vlist = value.split('=');
                        //var li = $("<li>" + vlist[0]+"<br/>" + vlist[1] + "</li>").css("margin", "0px 0px 0px -42px").css("height", "22px").css("line-height", "15px").css("text-align","center");//9是原计算结果的偏移量，显示位置正合适
                        var time = $("<li class='line-time'>" + data[index].Year + "</li>")
                        time.appendTo(ul)
                        var li = $("<li class='line-text'>" + value + "</li>")//9是原计算结果的偏移量，显示位置正合适
                        li.appendTo(ul);
                        var li2 = $("<li class='line-first'>&nbsp;</li>").addClass(postionC);
                        li2.appendTo(ul);
                        var li3 = $("<li>&nbsp;</li>").css("height","60px");
                        li3.appendTo(ul);
                        return;
                    }
                });
            }
            if(itemclass=="bottom"){
                $.each(this, function (name, value) {
                    if (name === "Content") {
                        var postionY = colorDirection != "bottom" ? -7 : 33;
                        var postionC = colorDirection != "bottom" ? "colorD" : "";
                        var li3 = $("<li>&nbsp;</li>").css("height", "60px");
                        li3.appendTo(ul);
                        var li2 = $("<li class='line-first'>&nbsp;</li>").addClass(postionC);
                        li2.appendTo(ul);
                        //var vlist = value.split('=');
                        //var li = $("<li>" + vlist[1] + "<br/>" + vlist[0] + "</li>").css("margin", "0px 0px 0px -42px").css("height", "22px").css("line-height", "15px").css("text-align", "center");//9是原计算结果的偏移量，显示位置正合适
                        var li = $("<li class='line-text'>" + value + "</li>")//9是原计算结果的偏移量，显示位置正合适
                        li.appendTo(ul);
                        var time = $("<li class='line-time'>" + data[index].Year + "</li>")
                        time.appendTo(ul)
                        return;
                    }
                });
            }
            //封装轴线上的圆点
            var point = $("<li class='line-last line-point'></li>").css('background-position', '0px 0' );
            point.appendTo(ul);

            //生成一个item（一个完整的案件）
            var li_item = $("<li class='item'></li>");
            var content = $("<div class='content'></div>");
            ul.appendTo(content);
            content.appendTo(li_item);
            li_item.addClass(itemClass(index)).appendTo(ul_item);
          li_item.addClass(data[index].emphasis ? 'isEmphasis': '')
        });
        ul_item.appendTo(bd);
        bd.appendTo(wrapper);

        var line = $("<div class='line'/>");
        var bgMsg = $("<div class='k-grid-norecords' style='font-size:14.5px;'>没有数据</div>");

        var l1 = $("<a class='prevLeftImg'></a>");
        var r1 = $("<a class='nextRightImg'></a>");

        if (data.length > 0)
            fishBone.append(wrapper).append(line).append(l1).append(r1);
        else
            fishBone.append(bgMsg);
        return fishBone;
    };
    /**item添加样式，显示在上方或下方*/
    function itemClass(index) {
        index += 1;
        if (index % 2 == 0) {
            //偶数显示到下方
            return "top";
        } else {
            //奇数显示到上方
            return "bottom";
        }
    }
}

