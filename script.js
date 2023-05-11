function validar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value


    if(usuario == ""&& senha == ""){
    alert('preencha todos os campos')
    }else{
    alert('acesso permitido')
    window.open("menu.html")
    }
}



function calc(){

    let n1 = number(prompt('Digite o primeiro valor'))
    let n2 = number(prompt('Digite o segundo valor'))
    let op = number(prompt(`Dados informados ${n1} e ${n2} ?n Escolha uma opção /n 1 - Somar/n 2 - Subtrair /n 3 - multiplicar /n 4 - dividir `))

   let msg = document.getElementById('msg')
   msg.innerHTML = `<h1> Processando o resultado</h1>`

   switch(op){
        case 1:
            msg.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`
            break
        case 2:
             msg.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
             break
        case 2:
             msg.innerHTML += `<p>${n1} * ${n2} = <strong>${n1 * n2}</strong></p>`
             break
        case 3:
            msg.innerHTML += `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`
            break
   }
}