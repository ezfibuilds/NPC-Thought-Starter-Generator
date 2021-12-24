document.getElementById("close-text-export").addEventListener("click", () => {closeModal("text-export-lightbox")});
//document.getElementById("export-text").addEventListener("click", exportText());

function closeModal(lightbox) {
    document.getElementById(lightbox).style.display = "none";
    document.getElementById("lightbox-screen").style.display = "none";
}

function openModal(lightbox) {
    document.getElementById(lightbox).style.display = "block";
    document.getElementById("lightbox-screen").style.display = "block";
}

function closeLightboxes() {
    let lightboxes = document.getElementsByClassName("lightbox");
    for (let i = 0; i < lightboxes.length; i++) {
        closeModal(lightboxes[i].id);
    }
}


function exportText() {
    // Gather generated content
    let toGen = {};
    generators.forEach(e => {
        if (checkToGenerate(e["prefix"])) {
            // sort into categories 
            let pre = e["prefix"];
            let name = e["name"];
            let category = e["category"];
            let toAdd = [name,document.getElementById(pre).innerHTML]
            if (!toGen.hasOwnProperty(category)) {
                toGen[category] = [];
            }
            if (pre == "element") {
                toAdd[1] += " " + document.getElementById("element-description").innerHTML;
            }
            toGen[category].push(toAdd);
            if (e["child-generators"] !== undefined) {
                e["child-generators"].forEach(c => {
                    let childpre = c["prefix"];
                    let childname = c["name"];
                    toAdd = [childname,document.getElementById(childpre).innerHTML]
                    toGen[category].push(toAdd);
                });
            }
        }
    });
    console.log(toGen);

    // Format into a text box
    let rtf = "";
    let prompt = document.getElementById("prompt").value;
    if (prompt != "") {
        rtf += `<div><h4>PROMPT</h4><div>${prompt}</div></div><br>`
    }
    for (const [key, value] of Object.entries(toGen)) {
        rtf += `<div><h4>${key.replace(/-/g," ").toUpperCase()}</h4>`
        value.forEach(e => {
            rtf += `<div><strong>${titleCase(e[0])}</strong>: ${e[1]}</div>`;
        });
        rtf += `</div><br>`
    }


    // Format plain text
    let plain = "";
    if (prompt != "") {
        plain += `PROMPT\n${prompt}\n\n`
    }
    for (const [key, value] of Object.entries(toGen)) {
        plain += `${key.replace(/-/g," ").toUpperCase()} \n`
        value.forEach(e => {
            let plainValue = e[1].replaceAll('<ul>','').replaceAll('</ul>','').replaceAll("<li>","\n- ").replaceAll("</li>","");
            plain += `${titleCase(e[0])}: ${plainValue}\n`;
        });
        plain += `\n`
    }

    // Post to div
    document.getElementById("rtf").innerHTML = rtf;
    document.getElementById("plaintext").textContent = plain.trim();
    openModal("text-export-lightbox");
    // Show lightbox
}


/// COPY AND PASTE

document.getElementById("copy-rtf").addEventListener('click', () => {autoCopy("rtf")});
document.getElementById("copy-plaintext").addEventListener('click', () => {autoCopy("plaintext")});

function autoCopy(divId) {
    let textToCopy = document.getElementById(divId);
    let alert = document.getElementById("alert-" + divId);
    window.getSelection().selectAllChildren(textToCopy);
    document.execCommand("copy");
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
    alert.classList.add("show");
    alert.classList.remove("hide");
    setTimeout(() => {
        alert.classList.add("hide");
        alert.classList.remove("show");
    },5000)
}