function Payment() {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert ("you have now completed the order ")

    }
    return (     <div>
        <h1>Card Details</h1>
        <br />
        <form style={{fontSize:"15px"}} onSubmit={handleSubmit}>
          <label>
            Name
            <br/>
            <input type="text" />
          </label>
          <br />
          <label>
          Pan Number
            <br/>
            <input type="text" />
          </label>
          <br />
          <label>
            exp date
            <br/>
            <input type="text" />
          </label>
          <br/>
          <label>
            3 digits
            <br/>
            <input type="text" />
          </label>
          <br/>
          <label>
            postcode
            <br/>
            <input type="text" />
          </label>
          
          <div style={{marginTop: "20px"}}>
            <button className="btn btn-success btn-lg" type="submit">Submit</button>
          </div>
        </form>
      </div>);
}

export default Payment;