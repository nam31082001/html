let arr = 4
let diem = 0;


window.onload = function () {

    tao_o()
}

function tao_o() {
    arr = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let div = document.createElement('div');
            div.id = i.toString() + "o" + j.toString();
            let vitri = arr[i][j];
            update(div, vitri);
            document.getElementById('board').append(div)

        }
    }
    tao_so_2()
    tao_so_2()
}


function update(div, vitri) {
    div.classList.add('div');
    div.innerText = "";
    if (vitri > 0) {
        div.innerText = vitri.toString()
    }
}

function tao_so_2() {
    let i = Math.floor(Math.random() * 4)
    let j = Math.floor(Math.random() * 4)
    if (arr[i][j] == 0) {
        arr[i][j] = 2;
        let ohien = document.getElementById(i.toString() + "o" + j.toString());
        ohien.innerText = "2";
    }
}

document.addEventListener('keyup', (e) => {
    if (e.key == "ArrowLeft") {
        left();
        tao_so_2();
    } else if (e.key == "ArrowRight") {
        rigth();
        tao_so_2();

    } else if (e.key == "ArrowUp") {
        up();
        tao_so_2()
    } else if (e.key == "ArrowDown") {
        down();
        tao_so_2()
    }
    document.getElementById('score').innerHTML = diem;
    if (diem > 500) {
        let check;
        check = confirm('chien Thắng');
        if(check==true){
            location.reload();
        }

    }
});
//  lọc số 0
function loc(row) {
    return row.filter(num => num != 0);
}

function an(row) {
    row = loc(row);
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            diem += 100;
        }
    }
    row = loc(row);
    while (row.length < 4) {
        row.push(0);
    }
    return row;
}

function left() {
    for (let i = 0; i < 4; i++) {
        let row = arr[i];
        row = an(row);
        arr[i] = row;



        for (let j = 0; j < 4; j++) {
            let div = document.getElementById(i.toString() + "o" + j.toString());
            let vitri = arr[i][j];
            update(div, vitri);
        }
    }
}

function rigth() {
    for (let i = 0; i < 4; i++) {
        let row = arr[i];
        row.reverse();
        row = an(row);
        arr[i] = row.reverse();
        for (let j = 0; j < 4; j++) {
            let div = document.getElementById(i.toString() + "o" + j.toString());
            let vitri = arr[i][j];
            update(div, vitri);
        }
    }
}

function up() {
    for (let i = 0; i < 4; i++) {
        let row = [arr[0][i], arr[1][i], arr[2][i], arr[3][i]]
        row = an(row);
        arr[0][i] = row[0]
        arr[1][i] = row[1]
        arr[2][i] = row[2]
        arr[3][i] = row[3]
        for (let j = 0; j < 4; j++) {
            let div = document.getElementById(i.toString() + "o" + j.toString());
            let vitri = arr[i][j];
            update(div, vitri);
        }
    }
}

function down() {
    for (let i = 0; i < 4; i++) {
        let row = [arr[0][i], arr[1][i], arr[2][i], arr[3][i]]
        row.reverse();
        row = an(row);
        row.reverse();
        arr[0][i] = row[0]
        arr[1][i] = row[1]
        arr[2][i] = row[2]
        arr[3][i] = row[3]
        for (let j = 0; j < 4; j++) {
            let div = document.getElementById(i.toString() + "o" + j.toString());
            let vitri = arr[i][j];
            update(div, vitri);
        }
    }
}