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

    let fontColorBtn = document.querySelectorAll("#font-color>button");
    for (index = 0; index < fontColorBtn.length; index += 1) {
        fontColorBtn[index].addEventListener("click", (event) => {
            colorFont(event.target.innerHTML);
        });
    }

    let fontSizeBtn = document.querySelectorAll("#font-size>button");
    for (index = 0; index < fontSizeBtn.length; index += 1) {
        fontSizeBtn[index].addEventListener("click", (event) => {
            fontSize(event.target.innerHTML);
        });
    }

    let lineHeightBtn = document.querySelectorAll("#line-height>button");
    for (index = 0; index < lineHeightBtn.length; index += 1) {
        lineHeightBtn[index].addEventListener("click", (event) => {
            spacing(event.target.innerHTML);
        });
    }

    let fontFamilyBtn = document.querySelectorAll("#font-family>button");
    for (index = 0; index < fontFamilyBtn.length; index += 1) {
        fontFamilyBtn[index].addEventListener("click", (event) => {
            fontFamily(event.target.innerHTML);
        });
    }

    const refresh = () => {
        let background = localStorage.getItem("backgroundColor");
        if (background) {
            colorBackground(background);
        }

        let font = localStorage.getItem("fontColor");
        if (font) {
            colorFont(font);
        }

        let sizeFont = localStorage.getItem("fontSize");
        if (sizeFont) {
            fontSize(sizeFont);
        }

        let lineSpacing = localStorage.getItem("lineHeight");
        if (lineSpacing) {
            spacing(lineSpacing);
        }

        let familyFont = localStorage.getItem("fontFamily");
        if (familyFont) {
            fontFamily(familyFont);
        }
    }

    refresh();


}
