class Header {
    create() {
        this.element = document.createElement('header');
        this.element.classList.add('header');

        let logo = document.createElement('span');
        logo.classList.add('logo');
        logo.innerHTML = 'popular goods';

        this.element.append(logo);
    }

    init() {
        this.create();
        
        return this.element;
    }
}

const header = new Header().init();

export {header};