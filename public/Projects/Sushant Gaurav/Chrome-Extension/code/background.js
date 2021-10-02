let defaultDuration = 60000;

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log(alarm);
  chrome.notifications.create(
    "my notification",
    {
      type: "basic",
      iconUrl: "images/mylogo.png",
      title: "OneTab Reminder",
      message: "Hey there! You have hit your desired time.",
    },
    function (notificationID) {
      console.log("displayed the notification");
    }
  );
});

function createAlarm(defaultDuration) {
  chrome.alarms.create("Your friendly reminder.", {
    when: Date.now() + defaultDuration,
  });
}

//createAlarm()

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let defaultDuration = request.minutes * 60000;
  //defaultDuration = defaultDuration*10;
  createAlarm(defaultDuration);
  sendResponse({ success: true });
});
