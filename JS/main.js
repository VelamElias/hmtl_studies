function clicou()
{
    alert("Botão clicado!");
}

//retorna uma referencia para o primeiro objeto com o id
//innerHTML injeta um html, aqui: Obrigado por clicar 
function agradece()
{
    document.getElementById("agradecimento").innerHTML = "<b><i>click para redirecionara para Digital Innovation One<i></b>";
}

//redireciona para uma nova aba com a página especificada
function redirect()
{
    window.open("https://digitalinnovation.one/");
}

//rediciona na mesma aba
function localRedirect()
{
    window.location.href = "https://digitalinnovation.one/";
}

//Modifica o texto ao passar o mouse
//elemento -> indica o elemento que está sendo passado, no nosso exemplo pode ser qualquer 
//um dos dois id mouseMove
function passaMouse(elemento)
{
    //document.getElementById("mouseMove").innerHTML = "Você passou o mouse";
    elemento.innerHTML = "Você passou o mouse";
}

//Volta ao texto original quando o mouse sai do texto
function voltar(elemento)
{
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse";
    elemento.innerHTML = "Passe o mouse";
}

//Mostra no console o valor selecionado
//modifica o valor do paragrafo seguinte

function mudaFuncao(elemento)
{
    console.log(elemento.value);
    printElemento(elemento.value);
}

//modifica o valor a ser apresentado no paragrafo anterior.
function printElemento(value)
{
    val = value;
    if(value == 1)document.getElementById("valor").innerHTML = "<b>Selecionado<b> " + value;
    else if(value == 2) document.getElementById("valor").innerHTML = "<b>Selecionado<b> " + value;
    else document.getElementById("valor").innerHTML = "<b>Selecionado<b> " + value;

    Idioma(value);
}

//Converte a seleção para inglês
function Idioma(value)
{
    if(value == 1) document.getElementById("valor").innerHTML = "Number One";
    if(value == 2) document.getElementById("valor").innerHTML = "Number Two";
    if(value == 3) document.getElementById("valor").innerHTML = "Number Three";
}

