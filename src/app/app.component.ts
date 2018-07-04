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
  permisB = false;
  citation = "Il y a tellement de domaines qui m'inspire que j'ai envie de devenir un caméléon.";
  picture = "IMG_1840.JPG";
  job = "Développeur full-stack";
  whoiam = " Jeune développeur full-stack issu d'une formation en Génie Informatique, je suis à la recherche d'opportunités professionnelles qui me permettraient de m'investir dans des projets innovants à caractère technologique et social. Je suis également passionné par le design graphique.";
  goal = "M'investir dans des projets innovants à caractère technologique et social.";
  //experiences = ["Stage [CAPGEMINI] "];

  experiences: experienceObject[] = [
    { id: 1, title: "Stage à [CAPGEMINI]", desc: " Développeur full stack  - intervention sur Cegema-Swisslife et developpement du Responsive mobile/tablette sur SAP Hybris B2B - Spontis ", from: "04-2018", to: "09-2018", locality: "Région de Lyon", technique: "#Liferay #Jhipster #Spring #Java #JSTL #Bootstrap #Salesforce #SQL #JS #JQUERY #CSS #MAVEN #ANT #JIRA #Gitlab" },
    { id: 2, title: "DOCTORS YOU CAN SPEAK ENGLISH", desc: " Développeur full stack  -  Plateforme web spécialisé dans l’apprentissage de l’anglais médicale destiné aux médecins, dentistes, vétérinaires. ", from: "01-2017", to: "01-2018", locality: "", technique: "#Php Laravel #Angular #JS #Bootstrap #MySql" },
    { id: 3, title: "Projet E-commerce - déménagement entre particuliers ", desc: " Développeur full stack  -  Plateforme web pour la vente et l’échange entre particuliers lors d’un déménagement.  ", from: "10-2017", to: "01-2018", locality: "", technique: "#Angular #JEE #Ejb3 #Hibernate #MySql" }
    { id: 4, title: "Projet Jeu Colonne de trois  ", desc: " Conception & développement d’une IA capable de jouer une partie du jeu de colonne de trois et de gagner contre une autre IA. ", from: "05-2017", to: "02-2017", locality: "", technique: "#Prolog #Java #C" }




  ];


  id: number;
  title: string;
  description: string;
  from: string;
  to: string;
  locality: string;
  technique: string;


  education: educationObject[] = [
    { id: 1, title: "Master 2 en Génie informatique", from: "2017", to: "2018", school: "Université Grenoble Alpes" }

  ];



  skills = ["Java J2EE / JSTL", "Liferay", "EJB3", "C/C#/C++", "PHP Symfony", "PHP Laravel", "Ionic", "Angular", "JS", "CSS", "JQUERY," "Bootstrap", "Hibernate", "Mysql", "Firebase", "oracle", "JIRA", "github/lab",];


  hobbies = ["Natation", "Escalade", "Basket", "Photographie", "Littérature"];


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
  GIT = "https://github.com/Shannix";
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
