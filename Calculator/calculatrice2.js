const buttons = document.querySelectorAll('.btn');
let result = document.getElementById('result');

buttons.forEach((btn) => { 
    btn.addEventListener('click' , (e) => { 
        result.textContent += e.target.id
    });
});

equal.addEventListener('click', () => { 
    result.textContent = eval(result.textContent); 
});


clear.addEventListener('click' , () => { 
    result.textContent = "";
})
