const express = require('express');
const app = express();
const cors = require('cors');
const Roomate = require('../obj/Roommate');
const { initializeApp } = require("firebase/app");
const { doc, setDoc, getFirestore, collection, getDocs, updateDoc, deleteDoc } = require("firebase/firestore");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const firebaseConfig = {

    apiKey: "AIzaSyB65FMzJj0a4pJ8JVC94IbVr5oGEXxlWXU",

    authDomain: "software-project-6c959.firebaseapp.com",

    projectId: "software-project-6c959",

    storageBucket: "software-project-6c959.appspot.com",

    messagingSenderId: "1004454684797",

    appId: "1:1004454684797:web:93156fdc687dc7c66b2914"

};
const db = initializeApp(firebaseConfig);
const fs = getFirestore(db);
const auth = getAuth(db);
app.listen('4000', () => {
    console.log('server on port 4000');
});
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to API');

});
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const r = await signInWithEmailAndPassword(auth, email, password).catch(
        res.json({ 'msg': 'error' })
    );
    res.json(r);
});
async function sendData(c, id, info) {
    await setDoc(doc(fs, c, id), info);
    return { "msg": "Uploaded succesfully" };
}
async function getData(c) {
    const cole = collection(fs, c);
    const values = await getDocs(cole);
    var r = [];
    values.forEach((doc) => {
        r.push({ [doc.id]: [doc.data()] })
    });
    return r;
}
async function getOne(c, id) {
    const cole = collection(fs, c);
    const values = await getDocs(cole);
    var r = [];
    values.forEach((doc) => {
        if (doc.id == id) {
            r.push({ [doc.id]: [doc.data()] })
        }

    });
    return r;
}
async function updateData(c, id, info) {
    await updateDoc(doc(fs, c, id), info);
    return { "msg": "Updated succesfully" };
}
async function deleteData(c, id) {
    await deleteDoc(doc(fs, c, id));
    return { "msg": "Deleted succesfully" };

}

//CRUD Roomate

app.get('/roommate', async (req, res) => {
    res.send(await getData('roommates'))
})
app.get('/roommate/:email', async (req, res) => {
    res.send(await getOne('roommates', req.params.email))
})
app.post('/roommate', async (req, res) => {

    const { userName, password, name, lastName, phone, email, bornYear, gender } = req.body;
    const a = await createUserWithEmailAndPassword(auth, email, password);
    const r = await sendData("roommates", email, req.body);
    res.json(a);
});
app.put('/roommate', async (req, res) => {
    const { userName, password, name, lastName, phone, email, bornYear, gender } = req.body;
    res.json(await updateData('roommates', email, req.body));

});
app.delete('/roommate', async (req, res) => {
    const { email } = req.body;
    res.json(await deleteData('roommates', email));
});

//CRUD Lessee

app.get('/lessee', async (req, res) => {
    res.send(await getData('lessees'))
})
app.get('/lessee/:email', async (req, res) => {
    res.send(await getOne('lessees', req.params.email))
})
app.post('/lessee', async (req, res) => {
    const { userName, password, name, lastName, phone, email, bornYear, gender } = req.body;
    res.json(await sendData("lessees", email, req.body));
});
app.put('/lessee', async (req, res) => {
    const { userName, password, name, lastName, phone, email, bornYear, gender } = req.body;
    res.json(await updateData('lessees', email, req.body));

});
app.delete('/lessee', async (req, res) => {
    const { email } = req.body;
    res.json(await deleteData('lessees', email));
});

//CRUD residence

app.get('/residence', async (req, res) => {
    res.send(await getData('residences'))
})
app.get('/residence/:id', async (req, res) => {
    res.send(await getOne('residences', req.params.id))
})
app.post('/residence', async (req, res) => {
    const { id } = req.body;
    res.json(await sendData("residences", id, req.body));
});
app.put('/residence', async (req, res) => {
    const { id, address, locality, roomNumber, cost, avb, avbDate, furnished, mood, rating, comments } = req.body;
    res.json(await updateData('residences', id, req.body));

});
app.delete('/residence', async (req, res) => {
    const { id } = req.body;
    res.json(await deleteData('residences', id));
});
