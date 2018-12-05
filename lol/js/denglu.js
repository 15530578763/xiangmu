$("#zhuce-a8").bind("click",function(){
	$("#zhuce-a21").css("display","block")
	$("#zhuce-a29").css("display","none")
	$("#zhuce-a8").css({"background":"red","border-radius":"10px"})
	$("#zhuce-a7").css({"background":"none","border-radius":"10px"})
})

$("#zhuce-a7").bind("click",function(){
	$("#zhuce-a29").css("display","block")
	$("#zhuce-a21").css("display","none")
	$("#zhuce-a7").css({"background":"red","border-radius":"10px"})
	$("#zhuce-a8").css({"background":"none","border-radius":"10px"})
	location.href="zhuce.html";
})

	var c=null;
	$("#zhuce-a23").bind("blur",function(){
		$a=$(this).val();
		$reg=/^\d{10}$/;
		if(  $reg.test($a)  ){
			$("#zhuce-a24").html("通过");
			$("#zhuce-a24").css("color","green");
			c=true;
		}else{
			$("#zhuce-a24").html("只能10位纯数字");
			$("#zhuce-a24").css("color","red");
			c=false;
		}
	})
	var d=null;
	$("#zhuce-a26").bind("blur",function(){
		$b=$(this).val();
		$reg1=/^\w{6,}$/;
		if(  $reg1.test($b)  ){
			$("#zhuce-a27").html("通过");
			$("#zhuce-a27").css("color","green");
			d=true;
		}else{
			$("#zhuce-a27").html("6-10位（字母，数字，下划线）");
			$("#zhuce-a27").css("color","red");
			d=false;
		}
	})
	
$("#zhuce-a28").bind("click",function(){
	var a=$("#zhuce-a23").val();
	var b=$("#zhuce-a26").val();
	if( c && d ){
		location.href=`denglu.php?a=${a}&b=${b} `;
	}else{
		alert("失败");
	}
})
















