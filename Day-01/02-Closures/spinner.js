function getSpinner(){
	var count = 0;
	function inc(){
		return ++count;
	}
	function dec(){
		return --count;
	}
	return {
		up : inc,
		down : dec
	}
}

function Spinner(){
	var count = 0;
	this.up = function(){ return ++count;}
	this.down = function(){ return --count;}
}


var spinner = getSpinner();

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1


