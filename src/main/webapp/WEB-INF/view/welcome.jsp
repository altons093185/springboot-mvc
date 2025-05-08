<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Welcome</title>
		</head>
	<body>
		<h1>
			歡迎 ${ name } 蒞臨 !
		</h1>
		<span>現在時刻:</span>
		<span id="clock"></span>
		
	</body>
	<script>
  function updateClock() {
    const now = new Date();
    const formatted = now.toLocaleString(); // 顯示格式可自訂
    document.getElementById("clock").innerText = formatted;
  }
  updateClock();
  setInterval(updateClock, 1000); // 每秒更新一次
</script>
</html>