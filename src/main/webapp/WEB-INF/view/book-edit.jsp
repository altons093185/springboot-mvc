<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<form method="post" action="/ssr/book/edit/${ book.id }">
			<input type="hidden" name="_method" value="PUT"/> <!-- 會把表單從post request改成 put request -->
			書名: <input type="text" name="name" value="${ book.name }" required/><br />
			價格: <input type="number" name="price" step="0.1" value="${ book.price }" required /><br />
			數量: <input type="number" name="amount" value="${ book.amount }" required /><br />
			出刊: 

				<input type="radio" id="ispub" name="pub" value="true"
				    <c:if test="${book.pub == true}">checked</c:if> />
				<label for="ispub">Yes</label>
				
				<input type="radio" id="notpub" name="pub" value="false"
				    <c:if test="${book.pub == false}">checked</c:if> />
				<label for="notpub">No</label>
			
				<br />
			<button type="submit">送出修改</button>
		</form>
	</div>
</body>
</html>