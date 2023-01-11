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
         for (let i = 0; i < rows.length; i++) {
            let like = rows[i]["like"];
            let name = rows[i]["name"];
            let address = rows[i]["vlog_url"];
            let title = rows[i]["title"];

            rank[i] = [like, name, address, title];
         }

         let sortedRank = rank.sort((a, b) => {
            if (a[0] === b[0]) {
               return a[1] < b[1] ? -1 : a[1] > b[0] ? 1 : 0;
            } else {
               return b[0] - a[0];
            }
         });

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
