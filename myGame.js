room = game.createRoom("room", "경기장-1.png") // 경기장 입구 생성
room2 = game.createRoom("room2","라커룸.png") // 라커룸생성(왼쪽방)
room3 = game.createRoom("room3","배경-1.png") //

room.door = room.createObject("door", "문-왼쪽-닫힘.png") // 라커룸으로 가는 왼쪽문 생성
room.door.setWidth(150) // 크기 조절
room.locateObject(room.door, 170, 380) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door2 = room.createObject("door2", "문-오른쪽-닫힘.png") // 감독실로 가는 오른쪽문 생성
room.door2.setWidth(150) // 크기 조절
room.locateObject(room.door2, 1090, 390) // 문 배치
room.door2.lock() // door 상태를 locked로 변경

room.lee = room.createObject("lee","이강인.png") //이강인 만들기
room.lee.setWidth(160)
room.locateObject(room.lee, 630,550)
room.lee.onClick = function() {
	printMessage("형 벤치탈출해야지. 빨리 힌트찾아서 경기장으로 와!!")
	room.lee.hide()	//누르면 숨기기
}


room.door.onClick = function(){		
	printMessage("라커룸으로 들어갑니다.")
	game.move(room2) // 라커룸으로 이동
}

room.door2.onClick = function(){
	printMessage("감독실로 들어갑니다.")
	game.move(room3) // 감독실로 이동
}

room.shoes = room.createObject("shoes","축구화.png")  //게임끝날때 들고 나갈 축구화만들기
room.shoes.setWidth(130)
room.locateObject(room.shoes, 630,500)
room.shoes.hide() // 비밀번호 맞출때까지 숨겨놓기

room.ban = room.createObject("ban","출입금지.png")
room.ban.setWidth(300)
room.locateObject(room.ban, 630,350)
room.ban.onClick = function() {
	printMessage("방에서 찾아온 힌트를 이용해 숫자를 입력하세요")
	showKeypad("number", "4020" , function(){ // 키패드 1 - 숫자4자리
		room.ban.hide() // 출입금지 팻말이 없어짐.
		printMessage("출입금지 팻말이 사라졌다.\n축구화를 들고 경기장으로 가세요.")
		room.shoes.show() //축구화가 보임

	 })
}

room.shoes.onClick = function() { //축구화를 누르면 게임끝
	game.clear()
}

room2.door = room2.createObject("door", "문-오른쪽-닫힘.png") // 오른쪽문 생성
room2.door.setWidth(150) // 크기 조절
room2.locateObject(room2.door, 1100, 270) // 문 배치
room2.door.lock() // door 상태를 locked로 변경

room2.door.onClick = function() { // door를 클릭했을 때
	if(room2.door.isClosed()){ // door가 closed 상태이면
		room2.door.open() // door의 상태를 open으로 바꿈
	} else if (room2.door.isOpened()){ // door가 opened 상태이면
		game.move(room) // 경기장으로 이동
	} else if (room2.door.isLocked()){ // door가 locked 상태이면
		printMessage("한번 들어오면 풀때까지 못나갑니다.") // 메시지 출력
	}
}

room2.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room2.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room2.keypad = room2.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room2.keypad.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad, 930, 250) // 위치 변경

room2.keypad.onClick = function() {
	printMessage("방을 뒤져 힌트를 찾아보세요")
	showKeypad("number", "6341" , function(){ // 키패드 1 - 숫자4자리
		room2.door.unlock() // door의 잠금을 연다
		printMessage("라커룸을 통과했다. 경기장으로 가자.")
	 })
}

room2.shoes = room2.createObject("shoes","축구화.png") //축구화 만들기
room2.shoes.setWidth(130)
room2.locateObject(room2.shoes, 200, 600)
room2.shoes.onClick = function() {
	printMessage("손흥민의 축구화다. 몰래 신고 나가볼까..")
}

room2.postit = room2.createObject("postit","포스트잇.png") //경기장으로 가는 힌트(7+23+10=40)
room2.postit.setWidth(50)
room2.locateObject(room2.postit,220,420)
room2.postit.onClick = function() {
	showImageViewer("종이.png", "경기장힌트.txt"); // 이미지 출력
}

room2.tv = room2.createObject("tv","TV2-2.png") //tv속 손흥민 골장면(첫번째숫자:6, 두번째숫자:3)
room2.tv.setWidth(150)
room2.locateObject(room2.tv,900,100)
room2.tv.onClick = function() {
	showVideoPlayer("글자힌트.wmv")
}

room2.worldcup = room2.createObject("worldcup","월드컵.png") //2002년월드컵 4등
room2.worldcup.setWidth(80)
room2.locateObject(room2.worldcup,600,290)
room2.worldcup.onClick = function() {
	showImageViewer("종이.png", "라커룸3번째숫자.txt");
}

room2.cho = room2.createObject("cho","조현우.png") //조현우 생성
room2.cho.setWidth(300)
room2.locateObject(room2.cho,1100,600)
room2.cho.hide()

room2.ball = room2.createObject("ball","공인구.png") //공 생성
room2.ball.setWidth(90)
room2.locateObject(room2.ball,1200,600)
room2.ball.onClick = function() {
	room2.ball.hide()
	printMessage("공을 차버렸다.")
	room2.cho.show() //공차버리고 나면 조현우가 등장
}

room2.cho.onClick = function() {
	showImageViewer("조현우문제.png", ""); //최다우승국 = 브라질(1)
}



room3.door = room3.createObject("door", "문-왼쪽-닫힘.png") // 감독실 왼쪽문 생성
room3.door.setWidth(150) // 크기 조절
room3.locateObject(room3.door, 100, 250) // 문 배치
room3.door.lock() // door 상태를 locked로 변경

room3.door.onClick = function() { // door를 클릭했을 때
	if(room3.door.isClosed()){ // door가 closed 상태이면
		room3.door.open() // door의 상태를 open으로 바꿈
	} else if (room3.door.isOpened()){ // door가 opened 상태이면
		game.move(room) // 경기장으로 이동
	} else if (room3.door.isLocked()){ // door가 locked 상태이면
		printMessage("한번 들어오면 풀때까지 못나갑니다.") // 메시지 출력
	}
}

room3.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room3.door.setSprite("문-왼쪽-열림.png") // 열린 문으로 변경
}

room3.keypad = room3.createObject("keypad", "숫자키-좌.png") // 오브젝트 생성
room3.keypad.setWidth(50) // 크기 조절
room3.locateObject(room3.keypad, 220, 250) // 위치 변경

room3.keypad.onClick = function() {
	printMessage("방을 뒤져 힌트를 찾아보세요")
	showKeypad("number", "4312" , function(){ // 키패드 - 숫자4자리
		room3.door.unlock() // door의 잠금을 연다
		printMessage("감독님의 전술을 맞췄다!")
	 })
}

room3.chair = room3.createObject("chair", "의자1-7.png") // 오브젝트 생성
room3.chair.setWidth(250) // 크기 조절
room3.locateObject(room3.chair, 870, 450) // 위치 변경
room3.chair.onClick = function() {
	printMessage("감독님의 의자다.. 앉아서 좀 쉴까")
}

room3.table = room3.createObject("table", "테이블-오른쪽.png") // 오브젝트 생성
room3.table.setWidth(500) // 크기 조절
room3.locateObject(room3.table, 800, 500) // 위치 변경

room3.note = room3.createObject("note","노트.png")
room3.note.setWidth(70)
room3.locateObject(room3.note,900,380)
room3.note.onClick = function() {
	printMessage("감독님의 전술노트다. 공격수 2명..?") //마지막글자 힌트
}

room3.file = room3.createObject("file","파일-2.png")
room3.file.setWidth(100)
room3.locateObject(room3.file,640,310)
room3.file.onClick = function() {
	printMessage("수수께끼의 그림이다.")
	showImageViewer("포메이션.png", "");   //공격형미드필더 1명(3번째글자)
}

room3.whiteboard = room3.createObject("whiteboard","화이트보드-오른쪽.png")
room3.whiteboard.setWidth(400)
room3.locateObject(room3.whiteboard,1000,150)
room3.whiteboard.onClick = function() {
	printMessage("무언가 적혀있다.")
	showImageViewer("감독실탈출.png","");   //전술포메이션(감독실탈출비밀번호-4312)
}

room3.key = room3.createObject("key","열쇠.png")
room3.key.setWidth(50)
room3.locateObject(room3.key,750,360)
room3.key.onClick = function() {
	room3.key.pick()
	printMessage("감독님 열쇠다. 캐비닛을 열어볼까..?")
}



room3.cabinet  = room3.createObject("cabinet","캐비닛2-2-닫힘.png")
room3.cabinet.setWidth(150)
room3.locateObject(room3.cabinet,420,240)
room3.cabinet.onClick = function() {
	if(game.getHandItem() == room3.key) {
		printMessage("열쇠로 캐비닛을 열었다.")
		room3.cabinet.open()
	} else {
		printMessage("열쇠가 필요할 것 같은데...?")
	}
}

room3.book = room3.createObject("book","책3-2.png")
room3.book.setWidth(50)
room3.locateObject(room3.book,420,110)
room3.book.hide()


room3.cabinet.onOpen = function() {
	room3.cabinet.setSprite("캐비닛2-2-열림.png") // 열린 그림으로 변경
	room3.book.show()
}

room3.book.onClick = function() {
	printMessage("첫장을 펴보았다.")
	showImageViewer("미드필더.png","")  //미드필더 3명(두번째글자 3)
}

room3.postit = room3.createObject("postit","포스트잇.png")
room3.postit.setWidth(50)
room3.locateObject(room3.postit,180,600)
room3.postit.hide()

room3.uniform = room3.createObject("uniform","유니폼.png")
room3.uniform.setWidth(200)
room3.locateObject(room3.uniform,180,600)
room3.uniform.onClick = function() {
	room3.uniform.hide()
	printMessage("유니폼이 떨어져있다. 유니폼을 들어보았다.")
	room3.postit.show()
}

room3.postit.onClick = function() {			//훼이크
	showImageViewer("아무것도아님.png","")
	printMessage("낚였다..")
}

room3.driver = room3.createObject("driver","드라이버.png")
room3.driver.setWidth(70)
room3.locateObject(room3.driver,450,600)
room3.driver.onClick = function() {
	room3.driver.pick()
}

room3.box = room3.createObject("box","상자3-닫힘.png")
room3.box.setWidth(200)
room3.locateObject(room3.box,350,600)
room3.box.onClick = function() {
	if(game.getHandItem() == room3.driver) {
		printMessage("드라이버로 포장을 찢었다. 포스트잇이 있다.")
		room3.box.open()
	} else{
		printMessage("제대로 포장되어 있다. 드라이버로라도 찢어보자.")
}

}

room3.postit2 = room3.createObject("postit2","포스트잇.png")
room3.postit2.setWidth(20)
room3.locateObject(room3.postit2,350,630)
room3.postit2.hide()

room3.box.onOpen = function() {
	room3.box.setSprite("상자3-열림.png") // 열린 그림으로 변경
	room3.postit2.show()
}

room3.postit2.onClick = function() {
	printMessage("무언가 적혀있다.")
	showImageViewer("경기장뒤2숫자.png","") // 전화기속 이강인이 골을 넣은 대회는 몇세이하 월드컵일까요(20세이하)
}

room3.phone = room3.createObject("phone","전화기-오른쪽.png")
room3.phone.setWidth(30)
room3.locateObject(room3.phone,600,130)
room3.phone.onClick = function() {
	printMessage("무슨 소리가 들린다.")
	playSound("이강인.wav") // 이강인이 20세이하 월드컵에서 골을 넣는 중계
}


game.start(room) // 게임시작
printMessage("벤치탈출게임에 오신 것을 환영합니다! \n이강인 선수를 클릭해보세요") // 환영 메시지 출력