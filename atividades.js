// Carrega os dados antigos
let insc = JSON.parse(localStorage.getItem('minhasInscricoes')) || [];

const select1 = document.getElementById("select1");
const texto = document.getElementById("texto");

function adicionar() {
    
    let nomeUser = document.getElementById("nome").value;
    let emailUser = document.getElementById("email").value;
    let matriculaUser = document.getElementById("matricula").value;
    let cursoSelecionado = select1.value;

    
    if (nomeUser === "" || emailUser === "" || matriculaUser === "" || cursoSelecionado === "Escolher Atividade") {
        alert("Por favor, preencha TODOS os campos antes de enviar!");
        return; 
    }
    

    
    

    let jaExiste = insc.some(item => item.curso === cursoSelecionado);

    if (jaExiste) {
        alert("Você já está inscrito nesta atividade!");
    } else {
        // Cria o objeto
        let novoCadastro = {
            nome: nomeUser,
            email: emailUser,
            matricula: matriculaUser,
            curso: cursoSelecionado
        };

        // Salva
        insc.push(novoCadastro);
        localStorage.setItem('minhasInscricoes', JSON.stringify(insc));

        alert("Inscrição realizada com sucesso!");
    }
}



  

  
  


