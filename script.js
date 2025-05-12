function verificarLogin() {
    const usuarioCorreto = "admin";
    const senhaCorreta = "admin123";
  
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      window.location.href = "painel.html"; // próxima etapa
    } else {
      document.getElementById("erro").textContent = "Usuário ou senha incorretos!";
    }
  }
  document.getElementById("formCliente").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const cliente = {
      nome: document.getElementById("nome").value,
      usuario: document.getElementById("usuario").value,
      servidor: document.getElementById("servidor").value,
      linkServidor: document.getElementById("linkServidor").value,
      telas: document.getElementById("telas").value,
      sistemaTela1: document.getElementById("sistemaTela1").value,
      sistemaTela2: document.getElementById("sistemaTela2").value,
      sistemaTela3: document.getElementById("sistemaTela3").value,
      appTela1: document.getElementById("appTela1").value,
      appTela2: document.getElementById("appTela2").value,
      appTela3: document.getElementById("appTela3").value,
      vencimento: document.getElementById("vencimento").value,
      valor: document.getElementById("valor").value,
      status: document.getElementById("status").value,
      observacoes: document.getElementById("observacoes").value
    };
  
    console.log("Cliente salvo:", cliente);
  
    document.getElementById("mensagem").textContent = "Cliente cadastrado com sucesso!";
    document.getElementById("formCliente").reset();
  });
  // Captura os dados do formulário
document.getElementById("formCliente").addEventListener("submit", function(e) {
    e.preventDefault();  // Impede o envio do formulário
  
    // Coleta os dados dos inputs
    const cliente = {
      nome: document.getElementById("nome").value,
      usuario: document.getElementById("usuario").value,
      servidor: document.getElementById("servidor").value,
      linkServidor: document.getElementById("linkServidor").value,
      telas: document.getElementById("telas").value,
      sistemaTela1: document.getElementById("sistemaTela1").value,
      sistemaTela2: document.getElementById("sistemaTela2").value,
      sistemaTela3: document.getElementById("sistemaTela3").value,
      appTela1: document.getElementById("appTela1").value,
      appTela2: document.getElementById("appTela2").value,
      appTela3: document.getElementById("appTela3").value,
      vencimento: document.getElementById("vencimento").value,
      valor: document.getElementById("valor").value,
      status: document.getElementById("status").value,
      observacoes: document.getElementById("observacoes").value,
    };
  
    // Recupera os clientes já armazenados no LocalStorage
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  
    // Adiciona o novo cliente à lista
    clientes.push(cliente);
  
    // Salva novamente a lista no LocalStorage
    localStorage.setItem("clientes", JSON.stringify(clientes));
  
    // Exibe a mensagem de sucesso
    document.getElementById("mensagem").innerHTML = "Cliente cadastrado com sucesso!";
  
    // Limpa o formulário
    document.getElementById("formCliente").reset();
  });
  
  // Função para exibir os clientes cadastrados
  function exibirClientes() {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    const listaClientes = document.getElementById("listaClientes");
  
    // Limpa a lista antes de adicionar novos clientes
    listaClientes.innerHTML = "";
  
    // Cria os itens da lista com base nos dados
    clientes.forEach((cliente, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>Nome:</strong> ${cliente.nome} <br>
        <strong>Usuário:</strong> ${cliente.usuario} <br>
        <strong>Status:</strong> ${cliente.status} <br>
        <button onclick="removerCliente(${index})">Remover</button>
      `;
      listaClientes.appendChild(li);
    });
  }
  
  // Função para remover um cliente da lista
  function removerCliente(index) {
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.splice(index, 1);  // Remove o cliente do array
    localStorage.setItem("clientes", JSON.stringify(clientes));  // Atualiza o LocalStorage
    exibirClientes();  // Atualiza a lista de clientes
  }
  
  // Exibe os clientes na página ao carregar
  window.onload = exibirClientes;
  