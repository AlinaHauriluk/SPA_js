class Nav {
    create() {
        this.element = document.createElement('nav');
        this.element.classList.add('nav');

        let list = document.createElement('ul');
        list.classList.add('list_nav');

        let list_item = document.createElement('li');
        list_item.classList.add('list_item');
        list_item.classList.add('note');

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.classList.add('wrapper_1');

        let number = document.createElement('h3');
        number.classList.add('title');
        number.innerHTML = 'Number';

        let wrapper_2 = document.createElement('div');
        wrapper_2.classList.add('wrapper');
        wrapper_2.classList.add('wrapper_2');

        let number_2 = document.createElement('h3');
        number_2.classList.add('title');
        number_2.innerHTML = 'Sum';

        let list_item_1 = document.createElement('li');
        list_item_1.classList.add('list_item');
        
        let link_1 = document.createElement('a');
        link_1.setAttribute('href', "http://127.0.0.1:5500/");
        link_1.innerHTML = 'Catalog';

        let list_item_2 = document.createElement('li');
        list_item_2.classList.add('list_item');

        let link_2 = document.createElement('a');
        link_2.setAttribute('href', "http://127.0.0.1:5500/#cart");
        link_2.innerHTML = 'Cart';

        wrapper.append(number);

        wrapper_2.append(number_2);

        list_item.append(wrapper, wrapper_2);

        list_item_1.append(link_1);

        list_item_2.append(link_2);

        this.element.append(list);
        list.append(list_item_1, list_item_2, list_item);
    }

    init() {
        this.create();

        return this.element;
    }
}

const nav = new Nav().init();

export {nav};