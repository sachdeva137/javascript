document.getElementById("getVal").addEventListener("click" , function(){
		var val = document.getElementById("myCheckBox").checked;
		document.getElementById("value").value = val;
});

document.getElementById("setVal").addEventListener("click" , function(){
	var val = document.getElementById("myCheckBox").checked;
	document.getElementById("myCheckBox").checked = !val;
	
});

document.getElementById("getValDD").addEventListener("click" , function(){
	var val = document.getElementById("dropDownList").value;
		document.getElementById("valueDD").value = val;
});
document.getElementById("setValDD").addEventListener("click" , function(){
	var elem = document.getElementById("dropDownList");
	var index = elem.selectedIndex;
	var newIndex = index ===elem.options.length -1 ? 0 : index +1;
	elem.selectedIndex = newIndex;
});