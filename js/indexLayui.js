layui.use(['layer', 'form'], function(){
    var layer = layui.layer
    var $=layui.jquery
    ,form = layui.form;
    layer.msg('欢迎━(*｀∀´*)ノ亻!');
    $(".urlbtn").click(function(){
        var url= window.location.href;
        layer.msg(url);
    })
  });