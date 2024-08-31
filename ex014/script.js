function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex') 
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', '')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else if {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebezinhA.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemde18ans.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'umatia.jpg')
            } else if {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }    
}
