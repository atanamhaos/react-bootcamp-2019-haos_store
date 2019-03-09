  function createMapWithAlgorythm() {

      var map = [];
      var mapWidth = 10;
      var mapHeite = 9;

      for (var row = 0; row < mapHeite; row++) {
          map[row] = []; /* Create blank row */
          for (var col = 0; col < mapWidth; col++) {
              if (row == 0 || col == 0 || (row == (mapHeite - 1)) || (col == (mapWidth - 1))) { /* Creates border */
                  map[row][col] = 0;
              }
              else {
                  map[row][col] = 1;
              }
          }
      }

      return map;
  }

  function createMap() {
      var map = [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      return map;
  }

  var ninjasPosition = {x:8,y:1};
  
  function placeNinjaOnMap() {
     map[ninjasPosition.y][ninjasPosition.x]= 9; 
  }
  
  function drawMap() {
      var output = "";

      placeNinjaOnMap();
      
      for (var row = 0; row < map.length; row++) {


          output += "<div class='row'>";
          for (var col = 0; col < map[row].length; col++) {
              output += "<div class=" + mapBriks[map[row][col]] + "></div>";
          }
          output += "</div>";
      }



      document.getElementById('world').innerHTML = output;
  }


  var mapBriks = {
      0: 'wall',
      1: 'blank',
      2: 'sushi',
      9: 'ninja',
  };


  var map = createMap();

  drawMap();

    	document.onkeydown = function(e){
    	/*	console.log(e);*/
    	
       
    		if(e.keyCode == 37) { // LEFT
                if (map[ninjasPosition.y][ninjasPosition.x-1] == 0 ) {
                   console.log('Ninja can not move left');
                } else {
                   console.log('Ninja can move left');
                   ninjasPosition.x = ninjasPosition.x - 1;
                }
    		}
    		/*
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
    		
    	
    		*/
    	
    	    drawMap();
    	}
