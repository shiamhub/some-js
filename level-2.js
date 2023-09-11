let count = 0;
const setCount = () => {
    const countNumber = document.getElementById('count-number');
    // count++
    countNumber.innerText = localStorage.getItem('Number');
    // saveLocalStor(num)
    // localStor();
    const num = count++
    localStorage.setItem('Number', num);
};

// const localStor = () => {
// };
// const getStor = () => {
//     const stor = localStorage.getItem('Number');
//     let card = [];
//     console.log(stor);
//     if(stor) {
//         card = JSON.parse(stor);
//     }
//     return card;
// };

// const saveLocalStor = (n) => {
//     const card = getStor();
//     card[n] = n;
//     const cardString = JSON.stringify(card);
//     localStorage.setItem('Number', cardString);
//     console.log(cardString);
// };

// const displayNum = () =>  {
//     const stor = localStorage.getItem('Number');
//     const countNumber = document.getElementById('count-number');
//     countNumber.innerText = stor[stor.length];
// }


// displayNum();