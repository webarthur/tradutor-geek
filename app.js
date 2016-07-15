var dicionario = [];
var tipo = 'geek-pt';

$e = function (e) { return document.getElementById(e) }
$s = function (q) { return document.querySelector(q) }
$all = function (q) { return document.querySelectorAll(q) }

function traduzir(texto) {
	
	var lista = dicionario[tipo]
	var original = texto.trim()

	texto = " "+texto+" "
	
	for(palavra in lista)
		texto = texto.replace(new RegExp(" "+palavra+'([ ,.;-\?\!])', "gi"), " "+lista[palavra]+"$"+(palavra.split('(').length))
	
	var traduzido = texto.trim()

	$e('texto-traduzido').innerHTML = traduzido
	$e('caracteres-editor').innerHTML = original.length + ' caracteres'
	$e('caracteres-traduzido').innerHTML = traduzido.length + ' caracteres'
	
	if(traduzido.length > original.length) {
		proporcao = Math.round(100/original.trim().length*traduzido.length) - 100
		$e('caracteres-traduzido').innerHTML += ', ' + (proporcao)+'% maior'
	}
	else if(traduzido.length < original.length) {
		proporcao = (Math.round(100/original.trim().length*traduzido.length))
		$e('caracteres-traduzido').innerHTML += ', ' + (proporcao)+'% menor'
	}
}

function troca_tipo_para(troca_para, clicado) {
	
	tipo = troca_para
	
	$all('button').forEach(function (botao) {
		botao.className = ''
		if(botao.innerHTML!=clicado.innerHTML && botao.parentNode.id=='botoes-traduzido')
			botao.className = 'ativo'
	})
	
	clicado.className = 'ativo'
	
	$s('textarea').focus()
}

window.onload = function () {
	$s('textarea').focus()
}
