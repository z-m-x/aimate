// tab切换
function setTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "cur": "";
        con.style.display = i == cursel ? "block": "none";
    }
}

// tab切换
function setlTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "cur": "";
        con.style.display = i == cursel ? "flex": "none";
    }
}

//点击弹出对象，获取对应ID
function ShowBox(zoomDisplay) {
    if (document.getElementById(zoomDisplay).style.display != "block") {
        document.getElementById(zoomDisplay).style.display = "block";
    } else {
        document.getElementById(zoomDisplay).style.display = "none";
    }
}

//点击弹出对象，获取对应ID
function Showpmbox(zoomDisplay,remove) {
    if (document.getElementById(zoomDisplay).style.display != "block") {
        document.getElementById(zoomDisplay).style.display = "block";
        document.getElementById(remove).style.display = "none";
    } else {
        document.getElementById(zoomDisplay).style.display = "none";
    }
}

//服务网点
function ShowCity(zoomDisplay,add) {
    var obj = $(this);
    var isClicked = obj.hasClass("cur") ? true : false;
    //$("#CareCombo li").removeClass("cur");
    $(".network-box .pic li").removeClass("cur");
    $(".network-box .text li").removeClass("cur");
    isClicked ? null : $("."+zoomDisplay).addClass("cur");
    isClicked ? null : $("."+add).addClass("cur"); 
    //alert($(this).attr("data"));
}

//关闭弹出层
function CloseBox(zoomDisplay) {
    document.getElementById(zoomDisplay).style.display = "none";
}

$(function() {

    //返回顶部
    $(function() {
        //$(window).scroll(function() {
        //    if ($(window).scrollTop() > 100) {
        //        $("#back").fadeIn(1500);
        //    } else {
        //        $("#back").fadeOut(1500);
        //    }
       // });

        //当点击跳转链接后，回到页面顶部位置

        $("#back").click(function() {
            $('body,html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });

    //顶部页眉动效
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('.header').addClass('show');
        } else if($(document).scrollTop() == 0) {
            $('.header').removeClass('show'); 
        }
    });
});
$(function() {
    //点击筛选
    $(".recruitment-list li").click(function() {
        var obj = $(this);
        var isClicked = obj.hasClass("cur") ? true : false;
        $(".recruitment-list li").removeClass("cur");
        isClicked : obj.removeClass("cur");
        isClicked ? null : obj.addClass("cur");
        //alert($(this).attr("data"));
    });
    //点击搜索结果展开
    $(".rt-item").click(function() {
        var obj = $(this);
        var isClicked = obj.hasClass("cur") ? true : false;
        //$("#CareCombo li").removeClass("cur");
        isClicked : obj.removeClass("cur");
        isClicked ? null : obj.addClass("cur");
        //alert($(this).attr("data"));
    });
    //手机点击菜单隐藏
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".topnav li").click(function() {
            document.getElementById('mnav').style.display = "none";
        });
    }
    //播放
    $(".icon-play").click(function() {
        videoplay.play();
        $(".icon-play").fadeOut();
    });
    //手机端点击菜单
    $('.icon-menu').click(function(){
        if($(this).hasClass('show')){
            $(this).removeClass('show');
        }else{
            $(this).addClass('show');
        }
    });
});

$(document).ready(function(){
    // $(".caret").mouseover(function(){
    var pmbox = document.getElementById("pmbox");
    $("#promenu").mouseover(function(){
        //  $(this).next("div").slideDown(500);
        pmbox.style.display = "block";
    });
    $(".promenu").mouseleave(function(){
        // $(this).children("div").slideUp(500);
        pmbox.style.display = "none";
        // pmbox.style.visibility = "visible";
    });
    
    //企业文化切换
    $(".ac-list li").hover(function(){
        $(".ac-list li").removeClass("cur");
        $(this).addClass("cur");
    });

});