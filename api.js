async function enviarDenuncia(event) {
    event.preventDefault();

    let denunciaform = document.getElementById("denunciaMensagem").value;

    let dados = {denunciaform}
    console.log(dados)

    const response = await fetch('http://localhost:3008/api/store/denuncia', {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success) {
        alert("Sucesso!")
    } else {
        alert("Não foi criado!")
        console.log(content);
    }

}

/*
button.onclick = async function () {
    let denunciaform = document.getElementById("denunciaMensagem").value;

    let dados = {denunciaform}

    const response = await fetch('http://localhost:3008/api/store/denuncia', {
        method: "POST",
        header: {"Content-type": "aplication/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success) {
        alert("Sucesso!")
    } else {
        alert("Não foi criado!")
        console.log(content.sql);
    }
}
*/