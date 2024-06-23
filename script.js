function updateBadgePosition(position) {
  const badge = document.getElementById('badgeImage');
  badge.className = `badge ${position}`;
}

function updateText(id, value) {
  document.getElementById(id).innerText = value;
}

function updateButton(url, text) {
  const button = document.getElementById('button');
  button.href = url;
  button.innerText = text;
}
