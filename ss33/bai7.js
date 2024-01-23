let all = {
    don1: {
        hoaDon: 1,
        ngayTao: 21,
        giaTri: 1936213,
    },
    don2: {
        hoaDon: 2,
        ngayTao: 22,
        giaTri: 123123123,
    },
};

function display(all) {
    for (let key in all) {
        console.log("số hóa đơn:", all[key].hoaDon);
        console.log("ngày tạo:", all[key].ngayTao);
        console.log("giá trị:", all[key].giaTri);
        console.log("------------------------");
    }
}
let choice; 
let result =0;
do {
    console.log("1. Thêm 1 hóa đơn.");
    console.log("2. Hiển thị danh sách hóa đơn.");
    console.log("3. Tính tổng giá trị của tất cả hóa đơn.");
    console.log("4. Thoát");
    console.log("-----------------------------------------");
    choice = parseInt(prompt("Lựa chọn của bạn là: "), 10);
    switch (choice) {
        case 1:
            let answer1 = +prompt("Nhập số hóa đơn:");
            let answer2 = +prompt("Nhập ngày tạo:");
            let answer3 = +prompt("Nhập giá trị:");
            let newDonKey = "don" + (Object.keys(all).length + 1);
            let newDon = {
                hoaDon: answer1,
                ngayTao: answer2,
                giaTri: answer3,
            };
            all[newDonKey] = newDon;
            break;
        case 2:
            display(all);
            break;
        case 3:
            for(let key in all){
                result += all[key].giaTri;
            }
            console.log(result);
            break;
        case 4:
            console.log("Thoát!");
            break;
        default:
            console.log("Vui lòng nhập đúng");
            break;
    }
} while (choice !== 4);