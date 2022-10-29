function signup(e) {
    event.preventDefault();
    var username = document.getElementById("TK").value;
    var password = document.getElementById("psw").value;
    var Email = document.getElementById("email").value;
    var passwordrp = document.getElementById("psw-repeat").value;
    var user = {
        username : username,
        password : password,
        Email : Email,
        passwordrp : passwordrp,
    };
    if (passwordrp != password) {
        alert("Nhập lại mật khẩu")
    }
    else {
        var json = JSON.stringify(user);
        localStorage.setItem(username,json);
        alert("Dang ky thanh cong");
    }
 
}
function login(e) {
    event.preventDefault();
    var username = document.getElementById("Tai-khoan").value;
    var password = document.getElementById("Password").value;
    var Email = document.getElementById("Email").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user==null) {
        alert("vui lòng nhập tài khoản/mật khẩu")
    }
    else if (username==data.username && Email == data.Email && password==data.password) {
        alert("Đăng nhập thành công")
        window.location.href="../TrangChu/trangchu.html"
    }
    else {
        alert("Đăng nhập thất bại")
    }

}