const info = {
    name: "Saeed Abdul Rauf",
    age: 34,
    sex: "Male",
    sch: "AAMUSTED"
};

let userInfo = () => {
    console.log(info);
};

userInfo();
info.email = "saeed@example.com";
console.log("Updated info:", info);