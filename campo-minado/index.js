function campo(cols_count, rows_count, mines) {
    var rows = [];

    for (var i = 0; i < rows_count; i++) {
        rows[i] = [];
        for (var j = 0; j < cols_count; j++) {
            if (mines.map(x => JSON.stringify(x)).includes("[" + i + "," + j + "]")) {
                rows[i][j] = "*";
            } else {
                rows[i][j] = 0;
            }
        }
    }

    for (var i = 0; i < cols_count; i++) {
        for (var j = 0; j < rows_count; j++) {
            if (rows[i][j] != "*") {
                if (rows[i - 1] !== undefined && rows[i - 1][j - 1] === "*") rows[i][j]++;
                if (rows[i - 1] !== undefined && rows[i - 1][j] === "*") rows[i][j]++;
                if (rows[i - 1] !== undefined && rows[i - 1][j + 1] === "*") rows[i][j]++;

                if (rows[i][j - 1] === "*") rows[i][j]++;
                if (rows[i][j + 1] === "*") rows[i][j]++;

                if (rows[i + 1] !== undefined && rows[i + 1][j - 1] === "*") rows[i][j]++;
                if (rows[i + 1] !== undefined && rows[i + 1][j] === "*") rows[i][j]++;
                if (rows[i + 1] !== undefined && rows[i + 1][j + 1] === "*") rows[i][j]++;
            }
        }
    }
    return rows;
}

function clicou(event) {
    if (event.target.textContent === "*") {
        for (Element of document.querySelectorAll("span")) {
            Element.setAttribute("class", "");
        }
        alert("BOMMMMMMMMMMM!!!!");
        // window.location.reload();
    } else {
        event.target.childNodes[0].setAttribute("class", "");
    }
}

function drawtable(rows) {
    var table = document.getElementById("campo");
    for (var row of rows) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (var col of row) {
            var td = document.createElement("td");
            var span = document.createElement("span")
            span.textContent = col;
            span.setAttribute("class", "invisible");
            td.appendChild(span);
            tr.appendChild(td)
            td.addEventListener("click", clicou);
        }
    }
}

function minas_randomicas(quatidade, cols, rows) {
    mines = [];
    for (var i = 0; i < quatidade; i++) {
        var positionRow = Math.floor(Math.random() * rows);
        var positionCol = Math.floor(Math.random() * cols);
        mines.push([positionRow, positionCol])
    }
    return mines;
}

var mines = minas_randomicas(15, 8, 8);
var meucampo = campo(8, 8, mines)
drawtable(meucampo)