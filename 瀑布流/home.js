
$(document).ready(function(){$("body").scroll()});

window.onload=function(){
	var colums=document.getElementById("container");
	var units=document.getElementsByClassName("unit");
	waterFall();
			
		function waterFall(){
		var columswidth=colums.offsetWidth;
		var unitwidth=units[0].offsetWidth;
		var columsnumber=parseInt(columswidth/unitwidth);
		var arr=[];
		for (var i=0;i<units.length;i++){
			if (i<columsnumber)	{
				units[i].style.top=0;
				units[i].style.left=unitwidth*i+"px";
				arr.push(units[i].offsetHeight);	
			}
			else{
				var minHeight=arr[0];
				console.log(arr[0]);
				var index=0;
				for (j=0;j<arr.length;j++){
					if (minHeight>arr[j]){
						minHeight=arr[j];
						index=j;
					}
				}
				units[i].style.top=arr[index];
				units[i].style.left=units[index].offsetLeft;
				console.log(units[i].style.left);
				arr[index]=arr[index]+units[i].offsetHeight;	
			}		
		}
	}		
	function hasClass( elements,cName ){ 
	  return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
	}; 
	function addClass( elements,cName ){ 
	  if( !hasClass( elements,cName ) ){ 
		elements.className += " " + cName; 
	  }; 
	}; 
	function removeClass( elements,cName ){ 
	  if( hasClass( elements,cName ) ){ 
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
	  }; 
	};
	window.onresize=function(){
		var box=document.getElementById("box");
		boxwidth=box.offsetWidth;
		if (boxwidth>=780&&boxwidth<1040){
			removeClass(box, "box-1040");
			removeClass(box, "box-520");
			addClass(box, "box-780");
		}
		else if(boxwidth>=520&&boxwidth<780){
			removeClass(box,"box-1040");
			removeClass(box, "box-780");
			addClass(box,"box-520");
		}  
		else if(boxwidth<520){
			removeClass(box,"box-1040");
			removeClass(box,"box-780");
			addClass(box,"box-520");	
		}
		else{
			removeClass(box,"box-520");
			removeClass(box,"box-780");
			addClass(box,"box-1040");
		}
		waterFall();
		
                                         
	}
}

	 
 