$("#zhuce-a8").bind("click",function(){
	$("#zhuce-a21").css("display","block")
	$("#zhuce-a29").css("display","none")
	$("#zhuce-a8").css({"background":"blue","border-radius":"10px"})
	$("#zhuce-a7").css({"background":"none","border-radius":"10px"})
	location.href="denglu.html";
})

$("#zhuce-a7").bind("click",function(){
	$("#zhuce-a29").css("display","block")
	$("#zhuce-a21").css("display","none")
	$("#zhuce-a7").css({"background":"red","border-radius":"10px"})
	$("#zhuce-a8").css({"background":"none","border-radius":"10px"})
})

	var c=null;
	$("#zhuce-a11").bind("blur",function(){
		$a=$(this).val();
		$reg=/^\d{10}$/;
		if(  $reg.test($a)  ){
			$("#zhuce-a14").html("通过");
			$("#zhuce-a14").css("color","green");
			c=true;
		}else{
			$("#zhuce-a14").html("只能10位纯数字");
			$("#zhuce-a14").css("color","red");
			c=false;
		}
	})
	var d=null;
	$("#zhuce-a13").bind("blur",function(){
		$b=$("#zhuce-a13").val();
		$reg1=/^\w{6,}$/;
		if(  $reg1.test($b)  ){
			$("#zhuce-a15").html("通过");
			$("#zhuce-a15").css("color","green");
			d=true;
		}else{
			$("#zhuce-a15").html("6-10位（字母，数字，下划线）");
			$("#zhuce-a15").css("color","red");
			d=false;
		}
	})
	
$("#zhuce-a20").bind("click",function(){
	var a=$("#zhuce-a11").val();
	var b=$("#zhuce-a13").val();
	if( c && d ){
		location.href=`zhuce.php?a=${a}&b=${b}`;
	}else{
		alert("注册失败");
	}
})
















