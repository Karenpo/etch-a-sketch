const container = document.querySelector(".container");
container.classList.add("container");//точка не нужна, т.к. 
//метод classList умеет работать только с классами CSS 
const btn = document.querySelector(".grid");

function create_square(num) {

    container.innerHTML = "";//стирает все элементы внутри 
    //<div class="container"></div>

    const number = num ** 2; // здесь показали, сколько квадратов рисовать
    const divHeight = 960 / num;//высота квадрата
    const divWidth = 100 / num;//ширина квадрата

    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");//создали квадрат
        div.classList.add("containers");//добавили стили
        div.style.width = `${divWidth}%`;//добавили ширину для квадрата
        div.style.height = `${divHeight}px`;//добавили высоту для квадрата

        container.appendChild(div); //добавили на страницу
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

container.addEventListener("mouseover", event => {
    const div = event.target.closest(".containers");
    if (!div) return;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    let currentOpacity = Number(div.style.opacity);
    if (isNaN(currentOpacity)) {
        currentOpacity = 0;
    }

    if (currentOpacity < 1) {
        div.style.opacity = currentOpacity + 0.1; //мы физически записали
        //значение в HTML, теперь в памяти браузера это выглядит так:  
        //<div class="containers" style=opacity: 0.1;"></div>
        //после того, как пользователь еще раз навел мышку на квадрат, 
        //содержимое переменной currentOpacity стерлось, далее currentOpacity
        //запрашивает свойство div.style.opacity, браузер выдает текущее
        //значение в opacity
    }
});