function leCpf(){
    
    let cpf = document.getElementById("cpf")
    let cpfValue = cpf.value
    var cpfArr = cpfValue.split('')
    let soma = 0;
    var texto = '';
    var cpfValido = true;

    for(let i = 0; i < 9 ; i++){
        soma += cpfArr[i] *  (10 - i);
       
        let  resto = soma%11
        if(resto < 2){
           let decimoDigito = 0;
        } else {
            decimoDigito = 11 - resto;
        }
      
    }

    if (decimoDigito != cpfArr[9]){

        cpfValido = false;
    }

     let soma2 = 0;
     for(let i = 0; i < 10; i++){
         soma2 += cpfArr[i] * (11 - i);
     }
     let resto2 = soma2%11
     if(resto2 < 2){
         decimoPrimeiroDigito = 0;
     }else {
         decimoPrimeiroDigito = 11 - resto2;
     }

     if (decimoPrimeiroDigito != cpfArr[10]){
         cpfValido = false;
    }

    
    if (cpfValido == true){
        mensagem("CPF Válido!");
    } else {
        mensagem("CPF Inválido!");
    }
}
   
    function mensagem (msg){
        texto = document.getElementById("comment")
        texto.value = msg;
        
    }