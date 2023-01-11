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
            let address = rows[i]["vlog_url"];
            let num = rows[i]["num"];
            let like = rows[i]["like"];
            let comment5 = rows[i]["comment5"];

            let temp_html = `
               <div class="mycards">
                   <div class="card" style="width: 18rem;">
                       <img src="https://previews.123rf.com/images/julynx/julynx1408/julynx140800023/30746516-사용할-수-없거나-이미지-사진-없음.jpg"
                            class="card-img-top" alt="">
                       <div class="card-body">
                           <h5 class="card-title">${name}</h5>
                           <p class="card-text">${address}</p>
                           <p class="card-text">${comment5}</p>
                           <button class="btn btn-primary" onclick="like(${num})" type="submit">Like</button>
                           <button class="btn btn-primary" type="submit">comment</button>
                       </div>
                   </div>
               </div>
               `;
            $("#blogs").append(temp_html);
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
