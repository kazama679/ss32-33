let employees = {
    nhanVien1: {
        name: "Faker",
        age: 27,
        wage: 230000000,
    },
    nhanVien2: {
        name: "Zeus",
        age: 20,
        wage: 100000000,
    },
};

function display(employees) {
    for (let key in employees) {
        console.log("tên:", employees[key].name);
        console.log("tuổi:", employees[key].age);
        console.log("lương:", employees[key].wage);
        console.log("------------------------");
    }
}
let choice; 
let result =0;
do {
    console.log("1. Thêm 1 nhân viên.");
    console.log("2. Hiển thị danh sách nhân viên.");
    console.log("3. Sắp xếp danh sách nhân viên theo tuổi tăng dần.");
    console.log("4. Tổng lương tất cả của nhân viên.");
    console.log("5. Thoát");
    console.log("-----------------------------------------");
    choice = parseInt(prompt("Lựa chọn của bạn là: "), 10);
    switch (choice) {
        case 1:
            let answer1 = prompt("Nhập tên:");
            let answer2 = +prompt("Nhập tuổi:");
            let answer3 = +prompt("Nhập lương:");
            let newNvKey = "don" + (Object.keys(employees).length + 1);
            let newNv = {
                name: answer1,
                age: answer2,
                wage: answer3,
            };
            employees[newNvKey] = newNv;
            break;
        case 2:
            display(employees);
            break;
        case 3:
            let truoc = Object.keys(employees).sort((a, b) => employees[a].age - employees[b].age);
            let sau = {};
            for (let key of truoc) {
                sau[key] = employees[key];
            }
    display(sau);
    break;
            break;
        case 4:
            for(let key in employees){
                result += employees[key].wage;
            }
            console.log(result);
            break;
        case 5:
            console.log("Thoát!");
            break;
        default:
            console.log("Vui lòng nhập đúng");
            break;
    }
} while (choice !== 5);