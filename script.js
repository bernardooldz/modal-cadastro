const modal = document.querySelector("#modal");
const fecharmodal = document.querySelector("#fechar");

function abrirFechar() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("modal-open");

    if (modal.classList.contains("modal-open")) {
        modal.showModal();
    } else {
        modal.close();
    }
}

function alertaConfirmacao(){
    window.alert("Seu cadastro foi realizado com sucesso!")
}

//---------------------------------------------------

function nomeDigitado(){
    var nome_formatado = document.getElementById("nome").value
    localStorage.setItem("nome", nome_formatado)
}

function emailDigitado(){
    var email_formatado = document.getElementById("email").value
    localStorage.setItem("email", email_formatado)
}

function senhaDigitado(){
    var senha_formatado = document.getElementById("senha").value
    localStorage.setItem("senha", email_formatado)
}

function mascara_telefone()
{    
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
        }
    }

    if (tel_formatado[9]!="-")
    {
        if(tel_formatado[9]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
        }
    }
    localStorage.setItem("telefone", tel_formatado)
}

function mascara_cpf()
{ var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3]!=".")
    {
        if (cpf_formatado[3]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7]!=".")
    {
        if (cpf_formatado[7]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11]!="-")
    {
        if(cpf_formatado[11]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,11) + "-" + cpf_formatado[11]
        }
    }
    localStorage.setItem("cpf", cpf_formatado)
}