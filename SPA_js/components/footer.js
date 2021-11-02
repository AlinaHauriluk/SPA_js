class Footer {
    create() {
        this.element = document.createElement('footer');
        this.element.classList.add('footer');

        let div = document.createElement('div');
        div.classList.add('wrapper_title');

        let title = document.createElement('h3');
        title.classList.add('title');
        title.innerHTML = 'You can find us:';

        let link_1 = document.createElement('a');
        link_1.setAttribute('href', '#');
        
        let link_2 = document.createElement('a');
        link_2.setAttribute('href', '#');

        let link_3 = document.createElement('a');
        link_3.setAttribute('href', '#');

        let span_1 = document.createElement('span');

        let span_2 = document.createElement('span');

        let span_3 = document.createElement('span');

        let img_1 = document.createElement('img');
        img_1.setAttribute('src', '../images/fb-icon.png');

        let img_2 = document.createElement('img');
        img_2.setAttribute('src', '../images/vk-icon.png');

        let img_3 = document.createElement('img');
        img_3.setAttribute('src', '../images/insta-icon.png');

        this.element.append(title, div);

        span_1.append(img_1);

        span_2.append(img_2);

        span_3.append(img_3);

        link_1.append(span_1);

        link_2.append(span_2);

        link_3.append(span_3);

        div.append(link_1, link_2, link_3);
    }

    init() {
        this.create();

        return this.element;
    }
}

const footer = new Footer().init();

export {footer};