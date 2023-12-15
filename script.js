function enviarTarefas() {
    const inputTarefa = document.getElementById("novaTarefa");
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== "") {
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.innerHTML += `
            <li>
                <span>${textoTarefa}</span>   
                <button onclick="marcarConcluida(this)">Concluida</button>
                <button onclick="removerTarefa(this)">Remover</button>
            </li>
        `

    }
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