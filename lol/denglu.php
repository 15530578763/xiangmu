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
		if( $b== $arr["mima"]){
			echo "<script>alert('密码正确');location.href='index.html';</script>";
		}else{
			echo "<script>alert('密码错误');location.href='denglu.html';</script>";
		}
	}else{
		echo "<script>alert('账号不存在');location.href='zhuce.html';</script>";
	}
	
	
?>