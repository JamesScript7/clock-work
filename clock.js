timer();

function timer() {
	var date = new Date();

	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var milliseconds = document.getElementById("milliseconds");
	
	var time = {
		"hours": date.getHours(),
		"minutes": date.getMinutes(),
		"seconds": date.getSeconds(),
		"milliseconds": date.getMilliseconds()
	};

	hours.innerHTML = time.hours
	minutes.innerHTML = time.minutes
	seconds.innerHTML = time.seconds
	milliseconds.innerHTML = time.milliseconds

	setTimeout(timer, 1000);
}




















