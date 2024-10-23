async function loadDenuncias() {
    try {
        const response = await fetch('http://localhost:3008/api/get/denuncia');
        const result = await response.json();

        console.log(result);

        if (result.success) { // Certifique-se de que a chave é 'success'
            const denunciaList = document.querySelector('.denuncia-list'); // Corrigido 'querySelector'

            // Limpar a lista antes de adicionar novos itens
            denunciaList.innerHTML = '';

            result.data.forEach(denuncia => { // Corrigido para refletir o nome correto da propriedade
                const card = document.createElement('div');
                card.className = 'denuncia-card';

                const infoDiv = document.createElement('div');
                infoDiv.className = 'info'; // Corrigido 'className'

                const p = document.createElement('p');
                p.textContent = denuncia.denuncia1; // Certifique-se de que 'denuncia1' é o nome correto da propriedade

                infoDiv.appendChild(p);
                card.appendChild(infoDiv);
                denunciaList.appendChild(card);
            });
        } else {
            console.error("Erro ao carregar denúncias:", result.error); // Ajuste conforme a resposta da API
        }
    } catch (error) {
        console.error("Erro de rede ou outro erro:", error);
    }
}

// Chamar a função para carregar as denúncias quando a página for carregada
window.onload = loadDenuncias;
