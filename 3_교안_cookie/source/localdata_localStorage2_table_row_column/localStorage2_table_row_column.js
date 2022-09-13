// 테이블의 열과 줄을 동적으로 생성하여 삽입하기


window.onload = () => {
	
	// 버튼 가져오기
	const btnCrc = document.querySelector( '.btnCrc' );
	console.log( btnCrc );
	
	// 버튼 클릭 시 --> 할 일 처리
	btnCrc.addEventListener( 'click', () => {
		
		// 할 일 처리
		let hTbody = document.getElementById( 'htmlTbody' );
		console.log( hTbody );
		
		
		// JavaScript Table row and column.
		
		// Insert a row at the end of table
		const newRow0 = hTbody.insertRow();
		// const newRow1 = hTbody.insertRow();
		// const newRow2 = hTbody.insertRow();
		// const newRow3 = hTbody.insertRow();
		// const newRow4 = hTbody.insertRow();
		
		// Insert a cell at the end of the row
		const newCell0 = newRow0.insertCell();
		const newCell1 = newRow0.insertCell();
		const newCell2 = newRow0.insertCell();
		const newCell3 = newRow0.insertCell();
		
		// Append - 텍스트 노드를 생성한 새롭게 생성한 Cell에 붙이기
		const newText0 = document.createTextNode( '홍길동' );
		newCell0.appendChild( newText0 );

		const newText1 = document.createTextNode( 'hong@hong.com' );
		newCell1.appendChild( newText1 );

		const newText2 = document.createTextNode( '25' );
		newCell2.appendChild( newText2 );

		const newText3 = document.createTextNode( '영화보기' );
		newCell3.appendChild( newText3 );
		
		
		// 테이블 row 구하기
		const table = document.getElementById( 'myTable' );
		console.log( table.rows.length-1 );  // thead가 있으므로 보통 순수 tbody쪽의 row만 알기 위해서 -1 해줌.
		console.log( table.rows[0] );  // thead
		console.log( table.rows[1] );  // tbody --> first row
		
		
		// 셀(Cell)이 몇 개인지를 알고 싶다면???
		const r = table.rows.length-1;
		const l = table.rows[0].cells.length;
		console.log( l );  // 해당 row의 cell이 몇 개인지를 출력 함.
		console.log( '테이블 row 갯수는 = ' + r );
		
		
		// 반복문 순회하면서 각 Cell에 정보 값을 셋팅.
		for( let c=0; c < l; c++ ) {
			// hTbody.rows[r-1].cells[c].innerHTML = `Data ${ c }`;
			hTbody.rows[r-1].cells[c].innerHTML = `[${r-1}][${c}]`;
		}
		
		
	} );
	
}


















