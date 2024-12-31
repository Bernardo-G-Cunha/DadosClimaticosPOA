function pegarValorInput() {
    // Obtém o valor digitado no campo de input
    const dataInicio = document.getElementById("dataInicio").value;
    const dataFim = document.getElementById("dataFim").value;
    const radios = document.getElementsByName("opcao");
    var mesTempMed = null;

    for(let opcao of radios){
        if(opcao.checked){
            mesTempMed = opcao.value;
        };
    };
    
    let dados = [1,2,3,4,5,6,7]

    document.getElementById('divDados').innerHTML = '<section id="sectionDados"></section>';

    for(let dado of dados){
        let valorAtual = document.getElementById('sectionDados').innerHTML
        document.getElementById('sectionDados').innerHTML = valorAtual + `<p id="dados" >Novo conteúdo: ${dado}</p>`;
    }

    //document.getElementById('divDados').innerHTML = '<section id="sectionDados"><p id="dados" >Novo conteúdo</p></section>';


    // Exibe o valor no console ou faz algo com ele
    console.log(`Data Inicio: ${dataInicio}; Data Fim: ${dataFim}`);

    // Você pode também exibir o valor em um alerta ou em outro lugar na página
    alert(`Data Inicio: ${dataInicio}; Data Fim: ${dataFim}, Mes Temp Média: ${mesTempMed}`);
}

function printar(){
    console.log("Funcionou.");
};

function ambasFuncoes(){
    pegarValorInput();
    printar();
};

// Adiciona um ouvinte de evento para o clique do botão
document.getElementById("botaoSubmit").onclick = ambasFuncoes;

