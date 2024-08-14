function carregar (){
  var msg = window.document.getElementById ('msg')
  var img = window.document.getElementById ('imagem')
  var data = new Date() //pega a data atual
  var hora = data.getHours () //pega a hora da data atual
     msg.innerHTML = Agora são ${hora} horas
  if (hora >=0 && hora < 12){
    //Bom dia
  img.src = 'manhã.jped'
  } else if (hora >=12 && hora <18){
    //Boa tarde
  img.src = 'tarde.jped'
  } else {
    //Boa noite
  img.src = 'noite.jped'
  }
