function validar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value


    if(usuario == ""&& senha == ""){
    alert('preencha todos os campos')
    }else{
    alert('acesso permitido')
    window.open("menu.html");
    }
}



function calc(){

    // let n1 = Number(prompt('Digite o primeiro valor:'))
    // let n2 = Number(prompt('Digite o segundo valor:'))
   
    let n1 = document.getElementById('entry1').value
    // let n1 = parseFloat(n1s)

    let n2 = document.getElementById('entry2').value
    // let n2 = parseFloat(n2s)
    // let op = Number(prompt(`Dados informados ${n1} e ${n2} ?n Escolha uma opção \n1- Somar \n2- Subtrair \n3- multiplicar \n4- dividir `))

    let ops = document.getElementById('op').value
    let op = parseFloat(ops)

    let msg = document.getElementById('msg')
    msg.innerHTML = `<h2> Processando o resultado...</h2>`

    // if (entry1 == "" && entry2 == ""){
    //     prompt('Por favor, preencha todos os campos')
    // }

   switch(op){ //a estrutura swich é parecida com a match case do py, e funciona com numeros inteiros e strings
        case 1:
            // template de strings é feito com `` e utiliza o {} para interpolar as strings 
            msg.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`
            break // break é obrigatório em cada case, para não executar comandos de outros cases
        case 2:
             msg.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
             break
        case 3:
             msg.innerHTML += `<p>${n1} x ${n2} = <strong>${n1 * n2}</strong></p>`
             break
        case 4:
            msg.innerHTML += `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`
            break
        default: 
        msg.innerHTML += `<p>OPÇÃO INVÁLIDA ! Você digitou ${n1} e ${n2}</p> `
        break
   }
}