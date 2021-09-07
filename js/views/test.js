class News {
    #parentElement = document.querySelector('.plan-box-1');
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        // this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin',markup);
        console.log(this.#parentElement);
    }

    #clear() {
        this.#parentElement = '';
    }

    #generateMarkup() {
        console.log(`${this.#data.image}`);
        return `
          <p>${this.#data.title}</p>
          <img src="${this.#data.image}" alt="Adobe Logo" class="plan-box__image">
        `
    }
}

export default new News();

