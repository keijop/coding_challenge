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


const clickHandle = () => {

	let fuelBase = document.querySelector('input[name=vehicle]:checked').value
	let distance = document.querySelector('#distance').value
	let speedKmh_1 = Number(document.querySelector('#speed1').value)
	let speedKmh_2 = Number(document.querySelector('#speed2').value)

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
	//document.querySelectorAll('input[type=number]').forEach(field => field.value = '')
}

document.querySelector('.resultButton').onclick = clickHandle

