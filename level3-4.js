document.getElementById('send-name').addEventListener('click', function() {
    const inpName = document.getElementById('name').value;
    localStorage.setItem('name', inpName);
});
document.getElementById('send-email').addEventListener('click', function() {
    const inpName = document.getElementById('email').value;
    localStorage.setItem('email', inpName);
});
document.getElementById('send-message').addEventListener('click', function() {
    const inpName = document.getElementById('message').value;
    localStorage.setItem('message', inpName);
});


document.getElementById('delete-name').addEventListener('click', function() {
    deleteName('name');
});
document.getElementById('delete-email').addEventListener('click', function() {
    deleteName('email');
});
document.getElementById('delete-message').addEventListener('click', function() {
    deleteName('message');
});

function deleteName(n) {
    const name = document.getElementById(n);
    const inpName = name.value;
    name.value = '';
    localStorage.removeItem(n);

};

document.getElementById('reset').addEventListener('click', function() {
    localStorage.clear();
})

document.getElementById('send').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const idName = document.getElementById('id-name').innerText;
    const idEmail = document.getElementById('id-email').innerText;
    const idMessage = document.getElementById('id-message').innerText;

    // const id = getStor();
    // id[idName] = name;
    // id[idEmail] = email;
    // id[idMessage] = message;
    // const idString = JSON.stringify(id);
    // localStorage.setItem('login', idString);
    
    saveLocalStor(name, email, message, idName, idEmail, idMessage);
    
});

const getStor = () => {
    const stor = localStorage.getItem('login');
    console.log(stor);
    let isStor = [];
    if(stor) {
        return isStor = JSON.parse(stor);
    }
    else{
       return isStor;
    }
};

const saveLocalStor = (p, q, r, x, y, z) => {
    const id = getStor();
    const info = {};
    info[x] = p;
    info[y] = q;
    info[z] = r;
    id.push(info);
    const idString = JSON.stringify(id);
    localStorage.setItem('login', idString);
};

function display() {
    const name = localStorage.getItem('login');
    const nameP = JSON.parse(name);
    const arr = nameP.length - 1
    console.log(nameP[arr].Name);
    const{Name, Email, Message} = nameP[arr];
    document.getElementById('name').value = Name;
    document.getElementById('email').value = Email;
    document.getElementById('message').value = Message;
}
display()