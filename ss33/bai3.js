let phoneBook = {
    contact1: {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com",
        displayInfo: function(){
            console.log("tên:",phoneBook.contact1.name);
            console.log("Điện thoai:",phoneBook.contact1.phone);
            console.log("Email:",phoneBook.contact1.email);
            console.log("-------------------------");
        }
    },
    contact2: {
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com",
        displayInfo: function(){
            console.log("tên:",phoneBook.contact2.name);
            console.log("Điện thoai:",phoneBook.contact2.phone);
            console.log("Email:",phoneBook.contact2.email);
            console.log("-------------------------");
        }
    },
};
for(let key in phoneBook){
    phoneBook[key].displayInfo();
}