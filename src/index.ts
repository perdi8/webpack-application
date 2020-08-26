import logoImg from "./content/logo_1.png";

const averageScore: number = 90;
const messageToDisplay: string = `el average score es ${averageScore}`;

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

document.write(messageToDisplay);
