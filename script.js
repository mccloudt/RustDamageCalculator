import {items} from '/items.js';
let objectType = document.getElementById("objectType");
let select = document.getElementById('damageItem');
let itemType = document.getElementById("itemType");
objectType.addEventListener("change", () => {
    populateItems(objectType.value);
});
document.getElementById("damageItem").addEventListener("change", () => {
    getItem(document.getElementById("damageItem"));
});
itemType.addEventListener("change", () => {
    getItem(document.getElementById("damageItem"));
})
for(let[key, value] of Object.entries(items)){
    console.log(key, value.name);
    let option = document.createElement("option");
    option.text = value.name;
    option.value = key;
    objectType.add(option);
}
function populateItems(type){
    cleanUpDropdown();
    for(let [key, value] of Object.entries(items[type])){
        if(value !== undefined && key !== "name"){
            let option = document.createElement("option");
            option.text = value.name;
            option.value = key;
            select.add (option);
            getItem(document.getElementById("damageItem"));
        }

    }
}
function cleanUpDropdown(){
    let options = document.querySelectorAll('#damageItem option');
    options.forEach(o => o.remove());
}

function getItem(item, oType) {
    let new_tbody = document.createElement("tbody");
    new_tbody.id = "damageTable--rows";
    let old_tbody = document.getElementById("damageTable--rows");
    document.getElementById("damageTable").replaceChild(new_tbody, old_tbody);
    console.log(objectType.value);
    let theItem = items[objectType.value][item.value];
    document.getElementById('item-img').src = theItem.image;
    document.getElementById('item-title').innerHTML = theItem.name;
    document.getElementById('item-health').innerHTML = theItem.health;
    document.getElementById('item-stack').innerHTML = theItem.stackSize;
    document.getElementById('item-decay').innerHTML = theItem.decayTime;
    document.getElementById('item-despawn').innerHTML = theItem.despawnTime;
    document.getElementById('item-card').classList.remove("zero-opacity");
    console.log(itemType.value);
    if(theItem.durability !== undefined){
        for(let [keyI, valueI] of Object.entries(theItem.durability[itemType.value])){
            let table = document.getElementById("damageTable--rows");
            let tRow = table.insertRow(0);
            if(valueI["name"]){
                let tHeader = document.createElement("th");
                tHeader.scope = "row";
                tHeader.innerHTML = valueI.name;
                tRow.appendChild(tHeader);
            }
            if(valueI["hitsRequired"]){
                let td = document.createElement("td");
                td.innerHTML = valueI.hitsRequired;
                tRow.appendChild(td);
            }
            if(valueI["time"]){
                let td = document.createElement("td");
                td.innerHTML = valueI.time;
                tRow.appendChild(td);
            }
            if(valueI["toolsRequired"]){
                let td = document.createElement("td");
                td.innerHTML = valueI.toolsRequired;
                tRow.appendChild(td);
            }
        
        }
    }

    
}