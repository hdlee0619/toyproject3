$(document).ready(function () {
   listing();
});

function listing() {
   $.ajax({
      type: "GET",
      url: "/ranking",
      data: {},
      success: function (response) {
         let rows = response["tils"];
         for (let i = 0; i < rows.length; i++) {
            let like = rows[i]["like"];
            let name = rows[i]["name"];
            let address = rows[i]["vlog_url"];
            let title = rows[i]["title"];
            let img = rows[i]['img']

            rows[i] = [like, name, address, title, img];
         }
         console.log(rows)

         rows.sort((a, b) => {
            if (a[0] === b[0]) {
               return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
            } else {
               return b[0] - a[0];
            }
         });
          // 1등 출력
               ranking1_html = `
                     <div class="rank">
                    <img src=${rows[0][4]} alt="1등이미지">
                <h4>${rows[0][3]}</h4>
               <p>작성자 : ${rows[0][1]}</p>
               <span>👍: ${rows[0][0]}</span>
           </div>
                   `;
               $("#first").append(ranking1_html)

                //2,3 등출력
                  //2,3등 출력
                 ranking2_html = `
                     <div class="rank1">
                    <img src=${rows[1][4]} alt="2등이미지">
                <h4>${rows[1][3]}</h4>
               <p>작성자 : ${rows[1][1]}</p>
               <span>👍: ${rows[1][0]}</span>
           </div>

                 <div class="rank1">
                    <img src=${rows[2][4]} alt="3등이미지">
                        <h4>${rows[2][3]}</h4>
                        <p>작성자 : ${rows[2][1]}</p>
                         <span>👍: ${rows[2][0]}</span>
                 </div>

                   `;
               $('#second').append(ranking2_html)





         let count = 0;
         for (let i = 0; i < rows.length; i++) {
            count++;
            let like = rows[i][0];
            let name = rows[i][1];
            let address = rows[i][2];
            let title = rows[i][3];

            let temp_html = `
               <tr>
                   <th scope="row">${count}</th>
                   <td>${name}</td>
                   <td ><a href='${address}' id="vlog_link" target="_blank">${title}</a></td>
                   <td class="like">${like}</td>
               </tr>
               `;
            $("#rank").append(temp_html);
         }
      },
   });
}
