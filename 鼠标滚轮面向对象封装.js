// 鼠标滚轮滚动

Object.prototype.onmousewheelhandle =function(handle){
	var info = navigator.userAgent;
	var down = null;
	if(info.indexOf("Firefox") != -1){
		this.addEventListener("DOMMouseScroll",function(event){
			var ev = event || window.event;
			if(ev.Detail > 0){
				down  = true;
			}else{
				down = false;
			}
			handle.apply(this,[down,ev]);
		},false)
	}else{
		this.onmousewheel = function(event){
			var ev = event || window.event;
			if(ev.wheelDelta > 0){
				down = false;
			}else{
				down = true;
			}
			handle.call(this,down,ev);
		}
	}
}
