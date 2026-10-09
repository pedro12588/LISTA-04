const form = document.getElementById('form-tarefa');
const input = document.getElementById('input-tarefa');
const lista = document.getElementById('lista-tarefas');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recarregar a página

  const textoTarefa = input.value.trim();

  if (textoTarefa === '') {
    return; // Não adiciona se o campo estiver vazio
  }

  adicionarTarefa(textoTarefa);
  input.value = '';
});

function adicionarTarefa(texto) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = texto;

  // Clica no texto para riscar/concluir a tarefa
  span.addEventListener('click', function() {
    li.classList.toggle('concluido');
  });

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'X';
  botaoRemover.classList.add('remover-btn');

  // Clica no botão para excluir a tarefa
  botaoRemover.addEventListener('click', function() {
    lista.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(botaoRemover);
  lista.appendChild(li);
}
