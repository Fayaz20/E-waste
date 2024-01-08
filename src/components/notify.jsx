import './Notify.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Notify() {
    const [product, setProduct] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const userData = {
        "ewastes" : product,
        "address" :address,
        "phno" : phone,
        "location" :location
      }
      console.log(userData)
    try {
      await axios.post('http://localhost:3000/notify/ewaste', userData);
      alert('notified');
    } catch (err) {
      console.error(err);
    }
  };

    return (
        <>
            <div class="container" id="notify-section">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="banner">
                            <h1 style={{fontFamily:'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'}}>NOTIFY US TO PICKUP YOUR E-WASTE</h1>
                            <form class="form" onSubmit={onSubmit}>
                                <div class="form-group">
                                    <label for="name" class="form-label">Product Name</label>
                                    <input type="text" id="name" class="form-input" placeholder='Eg : Mobile ' onChange={(event) => setProduct(event.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="address" class="form-label">Address</label>
                                    <textarea id="address" class="form-input" onChange={(event) => setaddress(event.target.value)}></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="form-label">Phone Number</label>
                                    <input type="tel" id="phone" class="form-input" onChange={(event) => setphone(event.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="location" class="form-label">Location</label>
                                    <input type="text" id="location" class="form-input" onChange={(event) => setlocation(event.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary" id="notify-btn">Notify</button>
                                </div>
                            </form>
                            {/* <button type="button" class="btn btn-primary">Notify</button>  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notify