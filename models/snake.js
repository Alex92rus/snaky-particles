var Snake = function(n_physicisits){
	this.physicists = [];
	for (var i = 0; i < n_physicisits; i++){
		this.physicists.push_back(new Physicist(this, position));
	}
	this.new_physicists = [];
	this.bonuses = [];
	this.speed = 1;
}

Snake.prototype.add_physicist = function(physicist){
	this.new_physicists.push_back(new Physicist(this, this.physicists[this.physicists.length - 1].position));
}

Snake.prototype.add_bonus = function(bonus){
	this.bonuses.push_back(bonus);
}

Snake.prototype.remove_physicist = function(index){	
}


Snake.prototype.move = function(next_cell){
	this.physicist[0].position = next_cell;
	for(var i = 1; i < this.physicist.length; i++){
		this.physicists[i].position  = this.physicists[i-1].position;
		this.physicists[i].direction = this.physicists[i-1].direction;
	}

}
