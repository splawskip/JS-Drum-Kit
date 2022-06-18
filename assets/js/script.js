// Get all keys elements as array.
const keys = Array.from(document.querySelectorAll('.key'));
/** This function plays the sound which is connected with currently pressed key */
function playSound(e) {
  // Get audio and key elements assigned to currently pressed key.
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  // Check if there is audio for current key.
  if (!audio) return;
  // Add playing class to key element.
  key.classList.add('playing');
  // Reset the audio.
  audio.currentTime = 0;
  // Play the audio.
  audio.play();
}
// Remove transition class when transition has ended.
keys.forEach((key) => key.addEventListener('transitionend', (e) => e.target.classList.remove('playing')));
// Add play sound event on key down.
window.addEventListener('keydown', playSound);
