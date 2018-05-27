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
  birthdate = "29/03/1993";
  age: any = 25;
  phoneNumber = "07 69 17 11 50";
  email = "derradji2993@gmail.com";
  adresse = "28 Rue des rancy";
  completeAdresse = "69003, Lyon";
  permisB = true;
  citation = "...";
  picture = "profile.jpg";
  job = "Développeur full-stack";
  experiences = ["Stage [CAPGEMINI] "];
  education = ["MASTER 2 [ Génie informatique ] Université Grenoble Alpes"];
  skills = ["Java JEE", "Symfony", "JS", "HTML", "CSS", "Bootstrap"];
  hobbies = ["Natation", "Photographie", "VTT", "Escalade"];
  languages = ["Anglais [ Compétence professionnelle ]",
    "Français [ Bilingue ou langue natale ]"];


  //---------------------------SOCIAL-------------------------------------------------------------

  FB = "#";
  LINKDIN = "https://www.linkedin.com/in/amine-derradji-a4b8b7133/";
  INSTA = "#";
  GIT = "https:/github.com/Shannix";
  TWITTER = "#";
  GOOGLEPLUS = "#";

  //---------------------------FOOTER-------------------------------------------------------------
  year = (new Date()).getFullYear();
  version = "v0.2";
  owner = "Shannix";
  //----------------------------------------------------------------------------------------------



}
