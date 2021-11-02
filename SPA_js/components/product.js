class Product {
    create() {
        let product = localStorage.getItem('item');

        product = JSON.parse(product);

        document.querySelector('.main ul').remove();

        let ul = document.createElement('ul');
                        
        document.querySelector('.main').append(ul);

        let list_item = document.createElement('li');
        list_item.classList.add('product');
            
        let title = document.createElement('h2');

        let description = document.createElement('p');

        let price = document.createElement('span');
        price.classList.add('price');

        let category = document.createElement('h4');
            
        ul.append(list_item);
                        
        list_item.append(title, price, description, category);
            
        if(location.hash == '#product/1') {

            title.innerHTML = product[0].title;

            description.innerHTML = product[0].description;

            price.innerHTML = product[0].price;

            category.innerHTML = product[0].category; 
                
            let img_3 = document.createElement('img');
            img_3.setAttribute('src', '../images/laptop.jpg');
            list_item.insertBefore(img_3, title);

        } else if(location.hash == '#product/2') {
            title.innerHTML = product[1].title;

            description.innerHTML = product[1].description;

            price.innerHTML = product[1].price;

            category.innerHTML = product[1].category; 
                
            let img_1 = document.createElement('img');
                img_1.setAttribute('src', '../images/t_shirt.jpg'); 
                list_item.insertBefore(img_1, title);
        } else if (location.hash == '#product/3') {
            title.innerHTML = product[2].title;

            description.innerHTML = product[2].description;

            price.innerHTML = product[2].price;

            category.innerHTML = product[2].category; 
                
            let img_2 = document.createElement('img');
            img_2.setAttribute('src', '../images/jacket.jpg');
            list_item.insertBefore(img_2, title);

        } else if (location.hash == '#product/4') {
            title.innerHTML = product[3].title;

            description.innerHTML = product[3].description;

            price.innerHTML = product[3].price;

            category.innerHTML = product[3].category; 
                
            let img_4 = document.createElement('img');
            img_4.setAttribute('src', '../images/slim.jpg');
            list_item.insertBefore(img_4, title);

        } else if (location.hash == '#product/5') {
            title.innerHTML = product[4].title;

            description.innerHTML = product[4].description;

            price.innerHTML = product[4].price;

            category.innerHTML = product[4].category; 
                
            let img_5 = document.createElement('img');
            img_5.setAttribute('src', '../images/dragon.jpg');
            list_item.insertBefore(img_5, title);
              
        } else if (location.hash == '#product/6') {
            title.innerHTML = product[5].title;

            description.innerHTML = product[5].description;

            price.innerHTML = product[5].price;

            category.innerHTML = product[5].category; 
                
            let img_6 = document.createElement('img');
            img_6.setAttribute('src', '../images/gold.jpg');
            list_item.insertBefore(img_6, title);  

        } else if (location.hash == '#product/7') {
            title.innerHTML = product[6].title;

            description.innerHTML = product[6].description;

            price.innerHTML = product[6].price;

            category.innerHTML = product[6].category; 
                
            let img_7 = document.createElement('img');
            img_7.setAttribute('src', '../images/ring.jpg');
            list_item.insertBefore(img_7, title);
                 
        } else if (location.hash == '#product/8') {
            title.innerHTML = product[7].title;

            description.innerHTML = product[7].description;

            price.innerHTML = product[7].price;

            category.innerHTML = product[7].category; 
                
            let img_8 = document.createElement('img');
            img_8.setAttribute('src', '../images/earrings.jpg');
            list_item.insertBefore(img_8, title); 

        }  else if (location.hash == '#product/9') {
            title.innerHTML = product[8].title;

            description.innerHTML = product[8].description;

            price.innerHTML = product[8].price;

            category.innerHTML = product[8].category; 
                
            let img_9 = document.createElement('img');
            img_9.setAttribute('src', '../images/usb.jpg');
            list_item.insertBefore(img_9, title);

        }  else if (location.hash == '#product/10') {
            title.innerHTML = product[9].title;

            description.innerHTML = product[9].description;

            price.innerHTML = product[9].price;

            category.innerHTML = product[9].category; 
                
            let img_10 = document.createElement('img');
            img_10.setAttribute('src', '../images/ssd.jpg');
            list_item.insertBefore(img_10, title);
                                            
        }  else if (location.hash == '#product/11') {
            title.innerHTML = product[10].title;

            description.innerHTML = product[10].description;

            price.innerHTML = product[10].price;

            category.innerHTML = product[10].category; 
                
            let img_11 = document.createElement('img');
            img_11.setAttribute('src', '../images/power.jpg');
            list_item.insertBefore(img_11, title);
                                            
        }  else if (location.hash == '#product/12') {
            title.innerHTML = product[11].title;

            description.innerHTML = product[11].description;

            price.innerHTML = product[11].price;

            category.innerHTML = product[11].category; 
                
            let img_12 = document.createElement('img');
            img_12.setAttribute('src', '../images/game.jpg');
            list_item.insertBefore(img_12, title);

        } else if (location.hash == '#product/13') {
            title.innerHTML = product[12].title;

            description.innerHTML = product[12].description;

            price.innerHTML = product[12].price;

            category.innerHTML = product[12].category; 
                
            let img_13 = document.createElement('img');
            img_13.setAttribute('src', '../images/hd.jpg');
            list_item.insertBefore(img_13, title);                           
        } else if (location.hash == '#product/14') {
            title.innerHTML = product[13].title;

            description.innerHTML = product[13].description;

            price.innerHTML = product[13].price;

            category.innerHTML = product[13].category; 
                
            let img_14 = document.createElement('img');
            img_14.setAttribute('src', '../images/monitor.jpg');
            list_item.insertBefore(img_14, title);                          
        } else if (location.hash == '#product/15') {
            title.innerHTML = product[14].title;

            description.innerHTML = product[14].description;

            price.innerHTML = product[14].price;

            category.innerHTML = product[14].category; 
                
            let img_15 = document.createElement('img');
            img_15.setAttribute('src', '../images/coat.jpg');
            list_item.insertBefore(img_15, title);                         
        } else if (location.hash == '#product/16') {
            title.innerHTML = product[15].title;

            description.innerHTML = product[15].description;

            price.innerHTML = product[15].price;

            category.innerHTML = product[15].category; 
                
            let img_16 = document.createElement('img');
            img_16.setAttribute('src', '../images/bicker.jpg');
            list_item.insertBefore(img_16, title);                         
        } else if (location.hash == '#product/17') {
            title.innerHTML = product[16].title;

            description.innerHTML = product[16].description;

            price.innerHTML = product[16].price;

            category.innerHTML = product[16].category; 
                
            let img_17 = document.createElement('img');
            img_17.setAttribute('src', '../images/raincoat.jpg');
            list_item.insertBefore(img_17, title);                          
        } else if (location.hash == '#product/18') {
            title.innerHTML = product[17].title;

            description.innerHTML = product[17].description;

            price.innerHTML = product[17].price;

            category.innerHTML = product[17].category; 
                
            let img_18 = document.createElement('img');
            img_18.setAttribute('src', '../images/sleeve.jpg');
            list_item.insertBefore(img_18, title);                           
        } else if (location.hash == '#product/19') {
            title.innerHTML = product[18].title;

            description.innerHTML = product[18].description;

            price.innerHTML = product[18].price;

            category.innerHTML = product[18].category; 
                
            let img_19 = document.createElement('img');
            img_19.setAttribute('src', '../images/tshirt.jpg');
            list_item.insertBefore(img_19, title);                              
        } else if (location.hash == '#product/20') {
            title.innerHTML = product[19].title;

            description.innerHTML = product[19].description;

            price.innerHTML = product[19].price;

            category.innerHTML = product[19].category; 
                
            let img_20 = document.createElement('img');
            img_20.setAttribute('src', '../images/women_t.jpg');
            list_item.insertBefore(img_20, title);                                 
        } else {
                return;
            }

        let data = localStorage.getItem('item_2');

        data = JSON.parse(data);

        if (!document.querySelector('.count')) {
            let  count =  document.createElement('h4');

            count.classList.add('count'); 
            
            count.innerHTML = data.length;

            document.querySelector('.wrapper_1').append(count);

        } else if (document.querySelector('.count')) {
            document.querySelector('.count').remove(); 
                
            let count = document.createElement('h4');

            count.classList.add('count'); 
            
            count.innerHTML = data.length;
            
            document.querySelector('.wrapper_1').append(count);
                
        } else return;

        let sum_1 = data.map(el => {
                return el.price;
        })

        if (!document.querySelector('.result')) {
                
            let result_elem = document.createElement('h4');

            result_elem.classList.add('result'); 

            let result = sum_1.reduce((sum, current) => sum + current, 0).toFixed(2);
            
            result_elem.innerHTML = result;
            
            document.querySelector('.wrapper_2').append(result_elem);
            
        } else if (document.querySelector('.result')) {
                
            document.querySelector('.result').remove(); 
                
            let result_elem = document.createElement('h4');

            result_elem.classList.add('result'); 

            let result = sum_1.reduce((sum, current) => sum + current, 0).toFixed(2);
            
            result_elem.innerHTML = result;
            
            document.querySelector('.wrapper_2').append(result_elem);
        } else return;  
    }

    render() {
        this.create()
    }
}

const product = new Product().render();

export default product;











