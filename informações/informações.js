document.addEventListener('DOMContentLoaded', () => {
    const povosIndigenas = [
        { nome: 'Guaraní', local: 'Brasil, Paraguai, Argentina', etnia: 'Guaraní', origem: 'Mato Grosso do Sul', cultura: 'Ritual dos Mbopi', historia: 'Os Guaraní são conhecidos por sua língua rica e complexa e por suas tradições culturais que incluem rituais como o Mbopi, que é um festival de dança e música. Eles migraram do norte da América do Sul para o sul há séculos e tiveram contato com europeus desde o século XVI.' },
        { nome: 'Yanomami', local: 'Brasil, Venezuela', etnia: 'Yanomami', origem: 'Roraima e Amazonas', cultura: 'Ritual do xamã', historia: 'Os Yanomami têm uma rica tradição espiritual, com xamãs desempenhando papéis centrais em suas cerimônias. Eles são conhecidos por sua organização social complexa e suas práticas de horticultura. O contato com o mundo exterior tem sido limitado, mas enfrentaram ameaças de invasões e desmatamento nas últimas décadas.' },
        { nome: 'Tupi', local: 'Brasil', etnia: 'Tupi', origem: 'Litoral Brasileiro', cultura: 'Culto aos deuses da natureza', historia: 'Os Tupis foram um dos primeiros povos a ter contato com os portugueses no século XVI. Eles eram conhecidos por sua organização em aldeias e suas práticas agrícolas avançadas. A resistência à colonização e a diáspora forçada tiveram impactos significativos em sua cultura e população.' },
        { nome: 'Kayapó', local: 'Brasil', etnia: 'Kayapó', origem: 'Mato Grosso', cultura: 'Festa dos Bep Kororoti', historia: 'Os Kayapó são conhecidos por sua forte identidade cultural e sua resistência contra a exploração econômica. Eles têm uma rica tradição de arte e rituais, como a Festa dos Bep Kororoti, que celebra o espírito dos ancestrais. Sua luta pela preservação de suas terras e direitos é notável.' },
        { nome: 'Xavante', local: 'Brasil', etnia: 'Xavante', origem: 'Mato Grosso', cultura: 'Ritual do Awar', historia: 'Os Xavante têm uma estrutura social matrilinear e são conhecidos por seus rituais elaborados, como o Awar, que envolve danças e cerimônias. Eles têm uma história de resistência contra invasores e colonizadores, mantendo sua cultura viva apesar dos desafios.' },
        { nome: 'Kriolu', local: 'Brasil', etnia: 'Kriolu', origem: 'Sertão da Bahia', cultura: 'Mistura de tradições africanas e indígenas', historia: 'Os Kriolu são descendentes de indígenas e africanos escravizados. Sua cultura é uma rica mistura de tradições africanas e indígenas, visível em suas práticas religiosas, música e culinária. Eles têm enfrentado desafios relacionados à identidade e à preservação cultural.' },
        { nome: 'Ashaninka', local: 'Brasil, Peru', etnia: 'Ashaninka', origem: 'Amazônia', cultura: 'Ritual do Pano', historia: 'Os Ashaninka são conhecidos por sua luta pela preservação de suas terras e cultura, bem como por sua rica tradição de uso de plantas medicinais. O Ritual do Pano é uma cerimônia importante que envolve o uso de trajes tradicionais e cantos sagrados.' },
        { nome: 'Huni Kuin', local: 'Brasil, Peru', etnia: 'Huni Kuin', origem: 'Amazônia', cultura: 'Ritual do Nixi Pente', historia: 'Os Huni Kuin praticam o Ritual do Nixi Pente, que é uma cerimônia de purificação espiritual. Eles têm uma tradição rica de usar plantas psicodélicas em seus rituais e uma profunda conexão com a floresta amazônica.' },
        { nome: 'Pataxó', local: 'Brasil', etnia: 'Pataxó', origem: 'Bahia', cultura: 'Festa da Mãe D’Água', historia: 'Os Pataxó são conhecidos por sua resistência durante o período colonial e sua rica tradição cultural. A Festa da Mãe D’Água é uma celebração importante que envolve danças e rituais dedicados à deusa da água.' },
        { nome: 'Ticuna', local: 'Brasil, Colômbia, Peru', etnia: 'Ticuna', origem: 'Amazonas', cultura: 'Ritual do Anã', historia: 'Os Ticuna têm uma cultura rica com rituais complexos, como o Ritual do Anã, que celebra suas tradições e histórias. Eles têm uma forte presença em vários países da Amazônia e enfrentam desafios relacionados à preservação de sua cultura e terras.' },
        { nome: 'Karajá', local: 'Brasil', etnia: 'Karajá', origem: 'Mato Grosso', cultura: 'Ritual da Festa do Mascarado', historia: 'Os Karajá são conhecidos por suas esculturas elaboradas e arte corporal. A Festa do Mascarado é um evento importante que celebra suas tradições e mitos ancestrais. Eles também enfrentam desafios relacionados à preservação de suas terras e cultura.' },
        { nome: 'Munduruku', local: 'Brasil', etnia: 'Munduruku', origem: 'Pará', cultura: 'Ritual do Kuarup', historia: 'Os Munduruku têm uma longa tradição de resistência contra a exploração de recursos naturais e projetos de hidrelétricas. O Ritual do Kuarup é uma cerimônia importante que homenageia os ancestrais e promove a coesão social.' },
        { nome: 'Wapichana', local: 'Brasil, Guiana', etnia: 'Wapichana', origem: 'Roraima', cultura: 'Ritual do Pawa', historia: 'Os Wapichana têm uma rica tradição cultural e enfrentam desafios relacionados à demarcação de terras. O Ritual do Pawa é um evento cultural significativo que envolve dança e celebração da comunidade.' },
        { nome: 'Juma', local: 'Brasil', etnia: 'Juma', origem: 'Amazonas', cultura: 'Ritual do Juma', historia: 'Os Juma têm uma rica tradição oral e lutam pela preservação de suas terras e cultura. O Ritual do Juma envolve cerimônias que celebram suas crenças e tradições ancestrais.' },
        { nome: 'Sateré-Mawé', local: 'Brasil', etnia: 'Sateré-Mawé', origem: 'Amazonas', cultura: 'Ritual do Katuva', historia: 'Os Sateré-Mawé são conhecidos pelo cultivo de guaraná e suas tradições guerrilheiras. O Ritual do Katuva é uma cerimônia importante que envolve o uso de guaraná em práticas culturais e religiosas.' },
        { nome: 'Guajajara', local: 'Brasil', etnia: 'Guajajara', origem: 'Maranhão', cultura: 'Ritual do Tuxaua', historia: 'Os Guajajara enfrentam desafios significativos relacionados à preservação de suas terras e direitos. O Ritual do Tuxaua é uma cerimônia importante que envolve a liderança comunitária e celebração cultural.' },
        { nome: 'Pankararu', local: 'Brasil', etnia: 'Pankararu', origem: 'Pernambuco', cultura: 'Ritual do Toré', historia: 'Os Pankararu têm uma rica tradição de música e dança, com o Ritual do Toré sendo uma cerimônia central que envolve canto e dança para fortalecer os laços comunitários e culturais.' },
        { nome: 'Tukano', local: 'Brasil, Colômbia', etnia: 'Tukano', origem: 'Amazonas', cultura: 'Ritual do Kiri', historia: 'Os Tukano têm uma organização social complexa e rituais elaborados como o Ritual do Kiri, que é uma cerimônia importante que celebra suas tradições e mitos.' },
        { nome: 'Krahô', local: 'Brasil', etnia: 'Krahô', origem: 'Tocantins', cultura: 'Ritual do Krahô', historia: 'Os Krahô têm uma rica tradição oral e festivais culturais. O Ritual do Krahô é uma cerimônia que envolve danças e celebrações que reafirmam sua identidade cultural e conexões ancestrais.' },
        { nome: 'Kayapó', local: 'Brasil', etnia: 'Kayapó', origem: 'Mato Grosso', cultura: 'Festa do Bep Kororoti', historia: 'Os Kayapó têm uma rica tradição cultural e são conhecidos por suas expressões artísticas. A Festa do Bep Kororoti é um evento cultural importante que celebra suas tradições e lutas.' },
        { nome: 'Xingu', local: 'Brasil', etnia: 'Xingu', origem: 'Mato Grosso', cultura: 'Ritual do Xingu', historia: 'Os Xingu têm uma rica tradição cultural e social, com rituais elaborados e uma estrutura comunitária complexa. O Ritual do Xingu é um evento central que celebra sua identidade e cultura.' }
    ];

    const tabelaPovos = document.getElementById('tabela-povos').getElementsByTagName('tbody')[0];
    const nomePovo = document.getElementById('nome-povo');
    const localPovo = document.getElementById('local-povo');
    const etniaPovo = document.getElementById('etnia-povo');
    const origemPovo = document.getElementById('origem-povo');
    const culturaPovo = document.getElementById('cultura-povo');
    const historiaPovo = document.getElementById('historia-povo');

    povosIndigenas.forEach(povo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${povo.nome}</td>
            <td>${povo.local}</td>
        `;
        tr.addEventListener('click', () => {
            nomePovo.textContent = povo.nome;
            localPovo.textContent = povo.local;
            etniaPovo.textContent = povo.etnia;
            origemPovo.textContent = povo.origem;
            culturaPovo.textContent = povo.cultura;
            historiaPovo.textContent = povo.historia;
        });
        tabelaPovos.appendChild(tr);
    });
});
