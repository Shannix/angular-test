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
  whoiam = " Jeune développeur full-stack issu d'une formation en Génie Informatique, je suis à la recherche d'opportunités professionnelles qui me permettraient de m'investir dans des projets innovants à caractère technologique et social. Je suis également passionné par le design graphique.";
  goal = "à voir ";
  experiences = ["Stage [CAPGEMINI] "];

  education: educationObject[] = [
    { id: 1, title: "Master 2 en Génie informatique", from: "2017", to: "2018", school: "Université Grenoble Alpes" },
    { id: 2, title: "Master 1 en informatique", from: "2016", to: "2017", school: "" },
    { id: 3, title: "Licence en informatique", from: "2013", to: "2016", school: "" },
    { id: 4, title: "baccalauréat S", from: "2012", to: "2013", school: "" }
  ];



  skills = ["Java JEE", "Symfony", "JS", "HTML", "CSS", "Bootstrap"];

  hobbies = ["Natation", "Photographie", "VTT", "Escalade"];


  languages: languageObject[] = [
    { id: 1, title: "Anglais", level: 80, read: true, write: true, speak: true },
    { id: 2, title: "Français", level: 100, read: true, write: true, speak: true },
  ];

  myLevel(x: languageObject): string {

    if (x.level == 100)
      return "[Langue maternelle]"

    let etat = "";
    let desc = "";
    let start = false;

    if (x.level < 40) etat = "Débutant";
    if (x.level < 60 && x.level > 40) etat = "Intermédiaire";
    if (x.level < 100 && x.level > 60) etat = "Avancé";


    if (x.read) if (start) desc += ", Lu"; else { desc += " [Lu"; start = true; }
    if (x.write) if (start) desc += ", Écrit"; else { desc += " [Écrit"; start = true; }
    if (x.speak) if (start) desc += ", Parlé"; else { desc += " [Parlé"; start = true; }
    desc += "]";

    if (x.read == false && x.write == false && x.speak == false) desc = "";

    return etat + desc;
  }


  //---------------------------SOCIAL-------------------------------------------------------------

  FB = "#";
  LINKDIN = "https://www.linkedin.com/in/amine-derradji-a4b8b7133/";
  INSTA = "#";
  GIT = "https:/github.com/Shannix";
  TWITTER = "#";
  GOOGLEPLUS = "#";

  //---------------------------FOOTER-------------------------------------------------------------
  year = (new Date()).getFullYear();
  version = "v0.3";
  owner = "Shannix";
  //----------------------------------------------------------------------------------------------



}



export interface educationObject {

  id: number;
  title: string;
  from: string;
  to: string;
  school: string;


}

export interface languageObject {

  id: number;
  title: string;
  level: number;
  read: boolean;
  write: boolean;
  speak: boolean;

}

export interface experienceObject {

  id: number;
  title: string;
  description: string;
  from: string;
  to: string;
  locality: string;
  technique: string;

}
