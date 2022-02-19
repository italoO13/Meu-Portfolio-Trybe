let enviar = document.querySelector("#enviar");




enviar.addEventListener("click", function(event){
    event.preventDefault()
    let direitoImagem = document.querySelector("#direito-imagem");
    let nomeCompleto = document.querySelector("#nome").value.length;
    let email = document.querySelector("#email").value.length;
    let motivo = document.querySelector("#motivo").value.length;
    
    
    if (direitoImagem.checked == false){
        alert("Só poderá ser enviado caso você concorde no direito de imagem !")
        return 
    }

    if(nomeCompleto<10 || nomeCompleto>50 || email<10 || email>40 ||motivo<10 || motivo>500){
        alert("Dados inválidos");
        return;
    }

    alert("Enviado com sucesso")



})

