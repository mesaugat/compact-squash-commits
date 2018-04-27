(function() {

  var squashDiv = document.getElementsByClassName('btn-group-squash')[0];
  var squashButton = squashDiv.querySelector('button[type="submit"]');

  squashButton.addEventListener('click', function() {
    var mergeMessageField = document.getElementById('merge_message_field') || document.getElementsByClassName('merge-commit-message')[0];
    var mergeMessage = mergeMessageField.value;

    if (mergeMessage) {
      var commits = mergeMessage.match(new RegExp(/^\* .+/, 'gm'));
      var compactCommits = '';

      // Remove consecutive duplicates
      var text = commits.reduce(function(accumulator, currentValue, currentIndex, array) {
        var currentMessage = currentValue.trim().toLowerCase().replace(/[.]$/, '');
        var previousMessage = array[currentIndex - 1] ? array[currentIndex - 1].trim().toLowerCase().replace(/[.]$/, '') : '';

        if (previousMessage !== currentMessage) {
          compactCommits += currentValue + '\n';
        }

        return compactCommits;
      }, '');

      mergeMessageField.value = text.trim();
    }
  });

})();
