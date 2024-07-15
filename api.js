let button = document.getElementById("submit");

button.onclick = async function() {
    let denunciaform = document.getElementById("denunciaform").value;
    let data = {denunciaform};

    console.log(data);

    try {
        const response = await fetch('http://localhost:3008/api/store/post', {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let content = await response.json();

        if (content.success) {
            alert("Sucesso");
        } else {
            alert("Não");
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        alert("Erro na requisição");
    }
};
