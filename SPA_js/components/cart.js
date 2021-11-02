class Cart {
    create() {
        if(localStorage.getItem) {
            let history = localStorage.getItem('item_2');

            history = JSON.parse(history);

            let data = Object.values(history.reduce((acc, n) => ((!acc[n.id]) && (acc[n.id] = n), acc), {}));

            let r = history.map(el => {
                return String(el.id)
            })
        
            document.querySelector('.main ul').remove();

            let ul = document.createElement('ul');
            ul.classList.add('cart');
            document.querySelector('.main').append(ul);

            data.forEach((elem, index) => {
                let list_item = document.createElement('li');
                list_item.classList.add('cart');

                let buy_n = document.createElement('span');
                buy_n.classList.add('buy_n');

                let arr = [];
                let el = String(elem.id);
                let el_index = r.indexOf(el);
                    while(el_index != -1) {
                        arr.push(el_index);
                        el_index = r.indexOf(el, el_index + 1)
                    }

                buy_n.innerHTML = arr.length;
                
                let plus = document.createElement('span');
                plus.classList.add('plus');
                plus.innerHTML = '+1'; 

                let minus = document.createElement('span');
                minus.classList.add('plus');
                minus.classList.add('plus');
                minus.innerHTML = '-1'; 

                let del = document.createElement('span');
                del.classList.add('delete');
                del.innerHTML = '&#10008';

                let title = document.createElement('h2');
                title.innerHTML = elem.title;

                let price = document.createElement('span');
                price.classList.add('price');
                price.innerHTML = elem.price;

                let category = document.createElement('h4');
                category.innerHTML = elem.category;

                ul.append(list_item);
                    
                list_item.append(title, price, buy_n, del, plus, minus, category);

                if(elem.id == 2) {
                    let img_1 = document.createElement('img');
                    img_1.setAttribute('src', '../images/t_shirt.jpg'); 
                    list_item.insertBefore(img_1, title);
                } else if (elem.id == 3) {
                    let img_2 = document.createElement('img');
                    img_2.setAttribute('src', '../images/jacket.jpg');
                    list_item.insertBefore(img_2, title);
                } else if (elem.id == 1) {
                    let img_3 = document.createElement('img');
                    img_3.setAttribute('src', '../images/laptop.jpg');
                    list_item.insertBefore(img_3, title);
                } else if (elem.id == 4) {
                    let img_4 = document.createElement('img');
                    img_4.setAttribute('src', '../images/slim.jpg');
                    list_item.insertBefore(img_4, title);
                } else if (elem.id == 5) {
                    let img_5 = document.createElement('img');
                    img_5.setAttribute('src', '../images/dragon.jpg');
                    list_item.insertBefore(img_5, title);
                } else if (elem.id == 6) {
                    let img_6 = document.createElement('img');
                    img_6.setAttribute('src', '../images/gold.jpg');
                    list_item.insertBefore(img_6, title);
                } else if (elem.id == 7) {
                    let img_7 = document.createElement('img');
                    img_7.setAttribute('src', '../images/ring.jpg');
                    list_item.insertBefore(img_7, title);
                } else if (elem.id == 8) {
                    let img_8 = document.createElement('img');
                    img_8.setAttribute('src', '../images/earrings.jpg');
                    list_item.insertBefore(img_8, title);
                } else if (elem.id == 9) {
                    let img_9 = document.createElement('img');
                    img_9.setAttribute('src', '../images/usb.jpg');
                    list_item.insertBefore(img_9, title);
                } else if (elem.id == 10) {
                    let img_10 = document.createElement('img');
                    img_10.setAttribute('src', '../images/ssd.jpg');
                    list_item.insertBefore(img_10, title);
                } else if (elem.id == 11) {
                    let img_11 = document.createElement('img');
                    img_11.setAttribute('src', '../images/power.jpg');
                    list_item.insertBefore(img_11, title);
                } else if (elem.id == 12) {
                    let img_12 = document.createElement('img');
                    img_12.setAttribute('src', '../images/game.jpg');
                    list_item.insertBefore(img_12, title);
                } else if (elem.id == 13) {
                    let img_13 = document.createElement('img');
                    img_13.setAttribute('src', '../images/hd.jpg');
                    list_item.insertBefore(img_13, title);
                } else if (elem.id == 14) {
                    let img_14 = document.createElement('img');
                    img_14.setAttribute('src', '../images/monitor.jpg');
                    list_item.insertBefore(img_14, title);
                } else if (elem.id == 15) {
                    let img_15 = document.createElement('img');
                    img_15.setAttribute('src', '../images/coat.jpg');
                    list_item.insertBefore(img_15, title);
                } else if (elem.id == 16) {
                    let img_16 = document.createElement('img');
                    img_16.setAttribute('src', '../images/bicker.jpg');
                    list_item.insertBefore(img_16, title);
                } else if (elem.id == 17) {
                    let img_17 = document.createElement('img');
                    img_17.setAttribute('src', '../images/raincoat.jpg');
                    list_item.insertBefore(img_17, title);
                } else if (elem.id == 18) {
                    let img_18 = document.createElement('img');
                    img_18.setAttribute('src', '../images/sleeve.jpg');
                    list_item.insertBefore(img_18, title);
                } else if (elem.id == 19) {
                    let img_19 = document.createElement('img');
                    img_19.setAttribute('src', '../images/tshirt.jpg');
                    list_item.insertBefore(img_19, title);
                } else if (elem.id == 20) {
                    let img_20 = document.createElement('img');
                    img_20.setAttribute('src', '../images/women_t.jpg');
                    list_item.insertBefore(img_20, title);
                } else return;

                del.addEventListener('click', event => {
                    let li_2 = event.target.closest('li');
                    
                    let price_2 = li_2.querySelector('.price').textContent;

                    if(elem.price == price_2) {
                        history.splice(index, +buy_n.innerHTML);

                        console.log(buy_n.innerHTML)

                        li_2.remove();

                        document.querySelector('.count').innerHTML = history.length;

                        let sum_2 = history.map(el => {
                            return el.price;
                        })

                        let result = sum_2.reduce((sum, current) => sum + current, 0).toFixed(2);

                        document.querySelector('.result').innerHTML = result;

                        localStorage.setItem('item_2', JSON.stringify(history));
                    }
                })

                plus.addEventListener('click', event => {
        
                    let li_3 = event.target.closest('li');
                    
                    let price_3 = li_3.querySelector('.price').textContent;

                    li_3.querySelector('.buy_n').innerHTML = +`${li_3.querySelector('.buy_n').innerHTML}` + 1;

                    if(elem.price == price_3) {
                        history.push(elem);

                        document.querySelector('.count').innerHTML = history.length;

                        let sum_ = history.map(el => {
                            return el.price;
                        })

                        let result = sum_.reduce((sum, current) => sum + current, 0).toFixed(2);

                        document.querySelector('.result').innerHTML = result;

                        localStorage.setItem('item_2', JSON.stringify(history));
                    }
                })
                
                minus.addEventListener('click', event => {
                    let li_4 = event.target.closest('li');
                    
                    let price_4 = li_4.querySelector('.price').textContent;

                    let c = li_4.querySelector('.buy_n').innerHTML = +`${li_4.querySelector('.buy_n').innerHTML}` - 1;

                    if(c == 0) {
                        li_4.remove()
                    }

                    if(elem.price == price_4) {
                        history.splice(index, 1);

                        document.querySelector('.count').innerHTML = history.length;

                        let sum_1 = history.map(el => {
                            return el.price;
                        })

                        let result = sum_1.reduce((sum, current) => sum + current, 0).toFixed(2);

                        document.querySelector('.result').innerHTML = result;

                        localStorage.setItem('item_2', JSON.stringify(history));
                    }
                })
            }) 
        }  
    }

    render() {
        this.create();
    }
}

const cart = new Cart().render()

export default cart;






