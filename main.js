//Geometric progression/Geometrinen sarja
const fuelPerKm = (speedKmh, fuelBase) => {
	return fuelBase*Math.pow(1.009, (speedKmh-1))
};

const timeHours = (distanceKm, speedKmh) => distanceKm / speedKmh;

const timeFormat = (hours) => {
	let h = Math.trunc(hours)
	let min = Math.round( (hours - h) * 60 )
	let drivingTime = {
		h : h,
		min : min
	}
	return drivingTime
};
const setMissingInputFocus = () => {
	let numberInputs = [...document.querySelectorAll('input[type=number]')]
	let firstNoValue = numberInputs.find(input => input.value === '')
	firstNoValue !== undefined ? firstNoValue.focus() 
							   : document.querySelectorAll('input[type=radio]')[0].focus()
};

const alert = document.querySelector('.alert')

const clickHandle = (event) => {
	if(!event.target.classList.contains('resultButton')){ 
		if(alert.classList.contains('alert--visible')){
			alert.classList.remove('alert--visible')
			setMissingInputFocus()
		};
	};
};

const keyHandle = (event) => {
	if(alert.classList.contains('alert--visible')){
		alert.classList.remove('alert--visible')
		setMissingInputFocus()
	};
};	

const scrollToView = (elem) => {
	let elemY = elem.getBoundingClientRect().y
	let elemHeight = elem.getBoundingClientRect().height
	window.scrollTo(0, (elemY + elemHeight) )
};


const laskeClickHandle = () => {

	let distance = document.querySelector('#distance').value
	let speedKmh_1 = Number(document.querySelector('#speed1').value)
	let speedKmh_2 = Number(document.querySelector('#speed2').value)

	//alert custom error msg
	if(!distance || !speedKmh_1 || !speedKmh_2
		|| !document.querySelector('input[name=vehicle]:checked')) {
		alert.classList.add('alert--visible')
		scrollToView(alert)
		return
	}

	let fuelBase = document.querySelector('input[name=vehicle]:checked').value
	let fuel1 = (fuelPerKm(speedKmh_1, fuelBase) / 100 * distance).toFixed(2)
	let fuel2 = (fuelPerKm(speedKmh_2, fuelBase) / 100 * distance).toFixed(2)


	let t1Hours = timeHours(distance, speedKmh_1)
	let t2Hours = timeHours(distance, speedKmh_2)
	let t1 = timeFormat(t1Hours)
	let t2= timeFormat (t2Hours)
	let tDifference = timeFormat( Math.abs(t1Hours - t2Hours) )
	let fuelDifference = (Math.abs(fuel1-fuel2)).toFixed(2)

	document.querySelector('.speed_1').innerHTML = `${speedKmh_1} km/h`
	document.querySelector('.speed_2').innerHTML = `${speedKmh_2} km/h`
	document.querySelector('.time1').innerHTML = `${t1.h}h ${t1.min}min`
	document.querySelector('.time2').innerHTML = `${t2.h}h ${t2.min}min`
	document.querySelector('.petrol1').innerHTML = `${fuel1}l`
	document.querySelector('.petrol2').innerHTML = `${fuel2}l`
	document.querySelector('.time_diff').innerHTML = 
		`${tDifference.h ? tDifference.h+'h' : ''} ${tDifference.min}min`
	document.querySelector('.fuel_diff').innerHTML = `${fuelDifference}l`
	
	scrollToView(document.querySelector('.result'));
}
document.querySelector('body').onload = function(){document.querySelector('input').focus()}
window.onclick = clickHandle
window.onkeydown = keyHandle
document.querySelector('.resultButton').onclick = laskeClickHandle



