const User =require('./User');
class Roomate extends User{
    constructor(userName,password,name,lastName,phone,email,bornYear,gender,favorites,budget,comments){
        super(userName,password,name,lastName,phone,email,bornYear,gender);
        this.favorites=favorites;
        this.budget=budget;
        this.comments=comments;
    }
    returnFavorites(){
        return this.favorites;
    }
    returnComments(){
        return this.comments;
    }
}
module.exports=Roomate;