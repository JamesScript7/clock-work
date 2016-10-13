timer();

function timer() {
	var date = new Date();

	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var milliseconds = document.getElementById("milliseconds");
	var currentDate = document.getElementById("current-date");
	
	var time = {
		"hours": date.getHours(),
		"minutes": date.getMinutes(),
		"seconds": date.getSeconds(),
		"milliseconds": date.getMilliseconds()
	};

	currentDate.innerHTML = date

	hours.innerHTML = time.hours < 10 ? "0" + time.hours : time.hours
	minutes.innerHTML = time.minutes < 10 ? "0" + time.minutes : time.minutes
	seconds.innerHTML = time.seconds < 10 ? "0" + time.seconds : time.seconds

	if (time.milliseconds < 10) {
		milliseconds.innerHTML = "00" + time.milliseconds
	} else if (time.milliseconds < 100) {
		milliseconds.innerHTML = "0" + time.milliseconds
	} else {
		milliseconds.innerHTML = time.milliseconds
	}
	
	
	setTimeout(timer, 102);
}





















