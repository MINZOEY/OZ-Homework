let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnReset = document.getElementById('btn-reset');
const newMinutes = document.getElementById('minutes');
const newSeconds = document.getElementById('seconds');
const newMilliseconds = document.getElementById('milliseconds');

let intervalId ;
// onclick이라는 속성에 어떤 동작을 지정하기 위해 익명의 함수를 만들기
btnStart.onclick = function(){
	intervalId = setInterval(ElapsedTimer, 10);
}
btnStop.onclick = function(){
	clearInterval(intervalId)
}
btnReset.onclick = function(){
	clearInterval(intervalId);
	minutes = 0;
	seconds = 0; 
	milliseconds = 0;
	newMilliseconds.textContent = '00'
	newSeconds.textContent = '00'
	newMinutes.textContent = '00'
}

//10ms마다 시간에 대한 숫자 증가시키기
function ElapsedTimer(){
	milliseconds++;
	newMilliseconds.textContent = milliseconds > 9 ? milliseconds : '0'+ milliseconds ;
	// ElapsedTimer가 10ms초마다 milliseconds증가시킴
	
	// 1000ms = 1s 
	if(milliseconds > 99){
		seconds++;
		newSeconds.textContent = seconds > 9 ? seconds : '0'+ seconds ;
		milliseconds = 0;
		newMilliseconds= "00"
	} 
	//분  (60초 = 1분)
	if(seconds >59){
		minutes++;
		newMinutes.textContent = minutes > 9 ? minutes : '0'+ minutes;
		seconds = 0;
		newSeconds= "00"
	}
}
