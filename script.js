
// Bem-vindo e qual o seu nome
let nome = prompt ("Bem-vindo ao nosso jogo!!!\n" + "Insira seu nome:");
//let nomeUsuario;
document.getElementById("nome").textContent = "Olá, "+ nome;

// Pergunta se deseja continuar no jogo
const iniciar = prompt("Gostaria de iniciar o jogo?\n" + 
"Insira 1 para SIM\n" +
"Insira 2 para NÃO");

 if(iniciar == "1") {

    const resposta1 = prompt ("Primeira pergunta:\n Qual foi o vencedor de melhor filme?\n\n" + 
    "a) Meu pai;\n" + 
    "b) Judas e o Messias Negro;\n" + 
    "c) O Som do Silêncio;\n" + 
    "d) Nomadland.\n");
    console.log(resposta1);

    /*Alternativas
    Erradas: Meu pai, Judas e o Messias Negro, O Som do Silêncio
    Resposta certa: Nomadland
    */

    if(resposta1 == "d"){
      //console.log("entrou no if");
      let mensagem = "Correta";
      document.getElementById("correta1").textContent = "Primeira pergunta.";
    } else {
      console.log("entrou no else");
      let mensagem = "Incorreta"; 
      document.getElementById("errada1").textContent = "Primeira pergunta.";
    }
    

    const resposta2 = prompt ("Segunda pergunta:\n Quem foi a vencedora de melhor atriz?\n\n" + 
    "a) Viola Davis;\n" + 
    "b) Vanessa Kirby;\n" + 
    "c) Carey Mulligan;\n" + 
    "d) Frances McDormand.\n");
    console.log(resposta2);

    /*Alternativas
    Erradas: Viola Davis, Vanessa Kirby, Carey Mulligan
    Resposta certa: Frances McDormand
    */

    if(resposta2 == "d"){
      let mensagem = "Correta";
      document.getElementById("correta2").textContent = "Segunda pergunta.";
    } else {
      let mensagem = "Incorreta";
      document.getElementById("errada2").textContent = "Segunda pergunta.";
    }

    const resposta3 = prompt ("Terceira pergunta:\n Quem foi o vencedor de melhor ator?\n\n" + 
    "a) Chadwick Boseman;\n" + 
    "b) Anthony Hopkins;\n" + 
    "c) Riz Ahmed;\n" + 
    "d) Gary Oldman.\n");
    console.log(resposta3);

    /*Alternativas
    Erradas:Chadwick Boseman, Gary Oldman, Riz Ahmed
    Resposta certa:Anthony Hopkins
    */

    if(resposta3 == "b"){
      let mensagem = "Correta";
      document.getElementById("correta3").textContent = "Terceira pergunta.";
    } else {
      let mensagem = "Incorreta";
      document.getElementById("errada3").textContent = "Terceira pergunta.";
    }

} 

else{
  alert ("Agradecemos sua visita. Volte!");
}