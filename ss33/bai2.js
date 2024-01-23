let phoneBook = {
    contact1: {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com",
    },
    contact2: {
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com",
    },
};

for(let key in phoneBook){
    console.log("tên:",phoneBook[key].name);
    console.log("Điện thoai:",phoneBook[key].phone);
    console.log("Email:",phoneBook[key].email);
    console.log("-------------------------");
}