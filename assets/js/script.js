var timeDisplayEl = $('#time-display');
var saveTaskEl = $('#save-task');
var taskEntryEl = $('#task-entry');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }

displayTime();

// background color based on time
function timeBackground() {
}

timeBackground();

// save an entry to the form

