import React from 'react';

class AddContact extends React.Component{

    state ={
        id: 0,
        name : "",
        email : "",
    };




    add = (e) => {
        e.preventDefault();  //prevents page refresh on submission
        if(this.state.name === "" || this.state.email === "")
        {
            alert("all field are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({id: this.state.id + 1, name:"", email:""});
    }



    render(){
        return(
            <div className='ui main'>
                <h2> Add Conatact </h2>
                <form className="ui form" onSubmit={this.add}>  
                    <div className="field">
                        <label> Name </label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="enter name" 
                        value={this.state.name}
                        onChange={ (e)=> this.setState({name: e.target.value}) }></input>
                    </div>
                    <div className="field">
                        <label> Email </label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="enter email" 
                        value={this.state.email}
                        onChange={ (e)=> this.setState({email: e.target.value}) }></input>
                    </div>
                    <button className='ui button blue'>Mark Present</button>
                </form>
            </div>
        )
    }
}

export default AddContact;