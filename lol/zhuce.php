
<?php
	header("content-type:text/html;charset=utf-8");
	$a=$_GET["a"];
	$b=$_GET["b"];
	
	include "public.php";
	$sql="SELECT * FROM `lol` WHERE `zhanghao`='$a'";
	$res=mysql_query($sql);
	//取出的是一个资源对象$arr
	$arr=mysql_fetch_array($res);
	if( $arr ){
		echo "<script>alert('账号已存在，请登录');location.href='denglu.html';</script>";
	}else{
		include "public.php";
		$sql="insert into lol(`zhanghao`,`mima`) values('$a','$b')";
		$row=mysql_query($sql);
		echo "<script>alert('注册成功');location.href='denglu.html';</script>";
	}
	
	


?>