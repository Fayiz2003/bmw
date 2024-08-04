const login = () =>{
    const username = usernameInput.value
    const password = pswdInput.value
    if(username && password){
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        window.location = "luck.html"
    }else{
        alert("Please fill the form completely")
    }
}
const match = () => {
    let lucknum = Math.floor(Math.random() * 5) + 1;
    let resultImage = document.getElementById('result');
    setTimeout(() => {
        if (lucknum == 1) {
            resultImage.src = "./img/luck.jpg";
        } else if (lucknum == 2) {
            resultImage.src = "./img/bm1.jpg";
        } else if (lucknum == 3) {
            resultImage.src = "./img/luck.jpg";
        } else if (lucknum == 4) {
            resultImage.src = "./img/bm4.jpg";
        } else if (lucknum == 5) {
            resultImage.src = "./img/luck.jpg";
        }
    }, 1000);
}


if(localStorage.getItem("username")){
displayUser.innerHTML = localStorage.getItem("username")
}
const logout = () =>{
    localStorage.clear()
    window.location = "index.html"
}