function loadHandler() {
window.webkitNotifications.createNotification("Hello",list.toString()).show();
}

document.addEventListener('DOMContentLoaded', function () {
  loadHandler();
});