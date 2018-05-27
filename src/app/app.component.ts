import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //---------------------------MyCvInformations---------------------------------------------------

  name = "DERRADJI";
  firstName = "Amine";
  date_de_naissance = "29/03/1993";
  age = getAge(this.date_de_naissance);
  phoneNumber = "07 69 17 11 50";
  email = "derradji2993@gmail.com";
  adresse = "28 Rue des rancy";
  completeAdresse = "69003, Lyon";
  citation = "...";
  picture = "profile.jpg";
  job = "Développeur full-stack";
  languages = ["Anglais [ Compétence professionnelle ]",
    "Français [ Bilingue ou langue natale ]"];

  //---------------------------FOOTER-------------------------------------------------------------
  year = (new Date()).getFullYear();
  version = "v0.2";
  owner = "Shannix";
  //----------------------------------------------------------------------------------------------


  function getAge(date) {

  var tab = date.split("/");
  var dob = new Date(tab[2], tab[1] - 1, tab[0]);
  var today = new Date();
  var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

  return age;
}

}
