let n =prompt("nhập vào số lượng sinh viên");
let all = {};
for(let i=1; i<=n; i++){
    let Student = {};
    let answer1 = prompt("Nhập id cho sinh viên "+ i);
    let answer2 = prompt("Nhập tên cho sinh viên "+ i);
    Student.id = answer1;
    Student.name = answer2;
}