var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(rightNow);
  }