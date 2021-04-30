var selected_cat = Array();
var selected_room = Array();

$(function(){

    $(".dropdown-menu  a").click(function(){
        selected_cat = $(this).text();
        $(this).parents(".dropdown").find('.btn').html($(this).text());
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
   });

});

$( ".card" ).hover(
    function() {
      $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
    }, function() {
      $(this).removeClass('shadow-lg');
    }
);

// a function that displays list of rooms according to user selected capacity
// by simply hidding those that do not qualify
$("#search-btn").click(function(){
  $("#rooms-list #individual-room").each(function() {
    if (selected_cat.length>0){
      var target_cat = "Capacity " +selected_cat;
      if ($(this).text().includes(target_cat)) {
          $(this).show();
      }
      else {
          $(this).hide();
      }

    }
      
  });
});



$(document).on('click', '#reserve-btn', function (){

  // selected_room = $(this).parents(".individual-room");
  const user_id = $(this).parents(".container").find("#user-id").text();
  const selected_room_id = $(this).parents(".card").find("#room-id").text().split(" "); //selected_room_id[1]
  const selected_cap = $(this).parents(".card").find("#room-cap").text().split(" "); //seleceted_cap[1]
  const selected_time = $(this).parents(".card").find("#room-time").text().split(" "); //selected_time[0] = date, 
                                                                                 //selected[2] and [3] = start time (PM/AM), 
                                                                                 //selected[5] and [6] = end time (PM/AM),
  const some_date = selected_time[0].split("/");

  function fixtime (t1, t2){
    if (t2 == "PM"){
      if (t1 == 12){
        return t1.toString();
      }
      else{
        return (t1 + 12).toString();
      }
    }
    else{
      return t1.toString()
    }
  }

  function fixdate (dt1){
    if (parseInt(dt1)>9){
      return dt1
    }
    else{
      return "0" + dt1;
    }
  }

  //backend testing

  // var user_id = currentUser.A_id;
  // var room_Id = 'B';
  // var room_cap = '2-4';
  // var A_id = 'test123';
  // var room_start = '2021-01-19T15:00:00';
  // var room_end = '2021-01-19T16:00:00';

  $.post("/book", 
  {
    room_Id : selected_room_id[1],
    room_cap : selected_cap[1],
    A_id : user_id,
    room_start : (some_date[2] + "-" + fixdate(some_date[0]) + "-" + some_date[1] + "T" + (fixtime ( (parseInt(selected_time[2].split(":")[0]) ) , selected_time[3]) + ":00:00")) ,
    room_end : (some_date[2] + "-" + fixdate(some_date[0]) + "-" + some_date[1] + "T" + (fixtime ( (parseInt(selected_time[5].split(":")[0]) ), selected_time[6]) + ":00:00") )   
  })

  alert("work");

});






    










