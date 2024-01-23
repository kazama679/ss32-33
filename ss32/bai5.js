let book1 = {
    author: "Dale Carnegie",
    name: "Đắc Nhân Tâm",
};
let book2 = {
    author: "Nguyễn Nhật Ánh",
    name: "tôi thấy hoa vàng trên cỏ xanh",
};
let book3 = {
    author: "Rosie Nguyễn",
    name: "Tuổi trẻ đáng giá bao nhiêu?",
};

let answer = prompt("Nhập tên tác giả");
if(book1.author===answer){
    console.log(book1);
} else if(book2.author===answer){
    console.log(book2);
} else if(book3.author===answer){
    console.log(book3);
} else{
    console.log("ko tìm thấy");
}