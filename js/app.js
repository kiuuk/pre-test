(function() {
    const tBody = document.querySelector("#tBody");
    const url = `json/data.js`;
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const jsonDatas = JSON.parse(this.responseText);
            // console.log(jsonDatas);
            for (i=0;i<jsonDatas.length;i++) {
                // console.log(jsonDatas[i].name);
                // create td
                let row = tBody.insertRow(0);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);

                cell1.innerHTML = jsonDatas[i].id;
                cell2.innerHTML = '<img src=' + jsonDatas[i].thumbnailUrl + ' />';
                cell3.innerHTML = jsonDatas[i].name.replace(/(<([^>]+)>)/gi, "");
                cell4.innerHTML = jsonDatas[i].price;
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
})();