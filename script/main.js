//Header interactions.

const navLeftImg = document.querySelector('.nav-left__img');
const menuDropLeft = document.querySelector('.menu-drop-down-left');

navLeftImg.addEventListener('click', () => {
    if (menuDropLeft.classList.contains('hide')) {
        menuDropLeft.classList.remove('hide');
    } else {
        menuDropLeft.classList.add('hide');
    }
})


//Notice section interactions.

const plate = document.querySelector('.plate');
const kind = document.querySelector('.kind');
const price = document.querySelector('.price');

const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');


async function notice(){
    try {
        const res = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        
        if(!res.ok){
            throw new Error('No conection');
        }
        
        const data = await res.json();
        
        let currenItem = 0;
        
        function showPlate(food){
            const item = data[food];
            plate.textContent = String(item.name).toUpperCase();
            kind.textContent = String(item.type).toUpperCase();
            price.textContent = '$' + item.price;
        };
        
        window.onload = showPlate(currenItem);
        
        btnRight.addEventListener('click', (e) => {
            currenItem++;
            if(currenItem > data.length - 1){
                currenItem = 0;
            }
            showPlate(currenItem);
            e.preventDefault();
        });

        btnLeft.addEventListener('click', (e) => {
            currenItem--;
            if(currenItem < 0){
                currenItem = data.length - 1;
            }
            showPlate(currenItem);
            e.preventDefault();
        });
    }
    catch (e){
        console.error(e)
    }
}

notice();