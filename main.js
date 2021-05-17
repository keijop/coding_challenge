
let distance = document.querySelector('#distance').value
let fuelBase = document.querySelector('input[name=vehicle]:checked').value
let speedKmh_1 = Number(document.querySelector('#speed1').value)
let speedKmh_2 = Number(document.querySelector('#speed2').value)

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
	let result = `Fuel consumption is ${fuelBase}`
	document.querySelector('.results').innerHTML = result
}

document.querySelector('.resultButton').onclick = clickHandle

