class Home {
    constructor() {
        let storage_item2 = localStorage.getItem('item_2');
        storage_item2 = JSON.parse(storage_item2);

        if(storage_item2) {
            this.sum = storage_item2; 
        } else {
            this.sum = [];
        } 
    }

    set getData(data) {
        let storage_2 = localStorage.setItem('item_2', JSON.stringify(data));
    }

    get getData() {
        let storage_2 = localStorage.getItem('item_2');
        storage_2 = JSON.parse(storage_2);
    }

    create() {
        let data = localStorage.getItem('item');

        data = JSON.parse(data);

        data.forEach((el, index) => {
            let list_item = document.createElement('li');
            list_item.classList.add('li');

            let title = document.createElement('h2');
            title.innerHTML = el.title;

            let price = document.createElement('span');
            price.classList.add('price');
            price.innerHTML = el.price;

            let buy = document.createElement('span');
            buy.classList.add('get_buy')
            buy.innerHTML = 'Buy';

            let buy_n = document.createElement('span');
            buy_n.classList.add('buy');
            buy_n.innerHTML = '';

            let link = document.createElement('a');
            link.classList.add('go');
            link.setAttribute('href', `http://127.0.0.1:5500/#product/${el.id}`);
            link.innerHTML = 'Go to product';
                
            let category = document.createElement('h4');
            category.innerHTML = el.category;

            document.querySelector('.cart').append(list_item);
                
            list_item.append(title, price, buy, link, category, buy_n);

            if(index == 1) {
                let img_1 = document.createElement('img');
                img_1.setAttribute('src', '../images/t_shirt.jpg'); 
                list_item.insertBefore(img_1, title);
            } else if (index == 2) {
                let img_2 = document.createElement('img');
                img_2.setAttribute('src', '../images/jacket.jpg');
                list_item.insertBefore(img_2, title);
            } else if (index == 0) {
                let img_3 = document.createElement('img');
                img_3.setAttribute('src', '../images/laptop.jpg');
                list_item.insertBefore(img_3, title);
            } else if (index == 3) {
                let img_4 = document.createElement('img');
                img_4.setAttribute('src', '../images/slim.jpg');
                list_item.insertBefore(img_4, title);
            } else if (index == 4) {
                let img_5 = document.createElement('img');
                img_5.setAttribute('src', '../images/dragon.jpg');
                list_item.insertBefore(img_5, title);
            } else if (index == 5) {
                let img_6 = document.createElement('img');
                img_6.setAttribute('src', '../images/gold.jpg');
                list_item.insertBefore(img_6, title);
            } else if (index == 6) {
                let img_7 = document.createElement('img');
                img_7.setAttribute('src', '../images/ring.jpg');
                list_item.insertBefore(img_7, title);
            } else if (index == 7) {
                let img_8 = document.createElement('img');
                img_8.setAttribute('src', '../images/earrings.jpg');
                list_item.insertBefore(img_8, title);
            } else if (index == 8) {
                let img_9 = document.createElement('img');
                img_9.setAttribute('src', '../images/usb.jpg');
                list_item.insertBefore(img_9, title);
            } else if (index == 9) {
                let img_10 = document.createElement('img');
                img_10.setAttribute('src', '../images/ssd.jpg');
                list_item.insertBefore(img_10, title);
            } else if (index == 10) {
                let img_11 = document.createElement('img');
                img_11.setAttribute('src', '../images/power.jpg');
                list_item.insertBefore(img_11, title);
            } else if (index == 11) {
                let img_12 = document.createElement('img');
                img_12.setAttribute('src', '../images/game.jpg');
                list_item.insertBefore(img_12, title);
            } else if (index == 12) {
                let img_13 = document.createElement('img');
                img_13.setAttribute('src', '../images/hd.jpg');
                list_item.insertBefore(img_13, title);
            } else if (index == 13) {
                let img_14 = document.createElement('img');
                img_14.setAttribute('src', '../images/monitor.jpg');
                list_item.insertBefore(img_14, title);
            } else if (index == 14) {
                let img_15 = document.createElement('img');
                img_15.setAttribute('src', '../images/coat.jpg');
                list_item.insertBefore(img_15, title);
            } else if (index == 15) {
                let img_16 = document.createElement('img');
                img_16.setAttribute('src', '../images/bicker.jpg');
                list_item.insertBefore(img_16, title);
            } else if (index == 16) {
                let img_17 = document.createElement('img');
                img_17.setAttribute('src', '../images/raincoat.jpg');
                list_item.insertBefore(img_17, title);
            } else if (index == 17) {
                let img_18 = document.createElement('img');
                img_18.setAttribute('src', '../images/sleeve.jpg');
                list_item.insertBefore(img_18, title);
            } else if (index == 18) {
                let img_19 = document.createElement('img');
                img_19.setAttribute('src', '../images/tshirt.jpg');
                list_item.insertBefore(img_19, title);
            } else if (index == 19) {
                let img_20 = document.createElement('img');
                img_20.setAttribute('src', '../images/women_t.jpg');
                list_item.insertBefore(img_20, title);
            } else return; 

            if(localStorage.getItem('item_2')) {
                let data_item = localStorage.getItem('item_2');

                data_item = JSON.parse(data_item);

                if (!document.querySelector('.count')) {
                    let  count =  document.createElement('h4');

                    count.classList.add('count'); 
            
                    count.innerHTML = data_item.length;

                    document.querySelector('.wrapper_1').append(count);

                } else if (document.querySelector('.count')) {
                    document.querySelector('.count').remove(); 
                
                    let count = document.createElement('h4');

                    count.classList.add('count'); 
            
                    count.innerHTML = data_item.length;
            
                    document.querySelector('.wrapper_1').append(count);
                
                } else return;

                this.sum_1 = data_item.map(el => {
                    return el.price;
                })

                if (!document.querySelector('.result')) {
                
                    let result_elem = document.createElement('h4');

                    result_elem.classList.add('result'); 

                    let result = this.sum_1.reduce((sum, current) => sum + current, 0).toFixed(2);
            
                    result_elem.innerHTML = result;
            
                    document.querySelector('.wrapper_2').append(result_elem);
            
                } else if (document.querySelector('.result')) {
                
                    document.querySelector('.result').remove(); 
                
                    let result_elem = document.createElement('h4');

                    result_elem.classList.add('result'); 

                    let result = this.sum_1.reduce((sum, current) => sum + current, 0).toFixed(2);
            
                    result_elem.innerHTML = result;
            
                    document.querySelector('.wrapper_2').append(result_elem);
                } else return;
            }

            buy.addEventListener('click', event =>{
                let parent = event.target.closest('li');

                let parent_element = parent.querySelector('.price').textContent;

                parent.querySelector('.buy').innerHTML = '&#10004';

                if(parent_element == el.price) {

                    this.sum.push(el);
                
                    this.getData = this.sum;

                    let data_2 = localStorage.getItem('item_2');

                    data_2 = JSON.parse(data_2);
                       
                    if (!document.querySelector('.count')) {
                        let  count =  document.createElement('h4');

                        count.classList.add('count'); 
                    
                        count.innerHTML = data_2.length;

                        document.querySelector('.wrapper_1').append(count);
     
                    } else if (document.querySelector('.count')) {
                        document.querySelector('.count').remove(); 
                        
                        let count = document.createElement('h4');

                        count.classList.add('count'); 
                    
                        count.innerHTML = data_2.length;
                    
                        document.querySelector('.wrapper_1').append(count);
                        
                    } else return;
                    
                    this.sum_1 = data_2.map(el => {
                        return el.price;
                    })

                    if (!document.querySelector('.result')) {
                        
                        let result_elem = document.createElement('h4');

                        result_elem.classList.add('result'); 

                        let result = this.sum_1.reduce((sum, current) => sum + current, 0).toFixed(2);
                    
                        result_elem.innerHTML = result;
                    
                        document.querySelector('.wrapper_2').append(result_elem);
                    
                    } else if (document.querySelector('.result')) {
                        
                        document.querySelector('.result').remove(); 
                        
                        let result_elem = document.createElement('h4');

                        result_elem.classList.add('result'); 

                        let result = this.sum_1.reduce((sum, current) => sum + current, 0).toFixed(2);
                    
                        result_elem.innerHTML = result;
                    
                        document.querySelector('.wrapper_2').append(result_elem);
                    } else return;
                }
            })
        })   
    }

    render() {
        this.create();
    }
}

const home = new Home().render();

export default home;



    







