const username = document.getElementById('username-name');
const title = document.getElementById('title-name');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  const username = {
    username: username.value,
    title: title.value,
    content: content.value.trim(),
  };

localStorage.setItem('username', JSON.stringify(username));
renderMessage();
});

function renderMessage() {
const textContent = JSON.parse(localStorage.getItem('username'));
if (textContent !== null) {
  document.querySelector('.message').textContent =
    textContent.username + `${textContent.username}`;
}
}
