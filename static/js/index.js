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
         for (let i = 0; i < rows.length; i++) {
            let name = rows[i]["name"];
            let blog_url = rows[i]["vlog_url"];
            let comment5 = rows[i]["comment5"];
            let img = rows[i]["img"];
            let title = rows[i]["title"];
            let desc = rows[i]["desc"];
            let like = rows[i]["like"];
            let num = rows[i]["num"];

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
            <div class="card h-100">
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
                        <button onClick="like(${num})" class="post-info__button"
                           ><i class="fa-solid fa-heart fa-lg"></i></i
                        ></button>
                        <span
                           >${like}</i
                        ></span>
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
