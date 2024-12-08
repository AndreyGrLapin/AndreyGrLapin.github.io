// Корзина
let priceBuy = document.getElementById("priceBuy");
let valueProducts = document.getElementById("valueProducts");
let btnInByuBasket = document.querySelectorAll(".btn__flex-item");


for (let elem of btnInByuBasket){
    elem.onclick = () => {
    valueProducts.textContent = parseInt(valueProducts.textContent) + 1;
    priceBuy.textContent = parseFloat(priceBuy.textContent) + parseFloat(elem.previousElementSibling.textContent);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    const slider = new ItcSimpleSlider('.itcss');
    // назначим обработчик при нажатии на кнопку .btn-prev
    document.querySelector('.btn-prev').onclick = () => {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .btn-next
    document.querySelector('.btn-next').onclick = () => {
      // перейдём к следующему слайду
      slider.next();
    }
  });
  
