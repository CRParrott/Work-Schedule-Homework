var timeDisplayEl = $('#time-display');
var timeColor = $('#col-task');

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

