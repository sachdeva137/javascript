document.getElementById("div1").addEventListener("click",function(){alert("div1")});
document.getElementById("div2").addEventListener("click",function(event){alert("div2");event.stopPropagation()});
document.getElementById("div3").addEventListener("click",function(){alert("div3")});
document.getElementById("div4").addEventListener("click",function(){alert("div4")});
document.getElementById("div3").addEventListener("mouseover",function(){this.innerHTML = "Mouse Over"});
document.getElementById("myCheckbox").addEventListener("click", function(event){
    event.preventDefault()
});


