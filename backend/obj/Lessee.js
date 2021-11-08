const User =require('./User');
class Roomate extends User{
    constructor(userName,password,name,lastName,phone,email,bornYear,gender,idealRoomates){
        super(userName,password,name,lastName,phone,email,bornYear,gender);
        this.idealRoomates=idealRoomates;
    }
    returnIdealRoommates(){
        return this.idealRoomates;
    }
}
module.exports=Roomate;