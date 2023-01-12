


function posting() {
   let name = $("#name").val();
   let address = $("#address").val();
   let comment5 = $("#comment5").val();

   if(name ===''){
      alert('Error!')
      $(".showname").addClass('errorValue')
   }else if(address ===''){
      alert('Error!')

      $(".showurl").addClass('errorValue')
      $(".showname").removeClass('errorValue')
   }else if(comment5 ===''){
       alert('Error!')
      $(".showurl").removeClass('errorValue')
      $(".showname").removeClass('errorValue')
      $(".showcomment").addClass('errorValue')

   } else{
       $.ajax({
      type: "POST",
      url: "/til",
      data: {
         name_give: name,
         vlog_url_give: address,
         comment5_give: comment5,
      },
      success: function (response) {
         alert(response["msg"]);
         window.location.reload();
      },
   });
   }





}



