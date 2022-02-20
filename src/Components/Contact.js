import React, { Component } from 'react'
import ReactFormInputValidation from "react-form-input-validation";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        phone_number: "",
        message: "",
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        name: "required",
        email: "required|email",
        phone_number: "required|numeric|digits_between:10,12",
        message:"required",

    });
    this.form.onformsubmit = (fields) => {
      // Do you ajax calls here.
    }
  }
  render() {
    return (
      <div className='contact'>
        <h2 className='yello pt-3'>{this.props.compoName}</h2>
        <form onSubmit={this.form.handleSubmit}>
            <p>
              
              
                <input
                  type="text"
                  name="name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                  placeholder="Name"
                />
              
              <label className="error">
                {this.state.errors.name ? this.state.errors.name : ""}
              </label>
            </p>
 
            <p>
              
                
                <input
                  type="email"
                  name="email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                  placeholder="Email"
                />
     
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
            </p>
 
            <p>
              
                
                <input
                  type="tel"
                  name="phone_number"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                  placeholder="Mobile"
                />

              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
            </p>

          
            <p>
             

                    <textarea 
                    name="message" type="text"   rows="2" 
                    onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.message}
                      placeholder="Message"
                      />
              
                  <label className="error">
                    {this.state.errors.message ? this.state.errors.message : ""}
                  </label>
            </p>
            
           
            <p>
              <button type="submit">Send</button>
            </p>


            <p>

            <hr className="Hrule"></hr>

                    <div className="form-group">
                        <label >Address: #B-107,Sec. 26, Main Street, Noida,201301,UP<br></br>Contact: 7696313713</label> 
                      </div> 
            </p>
        </form>
      </div>
    )
  }
}

Contact.defaultProps={
  compoName:"Send Us A Message"
}

export default Contact
