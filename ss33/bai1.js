let human ={
    name: "Quang",
    age: 19,
    address: "Hà Nội",
};
console.log("trước khi sửa: tên",human.name,"tuổi",human.age, "địa chỉ", human.address);
human.date = 2;
delete human.age;
console.log("sau khi sửa: tên",human.name,"ngày sinh",human.date, "địa chỉ", human.address);