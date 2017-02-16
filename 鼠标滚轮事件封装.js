/* 
 * 滚轮事件 
 */
function MouseWheelHandle(obj,handle){
	var info = navigator.userAgent;
	var down = null; // 用来记录滚轮的上下
	if(info.indexOf("Firefox") != -1){
		obj.addEventListener("DOMMouseScroll",function(event){
			var ev = event || window.event;
			if(ev.detail > 0){
				//不做具体的事情,
				down = true; // 滚轮向下
			}else{
				down = false; // 滚轮向上
			}
			//调用外部传递的事件处理程序
			//handle(down,ev);
			//apply: 每一个函数都有一个自带的方法叫做apply.这个方法可以切换函数的运行环境.
			//apply: 如果函数需要传递参数,以数组的形式传递.
			handle.apply(obj,[down,ev]);
		},false)
		
		}else{
			obj.onmousewheel = function(event){
				var ev = event || window.event;

				if(ev.wheelDelta > 0){
					down = false;
				}else{
					down = true;
				}
				//handle(down,ev);
				//call:每个函数都有一个call方法,它的功能和apply一样,都可以实现切换一个函数的调用者(运行环境)
				//call 和 apply 的唯一区别在于,函数有参数的时候,传递参数不一样,call 依次传递参数,参数用逗号
				//隔开即可.
				handle.call(obj,down,ev)
				
			
			
			}
		}	
}
