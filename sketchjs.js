$(document).ready(function(){

	var dimen = 16; var cubeSize;var rndmColor; var opac; var nxtOpac;
	createGrid();

	$('.cubes').mouseenter(function(){
		$(this).css("background-color","white");
		});

	$('#plain').click(function() {
		resetGrid();
		$('.cubes').mouseenter(function(){
			$(this).css("background-color","white");
			});
		});

	$('#random').click( function() {
		resetGrid();
		$('.cubes').mouseenter( function() {
			colorGen();
			$(this).css("background-color", rndmColor);
			});
		});

	$('#fade').click( function() {
		resetGrid();
		$('.cubes').mouseenter( function() {
			opac = $(this).css("opacity");
			nxtOpac = opac - 0.1;
			$(this).css("opacity", nxtOpac);
			});
		});

	$('#comet').click(function() {
		resetGrid();
		$('.cubes').mouseenter( function() {
			$(this).css('opacity','0')
			$(this).fadeTo("slow", 1);
			});
		});

	$(document).on('click','#clear', function(){
		$('#grid').empty();
		createGrid(); 
		});

	function createGrid() {
		for(var i=0; i<dimen; i++) {
			$('#grid').append('<div class="rows"></div>');
			};
		for (var r=0; r<dimen; r++) {
			$('.rows').append('<div class="cubes"></div>');
			};
		cubeSize= 960/dimen-2;
		$('.cubes').css("height", cubeSize);
		$('.cubes').css("width", cubeSize);
		}; 

	function colorGen(){
		var rd = Math.floor((Math.random()*256)+1);
		var gn = Math.floor((Math.random()*256)+1);
		var bl = Math.floor((Math.random()*256)+1);
		rndmColor = 'rgb('+rd+','+gn+','+bl+')'
		};

	function resetGrid(){
		dimen = prompt ("What size would you like the new grid? (1-100)");
		if (dimen > 100) {
			alert ("Your box is too bix. We set it to 16 for you.");
			dimen = 16;
			}
		$('#grid').empty();
		createGrid();
	};
});



