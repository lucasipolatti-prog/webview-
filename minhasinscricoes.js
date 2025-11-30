// 1. Pega os dados do LocalStorage
let dadosSalvos = localStorage.getItem('minhasInscricoes');
let corpoTabela = document.getElementById("tabela-corpo");

if (dadosSalvos) {
    // Transforma de texto para Lista de Objetos
    let listaInscricoes = JSON.parse(dadosSalvos);

    // Limpa a tabela antes de começar (para garantir)
    corpoTabela.innerHTML = "";

    // 2. Para cada item na lista, cria uma linha na tabela
    listaInscricoes.forEach(function(item) {
        // Cria o HTML da linha (tr) e das células (td)
        let linha = `
            <tr>
                <td>${item.nome}</td>
                <td>${item.email}</td>
                <td>${item.matricula}</td>
                <td><strong>${item.curso}</strong></td>
            </tr>
        `;
        
        // Adiciona a linha dentro do corpo da tabela
        corpoTabela.innerHTML += linha;
    });

} else {
    document.getElementById("mensagem-vazia").innerText = "Nenhuma inscrição encontrada.";
}