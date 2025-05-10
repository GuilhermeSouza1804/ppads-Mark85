const relatorios = [];

function mostrarFormulario() {
  document.getElementById("formulario").style.display = "block";
  document.getElementById("lista-relatorios").style.display = "none";
}

function mostrarRelatorios() {
  const lista = document.getElementById("relatorios");
  lista.innerHTML = "";

  if (relatorios.length === 0) {
    lista.innerHTML = "<li>Nenhum relatório cadastrado.</li>";
  } else {
    relatorios.forEach(r => {
      const item = document.createElement("li");
      item.textContent = `${r.titulo} - ${r.categoria} (${r.local})`;
      lista.appendChild(item);
    });
  }

  document.getElementById("formulario").style.display = "none";
  document.getElementById("lista-relatorios").style.display = "block";
}

function enviarRelatorio(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const categoria = document.getElementById("categoria").value;
  const local = document.getElementById("local").value;

  if (descricao.length < 10) {
    alert("Descrição muito curta");
    return;
  }

  if (/[^a-zA-Z0-9\s]/.test(local)) {
    alert("Localização Inválida");
    return;
  }

  relatorios.push({ titulo, descricao, categoria, local });
  alert("Relatório registrado com sucesso");
  document.querySelector("form").reset();
}
