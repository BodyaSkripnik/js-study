// let count = 0
// let intervalId
// let root = document.getElementById('root')
// let secondWrapper = document.createElement('div')
// root.append(secondWrapper)

// function hello(){
//     count+=1
//     if (count === 3){
//         clearInterval(intervalId)
//     }
//     console.log(count)
    
// }

// intervalId = setInterval(hello,2000)


// function showCount(){
//     count+=1
//     secondWrapper.textContent = count
//     console.log(count)
    
// }

// intervalId = setInterval(showCount,1000)



///////////////////////// PROMISES

const firstPromise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('test text')
    }, 3000)
    
})
console.log(firstPromise, 'firstPromise');
firstPromise.then((data) => {
    console.log(data, 'data');
})