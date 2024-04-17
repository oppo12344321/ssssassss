let users = [
    { name: "Вася" },
    { name: "Петя" },
    { name: "Маша" }
];


users.forEach(user => {
    user.admin = false;
});


users.forEach(user => {
    if (user.name === "Маша") {
        user.admin = true;
    }
});