function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'goku.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'naruto.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'bleach3.png')
            } else {
                //idoso
                img.setAttribute('src', 'cavdozodiaco.png')
            }
        } else
        if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'moana.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'Frozen.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'cinderela.png')
            } else {
                //idoso
                img.setAttribute('src', 'alice-país-maravilhas.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}  Anos! e seu Anime ou Desenho é:`
        res.appendChild(img)
    }
}