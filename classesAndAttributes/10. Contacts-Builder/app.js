class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if (this.divTitle) {
            this.divTitle.className = this._online == true ? 'title online' : 'title';
        }
    }



    render(id) {
        const mainRef = document.getElementById(id);

        this.articleElement = document.createElement('article');

        this.divTitle = document.createElement('div');
        this.divTitle.textContent = `${this.firstName} ${this.lastName}`;
        this.divTitle.classList.add('title');

        if (this._online === true) {
            this.divTitle.classList.add('online');
        } else {
            this.divTitle.classList.remove('online');
        }

        this.buttonTitle = document.createElement('button');
        this.buttonTitle.innerHTML = '&#8505;';
        this.buttonTitle.addEventListener('click', revealInfo);
        this.divTitle.appendChild(this.buttonTitle);

        this.divInfo = document.createElement('div');
        this.divInfo.setAttribute('class', 'info');
        this.divInfo.style.display = 'none';
        this.spanPhone = document.createElement('span');
        this.spanPhone.innerHTML = `&phone; ${this.phone}`;
        this.spanEmail = document.createElement('span');
        this.spanEmail.innerHTML = `&#9993; ${this.email}`;
        this.divInfo.appendChild(this.spanPhone);
        this.divInfo.appendChild(this.spanEmail);

        this.articleElement.appendChild(this.divTitle);
        this.articleElement.appendChild(this.divInfo);

        mainRef.appendChild(this.articleElement);

        function revealInfo(ev) {
            if (ev.target.parentNode.nextElementSibling.style.display === 'none') {
                ev.target.parentNode.nextElementSibling.style.display = 'block';
            } else {
                ev.target.parentNode.nextElementSibling.style.display = 'none';
            }
        }
    }
}



let contact = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
contact.render('main');
contact.online = true;

