function createObject(arg1, arg2,arg3){
	var obj = {};
	var key1 = "k1" , key2 = "k2" , key3 = "k3";
	obj[key1] = arg1;
	obj[key2] = arg2;
	obj[key3] = arg3;
	console.error(this);
	return obj;
}

createObject("a" , "b" , "c");
//console.log(this);
