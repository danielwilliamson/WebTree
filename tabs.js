var list = [];
chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
	
	  list.push(tab.title);
	  document.write(list.toString());
	  
    });
  });
});

function clickHandler() {
window.webkitNotifications.createNotification(list.toString()).show();


}
