window.onload = () => {
    
    const colorBackground = (color) => {
        let content = document.querySelector(".content");
        content.style.backgroundColor = color;
        localStorage.setItem("backgroundColor", color);
    }

    const colorFont = (color) => {
        let paragraph = document.querySelectorAll(".paragraph");
        for (index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.color = color;
        }
        localStorage.setItem("fontColor", color);
    }

    const fontSize = (size) => {
        let paragraph = document.querySelectorAll(".paragraph");
        for (index = 0; index < paragraph.length; index += 1) {
        paragraph[index].style.fontSize = size;
        }
        localStorage.setItem("fontSize", size);
    }

    const spacing = (size) => {
        let paragraph = document.querySelectorAll(".paragraph");
        for (index = 0; index< paragraph.length; index += 1) {
            paragraph[index].style.lineHeight = size;
        }
        localStorage.setItem("lineHeight", size);
    }

    const fontFamily = (family) => {
        let paragraph = document.querySelectorAll(".paragraph");
        for (index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.fontFamily = family;
        }
        localStorage.setItem("fontFamily", family);
    }

    let backgroundColorBtn = document.querySelectorAll("#background-color>button");
    for (index = 0; index < backgroundColorBtn.length; index += 1) {
        backgroundColorBtn[index].addEventListener("click", (event) => {
            colorBackground(event.target.innerHTML);
        });
    }





}
