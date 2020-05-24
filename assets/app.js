
	var preload = document.querySelector('#preload');
	var fs = document.querySelector('#fs');
	var input = document.querySelector('#notif');
	var ucapan = document.querySelector('#ucapan');
	var inputnama = document.querySelector('#nama');
	var spannama = document.querySelector('#spanNama');
	var btnok = document.querySelector('#btnok');
	var btno = document.querySelector('#btnno');
	var btno2 = document.querySelector('#btnno2');
	var btno3 = document.querySelector('#btnno3');
	var myvideo = document.querySelector('#myVideo');
	var myOpening = document.querySelector('#myOpening');
	var vidcont = document.querySelector('.vidcont');
	var btnyes = document.querySelector('#btnyes');
	var akhir = document.querySelector('#akhir');
	var kondisinya = false;
	var nama;

	function init(){
		vidcont.style.display = 'none';
		akhir.style.display = "none";
		input.style.display = "none";
		preload.style.display = "block";
	}

	function displayWindowSize(){
		var cek = document.documentElement.clientWidth > document.documentElement.clientHeight;
		if(!kondisinya){
		preloadShow(cek);
		kondisinya = true;
		}
	}

	function preloadShow(kondisi){
		if(kondisi){
			preload.style.display = "none";
			input.style.display = "block";
		}
		console.log(kondisi);
	}

	btnok.addEventListener('click',function(){
		nama = inputnama.value;
		if(nama.length < 1 ){
			nama = "Tanpa Nama";
		}
		ubahisi();
		playOpening();
		input.style.display = "none";
		ucapan.style.display = "block";
	});

	btnyes.addEventListener('click',function(){
		ucapan.style.display = "none";
		input.style.display = "none";
		vidcont.style.display = "block";
		document.body.requestFullscreen();
		myvideo.play();
		stopOpening();
	});

	myvideo.onended = function () {
    	vidcont.style.display = 'none';
    	input.style.display = 'none';
    	playAudio();
    	akhir.style.display = 'block';
	}

	function move(){
		btno.style.display = "none";
		btno2.style.display = "block";
		btno3.style.display = "none";
	}

	function move2(){
		btno.style.display = "none";
		btno2.style.display = "none";
		btno3.style.display = "block";
	}

	function move3(){
		btno.style.display = "block";
		btno2.style.display = "none";
		btno3.style.display = "none";	
	}

	function ubahisi(){
		spannama.innerHTML = nama;
	}

	function playAudio() {
    var x = document.getElementById("myAudio");
    x.volume = 0.15;
    x.play();
    x.loop = true;
	}
	function playOpening() {
	    var x = document.getElementById("myOpening");
	    x.volume = 0.3;
	    x.play();
	    x.addEventListener("ended", function () {
	        stopOpening();
	    });
	}
	function stopOpening() {
	    var x = document.getElementById("myOpening");
	    x.pause();
	    x.currentTime = 0;
	    var x = document.getElementById("myAudio");
	    x.pause();
	    x.currentTime = 0;
	}


	window.addEventListener("resize", displayWindowSize);

	displayWindowSize();
