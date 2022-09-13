// 로컬 스토리지(Local Storage) 데이터 값들 출력하기


window.onload = () => {
	
	// 버튼 가져오기
	const btnAllView = document.querySelector( '.btnAllView' );
	console.log( btnAllView );
	
	
	// 버튼 클릭 시 --> 할 일 처리
	btnAllView.addEventListener( 'click', () => {
		
		// 할 일 처리 --> 로컬 스토리지 데이터 값들을 가져와서 출력.
		const getData = localStorage.getItem( 'background-color' );
		console.log( getData );
		
		// 키(Key)만 출력하기
		console.log( localStorage.key(0) );  // user-id
		console.log( localStorage.key(1) );  // color
		console.log( localStorage.key(2) );
		console.log( localStorage.key(3) );
		console.log( localStorage.key(4) );
		
		// 키(Key)가 몇 개인지? --> length
		console.log( localStorage.length );  // 5
		
		// ------------------------------------------------------------------------
		/*
		// 배열 정보를 동적으로 테이블 생성하여 삽입하기 --> tbody
		let ar = new Array();
		let result = "";
		
		ar.push( { name: '홍길동', email: 'hong@hong.com', age: 25, pastime: '음악감상' } );
		ar.push( { name: '이순신', email: 'lee@lee.com', age: 44, pastime: '걷기' } );
		ar.push( { name: '강감찬', email: 'kang@kang.com', age: 37, pastime: '영화보기' } );
		ar.push( { name: '김유신', email: 'kim@kim.com', age: 55, pastime: '야식먹기' } );
		ar.push( { name: '광개토', email: 'kwang@kwang.com', age: 60, pastime: '독서' } );
		
		console.log( ar[0].name );  // 홍길동
		console.log( ar[0].email );  // hong@hong.com
		console.log( ar[0].age );  // 44
		console.log( ar[0].pastime );  // 음악감상
		
		// 반복문을 순회하면서 배열의 정보를 result 변수에 누적.
		for( const i in ar ) {
			// console.log( i );
			result += "<tr>";
			result += "<td>"+ ar[i].name +"</td>";
			result += "<td>"+ ar[i].email +"</td>";
			result += "<td>"+ ar[i].age +"</td>";
			result += "<td>"+ ar[i].pastime +"</td>";
			result += "</tr>";
		}
		// console.log( result );
		
		let hTbody = document.getElementById( 'htmlTbody' );
		console.log( hTbody );
		
		// Append
		// $( '#htmlTbody' ).empty();
		// $( '#htmlTbody' ).append( result );
		
		// Append - JS
		// hTbody.append( result );  // 텍스트 문자열 형태로 Append.
		// hTbody.appendChild( result );  // Node Err.
		// hTbody.innerText( result );  // 괄호가 X.
		// hTbody.innerText = result;
		hTbody.innerHTML = result;
		*/
		// ------------------------------------------------------------------------
		
	
	
	
	
		// ------------------------------------------------------------------------
		// 결과 변수 --> 우선 반복문 쓰지 않고 하나만 출력.
		// let result = "";
		// result += "<tr>";
		// result += "<td class='align-middle' width='30%'>"+ localStorage.key(2) +"</td>";
		// result += "<td class='align-middle' width='30%'>"+ localStorage.getItem( localStorage.key(2) ) +"</td>";
		// result += "<td><button class='btnRemove btn'>Remove</button></td>";
		// result += "</tr>";
		// console.log( result );
		
		// let hTbody = document.getElementById( 'htmlTbody' );
		// hTbody.innerHTML = result;
		// ------------------------------------------------------------------------





		// ------------------------------------------------------------------------
		// 키(Key) 순회하면서 key : value 값들 출력하기
		// ------------------------------------------------------------------------
		console.log( '로컬 스토리지 길이 = ' + localStorage.length );  // 5
		
		let ar = new Array();
		let result2 = '';
		
		for( let i=0; i < localStorage.length; i++ ) {
			let key = localStorage.key( i );
			console.log( `${ key } : ${ localStorage.getItem( key ) }` );
			
			// 결과 변수
			result2 += "<tr>";
			result2 += "<td class='align-middle' width='30%'>"+ key +"</td>";
			result2 += "<td class='align-middle'>"+ localStorage.getItem( key ) +"</td>";
			result2 += "<td><button class='btnRemove btn'>Remove</button></td>";
			result2 += "</tr>";
			
			// 배열에 저장
			ar.push( result2 );
		}
		console.log( ar );
		
		// Append (붙이기)
		$( '#htmlTbody' ).empty();
		$( '#htmlTbody' ).append( result2 );

	} );
	
}

















