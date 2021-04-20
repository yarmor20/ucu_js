function addDropdownValues(values) {
  var html = '';
  for(let valIdx = 0; valIdx < values.length; valIdx++) {
    html += '<option value="' + valIdx + '">' + values[valIdx] + '</option>';
  }
  document.getElementById('dropdown-custom-options').innerHTML += html;
}


let depSelection = document.querySelector('select');

depSelection.addEventListener('selection', () => {
  result = depSelection.options[depSelection.selectionIndex].text
  console.log(result);
});
