var botao = document.querySelector("#botao-entrar")
botao.addEventListener('click', function(evento) {
	evento.preventDefault()
	
	var form = document.querySelector('.main-form');
	
	var dados = validarDados(form);
	
	var msg = verificar(dados)
		
	if (msg.length > 0) {
		alert(msg)
		form.reset()
	}
	
	
	else {
		var removerTextoErro = document.querySelector('#divDeErro')
		removerTextoErro.innerHTML = ''
		form.reset()	
	}	
})


function validarDados(form) {
	var dados = {
		email: form.email.value,
		senha: form.senha.value
	}
	return dados
}

function verificar(dado) {
	
	var msg = []
	
	if (dado.email.length == 0 || dado.senha.length == 0) {
		msg.push('Campo(s) em branco, Por Favor, Verifique Novamente')
		return msg
	}
	return msg;
}


