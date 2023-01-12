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

                let rank = Array.from(Array(rows.length), () => new Array(3));
                console.log(rank)
               // let rank = Array.from(Array(rows.length), () => new Array(3));
               for (let i = 0; i < rows.length; i++) {
                  let like = rows[i]["like"];
                  let name = rows[i]["name"];
                  let address = rows[i]["vlog_url"];
                  let title = rows[i]["title"];
                  let img = rows[i]['img'];

                  rank[i] = [like, name, address, title, img];
                  console.log(rank)
               }
                    //출력을 위해서 필요한 함수
                let sortedRank = rank.sort((a, b) => {
                   if (a[0] === b[0]) {
                      return a[1] < b[1] ? -1 : a[1] > b[0] ? 1 : 0;
                   } else {
                      return b[0] - a[0];
                   }
                });

sortedRank[1]




               // 1등 출력
               ranking1_html = `
                     <div class="rank">
                    <img src=${sortedRank[0][4]} alt="1등이미지">
                <h4>${sortedRank[0][3]}</h4>
               <p>작성자 : ${sortedRank[0][1]}</p>
               <span>👍: ${sortedRank[0][0]}</span>
           </div>
                   `;
               $("#first").append(ranking1_html)

                //2,3 등출력
                  //2,3등 출력
                 ranking2_html = `
                     <div class="rank1">
                    <img src=${sortedRank[1][4]} alt="2등이미지">
                <h4>${sortedRank[1][3]}</h4>
               <p>작성자 : ${sortedRank[1][1]}</p>
               <span>👍: ${sortedRank[1][0]}</span>
           </div>

                 <div class="rank1">
                    <img src=${sortedRank[2][4]} alt="3등이미지">
                        <h4>${sortedRank[2][3]}</h4>
                        <p>작성자 : ${sortedRank[2][1]}</p>
                         <span>👍: ${sortedRank[2][0]}</span>
                 </div>

                   `;
               $('#second').append(ranking2_html)







               let count = 0;
               for (let i = 0; i < sortedRank.length; i++) {
                  count++;
                  let like = sortedRank[i][0];
                  let name = sortedRank[i][1];
                  let address = sortedRank[i][2];
                  let title = sortedRank[i][3];

                  let temp_html = `
                        <tr>
                            <th scope="row">${count}</th>
                            <td>${name}</td>
                            <td ><a href='${address}' id="vlog_link">${title}</a></td>
                            <td class="like">${like}</td>
                        </tr>
                        `;
                  $("#rank").append(temp_html);
               }
            },
         });
      }
       // scrollY 350 사이드메뉴바 보이게하기
          $(window).on('scroll', function(){
        if (window.scrollY > 250) {
       $('.side_menu').css('opacity', '1',);
           }else if(window.scrollY < 250) {
        $('.side_menu').css('opacity', '0');
        }
        });