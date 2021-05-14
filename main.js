const boldBtn = document.querySelector("button.bold");
const italicBtn = document.querySelector("button.italic");
const listBtn = document.querySelector("button.list");
const textInput = document.querySelector("div.insert");
const saveBtn = document.querySelector("button.save");
const importBtn = document.querySelector("button.import");

function bold() {
    document.execCommand("bold");
}

function italic() {
    document.execCommand("italic")
}

function list() {
    document.execCommand("insertUnorderedList")
}

function saveFile() {
    let file = document.querySelector("div.insert").innerHTML;
    let fileJson = JSON.stringify(file);
    let blob = new Blob([fileJson], {
        type: "application/octet-stream"
    })

    url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "sample-save.json");

    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event)
}

function importFile() {
    fetch("sample-import.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector("div.insert").innerText = data.sentence
        })
}

boldBtn.addEventListener("click", bold);
italicBtn.addEventListener("click", italic);
listBtn.addEventListener("click", list);
saveBtn.addEventListener("click", saveFile);
importBtn.addEventListener("click", importFile)