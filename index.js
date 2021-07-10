let display = document.getElementById('display');
btn = document.querySelectorAll('button');
let displayvalue = '';
for (item of btn)
{
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        console.log('Button Text is ',btntext);
        if (btntext=='X')
        {
            btntext='*';
            displayvalue += btntext;
            display.value = displayvalue;
        }
        else if (btntext=='DEL')
        {
            displayvalue='';
            display.value = displayvalue;
        }
        else if (btntext=='=')
        {
            display.value=eval(displayvalue);
        }
        // else if (btntext == 'GCD')
        // {

        // }
        else 
        {
            displayvalue += btntext;
            display.value = displayvalue;
        }

    })
}