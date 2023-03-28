// const root = document.getElementsByClassName('root');//если достаем Class 
// console.log([...root][0],'root');//если достаем Class 
const root = document.getElementById('root');
console.log(root)
const submit1 = document.getElementById('submit')


let array = []
let savedArray = JSON.parse(localStorage.getItem("info"));
if(savedArray) {
    renderCards(savedArray);
}


function createCard(event){
    let loader = document.getElementById('loader')
    loader.classList.add('active')
    intervalId = setTimeout(function(){
        loader.classList.remove('active')
    },1000)
    console.log(loader)
    const name = document.getElementById('name');
    const description = document.getElementById('description');


    let newArray = [{title:name.value,descriptionn:description.value}]
    array.push(newArray);


    let arrayCardsDataLocalStorage = JSON.parse(localStorage.getItem('info'))
    if (arrayCardsDataLocalStorage !== null){
        newArray = [...newArray, ...arrayCardsDataLocalStorage]// Spread оператор - вынимает из массива все элементы
        // newArray = newArray.concat(arrayCardsDataLocalStorage);
    }

    // check if cards exists and remove
    const cardsFromHtml = document.getElementsByClassName('card');
    const cardsFromHtmlArray = [...cardsFromHtml];
    if(cardsFromHtmlArray.length > 0) {
        cardsFromHtmlArray.forEach(card => card.remove())
    }
    //render new acards
    renderCards(newArray);
    const jsonArray = JSON.stringify(newArray);
    localStorage.setItem("info", jsonArray);

    event.preventDefault(); // что бы не перезагружать страницу 
}


submit1.addEventListener('click',createCard)



function renderCards(arrayOfCards){

    arrayOfCards.forEach(function(item,index) {
    
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('card')
    const deletItem = document.createElement('button')
    deletItem.textContent = 'Delete'
    deletItem.style.marginTop = '10px'
    deletItem.setAttribute('data-key', index); // устанавливаем атрибут data-key

    itemDiv.style = 'text-align: center;'
    itemDiv.style.marginTop = '20px'

    const dataItemTitle = document.createElement("p");
    const dataItemDescription = document.createElement("p");
    dataItemDescription.style.marginTop = '10px'

    dataItemTitle.textContent = item.title;
    dataItemDescription.textContent = item.descriptionn;

    // Delete Product
    function deleteItem(){
        const key = deletItem.getAttribute('data-key'); // получаем ключ записи из атрибута data-key
        savedArray.splice(key, 1); // удаляем запись из массива
        localStorage.setItem('info', JSON.stringify(savedArray)); // сохраняем измененный массив в локальное хранилище
        itemDiv.remove();
    }

    deletItem.addEventListener('click',deleteItem)


    itemDiv.append(dataItemTitle,dataItemDescription,deletItem);
    root.appendChild(itemDiv);
});
}