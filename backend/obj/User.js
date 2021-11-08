class User{
    constructor(userName,password,name,lastName,phone,email,bornYear,gender){
        this.userName=userName;
        this.password=password;
        this.name=name;
        this.lastName=lastName;
        this.phone=phone;
        this.email=email;
        this.bornYear=bornYear;
        this.gender=gender;
    }
}
module.exports=User;