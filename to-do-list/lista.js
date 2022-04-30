//DECLARAÇÃO DE VARIÁVEIS
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

//CONTROLE DO NÚMERO DE CARACTERES 
function qtdCaracteres()
{
    return input.value.length;
}


function criarElemento()
{
    var li = document.createElement("li"); //CRIANDO VARIÁVEL

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";//RESETA INPUT

    //FUNÇÃO MARCAR COMO CONCLUÍDA
    function concluida()
    {
        li.classList.toggle("done");//toggle -> verifica se existe a classe, se houver exclui e se não houver cria;
        //usada para marcar e desmarcar a conclusão de tarefas;
    }

    li.addEventListener("click", concluida);

   
    //CRIAR BOTÃO DE DELETAR
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deletarItem);

    function deletarItem()
    {
        li.classList.add("delete");// add -> apenas cria a classe
    }
}

enterButton.addEventListener("click",addListAfterClick); //PARA ADICIONAR TAREFA ATRAVÉS DO BOTÃO;
input.addEventListener("keypress", addListAfterKeypress); // PARA ADICIONAR TAREFA ATRAVÉS DO ENTER;

//CONTROLE PARA QUE NÃO EXISTAM TAREFAS VAZIAS.
function addListAfterClick()
{
    if (qtdCaracteres() > 0){
        criarElemento();
    }
}
    
function addListAfterKeypress()
{
    if(qtdCaracteres() > 0 && event.which === 13){
        criarElemento();
    }
    
    //13 -> CÓDIGO DO ENTER;
}