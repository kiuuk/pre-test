// (function() {
//     const tBody = document.querySelector("#tBody");
//     const url = `json/data.js`;
//     const xmlhttp = new XMLHttpRequest();

//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             const jsonDatas = JSON.parse(this.responseText);
//             // console.log(jsonDatas);
//             for (i=0;i<jsonDatas.length;i++) {
//                 // console.log(jsonDatas[i].name);
//                 // create td
//                 let row = tBody.insertRow(0);
//                 let cell1 = row.insertCell(0);
//                 let cell2 = row.insertCell(1);
//                 let cell3 = row.insertCell(2);
//                 let cell4 = row.insertCell(3);

//                 cell1.innerHTML = jsonDatas[i].id;
//                 cell2.innerHTML = '<img src=' + jsonDatas[i].thumbnailUrl + ' />';
//                 cell3.innerHTML = jsonDatas[i].name.replace(/(<([^>]+)>)/, "");
//                 cell4.innerHTML = jsonDatas[i].price;
//             }
//         }
//     };
//     xmlhttp.open("GET", url, true);
//     xmlhttp.send();
// })();

const table = document.querySelector('.table');
const rows = table.rows;

// timer
let setTimer = null;

// btn
document.getElementById('start').addEventListener('click', () => setTimer = setInterval(randomize, 1000));
document.getElementById('stop').addEventListener('click', () => clearInterval(setTimer));
document.getElementById('sort').addEventListener('click', sortTable);

function randomize() {
    let rowNum = Math.floor(Math.random() * 9) + 1;
    // console.log(rowNum);
    rows[rowNum].parentNode.insertBefore(rows[rowNum + 1], rows[rowNum]);
}

// sort
function sortTable() {
    let switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[3];
            y = rows[i + 1].getElementsByTagName("td")[3];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}