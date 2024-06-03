if($(window).width() < 901) {
	let els = document.querySelector('#col7')
  	if (els.classList.contains('col-7')){
  		els.classList.remove('col-7')
  		els.classList.add('col-12')
  	}
  	let elss = document.querySelector('#col4')
  	if (elss.classList.contains('col-4')){
  		elss.classList.remove('col-4')
  		elss.classList.add('col-12')
  	}
} else {
  // change functionality for larger screens
  	let els = document.querySelector('#col7')
  	if (els.classList.contains('col-12')){
  		els.classList.remove('col-12')
  		els.classList.add('col-7')
  	}
  	let elss = document.querySelector('#col4')
  	if (elss.classList.contains('col-12')){
  		elss.classList.remove('col-12')
  		elss.classList.add('col-4')
  	}
}

console.log($(window).width());