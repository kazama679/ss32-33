let client = {
    id: 1,
    name: "quang",
    phone: 112123,
    address: "Hà Nội",
};
delete client.address;
client.email = "abc@gmail.com"
console.log(client);