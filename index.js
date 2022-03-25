// Add Images Function
function newImage(picture, Left, Bottom ){
    let object = document.createElement('img')
    object.src = picture
    object.style.position = 'fixed'
    object.style.left = Left + 'px'
    object.style.bottom = Bottom + 'px'
    document.body.append(object)
    return object
    }
// Add Item Function
function newItem(picture, Left, Bottom){
    let object = newImage(picture, Left, Bottom)

    object.addEventListener('dblclick', () =>{
        object.remove()
    })
}


// Removable Images 
newItem('assets/sheild.png',165,185 )
newItem('assets/staff.png', 600,100)
newItem('assets/sword.png', 500, 405)

// Static Images
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350, 100)
newImage('assets/crate.png', 150,200)
newImage('assets/well.png', 500,425)


// Images without function
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)