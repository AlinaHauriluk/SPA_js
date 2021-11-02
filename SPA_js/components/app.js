import {header} from "./header.js";

import {nav} from "./nav.js";

import {main} from "./main.js";
    
import {footer} from "./footer.js";

class App {

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('app');
    }

    render() {
        this.element.append(header, main, footer);
        header.append(nav);

        document.body.append(this.element);
        document.head.append(this.meta, this.meta_media, this.title, this.link, this.media);
    }

    async get_fetch() {
        let url = 'https://fakestoreapi.com/products';

        return await fetch(url).then(response => {
            return response.json();
        }).then(data => {
            return data;
        })
    }

    set storage(data) {
        let storage = localStorage.setItem('item', JSON.stringify(data));
    }

    get storage() {
        let storage = localStorage.getItem('item');
        storage = JSON.parse(storage);
    }

    init() {
        this.meta = document.createElement('meta');
        this.meta.setAttribute('charset', 'utf-8');

        this.meta_media = document.createElement('meta');
        this.meta_media.setAttribute('name', 'viewport');
        this.meta_media.setAttribute('content', 'width=device-width, initial-scale=1.0');

        this.title = document.createElement('title');
        this.title.innerHTML = 'SPA';

        this.link = document.createElement('link');
        this.link.setAttribute('rel', 'stylesheet');
        this.link.setAttribute('href', './components/style.css');  

        this.media = document.createElement('link');
        this.media.setAttribute('rel', 'stylesheet');
        this.media.setAttribute('href', './components/media.css'); 

        this.get_fetch().then(data => {
            this.storage = data;  
        })

        this.create();
       
        this.render();
    } 
}

export default new App().init();






