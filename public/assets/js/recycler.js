$(function() {
    $(".reItem").on("click", function(e) {
      console.log('you clicked recycle');
      var id = $(this).data("itemid");
      var newStatus = $(this).data("status");

      var newStatusState ={
          recycled: newStatus
      };

      // Send the PUT request.
      $.ajax("/api/items/" + id, {
        type: "PUT",
        data: newStatusState
      }).then(
        function() {
          console.log("recycled item", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    
    });
  
    $("#inputItem").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newItem = {
        item: $("#inputItem [name=item]").val().trim(),

      };
      // Send the POST request.
      $.ajax("/api/items", {
        type: "POST",
        data: newItem
      }).then(
        function() {
          console.log("created new item");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".deItem").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("itemid");
    
        $.ajax("/totrash/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted id ", id);
            location.reload();
          }
        );
      });

      $(".clearItems").on("click", function(e){
        e.preventDefault();
        
        $.ajax("/emptyItems/", {
          type: "DELETE"
        }).then(
          function() {
            location.reload();
          }
        );
      })


  });
  