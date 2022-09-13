// 자바스크립트로 쿠키(Cookie) 읽기, 생성하기, 삭제하기
// 기본적인 방법 --> document.cookie = "name= ???; name2= ???; expires= ???; path= ???";


// 쿠키 읽기
function getCookie() {
	
	// 로컬에 저장된 쿠키 뿌려주기
	const allCookies = document.cookie;  // 하나의 문자열로 리턴 --> cookie1=value; cookie2=value; cookie3=value;
	console.log( typeof allCookies );  // string
	
	// if 조건문 --> 쿠키가 있으면
	if( allCookies != '' )
		alert( '저장된 쿠키의 값은 : ' + allCookies + "\n( 다시 방문해주셔서 환영합니다. )" );
	else
		alert( '저장된 쿠키가 없습니다. \n( 첫 방문을 환영합니다. )' );
	
}


// 쿠키 생성하기
function setCookie() {
	
	// 기본적인 날짜 출력 --> 날짜 쓸 일??? --> 만료일 --> expiration, expire
	// let nowDate = new Date();
	// console.log( nowDate );
	
	// 만료일 생성
	// let expiration = nowDate.getDate() + 10;  // 29
	// console.log( expiration );  // 29
	
	// 19 --> 29일로 날짜가 나타나도록 생성 --> setDate() 메서드 사용.
	let expiration = new Date();
	expiration.setDate( expiration.getDate() + 7 );
	console.log( expiration );  // 29
	
	// 날짜를 쿠키로 저장하기 위해서 --> UTC 방식으로 표기 --> toUTCString() 메서드 사용.
	console.log( expiration.toUTCString() );
	
	// 쿠키 생성하기
	let cookies = '';
	cookies = 'userid=superman; expires=' + expiration.toUTCString();
	console.log( cookies );
	
	// 쿠키 저장하기
	document.cookie = cookies;
	alert( '쿠키를 생성하였습니다.' );
	
}


// 쿠키 삭제하기
function delCookie() {
	
	// document.cookie 에 값을 대입하는 형태로 --> 쿠키 삭제( or 생성/수정 ).
	// 사실상 쿠키의 삭제는 수정하는 것이라고 보면 된다.
	// 쿠키 삭제는? --> 이미 한참 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다.
	// document.cookie = 'username=hongkildong';  // 쿠키 생성
	// document.cookie = 'username=leesoonsin';  // 쿠키 수정
	// document.cookie = 'username=; expires=Sat, 01 Jan 1972 00:00:00 GMT';  // 쿠키 삭제
	document.cookie = 'userid=; expires=Sat, 01 Jan 1972 00:00:00 GMT';
	alert( '쿠키를 삭제하였습니다.' );
	
}


// [ ! ] Summary
// ---------- 1. JS에서 쿠키를 편리하게 쓸려면 사용자가 직접 함수를 만들어서 쓰는게 편리하다.
// ---------- 2. 더 편리한건 JS의 쿠키 관련 경량 라이브러리를 쓰는게 더 편리하다.
// ---------- 3. document.cookie 가 열일 하는구나.
// ---------- 4. 쿠키의 삭제는 한 참 지나간 날짜를 입력해버림으로써 삭제를 시킨다.
// ---------- 5. 일반적으로 Set(생성), Get(읽기), Del(삭제) 3가지의 사용자 함수를 구현해서 사용한다.





















