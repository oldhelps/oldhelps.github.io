/**
 * copyright by 2022 oldhelps
 * index.js
 * type=text/javascript
 * GitHub:https://github.com/oldhelps
 * E-mail: oldhelps@126.com
 */
$(function(){
	$(".dropdown-toggle").on("mouseover",function(){      
		$(this).dropdown("toggle")
	 });
	$("#myMenu").on("mouseout",function(){
		$(this).dropdown("toggle")
	 });
	 $("#box button").css("background","blue")
	 $("#box button").css("color","white")
	 $("#btn").click(function(){
		var uName=$("#uname").val();
		if (uName!=="oldhelps") {
			$("#err").html("用户名错误！")
			return false
		} else if($("#upwd").val()!=="szs20110811") {
			$("#err").html("密码错误！")
        return false
		}
		else{
			$("#username").html("oldhelps")
		}
	 }) 
	 $(window).on("resize",function(){
		var clientW=$(window).width();
		console.log("屏幕宽度---")
		console.log(clientW);
		var isShowBigImage=clientW>=800;
		var $allItems=$("#oh-carousel .item");
		console.log("轮播图项目---")
		console.log($allItems)
		$allItems.each(function(index,item){
			var src=isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img")
			var imgUrl='url("' + src +'")';
			$(item).css({ 
				backgroundImage:imgUrl
			});
			if(!isShowBigImage){
				var $img="<img src='"+ src +"'>";
				$(item).empty().append($img);
				console.log("轮播图<img>标签---")
				console.log($img)
			}
			else{
				$(item).empty();
			}
		});
		
	})
	$(window).trigger("resize");
})