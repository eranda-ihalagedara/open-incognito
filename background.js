chrome.action.onClicked.addListener(async (tab) => {
  try {
	  
	chrome.windows.create({
	  url: tab.url,
	  incognito: true
	});

  } catch (error) {
    console.error(error);
  }
});
