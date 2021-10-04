const app = () =>{
	const song = document.querySelector(".songs");
	const play = document.querySelector(".play");
	const outline = document.querySelector(".movingoutline circle");
	const video= document.querySelector(".vidcontainer video");

	const sounds = document.querySelectorAll(".soundpicker button");

	const timedisplay= document.querySelector(".timedisplay");
	const timeselect = document.querySelectorAll('.timeselect button');

	const outlinelen = outline.getTotalLength();

	let fakeduration = 600;

	outline.style.strokeDasharray = outlinelen;
	outline.style.strokeDashoffset = outlinelen;

	//pick sounds
	sounds.forEach(sound =>{
		sound.addEventListener('click', function(){
			song.src = this.getAttribute('data-sound');
			video.src = this.getAttribute('data-video');
			checkplaying(song);
		});
	});

	//play sound
	play.addEventListener('click', function() {
		checkplaying(song);
	});

	
	//select sound
	timeselect.forEach(option =>{
		option.addEventListener('click', function(){
			fakeduration = this.getAttribute('data-time');
			timedisplay.textContent = `${Math.floor(fakeduration/60)}:${
				Math.floor(fakeduration%60)}`;
			
		});
	});


	//to stop and play the songs
	const checkplaying = song =>{
		if(song.paused){
			song.play();
			video.play();
			play.src='./svg/pause.svg';
		}else{
			song.pause();
			video.pause();
			play.src ='./svg/play.svg';
		}
	};

	//circle and time
	song.ontimeupdate = function() {
		let currenttime = song.currentTime;
		let elapsed = fakeduration - currenttime;
		let seconds = Math.floor(elapsed % 60);
		let minutes = Math.floor(elapsed /60);

		let progress = outlinelen - (currenttime/fakeduration) * outlinelen;
		outline.style.strokeDashoffset = progress;

		timedisplay.textContent = `${minutes}:${seconds}`;

		if(currenttime >= fakeduration) {
			song.pause();
			song.currentTime = 0;
			play.src = './svg/play.svg';
			video.pause();
		}
	};

};

app();