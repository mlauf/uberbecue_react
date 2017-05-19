import React, { Component } from 'react';
import logo from './logo.svg';


class Create extends Component {
  render() {
    return (
      <div className="Create">
        <div className="Create-Header">
          
        <form id="form">
      <div class="input-group">
        <span class="input-group-addon"></span>
        <input id="user" type="text" class="form-control" name="benutzer" placeholder="Benutzername"></input>
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"></span>
        <input id="mail" type="text" class="form-control" name="mail" placeholder="E-Mail"></input>
      </div>
      <p></p>


      <div class="input-group">
        <span class="input-group-addon"></span>
        <input id="stadt" type="stadt" class="form-control" name="stadt" placeholder="Stadt"></input>
      </div>
      <p></p>


      <div class="input-group">
        <span class="input-group-addon"></span>
        <input id="plz" type="text" class="form-control" name="plz" placeholder="PLZ"></input>
      </div>
      <p></p>

      <div class="input-group">
    <span class="input-group-addon"></span>
          <select class="form-control" id="sel1">
              <option>Holzkohle Grill</option>
              <option>Gas Grill</option>
              <option>Elektro Grill</option>
              <option>Sonstiges</option>
            </select>
            </div>
    <p></p>

      <div class="input-group">
        <span class="input-group-addon"></span>
        <input id="password" type="text" class="form-control" name="beschreibung" placeholder="Kurzbeschreibung"></input>
      </div>
      <p></p>

    </form>

 <button type="submit" Bestätigen</button>
<p></p>
 <button type="button" Zurück zur Homepage</button>
        
        
        
       </div>
      </div>
    );
  }
}

export Create;
