let library = {
    book1: {
        title: "Đắc nhân tâm",
        author: "Dale Carnegie",
        publishedYear: 1936,
    },
    book2: {
        title: "Cha giàu cha nghèo",
        author: "Robert Kiyosaki và Sharon L. Lechter",
        publishedYear: 1997,
    },
};

function display(library) {
    for (let key in library) {
        console.log("tên sách:", library[key].title);
        console.log("tác giả:", library[key].author);
        console.log("năm sáng tác:", library[key].publishedYear);
        console.log("------------------------");
    }
}
let choice; 
do {
    console.log("1. Hiển thị danh sách sách trong thư viện.");
    console.log("2. Thêm sách vào thư viện và hiển thị danh sách.");
    console.log("3. Thoát");
    choice = parseInt(prompt("Lựa chọn của bạn là: "), 10);
    switch (choice) {
        case 1:
            display(library);
            break;
        case 2:
            let answer1 = prompt("Nhập tên sách");
            let answer2 = prompt("Nhập tên tác giả");
            let answer3 = +prompt("Nhập năm sáng tác");
            let newBookKey = "book" + (Object.keys(library).length + 1);
            let newBook = {
                title: answer1,
                author: answer2,
                publishedYear: answer3,
            };
            library[newBookKey] = newBook;
            display(library);
            break;
        case 3:
            console.log("Thoát!");
            break;
        default:
            console.log("Vui lòng nhập đúng");
            break;
    }
} while (choice !== 3);