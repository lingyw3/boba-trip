function showContent(shop) {
  // Hide all descriptions
  const texts = document.querySelectorAll('.boba-description');
  texts.forEach(text => text.classList.add('hidden'));

  // Show the selected description
  document.getElementById(`${shop}-text`).classList.remove('hidden');

  // Update the second image below the text
  const image = document.getElementById('boba-img-display');
  image.src = `images/${shop}2.jpg`;
  image.alt = `${shop} memory`;

  // Update which circle is "selected"
  const circles = document.querySelectorAll('.boba-circle');
  circles.forEach(c => c.classList.remove('selected'));
  document.getElementById(`${shop}-circle`).classList.add('selected');
}

// Default selection on load
window.onload = () => showContent('tptea');
