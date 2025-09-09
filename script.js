
function filtrarPorDia() {
  const diaSelecionado = document.getElementById("filtroDia").value;
  const linhas = document.querySelectorAll("#tabelaProgramacao tbody tr");

  linhas.forEach(tr => {
    const dia = tr.getAttribute("data-dia");
    tr.style.display = diaSelecionado === "" || dia === diaSelecionado ? "" : "none";
  });
}
