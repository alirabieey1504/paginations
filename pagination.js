let users = [
    { id: 1, name: 'ali', famiy: 'rabiee' },
    { id: 2, name: 'ahmad', famiy: 'rabiee' },
    { id: 3, name: 'reza', famiy: 'rabiee' },
    { id: 4, name: 'arash', famiy: 'rabiee' },
    { id: 5, name: 'jamshid', famiy: 'rabiee' },

    { id: 6, name: 'rahman', famiy: 'rabiee' },
    { id: 7, name: 'sadegh', famiy: 'rabiee' },
    { id: 8, name: 'setam', famiy: 'rabiee' },
    { id: 9, name: 'saeed', famiy: 'rabiee' },
    { id: 10, name: 'amisn', famiy: 'rabiee' },

    { id: 11, name: 'fariborz', famiy: 'rabiee' },
    { id: 12, name: 'ramin', famiy: 'rabiee' },
    { id: 13, name: 'fafa', famiy: 'rabiee' },
    { id: 14, name: 'sasan', famiy: 'rabiee' },
    { id: 15, name: 'javad', famiy: 'rabiee' },

    { id: 16, name: 'mohamad', famiy: 'rabiee' },
    { id: 17, name: 'aiil', famiy: 'rabiee' },
    { id: 18, name: 'hasan', famiy: 'rabiee' },
    { id: 19, name: 'hesam', famiy: 'rabiee' },
    { id: 20, name: 'amir', famiy: 'rabiee' },

    { id: 21, name: 'amirali', famiy: 'rabiee' },
    { id: 22, name: 'ali', famiy: 'rabiee' },
]

let pagecontact = 1;
let rowcontact = 5;
const divelem = document.querySelector('.list')
function createrow(startindex,endidex) {
   
    let arrsort = users.slice(startindex-1,endidex)

    arrsort.forEach(function (arr) {
      
        let divcreate = document.createElement('div')
        divcreate.classList.add('item')
        divcreate.innerHTML = arr.name + ' ' + arr.famiy
    
         divelem.append(divcreate)
        
    })
        

}
window.addEventListener('load', createrow(pagecontact,rowcontact))

let addpagediv = document.getElementById('pagination')

let addbtn = document.createElement('button')
addbtn.className = 'pagenumbers'

let tedad = Math.ceil(users.length / rowcontact)

for (let i = 0; i < tedad; i++) {
    let addbtn = document.createElement('button')
    addbtn.className = 'pagenumbers'
    addpagediv.append(addbtn)
    addbtn.innerHTML = i + 1;
    pagecontact = i + 1

    addbtn.setAttribute('onclick', 'btnpage(+' + pagecontact + ')')
}

function btnpage(p) {
    let endidex = p * rowcontact
    let startindex = endidex - rowcontact

   
    let arrsort = users.slice(startindex,endidex)
  
    divelem.innerHTML=''

    arrsort.forEach(function (arr) {
      
        let divcreate = document.createElement('div')
        divcreate.classList.add('item')
        divcreate.innerHTML = arr.name + ' ' + arr.famiy
    
         divelem.append(divcreate)
        
    })

}


