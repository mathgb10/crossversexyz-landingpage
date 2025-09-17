function mudarTema(){
    const btnTema = document.getElementById("btnTema");
    if(btnTema.className.match("temaEscuro")){
        btnTema.innerHTML = '<i class="bi bi-brightness-low-fill"></i>';
        btnTema.className = "temaClaro";
        document.body.style.setProperty("--corNav", "#eeeeeeff");
        document.body.style.setProperty("--corFundo", "#F9F9FF");
    } else{
        btnTema.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        btnTema.className = "temaEscuro";
        document.body.style.setProperty("--corNav", "black");
        document.body.style.setProperty("--corFundo", "#0A0A0F");
    }
}