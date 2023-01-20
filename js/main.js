// Promisses 
// ожидание(pending) - начальное состояние, не исполнен или не отклонен
// исполнено (fullfilled) - опреация успешно завершена 
// отклонено (rejected) - операция завершена с ошибкой 

// const firstPromise = new Promise((resolve, reject) => {
//     // logic
//     // logic
//     if(status == 'admin') {
//     resolve(someValue);
//     } else {
//         reject('You are not admin');
//     }
// });

// let p = new Promise( (resolve, reject) => {
//     let a = 1+1;
//     if(a===3) {
//         resolve('Success');
//     } else {
//         reject('Fail');
//     };
// });
// console.log(p);

// // then(), catch(), finally();
// p
//     .then((message) => {
//         console.log('work', message);
//     })
//     .catch((message) => {
//         console.log(message);
//     })
//     .finally(() => {
//         console.log('Work it');
//     })


// let age = 22;
// let p = new Promise(function(res, rej) {
//     if(age >= 21) {
//         res({age, status:true});
//     } else {
//         rej({age, status:false});
//     }
// });

// p
//     .then(result => {
//         console.log('SUCCESS', result);
//     })
//     .catch(err => {
//         console.log("ERROR", err);
//     })
//     .finally(() => {
//         console.log('FINISH');
//     }); 

// Методы запросов
// GET -ПОЛУЧЕНИЕ информации (без отправки данных)

// POST - отправка каких-либо данных

// PUT(полное изменение)/PATCH(частичное изменение)- методы для измения контента

// DELETE - удаление какого-либо контента


// 100 - 199 - несут в себе информацию, могут содуржать информацию о запросе и др
// 200 - 299 - успешные статусы запросов(ответов)
// 300 - 399 - статусы перенаправления(redirect)
// 400 - 499 - ошибка на стороне клиента
// 500 - 599 - ошибки сервера


// request 
// // old version
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://rickandmortyapi.com/api/character');
// xhr.send();
// xhr.onload = function() {
//     console.log(JSON.parse(xhr.response));
// }

// new version
// let res = fetch('https://rickandmortyapi.com/api/character')
//     .then(result => {
//         console.log(result);
//     })
//     .then(data => {
//         console.log(data);
//     })

let res = fetch('https://rickandmortyapi.com/api/character')
    .then(result => result.json())
    .then(data => {
        // console.log(data);
        data.results.forEach(item => {
            // console.log(item.image);
            document.body.innerHTML += `<img src="${item.image}" alt='error:(' width = '200' height = '200'>;`
        })
    })
    .catch(err => console.log(err))


