//answer variable
var choice = "";
var correct = "";
//life variable
var life = 5;
//Stage variable
var stagen = 1;
//Timer working variable
var timework = 1;
//Mode variable
var mode = "";
function play() {
	//Choose mode
	document.getElementById('mode').style.display="block";
	document.getElementById('story').style.display="inline";
	document.getElementById('endless').style.display="inline";
	document.getElementById('delete').style.display="none";
}
//Story mode
function story(){
	// Clear and open stage 1
	mode="story";
	document.getElementById('board').style.display="block";
	document.getElementById('life1').style.display="inline";
	document.getElementById('life2').style.display="inline";
	document.getElementById('life3').style.display="inline";
	document.getElementById('life4').style.display="inline";
	document.getElementById('life5').style.display="inline";
	document.getElementById('hp').style.display="inline";
	document.getElementById('main').style.display="block";
	document.getElementById('pause').style.display="block";
	//Right colors on the screen
	document.getElementById('color3').style.display="none";
	document.getElementById('color4').style.display="none";
	document.getElementById('color5').style.display="none";
	document.getElementById('color6').style.display="none";
	document.getElementById('color7').style.display="none";
	document.getElementById('color8').style.display="none";
	document.getElementById('color9').style.display="none";
	document.getElementById('color10').style.display="none";
	document.getElementById('color11').style.display="none";
	document.getElementById('color12').style.display="none";
	document.getElementById('color13').style.display="none";
	document.getElementById('color14').style.display="none";
	document.getElementById('color15').style.display="none";
	document.getElementById('color16').style.display="none";
	document.getElementById('color17').style.display="none";
	document.getElementById('color18').style.display="none";
	document.getElementById('color19').style.display="none";
	document.getElementById('color20').style.display="none";
	document.getElementById('color21').style.display="none";
	document.getElementById('color22').style.display="none";
	document.getElementById('color23').style.display="none";
	document.getElementById('color24').style.display="none";
	document.getElementById('color25').style.display="none";
	document.getElementById('color26').style.display="none";
	document.getElementById('color27').style.display="none";
	document.getElementById('color28').style.display="none";
	document.getElementById('color29').style.display="none";
	document.getElementById('color30').style.display="none";
	document.getElementById('color31').style.display="none";
	document.getElementById('color32').style.display="none";
	document.getElementById('color33').style.display="none";
	document.getElementById('color34').style.display="none";
	document.getElementById('color35').style.display="none";
	document.getElementById('color36').style.display="none";
	document.getElementById('color37').style.display="none";
	document.getElementById('color38').style.display="none";
	document.getElementById('color39').style.display="none";
	document.getElementById('color40').style.display="none";
	document.getElementById('color41').style.display="none";
	document.getElementById('color42').style.display="none";
	document.getElementById('color43').style.display="none";
	document.getElementById('color44').style.display="none";
	document.getElementById('color45').style.display="none";
	document.getElementById('color46').style.display="none";
	document.getElementById('color47').style.display="none";
	document.getElementById('color48').style.display="none";
	document.getElementById('color49').style.display="none";
	document.getElementById('color50').style.display="none";
	document.getElementById('mode').style.display="none";
	document.getElementById('story').style.display="none";
	document.getElementById('endless').style.display="none";
	stage1();
}
//Endless mode
function endless() {
	// Clear and open stage 1
	mode="endless";
	document.getElementById('pause').style.display="block";
	document.getElementById('board').style.display="block";
	document.getElementById('life1').style.display="inline";
	document.getElementById('life2').style.display="inline";
	document.getElementById('life3').style.display="inline";
	document.getElementById('life4').style.display="inline";
	document.getElementById('life5').style.display="inline";
	document.getElementById('hp').style.display="inline";
	document.getElementById('main').style.display="block";
	document.getElementById('mode').style.display="none";
	document.getElementById('story').style.display="none";
	document.getElementById('endless').style.display="none";
	alert('Welcome player to the endless mode of the game.');
	timework=100;
	random();
}
//Endless Random Color
function random(){
	var a = (Math.floor(Math.random() * (51 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	}else if (a == 45) {
		document.getElementById('quest').style.backgroundColor="tomato";
		correct="tomato";
	}else if (a == 46) {
		document.getElementById('quest').style.backgroundColor="crimson";
		correct="crimson";
	}else if (a == 47) {
		document.getElementById('quest').style.backgroundColor="peru";
		correct="peru";
	}else if (a == 48) {
		document.getElementById('quest').style.backgroundColor="plum";
		correct="plum";
	}else if (a == 49) {
		document.getElementById('quest').style.backgroundColor="cyan";
		correct="cyan";
	}else if (a == 50) {
		document.getElementById('quest').style.backgroundColor="mistyrose";
		correct="mistyrose";
	};
	//Timer
	document.getElementById('timer').value=5;
	timework=100;
}
//Endless timer
var timerendless = setInterval(function() {
	var time = document.getElementById('timer').value;
	if (timework==100) {
		if (time>0) {
			var time1 = time - 1;
			document.getElementById('timer').value=time1;
		}else{
			//Timeout
			if (life==1) {
				//Game Over
				alert("GAME OVER!");
				document.getElementById('life1').style.display="none";
				document.getElementById('life2').style.display="none";
				document.getElementById('life3').style.display="none";
				document.getElementById('board').style.display="none";
				document.getElementById('score').value="You reached stage "+stagen;
				document.getElementById('score').style.display="block";
				document.getElementById('game').style.display="block";
				document.getElementById('over').style.display="block";
				document.getElementById('hp').style.display="none";
				document.getElementById('body').style.backgroundColor="black";
				clearInterval(timerendless);
			}else{
				life=life-1;
				//evaluate life
				if (life==2) {
					document.getElementById('life3').style.display="none";
					timework=101;
				}else if(life==1){
					document.getElementById('life2').style.display="none";
					timework=101;
				}else if(life==4){
					document.getElementById('life5').style.display="none";
					timework=101;
				}else if(life==3){
					document.getElementById('life4').style.display="none";
					timework=101;
				}
			};
		}
	}
},1000);
//Endless Correct Processing
function proces() {
	if (choice==correct) {
		stagen=stagen+1;
		document.getElementById('stage').value="Stage "+stagen;
		random();
	}else{
		if (life==1) {
			//Game Over
			alert("GAME OVER!")
			document.getElementById('life1').style.display="none";
			document.getElementById('life2').style.display="none";
			document.getElementById('life3').style.display="none";
			document.getElementById('board').style.display="none";
			document.getElementById('score').value="You reached stage "+stagen;
			document.getElementById('score').style.display="block";
			document.getElementById('game').style.display="block";
			document.getElementById('over').style.display="block";
			document.getElementById('hp').style.display="none";
			document.getElementById('body').style.backgroundColor="black";
			document.getElementById('pause').style.display="none";
			timework=1000;
		}else{
			alert("Oops wrong color.Please try again!");
			life=life-1;
			//evaluate life
			if (life==2) {
				document.getElementById('life3').style.display="none";
			}else if(life==1){
				document.getElementById('life2').style.display="none";
			}else if(life==4){
				document.getElementById('life5').style.display="none";
			}else if(life==3){
				document.getElementById('life4').style.display="none";
			}
		}
	}
}
//Stage 1
function stage1(){
	document.getElementById('stage').value="Stage 1";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (3 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==1) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 2
function stage2(){
	document.getElementById('stage').value="Stage 2";
	document.getElementById('color3').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (4 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==2) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 3
function stage3(){
	document.getElementById('stage').value="Stage 3";
	document.getElementById('color4').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (5 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==3) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 4
function stage4(){
	document.getElementById('stage').value="Stage 4";
	document.getElementById('color5').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (6 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==4) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 5
function stage5(){
	document.getElementById('stage').value="Stage 5";
	document.getElementById('color6').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (7 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==5) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 6
function stage6(){
	document.getElementById('stage').value="Stage 6";
	document.getElementById('color7').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (8 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==6) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 7
function stage7(){
	document.getElementById('stage').value="Stage 7";
	document.getElementById('color8').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (9 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==7) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 8
function stage8(){
	document.getElementById('stage').value="Stage 8";
	document.getElementById('color9').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (10 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==8) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 9
function stage9(){
	document.getElementById('stage').value="Stage 9";
	document.getElementById('color10').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (11 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==9) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 10
function stage10(){
	document.getElementById('stage').value="Stage 10";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (11 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	};
	//Timer
	document.getElementById('timer').value=5;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==10) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 11
function stage11(){
	document.getElementById('stage').value="Stage 11";
	document.getElementById('color11').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (12 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==11) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 12
function stage12(){
	document.getElementById('stage').value="Stage 12";
	document.getElementById('color12').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (13 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==12) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 13
function stage13(){
	document.getElementById('stage').value="Stage 13";
	document.getElementById('color13').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (14 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==13) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 14
function stage14(){
	document.getElementById('stage').value="Stage 14";
	document.getElementById('color14').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (15 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==14) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 15
function stage15(){
	document.getElementById('stage').value="Stage 15";
	document.getElementById('color15').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (16 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==15) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 16
function stage16(){
	document.getElementById('stage').value="Stage 16";
	document.getElementById('color16').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (17 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==16) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 17
function stage17(){
	document.getElementById('stage').value="Stage 17";
	document.getElementById('color17').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (18 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==17) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 18
function stage18(){
	document.getElementById('stage').value="Stage 18";
	document.getElementById('color18').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (19 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==18) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 19
function stage19(){
	document.getElementById('stage').value="Stage 19";
	document.getElementById('color19').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (20 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==19) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 20
function stage20(){
	document.getElementById('stage').value="Stage 20";
	document.getElementById('color20').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (21 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	};
	//Timer
	document.getElementById('timer').value=6;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==20) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 21
function stage21(){
	document.getElementById('stage').value="Stage 21";
	document.getElementById('color21').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (22 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==21) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 22
function stage22(){
	document.getElementById('stage').value="Stage 22";
	document.getElementById('color22').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (23 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==22) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 23
function stage23(){
	document.getElementById('stage').value="Stage 23";
	document.getElementById('color23').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (24 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==23) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 24
function stage24(){
	document.getElementById('stage').value="Stage 24";
	document.getElementById('color24').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (25 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==24) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 25
function stage25(){
	document.getElementById('stage').value="Stage 25";
	document.getElementById('color25').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (26 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==25) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 26
function stage26(){
	document.getElementById('stage').value="Stage 26";
	document.getElementById('color26').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (27 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==26) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 27
function stage27(){
	document.getElementById('stage').value="Stage 27";
	document.getElementById('color27').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (28 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==27) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 28
function stage28(){
	document.getElementById('stage').value="Stage 28";
	document.getElementById('color28').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (29 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==28) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 29
function stage29(){
	document.getElementById('stage').value="Stage 29";
	document.getElementById('color29').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (30 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==29) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 30
function stage30(){
	document.getElementById('stage').value="Stage 30";
	document.getElementById('color30').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (31 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	};
	//Timer
	document.getElementById('timer').value=4;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==30) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 31
function stage31(){
	document.getElementById('stage').value="Stage 31";
	document.getElementById('color31').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (32 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==31) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 32
function stage32(){
	document.getElementById('stage').value="Stage 32";
	document.getElementById('color32').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (33 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==32) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 33
function stage33(){
	document.getElementById('stage').value="Stage 33";
	document.getElementById('color33').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (34 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==33) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 34
function stage34(){
	document.getElementById('stage').value="Stage 34";
	document.getElementById('color34').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (35 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==34) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 35
function stage35(){
	document.getElementById('stage').value="Stage 35";
	document.getElementById('color35').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (36 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==35) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 36
function stage36(){
	document.getElementById('stage').value="Stage 36";
	document.getElementById('color36').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (37 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==36) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 37
function stage37(){
	document.getElementById('stage').value="Stage 37";
	document.getElementById('color37').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (38 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==37) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 38
function stage38(){
	document.getElementById('stage').value="Stage 38";
	document.getElementById('color38').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (39 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==38) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 39
function stage39(){
	document.getElementById('stage').value="Stage 39";
	document.getElementById('color39').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (40 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==39) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 40
function stage40(){
	document.getElementById('stage').value="Stage 40";
	document.getElementById('color40').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (41 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	};
	//Timer
	document.getElementById('timer').value=3;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==40) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 41
function stage41(){
	document.getElementById('stage').value="Stage 41";
	document.getElementById('color41').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (42 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==41) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 42
function stage42(){
	document.getElementById('stage').value="Stage 42";
	document.getElementById('color42').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (43 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==42) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 43
function stage43(){
	document.getElementById('stage').value="Stage 43";
	document.getElementById('color43').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (44 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==43) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 44
function stage44(){
	document.getElementById('stage').value="Stage 44";
	document.getElementById('color44').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (45 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==44) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 45
function stage45(){
	document.getElementById('stage').value="Stage 45";
	document.getElementById('color45').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (46 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	}else if (a == 45) {
		document.getElementById('quest').style.backgroundColor="tomato";
		correct="tomato";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==45) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 46
function stage46(){
	document.getElementById('stage').value="Stage 46";
	document.getElementById('color46').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (47 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	}else if (a == 45) {
		document.getElementById('quest').style.backgroundColor="tomato";
		correct="tomato";
	}else if (a == 46) {
		document.getElementById('quest').style.backgroundColor="crimson";
		correct="crimson";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==46) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 47
function stage47(){
	document.getElementById('stage').value="Stage 47";
	document.getElementById('color47').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (48 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	}else if (a == 45) {
		document.getElementById('quest').style.backgroundColor="tomato";
		correct="tomato";
	}else if (a == 46) {
		document.getElementById('quest').style.backgroundColor="crimson";
		correct="crimson";
	}else if (a == 47) {
		document.getElementById('quest').style.backgroundColor="peru";
		correct="peru";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==47) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 48
function stage48(){
	document.getElementById('stage').value="Stage 48";
	document.getElementById('color48').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (49 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	}else if (a == 45) {
		document.getElementById('quest').style.backgroundColor="tomato";
		correct="tomato";
	}else if (a == 46) {
		document.getElementById('quest').style.backgroundColor="crimson";
		correct="crimson";
	}else if (a == 47) {
		document.getElementById('quest').style.backgroundColor="peru";
		correct="peru";
	}else if (a == 48) {
		document.getElementById('quest').style.backgroundColor="plum";
		correct="plum";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==48) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 49
function stage49(){
	document.getElementById('stage').value="Stage 49";
	document.getElementById('color49').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (50 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	}else if (a == 45) {
		document.getElementById('quest').style.backgroundColor="tomato";
		correct="tomato";
	}else if (a == 46) {
		document.getElementById('quest').style.backgroundColor="crimson";
		correct="crimson";
	}else if (a == 47) {
		document.getElementById('quest').style.backgroundColor="peru";
		correct="peru";
	}else if (a == 48) {
		document.getElementById('quest').style.backgroundColor="plum";
		correct="plum";
	}else if (a == 49) {
		document.getElementById('quest').style.backgroundColor="cyan";
		correct="cyan";
	};
	//Timer
	document.getElementById('timer').value=2;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==49) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Stage 50
function stage50(){
	document.getElementById('stage').value="Stage 50";
	document.getElementById('color50').style.display="inline";
	//Random color on the quest div
	var a = (Math.floor(Math.random() * (51 - 1)) + 1);
	if (a == 1) {
		document.getElementById('quest').style.backgroundColor="red";
		correct="red";
	}else if (a == 2) {
		document.getElementById('quest').style.backgroundColor="green";
		correct="green";
	}else if (a == 3) {
		document.getElementById('quest').style.backgroundColor="blue";
		correct="blue";
	}else if (a == 4) {
		document.getElementById('quest').style.backgroundColor="yellow";
		correct="yellow";
	}else if (a == 5) {
		document.getElementById('quest').style.backgroundColor="black";
		correct="black";
	}else if (a == 6) {
		document.getElementById('quest').style.backgroundColor="white";
		correct="white";
	}else if (a == 7) {
		document.getElementById('quest').style.backgroundColor="orange";
		correct="orange";
	}else if (a == 8) {
		document.getElementById('quest').style.backgroundColor="brown";
		correct="brown";
	}else if (a == 9) {
		document.getElementById('quest').style.backgroundColor="purple";
		correct="purple";
	}else if (a == 10) {
		document.getElementById('quest').style.backgroundColor="aquamarine";
		correct="aquamarine";
	}else if (a == 11) {
		document.getElementById('quest').style.backgroundColor="maroon";
		correct="maroon";
	}else if (a == 12) {
		document.getElementById('quest').style.backgroundColor="beige";
		correct="beige";
	}else if (a == 13) {
		document.getElementById('quest').style.backgroundColor="orangered";
		correct="orangered";
	}else if (a == 14) {
		document.getElementById('quest').style.backgroundColor="pink";
		correct="pink";
	}else if (a == 15) {
		document.getElementById('quest').style.backgroundColor="grey";
		correct="grey";
	}else if (a == 16) {
		document.getElementById('quest').style.backgroundColor="lime";
		correct="lime";
	}else if (a == 17) {
		document.getElementById('quest').style.backgroundColor="darkseagreen";
		correct="darkseagreen";
	}else if (a == 18) {
		document.getElementById('quest').style.backgroundColor="violet";
		correct="violet";
	}else if (a == 19) {
		document.getElementById('quest').style.backgroundColor="darkkhaki";
		correct="darkkhaki";
	}else if (a == 20) {
		document.getElementById('quest').style.backgroundColor="indigo";
		correct="indigo";
	}else if (a == 21) {
		document.getElementById('quest').style.backgroundColor="tan";
		correct="tan";
	}else if (a == 22) {
		document.getElementById('quest').style.backgroundColor="turqoise";
		correct="turqoise";
	}else if (a == 23) {
		document.getElementById('quest').style.backgroundColor="olivedrab";
		correct="olivedrab";
	}else if (a == 24) {
		document.getElementById('quest').style.backgroundColor="salmon";
		correct="salmon";
	}else if (a == 25) {
		document.getElementById('quest').style.backgroundColor="seagreen";
		correct="seagreen";
	}else if (a == 26) {
		document.getElementById('quest').style.backgroundColor="lavender";
		correct="lavender";
	}else if (a == 27) {
		document.getElementById('quest').style.backgroundColor="gold";
		correct="gold";
	}else if (a == 28) {
		document.getElementById('quest').style.backgroundColor="darksalmon";
		correct="darksalmon";
	}else if (a == 29) {
		document.getElementById('quest').style.backgroundColor="magenta";
		correct="magenta";
	}else if (a == 30) {
		document.getElementById('quest').style.backgroundColor="cornflowerblue";
		correct="cornflowerblue";
	}else if (a == 31) {
		document.getElementById('quest').style.backgroundColor="rebeccapurple";
		correct="rebeccapurple";
	}else if (a == 32) {
		document.getElementById('quest').style.backgroundColor="dodgerblue";
		correct="dodgerblue";
	}else if (a == 33) {
		document.getElementById('quest').style.backgroundColor="mediumorchid";
		correct="mediumorchid";
	}else if (a == 34) {
		document.getElementById('quest').style.backgroundColor="navy";
		correct="navy";
	}else if (a == 35) {
		document.getElementById('quest').style.backgroundColor="cadetblue";
		correct="cadetblue";
	}else if (a == 36) {
		document.getElementById('quest').style.backgroundColor="olive";
		correct="olive";
	}else if (a == 37) {
		document.getElementById('quest').style.backgroundColor="steelblue";
		correct="steelblue";
	}else if (a == 38) {
		document.getElementById('quest').style.backgroundColor="sienna";
		correct="sienna";
	}else if (a == 39) {
		document.getElementById('quest').style.backgroundColor="darkgoldenrod";
		correct="darkgoldenrod";
	}else if (a == 40) {
		document.getElementById('quest').style.backgroundColor="moccasin";
		correct="moccasin";
	}else if (a == 41) {
		document.getElementById('quest').style.backgroundColor="coral";
		correct="coral";
	}else if (a == 42) {
		document.getElementById('quest').style.backgroundColor="thistle";
		correct="thistle";
	}else if (a == 43) {
		document.getElementById('quest').style.backgroundColor="goldenrod";
		correct="goldenrod";
	}else if (a == 44) {
		document.getElementById('quest').style.backgroundColor="chartreuse";
		correct="chartreuse";
	}else if (a == 45) {
		document.getElementById('quest').style.backgroundColor="tomato";
		correct="tomato";
	}else if (a == 46) {
		document.getElementById('quest').style.backgroundColor="crimson";
		correct="crimson";
	}else if (a == 47) {
		document.getElementById('quest').style.backgroundColor="peru";
		correct="peru";
	}else if (a == 48) {
		document.getElementById('quest').style.backgroundColor="plum";
		correct="plum";
	}else if (a == 49) {
		document.getElementById('quest').style.backgroundColor="cyan";
		correct="cyan";
	}else if (a == 50) {
		document.getElementById('quest').style.backgroundColor="mistyrose";
		correct="mistyrose";
	};
	//Timer
	document.getElementById('timer').value=1;
	var timer = setInterval(function() {
		var time = document.getElementById('timer').value;
		if (timework==50) {
			if (time>0) {
				var time1 = time - 1;
				document.getElementById('timer').value=time1;
			}else{
				//Timeout
				if (life==1) {
					//Game Over
					alert("GAME OVER!");
					document.getElementById('life1').style.display="none";
					document.getElementById('life2').style.display="none";
					document.getElementById('life3').style.display="none";
					document.getElementById('board').style.display="none";
					document.getElementById('game').style.display="block";
					document.getElementById('over').style.display="block";
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block"
					document.getElementById('score').value="You reached stage "+stagen;
					document.getElementById('score').style.display="block";
					document.getElementById('hp').style.display="none";
					document.getElementById('body').style.backgroundColor="black";
				}else{
					life=life-1;
					//evaluate life
					if (life==2) {
						document.getElementById('life3').style.display="none";
					}else if(life==1){
						document.getElementById('life2').style.display="none";
					}else if(life==4){
						document.getElementById('life5').style.display="none";
					}else if(life==3){
						document.getElementById('life4').style.display="none";
					}
				};
				clearInterval(timer);
			}
		}
	},1000);
}
//Game Won
function stage51(){
	alert("Just kidding.Congradulations Commander!You have won the game!Thanks for playing.");
	document.getElementById('w').style.display="block";
	document.getElementById('o').style.display="block";
	document.getElementById('n').style.display="block";
	document.getElementById('board').style.display="none";
	document.getElementById('body').style.backgroundColor="black";
}
//Color buttons
function red(){
	if (mode=="story") {
		choice="red";
		decide();
	}else if (mode=="endless") {
		choice="red";
		proces();
	};
}
function green(){
	if (mode=="story") {	
		choice="green";
		decide();
	}else if (mode=="endless") {
		choice="green";
		proces();
	};
}
function blue(){
	choice="blue";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function yellow(){
	choice="yellow";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function black(){
	choice="black";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function white(){
	choice="white";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function orange(){
	choice="orange";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function brown(){
	choice="brown";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function purple(){
	choice="purple";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function aquamarine(){
	choice="aquamarine";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function maroon(){
	choice="maroon";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function beige(){
	choice="beige";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function orangered(){
	choice="orangered";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function pink(){
	choice="pink";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function grey(){
	choice="grey";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function lime(){
	choice="lime";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function darkseagreen(){
	choice="darkseagreen";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function violet(){
	choice="violet";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function darkkhaki(){
	choice="darkkhaki";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function indigo(){
	choice="indigo";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function tan(){
	choice="tan";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function turquoise(){
	choice="turquoise";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function olivedrab(){
	choice="olivedrab";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function salmon(){
	choice="salmon";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function seagreen(){
	choice="seagreen";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function lavender(){
	choice="lavender";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function gold(){
	choice="gold";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function darksalmon(){
	choice="darksalmon";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function magenta(){
	choice="magenta";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function cornflowerblue(){
	choice="cornflowerblue";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function rebeccapurple(){
	choice="rebeccapurple";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function dodgerblue(){
	choice="dodgerblue";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function mediumorchid(){
	choice="mediumorchid";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function navy(){
	choice="navy";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function cadetblue(){
	choice="cadetblue";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function olive(){
	choice="olive";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function steelblue(){
	choice="steelblue";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function sienna(){
	choice="sienna";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function darkgoldenrod(){
	choice="darkgoldenrod";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function moccasin(){
	choice="moccasin";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function coral(){
	choice="coral";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function thistle(){
	choice="thistle";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function goldenrod(){
	choice="goldenrod";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function chartreuse(){
	choice="chartreuse";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function tomato(){
	choice="tomato";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function crimson(){
	choice="crimson";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function peru(){
	choice="peru";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function plum(){
	choice="plum";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function cyan(){
	choice="cyan";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
function mistyrose(){
	choice="mistyrose";
	if (mode=="story") {
		decide();
	}else if (mode=="endless") {
		proces();
	};
}
//Decision making
function decide(){
	if (choice==correct) {
		timework=timework+1;
		stagen=stagen+1;
		//Deciding the stage
		stagend();
	}else{
		if (life==1) {
			//Game Over
			alert("GAME OVER!")
			document.getElementById('life1').style.display="none";
			document.getElementById('life2').style.display="none";
			document.getElementById('life3').style.display="none";
			document.getElementById('board').style.display="none";
			document.getElementById('game').style.display="block";
			document.getElementById('over').style.display="block";
			document.getElementById('hp').style.display="none";
			document.getElementById('body').style.backgroundColor="black";
			document.getElementById('pause').style.display="none";
			document.getElementById('score').value="You reached stage "+stagen;
			document.getElementById('score').style.display="block";
			timework=1000000;
		}else{
			alert("Oops wrong color.Please try again!");
			life=life-1;
			//evaluate life
			if (life==2) {
				document.getElementById('life3').style.display="none";
			}else if(life==1){
				document.getElementById('life2').style.display="none";
			}else if(life==4){
				document.getElementById('life5').style.display="none";
			}else if(life==3){
				document.getElementById('life4').style.display="none";
			}
		}
	}
}
//Stage decision
function stagend(){
	alert("Stage "+stagen);
	if (stagen==2) {
		stage2();
	}else if(stagen==3){
		stage3();
	}else if(stagen==4){
		stage4();
	}else if(stagen==5){
		stage5();
	}else if(stagen==6){
		stage6();
	}else if(stagen==7){
		stage7();
	}else if(stagen==8){
		stage8();
	}else if(stagen==9){
		stage9();
	}else if(stagen==10){
		stage10();
	}else if(stagen==11){
		alert('Congrats noobie you have been promoted to Cadet.Take this extra second with you okay Cadet.');
		stage11();
	}else if(stagen==12){
		stage12();
	}else if(stagen==13){
		stage13();
	}else if(stagen==14){
		stage14();
	}else if(stagen==15){
		stage15();
	}else if(stagen==16){
		stage16();
	}else if(stagen==17){
		stage17();
	}else if(stagen==18){
		stage18();
	}else if(stagen==19){
		stage19();
	}else if(stagen==20){
		stage20();
	}else if(stagen==21){
		alert("Congrats Cadet you have been promoted to Lieutenant.I'm taking away two seconds of your time because you are no longer a kid.");
		stage21();
	}else if(stagen==22){
		stage22();
	}else if(stagen==23){
		stage23();
	}else if(stagen==24){
		stage24();
	}else if(stagen==25){
		stage25();
	}else if(stagen==26){
		stage26();
	}else if(stagen==27){
		stage27();
	}else if(stagen==28){
		stage28();
	}else if(stagen==29){
		stage29();
	}else if(stagen==30){
		stage30();
	}else if(stagen==31){
		alert("Congrats again Lieutenant.You are now our new Surgent.We are removing a second from your time again because you know the drill.");
		stage31();
	}else if(stagen==32){
		stage32();
	}else if(stagen==33){
		stage33();
	}else if(stagen==34){
		stage34();
	}else if(stagen==35){
		stage35();
	}else if(stagen==36){
		stage36();
	}else if(stagen==37){
		stage37();
	}else if(stagen==38){
		stage38();
	}else if(stagen==39){
		stage39();
	}else if(stagen==40){
		stage40();
	}else if(stagen==41){
		alert("You are good at this Surgent.We are now proud to call you our General.I wont even bother explaining the rest.");
		stage41();
	}else if(stagen==42){
		stage42();
	}else if(stagen==43){
		stage43();
	}else if(stagen==44){
		stage44();
	}else if(stagen==45){
		stage45();
	}else if(stagen==46){
		stage46();
	}else if(stagen==47){
		stage47();
	}else if(stagen==48){
		stage48();
	}else if(stagen==49){
		stage49();
	}else if(stagen==50){
		alert("Good job General.Now this is the final test to see whether you are worthy to be called the Commander.Do this task in one second if you are a Gee.")
		stage50();
	}else if(stagen==51){
		stage51();
	};
}
//Help Button
function help() {
	alert("Welcome noobie to Lex.Let me get you through the basics of this game.You can press 'ok' below this message to get rid of it if you already know the basics or you don't want to know this.Feel free.I don't think there's a need for me to mention this but why not.You can press play to start the game, exit to exit to our main website, help for help and settings to personalize the game's theme to your own liking.So on the play part.There are two modes of the game there is the story mode and the endless mode.Story mode is the one which you can advance from one post to another.Endless is the one where you just advance from one stage to another but there is no post change, this is only for seeing who is the best Lex player between you and your friends.                                                                                                         How to play.                                                                          ________________                                                                  So you have to click on the color corresponding to the color on the big rectangle below the text showing the current stage.There's a catch to this though you have to do this within a time limit.If you get it right you advance to the next stage, if you press the wrong color you lose a life and if the time runs out you also lose a life.Endless is infinite and story is up to stage 50.See if you can reach level 50 in story mode and see who's better at this game between you and your friend in endless.Have fun!")
}
//Pause Button
function pause(){
	alert("Paused                                                                                                                                                           Press 'ok' to resume.");
}
function settings(){
	document.getElementById('settingss').style.display="block";
	document.getElementById('setting').style.display="none";
}
function back(){
	document.getElementById('settingss').style.display="none";
	document.getElementById('setting').style.display="block";
}
function submit(){
	document.getElementById('descript').value="";
	alert('Thank you for your comment');
}
function dt(){
	document.getElementById('body').style.backgroundColor="black";
	document.getElementById('head').style.backgroundColor="darkseagreen";
}