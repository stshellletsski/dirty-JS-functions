// time and date function, print to console + returns object, edit as needed.
function timeDate () {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const d = new Date();
	const day = daysOfWeek[d.getDay()];
	const date = `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;
	const time = `${d.getHours()} : ${d.getMinutes()}`;
	console.log(day);
	console.log(date);
	console.log(time);
	return {day : day, date : date, time : time};
}

// Hope I helped and made your life a little easier! Have a good day partner!
