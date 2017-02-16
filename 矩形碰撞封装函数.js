//这个函数的功能只是实现 检测是否发生碰撞.
	function hitFun(obj1,obj2){
		//什么情况下一定碰不到
		var l1 = obj1.offsetLeft;
		var t1 = obj1.offsetTop;
		var r1 = l1 + obj1.offsetWidth;
		var b1 =t1 + obj1.offsetHeight;
		
		
		
		var l2 = obj2.offsetLeft;
		var t2 = obj2.offsetTop;
		var r2 =  l2 + obj2.offsetWidth;
		var b2 =  t2 + obj2.offsetHeight;
		
		if(l1 > r2 || t1 > b2 ||r1 < l2 || b1 < t2){
			return false;
		}
		return true;
		
	}