

$(document).ready(function () {
   listing();


});



function listing() {
   $.ajax({
      type: "GET",
      url: "/show",
      data: {},
      success: function (response) {
         let rows = response["tils"];
            console.log(rows)
         for (let i = 0; i < rows.length; i++) {
            let name = rows[i]["name"];
            let blog_url = rows[i]["vlog_url"];
            let comment5 = rows[i]["comment5"];
            let img = rows[i]["img"];
            let title = rows[i]["title"];
            let desc = rows[i]["desc"];
            let num = rows[i]['num'];
            let password = rows[i]['password'];


            // 글자 자르기
            let title_result;
            let desc_result;

            if (title.length > 17) {
               title_result = title.substr(0, 17) + " ...";
            } else {
               title_result = title;
            }

            if (desc.length > 100) {
               desc_result = desc.substr(0, 97) + " ...";
            } else {
               desc_result = desc;
            }

            let temp_html = `
            <div class="col post-card">
            <div class="card ">
               <div class="post-card__img_container">
               <a href="${blog_url}" target="_brank">
               <img src="${img}" class="card-img-top post-img" /></a>
               </div>
               <a href="${blog_url}" target="_brank">
               <div class="card-body">
                  <h5 class="card-title">${title_result}</h5>
                  <p class="card-text">
                     ${desc_result}
                  </p>
               </div>
               </a>
               <div class="card-footer post-comment">
                  <small class="text-muted post-comment__small"
                     >${comment5}</small
                  >
               </div>
               <div class="card-footer post-info">
                  <div class="post-info__writer">
                     <small class="text-muted">- by ${name}</small>
                  </div>
                  <div class="post-info__container">
                     <div class="post-info__response">
                        <span onclick="like(${num})" >
                       
                        <i class="fa-regular fa-heart fa-lg"></i >
                        </span>
                        <span 
                           ><i class="fa-regular fa-comment fa-lg"></i
                        ></span>
                       
                        <button onclick="delete2(${num})">dd
</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
               `;
            $(".post-container").append(temp_html);
         }
      },
   });
}

function like(num) {
   $.ajax({
      type: "POST",
      url: "/like",
      data: { num_give: num },
      success: function (response) {
         alert(response["msg"]);
         window.location.reload();
      },
   });
}


        // 일정 삭제 기존에 생각했던 비밃번호는 구현에 실패하고
        // 글 번호를 입력하면 삭제되게 구현
         function delete2(num){

           let pw = prompt('글번호 입력하세요','')
             // 여기에 글마다 맞는 비밀번호를 가져와야하는데..
             if(pw == num){
               $.ajax({
                 type: "POST",
                 url: "/delete",
                 data: { num_give: num  },
                 success: function (response) {
                          alert(response["msg"])
                     window.location.reload()


                 }
             });

             }
             // 비밀번호가 틀릴시
             else{
                 alert("비밀번호 오류")
                 window.location.reload()
         }


}
        // scrollY 350 사이드메뉴바 보이게하기
          $(window).on('scroll', function(){
        if (window.scrollY > 350) {
       $('.side_menu').css('opacity', '1');
           }else if(window.scrollY < 350) {
        $('.side_menu').css('opacity', '0');
        }
        });

