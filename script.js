function enviarTarefas() {
    const inputTarefa = document.getElementById("novaTarefa");
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== "") {
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.innerHTML += `
            <li>
                <span>${textoTarefa}</span>   
                <button onclick="marcarConcluida(this)" class="concluido">Concluida<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg></button>
                <button onclick="removerTarefa(this)" class="remover">Remover<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
              </svg></button>
            </li>
        `

    }
    inputTarefa.value= "";
}

function marcarConcluida(botaoConluir) {

    const tarefa = botaoConluir.parentNode;
    //adiciona a classe "completed" para mudar o estilo
    tarefa.classList.toggle("completed");
    if (tarefa.classList.contains("completed")) {
        //move a tarefa para o final da lista
        document.getElementById("listaTarefas").appendChild(tarefa);

        //remove os botões das tarefas concluidas
        const botoes = tarefa.querySelectorAll("button");
        botoes.forEach(botao => botao.remove());

    }
}

function removerTarefa(botaoRemover) {
    
    botaoRemover.parentNode.remove();
    

}