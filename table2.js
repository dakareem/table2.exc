const titles = {
    id: "id",
    FirstName: "First Name",
    LastName: "Last Name",
    ProfilUrl: "Profil Url",
    gender: "gender",
    hobby: "hobby",
    // edit : "Edit",
    // delete : "Delete",

  }
  
  const persons = [titles]
  const properties = [
      'id',
      'first_name',
      'last_name',
      'profile',
      'gender',
      'hobby',
  ]

  function add(){
      event.preventDefault()
      const person = {}
      const form = document.querySelector('form')
     for (let prop of properties){
        person[prop] = form.elements[prop].value
     }
     persons.push(person)
     console.log(persons)
     renderTable(persons)
  }


  function createTd(text) {
      const td = document.createElement('td')
      td.innerHTML = text
      return td
  }

  function createImage(src){
      const img = document.createElement('img')
      img.src = src
      return img
  }

  function createdTr(obj){
      const tr  = document.createElement('tr')
      for (let prop in obj) {
          let td
          if(prop === 'profile') {
              const img = createImage(obj[prop])
           td = createTd('')
           td.appendChild(img)
          }
          else {
          td = createTd(obj[prop])
       }
          tr.appendChild(td)
      }
      return tr
  }


  function createTable(listOfObjects){
    const table = document.createElement('table')
    for (let obj of listOfObjects) {
        const tr = createdTr(obj)

        const tdEdit = createTd("<button onclick=edit('" + obj.id + "')>Edit Person</button>")

        tr.appendChild(tdEdit)
        table.appendChild(tr)
    }
    return table
}



//   function createTable(listOfObjects){
//       const table = document.createElement('table')
//       for (let obj of listOfObjects) {
//           const tr = createdTr(obj)
//           table.appendChild(tr)
//       }
//       return table
//   }


  function renderTable(){
      const table = createTable(persons)
      const container = document.querySelector('div.list')
      container.innerHTML = ''
      container.appendChild(table)
  }
  renderTable()