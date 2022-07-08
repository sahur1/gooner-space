// filter and sort algorithms from https://www.w3schools.com/howto/howto_js_filter_elements.asp and
// https://www.w3schools.com/howto/howto_js_sort_list.asp

$(function(){
  $(".collapsible").click(function(){
    $(this).next().toggle("fast");
  });
});

filterSelection("all");
function filterSelection(value) {
  var $elements = $(".player-card");
  //elements = document.getElementsByClassName("player-card");
  if (value == "all") value = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  $.each($elements, function(){
    $(this).removeClass("show");
    if (this.className.indexOf(value) > -1)
      $(this).addClass("show");
  });
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