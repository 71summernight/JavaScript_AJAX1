<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript">
/*Jquery 제공하는 비동기함수(Ajax) 학습
 *https://api.jquery.com/category/ajax/
 *Jquery비동기 함수는 내부적으로:XmlHttpRequest 객체를 사용
 
 Ajax 
 Global Ajax Event Handlers(10%)
 Helper Functions(10%)
 Low-Level Interface: 30%(모든 옵션을 개발자 제어)>>$.ajax()
 Shorthand Metghods:50%(기본 옵션을 가지고 있는 함수)>>load(),get()
 	
 .load( url [, data ] [, complete ] )
 
 [url]
 Type:String 
 A string containing the URL to which the request is sent.
 
 [data] 
 Type: PlainObject or String
 A plain object or string that is sent to the server with the request.

 [complete]
 Type: Function( String responseText, String textStatus, jqXHR jqXHR )
 A callback function that is executed when the request completes.
 
 load 함수
 1. 서버에서 받은 데이터가 (html,text) 형식
 2. Client 정한 특정요소에 자동으로 매핑할 목적( 자동 innerHTML)
 
 [data]두번째 parameter 설정
 jsp?msg=hello
		 
 [data]두번째 parameter 객체설정(json)
 {name:"kglim", age:100}
 ?name=kglim&age=100
 
 */
$(function(){
	$('#btn').click(function(){
		//$('#display').load("Ex01_Server_Date.jsp"); simple 비동기
		$('#display').load("Ex01_Server_Date.jsp", {"msg":$('#msg2').val()},
				function(responseText,textStatus,xhr){ //xhr: xmlhttprequest의 줄임말
			//함수는 응답이 오면 readyState>>4 라면,, 호출
			//responseText: 서버가 응답한 결과물 (html,text)
			//textStatus(success,fail)
			//Status>>200,204,404,500
			
			if(textStatus=="success"){
				//응답4,status code:200
				console.log("responseText:" +responseText);
				
			}else{
				//응답4, status code: 500, 404
				console.log("response fail: "+xhr.status+", "+xhr.statusText);
				
			}
		});
	});
})

</script>
</head>
<body>
<h3>동기처리</h3>
<div>
<form action="Ex01_Server_Date.jsp" method="get">
<input type="text" name="msg" id="msg">
<input type="submit" value="동기전송">

</form>

<h3>비동기 처리</h3>
<input type="text" name="msg2" id="msg2">
<input type="button" id="btn" value="비동기전송">

<div id="display"></div>

</div>
</body>
</html>