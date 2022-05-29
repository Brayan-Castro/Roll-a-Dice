// pega a ficha e a mostra no documento HTML
var loadFile = function(event) {
	var pdf = document.getElementById('output');
	pdf.data = URL.createObjectURL(event.target.files[0]);
};

function randomNum(max, min){
    // gera um número aleatório e retorna o valor
    return Math.floor(Math.random() * (max - min)) + min
};

function discord(nome, valorDado){
    // pega o valor de valorDado, o mapeia, os transforma em Int e os transforma em uma Array
    let rolIntArray = valorDado.map(function(x){
        return parseInt(x, 10)
    })

    // pega o valor do elemento "profBonus" no documento HTML
    let profBonus = document.getElementById("profBonus").value;

    // pego o valor de profBonus e o trasnforma em um Int
    let profBonusInt = parseInt(profBonus, 10)

    let soma = 0

    // soma todos os valores de rolIntArray
    rolIntArray.forEach(value => {
        soma += value;
    });

    // soma final do bonus de proficiencia e dos valores somadas de rolIntArray
    let final = soma + profBonusInt

    // configuração do webhook do discord
    const request = new XMLHttpRequest();
    // manda um pedido de mensagem para o webhook usando seu URL
    request.open("POST", "https://discord.com/api/webhooks/962902967445512222/ox8BkwGkENlEm-vxgLmZWtF8XDEKrjYkI5ZvN18qrly1U4gjDtFx2gSQqotqTdMWDalI")
    request.setRequestHeader('Content-type', 'application/json');

    // parametros da mensagem do webhook do discord
    let params = {
        username: "Roll-a-Dice",
        avatar_url: "",
        embeds: [{
            author: {
                name: `${nome}`
            },
            description: `${rolIntArray} + ${profBonusInt} = ${final}`
        }]
    }
    request.send(JSON.stringify(params))
}

function roll_a_dice(){
    // pega o valor do elemento "nomeChar" no documento HTML
    let nomeChar = document.getElementById("nomeChar").value;

    // pega o valor do elemento "tipoDado" no documento HTML
    let tipoDado = document.getElementById("tipoDado").value;

    // pega o valor do elemento "numeroDado" no documento HTML
    let numeroDado = document.getElementById("numeroDado").value;

    // pega o valor do elemento "resultado" no documento HTML
    let resultado = document.querySelector(".resultado");

    let rolagem ='';

    // faz a rolagem dos dados de acordo com o tipo e numéro de dados
    switch (tipoDado){
        case "D4":
            for(let i=0; i < numeroDado; i++){
                rolagem += `<div>`+ randomNum(1, 5) + `</div>`

                // separa os números das letras do elemento rolagem
                rolagemInt = rolagem.match(/(\d+)/g)
            }
            // mostra o resultado da rolagem na página HTML
            resultado.innerHTML = rolagem

            // menvia as informações de nome e a rolagem de dados para a função Discord()
            discord(nomeChar, rolagemInt)
            break;
        case "D6":
            for(let i=0; i < numeroDado; i++){
                rolagem += `<div>`+ randomNum(1, 7) + `</div>`
                rolagemInt = rolagem.match(/(\d+)/g)
            }

            resultado.innerHTML = rolagem

            discord(nomeChar, rolagemInt)
            break;
        case "D8":
            for(let i=0; i < numeroDado; i++){
                rolagem += `<div>`+ randomNum(1, 9) + `</div>`
                rolagemInt = rolagem.match(/(\d+)/g)
            }

            resultado.innerHTML = rolagem

            discord(nomeChar, rolagemInt)
            break;
        case "D10":
            for(let i=0; i < numeroDado; i++){
                rolagem += `<div>`+ randomNum(1, 11) + `</div>`
                rolagemInt = rolagem.match(/(\d+)/g)
            }

            resultado.innerHTML = rolagem

            discord(nomeChar, rolagemInt)
            break;
        case "D12":
            for(let i=0; i < numeroDado; i++){
                rolagem += `<div>`+ randomNum(1, 13) + `</div>`
                rolagemInt = rolagem.match(/(\d+)/g)
            }

            resultado.innerHTML = rolagem

            discord(nomeChar, rolagemInt)
            break;
        case "D20":
            for(let i=0; i < numeroDado; i++){
                rolagem += `<div>`+ randomNum(1, 21) + `</div>`
                rolagemInt = rolagem.match(/(\d+)/g)
            }

            resultado.innerHTML = rolagem

            discord(nomeChar, rolagemInt)
            break;
    };
};