class Main {
 
    create() {
        this.element = document.createElement('main');
        
        this.element.classList.add('main');

        let list = document.createElement('ul');
        list.classList.add('cart')
        this.element.append(list)
        
        if(!location.hash) {
            import('./home.js');
        } 

        window.addEventListener('hashchange', _ => {
            if(location.hash == '#cart') {
                import('./cart.js');
            } else {
                import('./product.js')
            }
        })  
    }

    init() {
        this.create();

        this.getData;
        
        return this.element;  
    }
}

const main = new Main().init();

export {main};