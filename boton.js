window.onscroll = function(){

	if(document.documentElement.scrollTop > 100) {
	   document.querySelector(".button-container") 
	   .classList.add("show");

	}else{ 
	   document.querySelector(".button-container")
	   .classList.remove("show");
	}
}


document.querySelector(".button-container")
.addEventListener("click", () => { 
	
	window.scrollTo({ 
	top: 0,
	behavior: "smooth"

	});

});
