var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  progressColor: 'purple'
});

wavesurfer.on('ready', function () {
  wavesurfer.play();
});

function myFunction() {
  wavesurfer.play();
}
wavesurfer.load('1.mp3');
