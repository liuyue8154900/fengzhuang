Object.prototype.addpropertyListener = function(property,fun){
		this.changeFun =this.changeFun || {};
		//把监听方法放入到数组中.
		if (!this.changeFun[property]) {
			this.changeFun[property]=[];
		}
		this.changeFun[property].push(fun);
		
	}
	Object.prototype.valueHaschanged = function(key){
			//取出监听的方法
			for(var i = 0; i < this.changeFun[key].length;i++){
				this.changeFun[key][i]();
			}
	}