function calcular(){
    msg = document.getElementById('msg')
    a = document.getElementById('a').value
    b = document.getElementById('b').value
    c = document.getElementById('c').value

    delta = Number((b*b) - (4*a*c))
    positivo = Number((- b + Math.sqrt(delta))/(2*a))
    negativo = Number((- b - Math.sqrt(delta))/(2*a))
    
    if(a != 0){
        if(delta>0){
            // positivo e negativo, 2 raizes diferentes
            msg.innerHTML = `X1: ${positivo}<br>X2: ${negativo}`
        }else if(delta == 0){
            // duas raizes iguais
            msg.innerHTML = `X1 e X2: ${positivo}`
        }else if(delta<0){
            //nao tem raizes
            msg.innerHTML = `Não tem raízes porque o Delta(Δ) é negativo, ${delta}.`
        }
        //se nao tiver nada
    }else if(a.length  == 0){
        window.alert('Valor de A obrigatório.')
       //se o valor for zero
    }else{
        window.alert('Valor de A não pode ser 0.')
    }
}
