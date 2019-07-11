<?php
	require "conn.php";//引入数据库连接的文件
	
	
	//1.获取前端传来的做唯一匹配的值
	
	if(isset($_POST['username']) || isset($_POST['submit'])){
		$username=@$_POST['username'];
	}else{
		exit('非法操作');
	}
	
	
	
	$query="select * from user where username='$username'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){
		echo 'false';
	}else{
		echo 'true';
	}
	
	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	if(isset($_POST['submit']) && $_POST['submit']=="注册"){
		$user=$_POST['username'];
		$pass=md5($_POST['password']);
		
		
		$query="insert user(uid,username,password,regdate) values(null,'$user','$pass',NOW())";
		mysql_query($query);
		header('location:http://mayzone360/src/script/shouye.html');
	}
?>