user = {
    userName: null,
    password: null,
    greet: function () {
        if (this.userName != null) {
            console.log(`Hello, I'm user ${username}`);
        } else {
            console.log("Please assign a username value");
        }

    },
    updatePassword: function (password) {
        this.password = password;
        return password;
    },
    updateUserName: function (userName) {
        this.userName = userName;
        return this.userName;
    }
}
//user.greet();

console.log(user.updateUserName("Nick"));
console.log(user.userName)