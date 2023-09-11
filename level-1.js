const setData = () => {
    const key = 'name';
    const value = 'sakibe kan'

    localStorage.setItem(key, value);
    console.log(key, value); 
}

const setRemove = () => {
    localStorage.removeItem('name');
};

const person = {
    fastName: 'Abraham',
    lastName: 'Linkone'
}
const setObj = () => {
    const personSt = JSON.stringify(person);
    localStorage.setItem('parson', personSt);
    console.log(JSON.parse(personSt));
};