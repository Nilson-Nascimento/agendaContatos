const conteudoForm = document.getElementById('valorForm')
const valorNome = document.getElementById('nome')
const valorContato = document.getElementById('contato')
let contacts = '';

conteudoForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(valorContato.value)
    console.log(valorNome.value)
    console.log(conteudoForm)
  
    getContact()
    insertContact()
    clearField()
    
    alert("Contato adicionado com sucesso!")
  })
  
  function getContact(){
    let contact = '<tr>'
    contact += `<td>${valorNome.value}</td>`
    contact += `<td>${valorContato.value}</td>`
    contact += '</td>'
    contacts += contact
  }
  
  function insertContact(){
  
    const valorTbody = document.querySelector('tbody')
    valorTbody.innerHTML = contacts
  }

  function clearField(){
    valorNome.value = "";
    valorContato.value = "";
  }