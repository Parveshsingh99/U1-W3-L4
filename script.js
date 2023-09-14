const table = []

const cells = function () {
    for (i = 0; i <= 76; i++) {
        table.push(i)

    }
}
cells()
console.log(tabel)

const cellNumber = function (i) {
    const tabPosition = document.getElementById("container")
    for (let i = 1; i < table.length; i++) {
        const createDivTable = document.createElement("div")
        createDivTable.classList.add("cell")
        createDivTable.innerText = 1
        tabPosition.appendChild(createDivTable)
    }
    
}