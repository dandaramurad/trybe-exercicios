const createH1 = document.createElement("h1");
createH1.innerText = "TrybeTrip - Agência de Viagens";
document.body.appendChild(createH1);

const createMain = document.createElement("main");
createMain.className = "main-content";
document.body.appendChild(createMain);

const createTagSection = document.createElement("section");
createTagSection.className = "center-content";
createMain.appendChild(createTagSection);

const createTagP = document.createElement("p");
createTagP.innerText = "Venha viajar com a gente!";
createTagSection.appendChild(createTagP);