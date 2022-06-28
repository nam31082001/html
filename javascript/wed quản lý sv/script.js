let ten = document.querySelectorAll('#content_sp > div > div > h4');
let gia = document.querySelectorAll('#content_sp  > div > div > p');
let button = document.querySelectorAll('#content_sp > div > div > button');
let input = document.querySelectorAll('#content_sp  > div > div > input');
let nguoiban = document.querySelectorAll('#content_sp  > div > div > h5');
let arrten = [];
let arrgia = [];
let arrnguoiban = [];


function display() {
    let str = '<tr>' +
        '<td> Sản Phẩm Đã Mua </td>' +
        '<td>' + arrten.length + '</td>' +
        '</tr>';
    for (let i = 0; i < arrten.length; i++) {
        str += '<tr><td>' + arrten[i] + '</td>' + '<tr><td>' + arrgia[i] + '</td>' + '<tr><td>' + arrnguoiban[i] + '</td>' +
            '<td><button onclick="Delete(' + i + ')">Delete</button></td></tr>'
    }
    document.getElementById('table').innerHTML = str;
}
display()

function them() {
    for (i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            alert(i)
            let textten = ten[i].innerHTML;
            let textgia = gia[i].innerHTML;
            let textnguoiban = nguoiban[i].innerHTML;
            arrten.push(textten);
            arrgia.push(textgia);
            arrnguoiban.push(textnguoiban);
            display()
        })

    }
    
}