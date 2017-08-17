function createObject(arg1, arg2,arg3,arg4,arg5){
	var obj = {};
	var value = 10;
	var key1 = "k1" , key2 = "k2" , key3 = "k3" , key4 = "k4" , key5 ="k5" , key6 = "k6";
	obj[key1] = arg1 , obj[key2] = arg2 , obj[key3] = arg3 , obj[key4] = arg4 , obj[key5] = arg5;
	obj[key6] = function mygetFunction(){
					return value;
				}
	return obj;
}

function getValue(){
	var arg2 =  {"a":"b"} , arg3 = ["a","c"] ,arg4 = "str" , arg5 = 5;
	var obj2 = createObject(function abcd(){}, arg2, arg3, arg4, arg5);
	console.error("Create Object " + obj2);
	var value =  obj2["k6"];
	console.error("value" + value())
}

function addNumber(num){
	num = num + getValue();
	return num;
}

function createObjectUsingThis(){
	var key1 = "k1" , key2 = "k2";
	this.key1 = key1;
	this.key2 = key2;
}

function getKeysAndAssignValues(){
	var val1 = ["a" , "b"];
	var val2 = {"1" : "2"};
	var obj = {};
	var keys = new createObjectUsingThis();
	var key1 = keys.key1, key2 = keys.key2;
	obj.key1 = val1;
	obj.key2 = val2;
	return obj;
	console.error(obj); 
}

var Obj4 = new createObject(function(){} , {"a":"b"} , ["a","c"],"d",5);

var number =  addNumber(5);

console.error(number);
var getObject = getKeysAndAssignValues();
console.error(getObject);
