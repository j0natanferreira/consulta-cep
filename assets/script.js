async function consultarCep(){
    // Input que recebe o CEP
    let cep = document.querySelector(".cep").value

    if (cep == "") {
        alert("Campo Vazio!")    
    };

    // Api Consulta CEP
    const response = await fetch('https://viacep.com.br/ws/'+ cep + '/json');
    const ceps = await response.json();

    // Inserindo dados na arvore do DOM
    let cep1 = document.querySelector(".cep1").innerHTML = `CEP: ${ceps.cep}`;
    let logradouro = document.querySelector(".logradouro").innerHTML = `Endereço: ${ceps.logradouro}`
    let bairro = document.querySelector(".bairro").innerHTML = `Bairro: ${ceps.bairro}`;
    let localidade = document.querySelector(".localidade").innerHTML = `CEP: ${ceps.localidade}`;
    let uf = document.querySelector(".uf").innerHTML = `UF: ${ceps.uf}`; 

}
