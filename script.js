function calcular(){
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const res = document.getElementById('res')
  const imc = (peso / (altura * altura)).toFixed(2)
  if(nome !== "" && altura !== "" && peso !== ""){
    if(imc < 18.5)
    msg = `Olá ${nome} seu imc é: ${imc} e você está abaixo do peso.`
    else if(imc > 18.5 && imc < 24.9)
      msg = `Olá ${nome} seu imc é: ${imc} e você está no peso normal.`
    else if(imc > 25 && imc < 29.9)
      msg = `Olá ${nome} seu imc é: ${imc} e você está na Obesidade Grau I.`
    else if(imc > 35 && imc < 39.9)
      msg = `Olá ${nome} seu imc é: ${imc} e você está na Obesidade Grau II.`
    else if(imc >= 40)
      msg = `Olá ${nome} seu imc é: ${imc} e você está na Obesidade Grau III ou Mórbida.`

    res.innerHTML = `<p class="res">${msg}</p>`
  }else{

    res.innerHTML = '<p class="res" style="color:red;">preencha os campos!</p>'
  }
}
