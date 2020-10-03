import { Loja } from './loja'; 

function isNullOrEmpty(s: String) {
  return s == null || s.length == 0;
}

export function dados_loja_objeto(loja: Loja) {
  // Implemente aqui
  if (loja.nome_loja == "") {
    throw new Error(`O campo nome da loja é obrigatório`);
  }

  if (loja.logradouro == "") {
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }

  if (loja.municipio == "") {
    throw new Error(`O campo município do endereço é obrigatório`);
  }

  if (loja.estado == "") {
    throw new Error(`O campo estado do endereço é obrigatório`);
  }

  if (loja.cnpj == "") {
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }

  if (loja.inscricao_estadual == "") {
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }


  let _COMPLEMENTO = "";
		if (loja.complemento != ""){
			_COMPLEMENTO = " " + loja.complemento;
		}

		let _BAIRRO = "";
		if (loja.bairro != "") {
			_BAIRRO = loja.bairro + " - ";
		}

		let _CEP = "";
		let _TELEFONE = "";

		if (!isNullOrEmpty(loja.cep)) {
			_CEP = "CEP:" + loja.cep;
			if (loja.telefone != ""){
				_TELEFONE = " Tel " + loja.telefone;
			}
		} else {
			_CEP = "";
			if (loja.telefone != ""){
				_TELEFONE = "Tel " + loja.telefone;
			}
    }
    
    let _OBSERVACAO = "";
    if(loja.observacao != ""){
      _OBSERVACAO = loja.observacao;
    }

    let _NUMERO;
    if (loja.numero != 0){
      _NUMERO = loja.numero;
    }

    if (loja.numero == 0 || loja.numero == null){
      _NUMERO = "s/n";
    }

  let show = `${loja.nome_loja}
${loja.logradouro}, ${_NUMERO}${_COMPLEMENTO}
${_BAIRRO}${loja.municipio} - ${loja.estado}
${_CEP}${_TELEFONE}
${loja.observacao}
CNPJ: ${loja.cnpj}
IE: ${loja.inscricao_estadual}
`;
  return show

}
