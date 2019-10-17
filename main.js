
function updateItemStatus() {
  var cbId = this.id.replace("cb_", "");
  var itemText =  document.getElementById("item_" + cbId);

  if  (this.checked){
    itemText.style.textDecoration = "line-through";
    itemText.style.color = "red";
    itemText.style.fontWeight = "800";
  } else {
    itemText.style.textDecoration = "none";
    itemText.style.color = "blue" ;
    itemText.style.fontWeight = "400";
  };
}

function addNewItem(list, itemText) {
  //<li>
  //each element should look like this
  //<input type='checkbox'/>
  //<span>Make todo list</span>
  //</li>
  var date = new Date();
  var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

  var listItem = document.createElement('div');
  listItem.className = 'addedDiv';
  listItem.id = "div_" + id;
  var listID = listItem.id;

  var checkBox = document.createElement('input');
  checkBox.className = "checkBox";
  checkBox.type = 'checkbox';
  checkBox.id = "cb_" + id;
  checkBox.onclick = updateItemStatus;

  var span = document.createElement('span');
  span.id = "item_" + id;
  span.innerText = itemText;

  var delBtn = document.createElement('button');
  delBtn.className = "delBtn";
  delBtn.id = "item_" + id;
  delBtn.innerText = "-delete-";
  delBtn.onclick = function (){
    // function defined here and not on its own because it needs to access
    // the id created within this section of code.
    var elem = document.getElementById(listID);
    elem.parentNode.removeChild(elem);
  };

  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  listItem.appendChild(delBtn);

  list.appendChild(listItem);
}

var inItemText = document.getElementById('inItemText');
var btnNew = document.getElementById('addBtn');
btnNew.onclick = function() {

  var itemText = inItemText.value;

  if (!itemText || itemText == '') {
    return false;
  };

  addNewItem(document.getElementById('addDiv'), itemText);

  inItemText.focus();
  inItemText.select();
};
inItemText.focus();
inItemText.onkeyup = function(event) {
//if event == (13) --> ENTER
//if ENTER pressed then it will add item to the list
  if (event.which == 13){

    var itemText = inItemText.value;

    if (itemText == '' || itemText == ' ') {
      return false;
    };

    addNewItem(document.getElementById('addDiv'), itemText);

    inItemText.focus();
    inItemText.select();
  };
}
