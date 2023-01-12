function posting() {
   let name = $("#name").val();
   let address = $("#address").val();
   let comment5 = $("#comment5").val();

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
