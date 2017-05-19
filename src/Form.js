/**
 * Created by Manuel on 15.05.2017.
 */
import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {grillname: ''};
        this.state = {grilldescription:''};
        this.state = {grilllat: ''};
        this.state = {grilllong: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
    }
    handleChange(event){
        this.setState({grillname: event.target.grillname});
        this.setState({grilldescription: event.target.grilldescription});
        this.setState({grilllat: event.target.grilllat});
        this.setState({grilllong: event.target.grilllong});
    }
    handleSumit(event){
        alert(this.state.gillname +' angelegt!')
    }
    render(){
        <form class="from-group" onSubmit={this.handleSumit}>
            <label>
                Grill:
                <input class="form-control" type="text" name="grillname" onChange={this.handleChange}/>
            </label>
            <label>Beschreibung:
                <input class="form-control" type="textarea" name="grilldescription" onChange={this.handleChange}/>
            </label>
            <label>
                Position:
                <input class="form-control" type="text" name"grilllat" value="lat" onChange={this.handleChange} />
                <input type="text" name"grilllong" value="long" onChange={this.handleChange}/>
            </label>

            <input type="submit" value="Anlegen" class="btn btn-success" />
        </form>
    }
}
