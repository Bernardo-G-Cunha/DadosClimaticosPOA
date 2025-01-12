//------------------------------ Funções ------------------------------

//_________________ Pega valor dos Inputs _________________

function pegarValorInput() {
    try {
        const dataInicio = document.querySelector("#dataInicio").value.trim();
        const dataFim = document.querySelector("#dataFim").value.trim();
        const radios = document.querySelectorAll('[name="opcao"]');
        var mesTempMed = null;

        radios.forEach(opcao =>{
            if(opcao.checked){
                mesTempMed = opcao.value;
            };
        });
    } catch (erro) {
        alert(`Erro na captura de valores da função pegarValorInput: ${erro}`);
    };
    //_________________ Cria nova Section" __________________    

    //Apaga a section se ela já existir
    try {
        var issecaoDados = document.querySelector('#secaoDados');
        if(issecaoDados) {
            document.querySelector('#secaoDados').remove();
        };
        
        var main = document.querySelector("main");
        var secaoDados = document.createElement('section');
        secaoDados.id = "secaoDados";    
        main.appendChild(secaoDados);
    } catch (erro) {
        alert(`Erro na criação da section secaoDados na função pegarValorInput: ${erro}`);
    };

    //_________________ Testa criação de parágrafos _________________
    try {
        let dados = [1,2,3,4,5,6,7];

        dados.forEach(dado => {
            var paragrafo = document.createElement('p');
            paragrafo.classList.add("dados"); 
            paragrafo.textContent = `Novo conteúdo: ${dado}`;
            secaoDados.appendChild(paragrafo);
        });

        console.log(`Data Inicio: ${dataInicio}; Data Fim: ${dataFim}; Mestempmed: ${mesTempMed}`);
    } catch (erro) {
        alert(`Erro na criação de parágrafo na função pegarValorInput: ${erro}`);
    };
};

//____________________ Verifica os campos ____________________

function verificarCampos() {
    const dataInicio = document.querySelector('#dataInicio').value.trim();
    const dataFim = document.querySelector('#dataFim').value.trim();

    const radioButtons = document.querySelectorAll('input[name="opcao"]:checked');
    const botaoSubmit = document.querySelector('#botaoSubmit');


    const formatoInicio = /^(\d{2})\/(\d{4})$/.test(dataInicio);
    const formatoFim = /^(\d{2})\/(\d{4})$/.test(dataFim);

    const formatoDataValido = formatoInicio && formatoFim;

    if (formatoDataValido && radioButtons.length > 0) {
        
        // Coloca os meses e anos em varáveis para melhorar legibilidade
        const mesInicio = dataInicio.match(/^(\d{2})\/(\d{4})$/)[1];
        const anoInicio = dataInicio.match(/^(\d{2})\/(\d{4})$/)[2];
        const mesFim = dataFim.match(/^(\d{2})\/(\d{4})$/)[1];
        const anoFim = dataFim.match(/^(\d{2})\/(\d{4})$/)[2];
        
        // Testa se as datas estão no período válido.
        const testeMes = Number(mesInicio) > 12 || Number(mesInicio) < 1 || Number(mesFim) > 12 || Number(mesFim) < 1;
        const testeAno = Number(anoInicio) > 2016 || Number(anoInicio) < 1961 || Number(anoFim) > 2016 || Number(anoFim) < 1961;
        
        // O ano de 2016 vai apenas até o mês 06, então é necessário testar isso.
        const teste2016 = (Number(anoInicio) == 2016 && Number(mesInicio) > 6) || (Number(anoFim) == 2016 && Number(mesFim) > 6);

        if (testeMes || testeAno || teste2016) {
            
            if(!(document.querySelector('#avisoData'))){
                const avisoData = document.createElement('p');
                avisoData.id = 'avisoData';
                avisoData.textContent = `As datas devem estar entre 01/1961 e 06/2016.`;
                document.querySelector('#secaoSubmitDatas').appendChild(avisoData);
            };

            botaoSubmit.disabled = true;
        } else {
            if(document.querySelector('#avisoData')) {
                document.querySelector('#avisoData').remove();
            };
            botaoSubmit.disabled = false;
        };
        
    } else {
        
        if(document.querySelector('#avisoData')) {
            document.querySelector('#avisoData').remove();
        };

        botaoSubmit.disabled = true;
    };

    if (botaoSubmit.disabled == true) {
        botaoSubmit.classList.replace('botaoSubmitEnable', 'botaoSubmitDisable');
    } else {
        botaoSubmit.classList.replace('botaoSubmitDisable', 'botaoSubmitEnable');
    };

};

//____________________ Fuções para alterar underline ____________________

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