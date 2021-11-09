import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const { initializeApp } = require("firebase/app");
const firebaseConfig = {

    apiKey: "AIzaSyB65FMzJj0a4pJ8JVC94IbVr5oGEXxlWXU",

    authDomain: "software-project-6c959.firebaseapp.com",

    projectId: "software-project-6c959",

    storageBucket: "software-project-6c959.appspot.com",

    messagingSenderId: "1004454684797",

    appId: "1:1004454684797:web:93156fdc687dc7c66b2914"

};
var AuthLogin = (function () {
    var instance;

    function createInstance() {
        const db = initializeApp(firebaseConfig);
        var object = getAuth(db)
        return object;
    }


    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
export default AuthLogin;

/*export default class auth {
        signUp=(email,password)=>{
            await createUserWithEmailAndPassword(auth,email,password);
        }
        signIn=(email,password)=>{
            await signInWithEmailAndPassword(auth,email,password);
        }

    }
*/
