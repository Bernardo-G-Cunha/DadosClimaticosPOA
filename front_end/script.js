//------------------------------ Funções ------------------------------

//_________________ Pega valor dos Inputs _________________

function pegarValorInput() {
    const dataInicio = document.querySelector("#dataInicio").value.trim();
    const dataFim = document.querySelector("#dataFim").value.trim();
    const radios = document.querySelectorAll('[name="opcao"]');
    var mesTempMed = null;

    radios.forEach(opcao =>{
        if(opcao.checked){
            mesTempMed = opcao.value;
        }
    });
    
    //_________________ Cria nova Section" __________________    

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

    //_________________ Testa criação de parágrafos _________________

    let dados = [1,2,3,4,5,6,7];

    dados.forEach(dado => {
        var paragrafo = document.createElement('p');
        paragrafo.classList.add("dados"); 
        paragrafo.textContent = `Novo conteúdo: ${dado}`
        secaoDados.appendChild(paragrafo);
    });

    console.log(`Data Inicio: ${dataInicio}; Data Fim: ${dataFim}; Mestempmed: ${mesTempMed}`);
}

//____________________ Verifica os campos ____________________

function verificarCampos() {
    const dataInicio = document.querySelector('#dataInicio').value.trim();
    const dataFim = document.querySelector('#dataFim').value.trim();

    const radioButtons = document.querySelectorAll('input[name="opcao"]:checked');
    const botaoSubmit = document.querySelector('#botaoSubmit');

    const formatoDataValido = /^\d{2}\/\d{4}$/.test(dataInicio) && /^\d{2}\/\d{4}$/.test(dataFim);

    if (formatoDataValido && radioButtons.length > 0) {
        botaoSubmit.disabled = false;
    } else {
        botaoSubmit.disabled = true;
    }
}

function underlineAtivar(elemento){
    elemento.classList.replace('underlineInativo', 'underlineAtivo');

    // Adiciona o event listener para tirar o underline
    elemento.addEventListener('mouseleave', () => {underlineInativar(elemento)});
};

function underlineInativar(elemento){
    elemento.classList.replace('underlineAtivo', 'underlineInativo');

};


//-------------------------------------------------------------------------------------------

// Adiciona um ouvinte de evento para o clique do botão
document.querySelector("#botaoSubmit").addEventListener("click", pegarValorInput);

// Adiciona um ouvinte de evento para o mouseenter e leave nos títulos
const elementosUnderline = document.querySelectorAll('.underlineInativo');
elementosUnderline.forEach(elemento => {
    elemento.addEventListener('mouseenter', () => underlineAtivar(elemento));
});


// Libera o botão submit se os campos estiverem corretos.
document.querySelector('#dataInicio').addEventListener('input', verificarCampos);
document.querySelector('#dataFim').addEventListener('input', verificarCampos);
const radioButtons = document.querySelectorAll('input[name="opcao"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', verificarCampos); //cria o mesmo event listener para todo radio, como se adicionasse um por um.
});

verificarCampos();