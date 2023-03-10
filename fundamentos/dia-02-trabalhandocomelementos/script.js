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

const createNewSection = document.createElement("section");
createNewSection.className = "left-content";
createMain.appendChild(createNewSection);

const createRightContent = document.createElement("section");
createRightContent.className = "right-content";
createMain.appendChild(createRightContent);

const createImg = document.createElement("img");
createImg.className = "small-image";
createImg.src = "https://picsum.photos/200";
createNewSection.appendChild(createImg);

const createList = document.createElement("ul");
const numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
for (const num in numbers) {
    const listItem = document.createElement("li");
    listItem.innerHTML = numbers[num];
    createList.appendChild(listItem);
}
createRightContent.appendChild(createList);

for (index = 1; index <= 3; index += 1) {
    const createNewH3 = document.createElement("h3");
    createNewH3.innerHTML = index;
    createMain.appendChild(createNewH3);
}

createH1.className = "title";