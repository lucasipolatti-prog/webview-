// Pega os dados do LocalStorage
let dadosSalvos = localStorage.getItem('minhasInscricoes');
let corpoTabela = document.getElementById("tabela-corpo");

if (dadosSalvos) {
    
    let listaInscricoes = JSON.parse(dadosSalvos);

   
    corpoTabela.innerHTML = "";

    
    listaInscricoes.forEach(function(item) {
        
        let linha = `
            <tr>
                <td>${item.nome}</td>
                <td>${item.email}</td>
                <td>${item.matricula}</td>
                <td><strong>${item.curso}</strong></td>
            </tr>
        `;
        
       
        corpoTabela.innerHTML += linha;
    });

} else {
    document.getElementById("mensagem-vazia").innerText = "Nenhuma inscrição encontrada.";
}