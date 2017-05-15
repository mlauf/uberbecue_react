/**
 * Created by Manuel on 15.05.2017.
 */
import React, { Component } from 'react';

class Form extends Component{
    render(){
        <form>
            <label>
                Grill:
                <input type="text" name="grillname"/>
            </label>
            <label>
                Position:
                <input type="text" name"grilllat" value="lat"/><inputtype="text" name"grilllong" value="long"/>
            </label>

            <input type="submit" value="Anlegen" action="localhost:3000/api/grill"/>
        </form>
    }
}
