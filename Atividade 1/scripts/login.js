function check_login(){
    console.log("Botão clicado");
    let a = document.getElementById('email');
    let b = document.getElementById('password');
    if(a == "" || b == ""){
        alert("Preencha os campos necessários");
    }
}
