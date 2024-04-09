// next edge of a triangle
var side1 = 10
var side2 = 4
function nextEdge(side1, side2) {
	return (side1 + side2)-1
	
}

// area of a triangle
var base = 4
var height = 9

function triArea(base, height) {
  return (base * height)/2
  
}

// additio of each value of a number
function addUp(num) {
	var result = 0;
	for(var i=0; i <= num; i++){
		result = result + i;
	}
	return result
	
}

// to get the first value of an array
var arr = [4 ,34 , 7]
function getFirstValue(arr) {
	return arr[0]
}

// the derivative pf a function
let b = 3
let m = 7
function derivative(b, m) {
	return b * m**(b-1)
	
}

// left shift by powers of two
let x = 6
let y = 3

function shiftToLeft(x, y) {
	return x * 2**y;
	
}

// matchstick houses
function matchHouses(step) {
	if(step === 0){
		return 0;
	}else{
		return (step*6)-(step-1);
	}
}