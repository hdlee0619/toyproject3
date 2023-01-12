 function posting() {
            let name = $("#name").val();
            let address = $("#address").val();
            let comment5 = $("#comment5").val();
            let password = $("#password").val();

            $.ajax({
               type: "POST",
               url: "/til",
               data: {
                  name_give: name,
                  vlog_url_give: address,
                  comment5_give: comment5,
                  password_give: password,
               },
               success: function (response) {
                  alert(response["msg"]);
                  window.location.reload();
               },
            });
         }



           // scrollY 350 사이드메뉴바 보이게하기
          $(window).on('scroll', function(){
        if (window.scrollY > 100) {
       $('.side_menu').css('opacity', '1');
           }else if(window.scrollY < 100) {
        $('.side_menu').css('opacity', '0');
        }
        });