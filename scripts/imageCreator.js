const bazaarCeramicsString = window.location.search;
const urlParams = new URLSearchParams(bazaarCeramicsString);
const itemPrice = urlParams.get("price");
const itemDesc = urlParams.get("description");
const itemName = urlParams.get("name");
const fileName = urlParams.get("slice");

/* Function that executes on page load - it uses template literals rather than 
traditional quotations to concatenate the table and image strings required */

function InsertImageSlices() {
  let dispImg = "";
  let dirName = "images/slicedimages/"
  let row, col;

  /* The following nested for loop builds up the value of the variable dispImg through
  concatenation which finally injects the value as HTML into the members_order page. The
  result is a table holding a differnet image in each cells dipicting the pieced together
  image of the requested ordered item */
  for(let row = 0; row < 4; row++){
    dispImg += "<tr>" /*Start of concatenation */
    for(let col = 0; col <  5; col++){
      dispImg += "<td>"
      dispImg += `<img src="${dirName}${fileName}/${fileName}_r${row+1}_c${col+1}.jpg"</td>`
      // console.log(dispImg);
    }
    dispImg += "</tr>" /* Final concatenation*/
  document.getElementById('imageSlices').innerHTML = dispImg; /* Inserts the HTML code */
  }
  return;
}

/* Function executes on members_orders page onload event in the body. This replaces the
placeholder information with the query string data corosponding with the user click */
function bodyInfoUpdate(){
  document.getElementById("itemsName").innerHTML = itemName;
  document.getElementById("itemsName2").innerHTML = "Order Item - " + itemName;
  document.getElementById("iDesc").value = itemDesc;
  document.getElementById("price").value = itemPrice;
  return;
}

