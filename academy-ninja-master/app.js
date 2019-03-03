	    var leftValue = 450, topValue = 100;
	    var step = 1;
        var direction = 'down';
        var imageLocation = "url('img/"+ direction + step +".png')";
    	
    	function update(){
    		document.getElementById("character").style.left = leftValue+"px";
    		document.getElementById("character").style.top = topValue+"px";
    		document.getElementById('character').style.backgroundImage = imageLocation;
    	}

    	document.onkeydown = function(e){
    	/*	console.log(e);*/
    		console.log(step);
       
    		if(e.keyCode == 37) { // LEFT
                if (leftValue > 10 ) {
    			    leftValue = leftValue - 10;
    			    direction = 'left';
                }
    		}
    		else if (e.keyCode == 38) { // UP
    		        if (topValue > 10 ) {
				topValue = topValue - 10;
				direction = 'top';
    		        }
    		}
    		else if (e.keyCode == 39) { // RIGHT
                    if (leftValue < 500 ) {
    			    leftValue = leftValue + 10;
    			    direction = 'right';
                }
    		}
    		else if (e.keyCode == 40) { // DOWN
    		        if (topValue < 500 ) {
				topValue = topValue + 10;
				direction = 'down';
    		        }
    		}
    		
    		/* Switch step */
    		if (step == 1) {step = 2;} else {step = 1;};
    		imageLocation = "url('img/"+ direction + step +".png')";
    		update();
    	}
