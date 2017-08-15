var sum = 0 , index = 0 ;
var numbers = [65, 44, 12, 4];

var object  = {
	num1 : 65,
	num2 : 44,
	num3 : 12,
	num4 : 4,
}
var arrOfObjects = [{ a: 1},{ b: 2},{ c: 3}];

function myFunction(item) {
    sum += item;
    demo.innerHTML = sum;
}

function forEachArray(){

	numbers.forEach(myFunction);
}

function forArray(){
	for(var i in numbers){
		console.log(numbers[i]);
	}
}

function forObject(){
	for(var i in object){
		console.log(object[i]);
	}
}
function forEachObject(){
	Object.keys(object).forEach(function(a){
		console.log(object[a]);
		//console.log(b);
	});
}

function convertArrayToObjectUsingReduce(){
	numbers.reduce(function(result , item){
		result[item] = item;
		console.log(result);
		return result;
	},{});
	arrOfObjects.reduce(function(result , item ){
		var key = Object.keys(item)[0];
		result[key] = item[key];
		console.log(result);
		return result;
	},{});

	arrOfObjects.reduce(function(result , item){
		var key = Object.keys(item)[0];
		var value = item[key];
		var obj = {};
		obj[value] = key;
		result.push(obj);
		return result;
	},[]);
}

function convertArrayToObjUsingFor(){
	var obj1 = {} ,obj2 = {};
	numbers.forEach(function(num , i){
		obj1[i] = num;
		return obj1;
	});
	console.log(obj1);
	for(var i in numbers){
		obj2[i] = numbers[i];
	}
	console.log(obj2);
}

function convertObjectToArray(){
	var result = Object.keys(object).map(function (key){
		return [key , object[key]];
	});
	console.log(result);
}

function covertObjectToArrayUsingFor(){
	var arrOne = [];
	var arrTwo = [];
	for(var i in object){
		arrOne.push([i , object[i]])
	}
	console.log(arrOne);
	Object.keys(object).forEach(function (key , index){
		arrTwo.push([key , object[key]]);
	});
	console.log(arrTwo);
}