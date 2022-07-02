// javascript code from https://www.w3schools.com/howto/howto_js_collapsible.asp
// filter and sort algorithms from https://www.w3schools.com/howto/howto_js_filter_elements.asp and
// https://www.w3schools.com/howto/howto_js_sort_list.asp

// Store list of all collapsible elements
var coll = document.getElementsByClassName("collapsible");
var i;

// add event listeners on each collapsible
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // add active class to element on click
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    // set the maxHeight of the collapsible element sibling
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

filterSelection("all");
function filterSelection(value) {
  var elements, iter;
  elements = document.getElementsByClassName("player-card");
  if (value == "all") value = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (iter = 0; iter < elements.length; iter++) {
    removeClass(elements[iter], "show");
    if (elements[iter].className.indexOf(value) > -1) addClass(elements[iter], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var iter, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (iter = 0; iter < arr2.length; iter++) {
    if (arr1.indexOf(arr2[iter]) == -1) {
      element.className += " " + arr2[iter];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var iter, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (iter = 0; iter < arr2.length; iter++) {
    while (arr1.indexOf(arr2[iter]) > -1) {
      arr1.splice(arr1.indexOf(arr2[iter]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function sortPlayers() {
  var i, list, switching, b, shouldSwitch, dir, sortBy, switchcount = 0;
  list = document.getElementsByClassName("player-container");
  sortBy = document.getElementsByName("sortBy")[0].value;
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list[0].querySelectorAll(".player-card");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (sortBy == "wage") {
        // Since wage innerhtml needs to be sliced create a separate case for it and all other attributes
        if (dir == "asc") {
          if (parseInt(b[i].querySelector(".wage").innerHTML.slice(1,-1)) > parseInt(b[i + 1].querySelector(".wage").innerHTML.slice(1,-1))) {
            /* If next item is numerically lower than current item,
            mark as a switch and break the loop: */
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (parseInt(b[i].querySelector(".wage").innerHTML.slice(1,-1)) < parseInt(b[i + 1].querySelector(".wage").innerHTML.slice(1,-1))) {
            /* If next item is numerically higher than current item,
            mark as a switch and break the loop: */
            shouldSwitch= true;
            break;
          }
        }
      } else {
        if (dir == "asc") {
          if (parseInt(b[i].querySelector("."+sortBy).innerHTML) > (parseInt(b[i + 1].querySelector("."+sortBy).innerHTML))) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (parseInt(b[i].querySelector("."+sortBy).innerHTML) < (parseInt(b[i + 1].querySelector("."+sortBy).innerHTML))) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}