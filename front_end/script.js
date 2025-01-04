function pegarValorInput() {
    // Obtém o valor digitado no campo de input
    const dataInicio = document.querySelector("#dataInicio").value;
    const dataFim = document.querySelector("#dataFim").value;
    const radios = document.querySelectorAll('[name="opcao"]');
    var mesTempMed = null;

    for(let opcao of radios){
        if(opcao.checked){
            mesTempMed = opcao.value;
        };
    };

//______________ Cria nova Section" _______________    

    //Apaga a section se ela já existir
    var issecaoDados = document.querySelector('#secaoDados');
    if(issecaoDados) {
        console.log(issecaoDados);
        document.querySelector('#secaoDados').remove();
        console.log(`Apagado: ${document.querySelector('#secaoDados')}`);
    };
    
    var main = document.querySelector("main");
    var secaoDados = document.createElement('section');
    secaoDados.id = "secaoDados";    
    main.appendChild(secaoDados);

//______________________________

    // Testa criação de parágrafos
    let dados = [1,2,3,4,5,6,7];

    for(let dado of dados){
        var paragrafo = document.createElement('p');
        paragrafo.classList.add("dados"); 
        paragrafo.textContent = `Novo conteúdo: ${dado}`
        secaoDados.appendChild(paragrafo);
    }

    console.log(`Data Inicio: ${dataInicio}; Data Fim: ${dataFim}`);
}


// Adiciona um ouvinte de evento para o clique do botão
let submit = document.querySelector("#botaoSubmit");

submit.addEventListener("click", pegarValorInput);