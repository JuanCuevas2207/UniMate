import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Residence from './Residence';
function App() {
  localStorage.setItem('id', 'jvh@prueba.com');
  const [val, setVal] = useState([])
  useEffect(() => {

    async function fetchData() {
      var d = await axios.get('http://localhost:4000/residence')
      d = d.data;
      d.forEach(r => {

        if (r[Object.getOwnPropertyNames(r)][0].email === localStorage.getItem('id')) {
          setVal(val => [...val, r[Object.getOwnPropertyNames(r)][0]])
        }

      });
    }
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    var { address, locality, roomsNumber, cost, furnished, mood } = e.target.elements;
    var availability = true;
    var availabilityDate = Date.now();
    var email = localStorage.getItem('id')
    var id = await axios.get('http://localhost:4000/residence');
    console.log(id.data.length)
    if (id.data.length > 0) {
      var values = [];
      var rating = 0;
      var comments = {}
      id.data.forEach(i => values.push(parseInt(Object.getOwnPropertyNames(i)[0])));
      id = Math.max(...values) + 1;
      id = id.toString()
    } else {
      id = "1";
    }
    console.log(id)

    address = address.value
    locality = locality.value
    roomsNumber = roomsNumber.value
    cost = cost.value
    furnished = furnished.value
    mood = mood.value
    var r = {
      id, email, address, locality, roomsNumber, cost, furnished, mood, availability, availabilityDate, rating, comments
    }
    await axios.post('http://localhost:4000/residence', r);
    window.alert('Residence created');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>
            Bienvenido lesee
          </h1>
          <h2>
            Crear nueva residencia
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" name="address" placeholder="Address" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="locality" placeholder="locality" />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" name="roomsNumber" placeholder="roomsNumber" />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" name="cost" placeholder="cost" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" name="furnished" className="form-check-input" value="false" />
              <label className="form-check-label" htmlFor="check">Furnished</label>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="mood" placeholder="mood" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col">
          {
            val.map(r => {
              return (<Residence key={r.id} {...r}/>)
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
