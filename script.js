const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

const cadastrarUsuario = () => {

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const celular = document.getElementById('celular').value
    const cidade = document.getElementById('cidade').value

}

//LÓGICA DE CADASTRO

//conseguir abrir o modal
//inserir as informações, clicar no botão de salvar, salvar dados no localStorage
//fechar o modal quando cadastrar OU cancelar
//regarrego a pagina

//FUNÇÃO DE EXIBIR OS USUÁRIOS

//pegar os itens do localStorage (getItem)
//colocar os dados dentro de um array
//utilizar o método foreach para percorrer o array
//criar a tabela usando o DOM (id do tbody)

