var group_photo = null;
document.addEventListener('touchmove', function (e) {
    e.preventDefault()
}); //禁止屏幕上下拖动

var loader = new createjs.LoadQueue(false);
loader.setMaxConnections(100); //设置并发数 http请求默认为4
loader.maintainScriptOrder = true; //一定要将其设置为 true, 否则设置并发数不起作用
loader.loadManifest([ //要预加载的项
    'images/bg.jpg',
    'images/ccc.png',
    'images/p_1.png',
    'images/p_10.png',
    'images/p_11.png',
    'images/p_12.png',
    'images/p_13.png',
    'images/p_14.png',
    'images/p_2_1.png',
    'images/p_2_2.png',
    'images/p_3.png',
    'images/p_4.png',
    'images/p_5.png',
    'images/p_6.png',
    'images/p_7.png',
    'images/p_8.png',
    'images/p_9.png',
    'images/t1.png',
    'images/t2.png',
    'images/t3.png',
    'images/t3_bt.png',
    'images/tx.png',
    'images/ji.png',
]);
loader.on("progress", function (event) {
    //document.querySelector('#txt-loading').innerText = "已加载 " + (loader.progress*100|0) + " %";
    $('.ld').text('页面加载中...' + (loader.progress * 100 | 0) + " %");
    // $('.ld_2').css('width',(loader.progress*100|0)/100*411 + "px");
});
loader.on('error', function (e) {
    console.log(e);
})
loader.on("complete", function (event) {
    console.log('全部加载完成');
    $('.bg').addClass('enter');
    $('#loading').fadeOut(600);
});

$(function () {

    /*获取头像*/
    document.querySelector('#upFile').addEventListener('change', function () {

        lrz(this.files[0], {
            width: 262
        }).then(function (rst) {
            // 上传成功时
            console.log(rst);
            document.querySelector('#upimg').src = rst.base64;
            group_photo = rst.base64;            
        }).catch(function (err) {
            // 处理失败会执行
            console.log(rst);
        }).always(function () {
            // 不管是成功失败，都会执行
            //console.log(rst);
        });
    });

    /*弹层*/
    $('.p_7').bind('touchend', function () {
        //$('.layer_1').addClass('show');
        //$('.layer_2').addClass('show');
        $('.layer_3').addClass('show');

        $('.t3_bt').bind('touchend', function() {
        if (group_photo) {
            $('.layer_3').removeClass('show');
                $('.layer_1').addClass('show');
                //$('.layer_2').addClass('show');
        } else {
            $('#tips').stop(true,false).fadeIn(300).delay(1000).fadeOut(300);
        }
    }); 
    });
    
    $('.x').bind('touchend', function () {
        $(this).parents('.layer').removeClass('show');
    });
});