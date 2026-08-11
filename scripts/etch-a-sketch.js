const container = document.querySelector(".container");
container.classList.add("container");//точка не нужна, т.к. 
//метод classList умеет работать только с классами CSS 
const btn = document.querySelector(".grid");

function create_square(num) {

    container.innerHTML = "";//стирает все элементы внутри 
    //<div class="container"></div>

    const divHeight = 958 / num;
    const divWidth = 100 / num;

    let number;

    if (num === 1) {
        number = num + 1;
    } else {
        number = num ** 2;
    }


    div.style.width = `${divWidth}%`;
    div.style.height = `${divHeight}px`;

    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");
        div.classList.add("background");
        container.appendChild(div);
    }
}

btn.addEventListener("click", () => {
    /*if (div) {
            div.remove();//удалили элемент со страницы. 
            div = null;//удалили ссылку на объект. 
            // если не написать div.remove(), объект физически останется на странице
        } заковычили этот момент, потому что использовали в функции
    innerHTML = '', который стер все содержимое контейнера
    */
    let input = parseInt(prompt(
        "Enter number of squares you would like construct"));
    if (isNaN(input) || input <= 0) return;

    create_square(input);
}); 