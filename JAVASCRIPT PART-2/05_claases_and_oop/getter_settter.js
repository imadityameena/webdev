class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
     this._email = value
    }
    get password(){
        return `${this._password}adiyta`;
    }

    set password(value){
        this._password = value;
    }


}

const huppyy = new User("huppy@gmail.com", "abc")
console.log(huppyy.email);
