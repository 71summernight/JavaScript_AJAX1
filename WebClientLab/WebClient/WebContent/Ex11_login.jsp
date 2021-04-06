<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	//영역(java 코드를 구현하는곳)
	//action="Ex11_login.jsp"
	//도착한 데이터 받기
	//<input type="text" name="id"
	//>input type="password" name="pwd"


	String userid=request.getParameter("id");
	String pwd=request.getParameter("pwd");
	
	//DB연결
	//insert into member(id,pwd)values(uesrid,pwd);

%>   
    
    
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h3>당신이 입력한 데이터</h3>
ID:<%=userid %><br>
PWD:<%=pwd %><br>
</body>
</html>