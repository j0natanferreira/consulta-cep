async function consultarCep(){
    try {
        // Input que recebe o CEP
        let cep = document.querySelector(".cep").value

        // Api Consulta CEP
        const response = await fetch('https://viacep.com.br/ws/'+ cep + '/json');
        const ceps = await response.json();

        // Inserindo dados na arvore do DOM
        let cep1 = document.querySelector(".cep1").innerHTML = `CEP: ` + ceps.cep;
        let logradouro = document.querySelector(".logradouro").innerHTML = `Endereço: ` + ceps.logradouro;
        let bairro = document.querySelector(".bairro").innerHTML = `Bairro: ` + ceps.bairro;
        let localidade = document.querySelector(".localidade").innerHTML = `Cidade: ` + ceps.localidade;
        let uf = document.querySelector(".uf").innerHTML = `UF: ` + ceps.uf; 

        //retorna o input vazio
        document.querySelector(".cep").value =""
    }catch{
        alert("CEP não encontrado!");
            return;
    }
}
