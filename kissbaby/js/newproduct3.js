/*=====================================================*/
	<!--/*====================获取json==============================*/
	window.onload = function(){
		
		$.ajax({
			url:"../js/newjson3.json",
			type:"get",
			success :function(json){
				var str = "";
				for(var attr in  json){
					console.log(json[attr].length);
					for(var i = 0 ;i<json[attr].length;i++){
					str += `
					<div id="lidiv">
					<div class="ntop">
						<a href="#"><img src=${"../img/"+json[attr][i].img}></a>
						<p><a href="#">${json[attr][i].cont}</a></p>
						<span><b>${json[attr][i].price}</b><i>${json[attr][i].guo}
</i></span>
					<div>
						<span class="sp1">
							<div class="conten">1</div>
							<a href="javascript:;" class="add">+</a>
							<a href="javascript:;"  class="jian">-</a>
						</span>
						<span class="sp2">加入购物车</span>
						<span class="sp3" title="点击收藏">收藏</span>
					</div>
					</div>
				</div>`;
				$("#contient-content").html(str);
				var value = 1
$("#new .new  div .ntop div .sp1 .add").click(function(){
	$(this).prev().html(""+(++value));
})
$("#lidiv").click(function(){
	location.href="detail_page .html";
})
$("#new .new  div .ntop div .sp1 .jian").click(function(){
	if(value==0){
		value=0;
	}else{
		$(this).prev().prev().html(""+(--value));
	}                                            
})
var   flage=true;
$("#new .new  div .ntop div .sp3").click(function(){
	if(flage){
		$(this).html("已收藏")
				flage=false;
	}else{
		$(this).html("收藏")
		flage=true;
	}
})
$("#new .new #lidiv .ntop div .sp2").click(function(){
	confirm("您确定要加入购物车吗?")
	
})
				}
				}
			}
			
		})
	}
	




