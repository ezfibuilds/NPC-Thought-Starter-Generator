


// Current Name variable, used for name suffixes
let currentName = "";


//
//  PAGE CONSTRUCTION
//

let optionsList = [];
    let weightSettings = {}

    document.addEventListener("DOMContentLoaded", function(){
        writeCheckboxes();
        writeSettingsSelectMenus();
        optionsList = createOptionsList();
        optionsList.forEach(function(e) {
            optionEventListener(e);
        });
        writeResultsTemplate();
        writeRerollEventListeners()
    });

    function sortGeneratorsByCategory(g) {
        let sorted = {};
        g.forEach(function(e) {
            let category = e["category"];
            if (!sorted.hasOwnProperty(category)) {
                sorted[category] = [];
            }
            sorted[category].push(e);
        });
        return sorted;
    }

    function writeCheckboxes() {
        // Sort items by category
        let byCategory = sortGeneratorsByCategory(generators);

        //Create a checkbox for all items in each category
        let checkboxHTML = ""
        for (const [key, value] of Object.entries(byCategory)) {
            checkboxHTML += "<div class='check-category'>";
            checkboxHTML += "<h3>" + titleCase(key.replace(/-/g,' ')) + "</h3>";
            value.forEach(function(e) {
                let pre = e["prefix"];
                let label = e["name"];
                let checked = (e["default"] ? "checked" : "");
                checkboxHTML += `<div class="checkbutton">
                                <input type="checkbox" id="${pre}-check" value="${pre}" ${checked}>
                                <label for="${pre}-check">${label}</label>
                                </div>`
            })
            checkboxHTML += "</div>"
        }
        document.getElementById("checkbox-container").innerHTML = checkboxHTML;
    }

    function writeSettingsSelectMenus() {
        let selectHTML = "<h3>Additional Settings</h3>";
        generators.forEach(e => {
            if (e["includes-settings"]) {
                let pre = e["prefix"] + "-prob";
                let label = e["settings-label"];
                let visible = (e["default"]) ? "show" : "hide";
                selectHTML += `<div class='setting-container ${visible}' id='${pre}-container'>
                                <label for='${pre}'>${label}</label>
                                <select name='${pre}' id=${pre}>`;
                let selectedOption = e["settings-options"][0];
                e["settings-options"].forEach(o => {
                    selectHTML += `<option value='${o["code"]}'>${o["name"]}</option>`;
                    
                });
                selectHTML += `</select><div id="${pre}-caption">${selectedOption["description"]}</div></div>`;
            }
        });
        document.getElementById("weight-settings").innerHTML = selectHTML;
    }

    function writeResultsTemplate() {
        let inspoHTML = "";
        let specificsHTML = "";
        let byCategory = sortGeneratorsByCategory(generators);

        // Generate inspiration section
        byCategory["inspiration"].forEach(e => {
            let pre = e["prefix"];
            let name = e["name"];

            inspoHTML += `<div class="explain-item" id="${pre}-container">
                            <h4>${name} Inspiration</h4>
                            <h3 id="${pre}"></h3>`
            if (e["has-p"]) {
                inspoHTML += `<p id="${e["p-class"]}"></p>`
            }
            if (e["has-div"]) {
                inspoHTML += `<div id="${e["div-class"]}"></div>`
            }
            inspoHTML += `<p class='attribution' id='${pre}-attribution'></p>
                            <button class="small-reroll" id="${pre}-reroll"></button>
                            </div>` 
        });
        document.getElementById('inspiration').innerHTML = inspoHTML;

        for (const [key, value] of Object.entries(byCategory)) {
            if (key != "inspiration") {
                specificsHTML += '<div id="' + key + '">';
                specificsHTML += '<h3>' + titleCase(key.replace(/-/g,' ')) + '</h3>';
                value.forEach(e => {
                    let pre = e["prefix"];
                    let name = e["name"];
                    let children = e["child-generators"];

                    specificsHTML += `<div id="${pre}-container" class="result-container">
                                        <button id="${pre}-reroll" class="small-reroll"></button>
                                        <div class="result-text">${titleCase(name)}: <span id="${pre}"></span>
                                        </div>
                                        </div>`
                    if (typeof children !== 'undefined') {
                        children.forEach(c => {
                            let childpre = c["prefix"];
                            let childname = c["name"];
                            specificsHTML += `<div id="${childpre}-container" class="result-container">
                                        <button id="${childpre}-reroll" class="small-reroll"></button>
                                        <div class="result-text">${titleCase(childname)}: <span id="${childpre}"></span>
                                        </div>
                                        </div>`
                        });
                    }
                });
                specificsHTML += '</div>';
            }
        }
        document.getElementById('specifics').innerHTML = specificsHTML;

    }


    function createOptionsList() {
        let list = [];
        generators.forEach(e => {
            if (e["includes-settings"]) {
                list.push(e["prefix"]);
            }
        })
        return list;
    }

function writeRerollEventListeners() {
    generators.forEach(e => {
        document.getElementById(e["prefix"] + "-reroll").addEventListener("click", e["function"]);
        let children = e["child-generators"];
        if (typeof children !== 'undefined') {
            children.forEach(c => {
                document.getElementById(c["prefix"] + "-reroll").addEventListener("click", c["function"]);
            });
        }
    });
}

function optionEventListener(keyword) {
    weightSettings[keyword] = document.getElementById(keyword + "-prob").value;
    
    document.getElementById(keyword + "-prob").addEventListener("change", () => {
        weightSettings[keyword] = document.getElementById(keyword + "-prob").value;
        let genInfo = generators.find(element => element["prefix"] == keyword)
        let selectedOption = genInfo["settings-options"].find(element => element["code"] == document.getElementById(keyword + "-prob").value);
        document.getElementById(keyword + "-prob-caption").innerHTML = selectedOption["description"];

    });
    
    document.getElementById(keyword + "-check").addEventListener("change", () => {
        showHideOptions(keyword);
    });
}

function generateCharNew() {
    let byCategory = sortGeneratorsByCategory(generators);

    //figure out which generators are checked
    let checkedOnly = {};
    for (const [key, value] of Object.entries(byCategory)) {
        checkedOnly[key] = value.filter((v, i, arr) => {
            let pre = v["prefix"];
            return document.getElementById(pre + "-check").checked;
        });

    }

    //figure out which generators are unchecked
    let unchecked = {};
    for (const [key, value] of Object.entries(byCategory)) {
        unchecked[key] = value.filter((v, i, arr) => {
            let pre = v["prefix"];
            return !document.getElementById(pre + "-check").checked;
        });
    }

    //generate the character
    document.getElementById("results").classList.add('show');
    for (const [key, value] of Object.entries(checkedOnly)) {
        value.forEach(e => {
            e["function"]();
        });
    }

    //hide result lines for unchecked generators
    for (const [key, value] of Object.entries(unchecked)) {
        value.forEach(e => {
            checkToGenerate(e["prefix"]);
        });
    }

    //hide categories with nothing
    for (const [key, value] of Object.entries(checkedOnly)) {
        if (value.length == 0) {
            document.getElementById(key).classList.add("hide");
            document.getElementById(key).classList.remove("show");
        } else {
            document.getElementById(key).classList.add("show");
            document.getElementById(key).classList.remove("hide");
        }
    }
}


function showHideOptions(keyword) {
    let checkbox = document.getElementById(keyword + "-check");
    let selectMenu = document.getElementById(keyword + "-prob-container");
    if (checkbox.checked) {
        selectMenu.classList.add("show");
        selectMenu.classList.remove("hide");
    } else {
        selectMenu.classList.add("hide");
        selectMenu.classList.remove("show");
    }
}


document.getElementById("generate").addEventListener("click", generateCharNew);






//
// RANDOMIZED SELECTION FUNCTIONS
//

// Selects a random item from an array and returns that item. 
const randomItem = list => {
    return list[Math.floor(Math.random() * list.length)];
}


// Selects a random item from an array of javascript objects, returning a name, description, image, and random variation. 
const randomItemWithDesc = list => {
    let item = randomItem(list);
    let name = item.name;
    let desc = item.description;
    let img = "";
    if (item.image) {
        img = item.image;
    }
    let variation = "";
    if (item.variations) {
        variation = randomItem(item.variations);
    }
    return [name, desc, variation, img];
}


// Selects a random item from an array of javascript objects, weighted based on a selected option from the settings (distribution).
const randomItemWeighted = (list, distribution, capitalize = true) => {
    let weightedList = [];
    for (item in list) {
        for (let i = 0; i < list[item].weight[distribution] * 10; i++) {
            let picked = list[item].name;
            if (capitalize == true) {
                picked = titleCase(picked)
            }
            let variations = list[item].variations;
            if (variations) {
                let variation = randomItem(variations);
                if (variation != "" && capitalize) { 
                    picked += " (" + titleCase(variation) + ")";
                } else if (variation != "") {
                    picked += " (" + variation + ")";
                }
            }
            weightedList.push(picked);
        }
    }
    let finalResult = randomItem(weightedList);
    return finalResult;
}

const randomItemWeightedSimple = (list, capitalize = true) => {
    let weightedList = [];
    list.forEach( item => {
        for (let i = 0; i < item[1]; i++) {
            let picked = item[0];
            if (capitalize == true) {
                picked = titleCase(picked)
            }
            weightedList.push(picked);
        }
    });
    let finalResult = randomItem(weightedList);
    return finalResult;
}


// Chooses a random item for a simple array, with or without title case.
function randomFromArray(list, titlecase = true) {
    if (!titlecase) {
        return list[Math.floor(Math.random() * list.length)];
    }
    return randomItem(list);
}

// Choose one of two items from an array, making sure they aren't the same item. Rewrite to work with any number of items. 
function chooseTwoFromArray(a) {
    item1 = randomFromArray(a);
    item2 = randomFromArray(a);
    if (item1 == item2) {
        return chooseTwoFromArray(a);
    } else {
        return [item1, item2];
    }
}


//
// MISCELLANEOUS FUNCTIONS
//


// Converts a string to title case.
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
}

// Shuffles the order of an array randomly. 
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Finds a specific string in an array and removes that item. 
function findAndRemove(array, term) {
    const index = array.indexOf(term);
    if (index > -1) {
        array.splice(index,1);
        return true;
    } else {
        return false
    }
}

// Check if a category is set to generate. Shows and hides HTML elements accordingly. 
function checkToGenerate(category) {
    let checkbox = document.getElementById(category + "-check");
    let container = document.getElementById(category + "-container");

    // Determine Child Generators
    let children = undefined;
    let generator = generators.find(element => element["prefix"] == category);
    if (generator.hasOwnProperty('child-generators')) {
        children = generator["child-generators"];
    }

    if (!checkbox.checked) {
        container.classList.add("hide");
        container.classList.remove("show");
        if (children !== undefined) {
            children.forEach(e => {
                let childpre = e["prefix"];
                let childcontainer = document.getElementById(childpre + "-container");
                childcontainer.classList.add("hide");
                childcontainer.classList.remove("show");
            });
        }
        return false;
    } else {
        container.classList.add("show");
        container.classList.remove("hide");
        if (children !== undefined) {
            children.forEach(e => {
                let childpre = e["prefix"];
                let childcontainer = document.getElementById(childpre + "-container");
                childcontainer.classList.add("show");
                childcontainer.classList.remove("hide");
            });
        }
        return true;
    }
}



//
// INSPIRATION GENERATORS
//

// Random animal. Generates with name and image. 
let randomAnimal = () => {
    if (!checkToGenerate("animal")) {
        return;
    }
    let ani = randomItemWithDesc(animals);
    document.getElementById("animal").textContent = ani[0]; //Name
    document.getElementById("animal-image").innerHTML = `<img alt='${ani[0]}' src='images/animals/${ani[3]}'>`;
}


// Random Archetype. Depricated until I get a better list of archetypes.
function randomArchetype() {
    if (!checkToGenerate("archetype")) {
        return;
    }
    let ani = randomItemWithDesc(archetypes);
    document.getElementById("archetype").textContent = ani[0]; //Name
    document.getElementById("archetype-description").textContent = ani[1]; //Description
}

// Random element. Generates an element and a sub-element variation.
function randomElement() {
    if (!checkToGenerate("element")) {
        return;
    }
    let elmt = randomItemWithDesc(elements);
    document.getElementById("element").textContent = titleCase(elmt[0]) //Name
    document.getElementById("element-description").textContent = "(" + titleCase(elmt[2]) + ")"; 
    //Variation
}

// Random color. Generates a hex code, displays it in text and swatch form. 
function randomColor() {
    if (!checkToGenerate("color")) {
        return;
    }
    let randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.getElementById("color-swatch").style.backgroundColor = "#" + randomColor;
    document.getElementById("color").textContent = "#" + randomColor;

}


function randomTarot() {
    if (!checkToGenerate("tarot")) {
        return;
    }
    let randomTarot = randomItem(tarotCards);
    let tarotname = randomTarot["name"];
    let tarotimg = randomTarot["img"];
    let tarotdesc = "";
    let tarotclass = "";
    let inverse = random_boolean = Math.random() < 0.5;
    if (inverse) {
        tarotdesc = randomTarot["meaning-inverted"];
        tarotclass = "inverted"
        tarotname += ", Inverted"
    } else {
        tarotdesc = randomTarot["meaning"];
    }
    document.getElementById("tarot-image").innerHTML = `<img src='images/tarot/${tarotimg}' alt='${tarotname}' class='${tarotclass}'>`
    document.getElementById("tarot").textContent = tarotname;
    document.getElementById("tarot-description").textContent = tarotdesc;
}



//
// NAME GENERATORS
//

// Generate a random name, with a masculinized and femininized version.
function randomName() {
    if (!checkToGenerate("nameroot")) {
        return;
    }
    let nameroot = randomFromArray(namerootsMine)
    currentName = nameroot;
    document.getElementById("nameroot").textContent = nameroot;
    document.getElementById("mascname").textContent = genderize(nameroot, mascSuffixesMine);
    document.getElementById("femname").textContent = genderize(nameroot, femSuffixesMine);
}

// Add a suffix to a name root to make it masculine or feminine. Removes a random number of letters from the end of the name root. 
function genderize(root, suffixesList) {
    let rootLength = root.length;
    let maxToRemove = Math.floor(Math.random() * 4);
    if (maxToRemove > rootLength - 3) { maxToRemove = rootLength - 3; }
    if (maxToRemove > 0) {
        root = root.substring(0, root.length - maxToRemove);
    }
    let suffix = randomFromArray(suffixesList).toLowerCase();
    if (root[root.length - 1] == suffix[0]) {
        root = root.substring(0, root.length - 1)
    }
    return root + suffix;
}

// Regenerate a masculine suffix for the current name root.
function reMasc() {
    newGenderSuffix("mascname", mascSuffixesMine);
}

// Regenerate a feminine suffix for the current name root.
function reFem() {
    newGenderSuffix("femname", femSuffixesMine);
}

// Regenerate a suffix for the current name root.
function newGenderSuffix(targetid, suffixesList) {
    let nameroot = currentName;
    document.getElementById(targetid).textContent = genderize(nameroot, suffixesList);
}



// Generates a random hometown by combining a prefix and suffix.

function randomHometown() {
    if (!checkToGenerate("hometown")) {
        return;
    }
    let prefix = randomFromArray(hometownPrefixes);
    let suffix = randomFromArray(hometownSuffixes);
    // Prevent triple letters
    if (prefix[prefix.length - 1] == suffix[0] && prefix[prefix.length - 1] == prefix[prefix.length - 2]) {
        suffix = suffix.substring(1);
    }
    document.getElementById("hometown").textContent = titleCase(prefix + suffix);
}




//
// DEMOGRAPHIC GENERATORS
//


// Random D&D Race with subrace variation, weighted. 
function randomRace() {
    if (!checkToGenerate("race")) {
        return;
    }
    let race = randomItemWeighted(races,weightSettings["race"]);
    document.getElementById("race").textContent = race //Name
}



// Random gender, weighted with variations.
function randomGender() {
    if (!checkToGenerate("gender")) {
        return;
    }
    document.getElementById("gender").textContent = randomItemWeighted(gender,weightSettings["gender"]);    
}


// Random sexual orientation, weighted with variations.
function randomOrientation() {
    if (!checkToGenerate("orientation")) {
        return;
    }
    document.getElementById("orientation").textContent = randomItemWeighted(orientations,weightSettings["orientation"]);
}


// Random disability. 10% chance of any character having one. 
function randomDisability() {
    if (!checkToGenerate("disability")) {
        return;
    }
    let disability;
    if (Math.random() < 0.9) {
        disability = ['None','',''];
    } else {
        disability = randomItemWithDesc(disabilities);
    }
    document.getElementById("disability").textContent = titleCase(disability[0]);
    if (disability[2] != "") {
        document.getElementById("disability").textContent += " (" + disability[2] + ")";
    }
}

// Random culture. Weighted with variations.
function randomCulture() {
    if (!checkToGenerate("culture")) {
        return;
    }
    let culture = randomItemWeighted(cultures,weightSettings["culture"],false);
    document.getElementById("culture").textContent = culture //Name
}

function randomReligion() {
    if (!checkToGenerate("religion")) {
        return;
    }
    let rtype = weightSettings["religion"];
    let result = "";
    if (rtype == "culture") {
        result = randomItemWeightedSimple(religionsByCulture, false);
    } else if (rtype == "structure") {
        result = randomItemWeightedSimple(religionsByStructure, false);

    } else if (rtype == "domain") {
        if (Math.random() < 0.05) {
            result = "Does not follow any god";
        } else {
            result = `${randomItem(worshipStyles)} a god of ${randomItem(religionsByDomain)}`
        }
    } else {
        religionsBySetting.forEach(e => {
            if (e["pre"] == rtype) {
                if (Math.random() < 0.05) {
                    result = "Does not follow any god";
                } else {
                    result = `${randomItem(worshipStyles)} ${randomItem(e["gods"])}`;
                }
            }
        });
    }
    document.getElementById("religion").textContent = result
}



//
// DESCRIPTION GENERATORS
//

// Random age. 60% chance of being an expected age, simple list for other options.
function randomAge() {
    if (!checkToGenerate("age")) {
        return;
    }
    if (Math.random() < 0.6) {
        document.getElementById("age").textContent = "The age you would expect for them";
    } else {
    document.getElementById("age").textContent = randomFromArray(age, false);
    }
}

// Random distinctive feature. Simple list. 
function randomAppearance() {
    if (!checkToGenerate("appearance")) {
        return;
    }
    document.getElementById("appearance").textContent = randomFromArray(appearance);
}

// Random height. 40% chance of being average height, simple list for other options. 
function randomHeight() {
    if (!checkToGenerate("height")) {
        return;
    }
    if (Math.random() < 0.4) {
        document.getElementById("height").textContent = "Average height";
    } else {
    document.getElementById("height").textContent = randomFromArray(height, false);
    }
}

// Random build. 40% chance of average, other options are in a weighted variation array. 
function randomBuild() {
    if (!checkToGenerate("build")) {
        return;
    }
    if (Math.random() < 0.4) {
        document.getElementById("build").textContent = "Average";
    } else {
        let build = randomItemWeighted(builds,weightSettings["build"],false);
        document.getElementById("build").textContent = build //Name
    }
}

// Random clothing style. Gives two adjectives.
function randomClothing() {
    if (!checkToGenerate("clothing")) {
        return;
    }
    let result = chooseTwoFromArray(clothing);
    document.getElementById("clothing").textContent = result[0] + ", " + result[1];
}

// Random clothing style. Gives two adjectives from categories to make sure they aren't contradictory.
function randomVoice() {
    if (!checkToGenerate("voice")) {
        return;
    }
    let cats = chooseTwoFromArray(voices);
    let adjs = randomItem(cats[0]) + ", " + randomItem(cats[1]);
    document.getElementById("voice").textContent = adjs;
}


//
// PSYCHOLOGY GENERATORS
//

// Random core value. Simple list. Integrate with goals?
function randomValue() {
    if (!checkToGenerate("value")) {
        return;
    }
    document.getElementById("value").textContent = randomFromArray(values);
}

// Random temptation. Simple list. Integrate with goals?
function randomTemptation() {
    if (!checkToGenerate("temptation")) {
        return;
    }
    document.getElementById("temptation").textContent = randomFromArray(temptations);
}

// Random goal. TODO: Either convert to simple list, or integrate with core value.
function randomGoal() {
    if (!checkToGenerate("goal")) {
        return;
    }
    let goal = randomItemWithDesc(goals);
    document.getElementById("goal").textContent = goal[0]; //Name
}

// Random secret. Concert to simple list.
function randomSecret() {
    if (!checkToGenerate("secret")) {
        return;
    }
    let secret = randomItemWithDesc(secrets);
    document.getElementById("secret").textContent = secret[0]; //Name
}

// Random current mood. Simple list.
function randomMood() {
    if (!checkToGenerate("mood")) {
        return;
    }
    document.getElementById("mood").textContent = randomFromArray(mood);
}


// Random mental condition. 10% chance of any character having one. 
function randomMentalCondition() {
    if (!checkToGenerate("mentalcondition")) {
        return;
    }
    let condition;
    if (Math.random() < 0.9) {
        condition = ['None','',''];
    } else {
        condition = randomItemWithDesc(mentalConditions);
    }
    document.getElementById("mentalcondition").textContent = condition[0];
    if (condition[2] != "") {
        document.getElementById("mentalcondition").textContent += " (" + condition[2] + ")";
    }
}



//
// PERSONALITY
//

function randomPersonality() {
    if (!checkToGenerate("personality")) {
        return;
    }
    let result = "";
    let personalitymode = weightSettings["personality"];
    if (personalitymode == "traitssimple") {
        result = `${randomItem(positivePersonality)} and ${randomItem(negativePersonality)}`
    } else if (personalitymode == "traitsexpanded") {
        result = `${randomItem(positivePersonality)}, ${randomItem(positivePersonality)} and ${randomItem(neutralPersonality)}, but ${randomItem(negativePersonality)} and ${randomItem(negativePersonality)}`
    } else if (personalitymode == "big5") {
        result = randomBigFive();
    } else if (personalitymode == "mbti") {
        result = randomMBTIReturned();
    } else if (personalitymode == "ennesimple") {
        result = randomEnneSimple();
    } else if (personalitymode == "ennetritype") {
        result = randomEnneTritype();
    } else if (personalitymode == "astrologysimple") {
        result = randomAstrologySimple();
    } else if (personalitymode == "astrologycomplex") {
        result = randomAstrologyComplex();
    }

    document.getElementById("personality").innerHTML = result;
}

// Random enneagram type. Combine into general personality generator. 
function randomEnneagram() {
    if (!checkToGenerate("enne")) {
        return;
    }
    let result = "";
    let ennemode = weightSettings["enne"];
    if (ennemode == "primary") {
        let enneTypes = shuffle([randomFromArray(enneBody,false),randomFromArray(enneHeart,false),randomFromArray(enneMind,false)]);
        result = enneTypes[0];
    } else if (ennemode == "primarywing") {
        let enneTypes = shuffle([randomFromArray(enneBodyComplex,false),randomFromArray(enneHeartComplex,false),randomFromArray(enneMindComplex,false)]);
        result = enneTypes[0];
    } else if (ennemode == "tritype") {
        let enneTypes = shuffle([randomFromArray(enneBody,false),randomFromArray(enneHeart,false),randomFromArray(enneMind,false)]);
        result = enneTypes[0] + " / " + enneTypes[1] + " / " + enneTypes[2];
    } else if (ennemode == "tritypewing") {
        let enneTypes = shuffle([randomFromArray(enneBodyComplex,false),randomFromArray(enneHeartComplex,false),randomFromArray(enneMindComplex,false)]);
        result = enneTypes[0] + " / " + enneTypes[1] + " / " + enneTypes[2];
    }
    
    document.getElementById("enne").textContent = result;
}

function randomEnneSimple() {
    let enneTypes = shuffle([randomFromArray(enneBodyComplex,false),randomFromArray(enneHeartComplex,false),randomFromArray(enneMindComplex,false)]);
    return enneTypes[0];
}

function randomEnneTritype() {
    let enneTypes = shuffle([randomFromArray(enneBody,false),randomFromArray(enneHeart,false),randomFromArray(enneMind,false)]);
    return enneTypes[0] + " / " + enneTypes[1] + " / " + enneTypes[2];
}

function randomAstrologySimple() {
    return randomItem(astrologySigns);
}

function randomAstrologyComplex() {
    return randomItem(astrologySigns) + " Sun, " + randomItem(astrologySigns) + " Moon, " + randomItem(astrologySigns) + " Rising";
}


// Random MBTI type. Combine into general personality generator.
function randomMBTI() {
    if (!checkToGenerate("mbti")) {
        return;
    }
    document.getElementById("mbti").textContent = chooseLetter("I","E") + chooseLetter("S","N") + chooseLetter("F","T") + chooseLetter("P","J");
}
function randomMBTIReturned() {
    return chooseLetter("I","E") + chooseLetter("S","N") + chooseLetter("F","T") + chooseLetter("P","J");
}

// Chooses one of two letters for an MBTI type.
function chooseLetter(a, b) {
    let letterArrays = [a,b];
    return letterArrays[Math.floor(Math.random() * 2)];
}

// Random Big 5 personality. 
function randomBigFive() {
    let intensities = ["Extremely low","Very low","Low","Low","Somewhat low","Somewhat low","Average","Average","Average","Somewhat high","Somewhat high","High","High","Very high","Extremely high"];
    let openness = "<li>" + randomFromArray(intensities) + " openness</li>";
    let conscientiousness = "<li>" + randomFromArray(intensities) + " conscientiousness</li>";
    let agreeableness = "<li>" + randomFromArray(intensities) + " agreeableness</li>";
    let extraversion = "<li>" + randomFromArray(intensities) + " extraversion</li>";
    let neuroticism = "<li>" + randomFromArray(intensities) + " neuroticism</li>";
    return "<ul>" + openness + conscientiousness + agreeableness + extraversion + neuroticism + "</ul>";
}




//
// GAME STATS GENERATORS
//

// Random background. Need to add variations. 
function randomBackground() {
    if (!checkToGenerate("background")) {
        return;
    }
    document.getElementById("background").textContent = randomFromArray(backgrounds);
}

// Random class and subclass. Weighted with variations.
function randomClass() {
    if (!checkToGenerate("charclass")) {
        return;
    }
    let charclass = randomItemWeighted(charclasses,weightSettings["charclass"]);
    document.getElementById("charclass").textContent = charclass //Name
}

// Random character level. Relative, 60% chance of being expected level. 
function randomLevel() {
    if (!checkToGenerate("level")) {
        return;
    }
    if (Math.random() < 0.6) {
        document.getElementById("level").textContent = "As powerful as you would expect them to be.";
    } else {
    document.getElementById("level").textContent = randomFromArray(level, false);
    }
}

// Random weapon. Integrated with class. TODO: Integrate with subclass.
function randomWeapon() {
    if (!checkToGenerate("weapon")) {
        return;
    }
    if (checkToGenerate("charclass")) {
        let currentClass = document.getElementById("charclass").innerText.split("(")[0].trim().toLowerCase(); 
        let classInfo = charclasses.filter(function(item) { return item.name === currentClass; });
        let classWeapons = parseWeaponList(classInfo[0]["weapons"]);
        document.getElementById("weapon").textContent = randomFromArray(classWeapons);
    } else {
        document.getElementById("weapon").textContent = randomFromArray(allWeapons);
    }
}

// Convert "simple weapons" and "martial weapons" in class weapon lists into the correct weapon names
function parseWeaponList(array) {
    weaponList = [...array];
    if (findAndRemove(weaponList, "simple")) {
        weaponList.push(...simpleWeapons);
    }
    if (findAndRemove(weaponList, "martial")) {
        weaponList.push(...martialWeapons);
    }
    return weaponList;
}


// Random tool proficiency.
function randomTool() {
    if (!checkToGenerate("tool")) {
        return;
    }
    let elmt = randomItemWithDesc(tools);
    document.getElementById("tool").textContent = titleCase(elmt[0]) + " (" + titleCase(elmt[2]) + ")" 
}


// Random ability scores. Simplify with other functions. 
function randomAbilityScores() {
    if (!checkToGenerate("ability")) {
        return;
    }
    let result = "";
    let abilitymode = weightSettings["ability"];
    if (abilitymode == "bestworst") {
        let scores = chooseTwoFromArray(abilityScores);
        result = "High " + scores[0] + ", Low " + scores[1];
    } else if (abilitymode == "ordered") {
        result += "<ul>";
        let scores = shuffle([...abilityScores]);
        let degrees = ['Very High','High','Average','Average','Low','Very Low'];
        for (let i = 0; i < scores.length; i++) {
            result += "<li>" + degrees[i] + " " +  scores[i] + "</li>";
        }
        result += "</ul>";
    } else if (abilitymode == "relative") {
        result += "Relative what's normal for their class/stat block: <ul>";
        for (let i = 0; i < abilityScores.length; i++) {
            if (Math.random() < 0.4) {
                result += `<li>${abilityScores[i]}: Average</li>`;
            } else {
                result += `<li>${abilityScores[i]}: ${randomItem(abilityScoresRelative)}</li>`;
            }
        }
        result += "</ul>"

    } else if (abilitymode == "commonerroll") {
        result += "<ul>"
        for (let i = 0; i < abilityScores.length; i++) {
            let d6 = Math.floor(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1)
            let score = d6 + 10;
            result += "<li>" + abilityScores[i] + ": " + score + "</li>";
        }
        result += "</ul>"
    } else if (abilitymode == "3d6") {
        result += "<ul>"
        for (let i = 0; i < abilityScores.length; i++) {
            let score = 0;
            for (let j = 0; j < 3; j++) {
                score = score + (Math.floor(Math.random()*6) + 1);
            }
            result += "<li>" + abilityScores[i] + ": " + score + "</li>";
        }
        result += "</ul>"
    } else if (abilitymode == "4d6") {
        result += "<ul>"
        for (let i = 0; i < abilityScores.length; i++) {
            let score = [];
            for (let j = 0; j < 4; j++) {
                score.push(Math.floor(Math.random()*6) + 1);
            }
            score.sort(function(a,b) {
                return a - b;
            })
            let lowest = score.shift();
            result += "<li>" + abilityScores[i] + ": " + score.reduce((partial_sum, a) => partial_sum + a, 0) + "</li>";
        }
        result += "</ul>"
    }
    document.getElementById("ability").innerHTML = result;

}


//
// BELONGINGS GENERATORS
//

// Random amount of wealth. 60% chance of expected wealth, simple list for other options. 
function randomWealth() {
    if (!checkToGenerate("wealth")) {
        return;
    }
    if (Math.random() < 0.6) {
        document.getElementById("wealth").textContent = "As wealthy as you would expect";
    } else {
    
    document.getElementById("wealth").textContent = randomFromArray(wealth, false);
    }
}


// Random pocket contents. Generates 1 to 3 items. 
function randomPocket() {
    if (!checkToGenerate("pocket")) {
        return;
    }
    let scoreNumber = Math.floor(Math.random() * 3);
    let result = ""
    for (let i = 0; i <= scoreNumber; i++) {
        result += "<li>" + randomItemWeighted(pocketContents,weightSettings["pocket"],false) + "</li>"
    }
    document.getElementById("pocket").innerHTML = "<ul>" + result + "</ul>";
}










function showHideOptions(keyword) {
    let checkbox = document.getElementById(keyword + "-check");
    let selectMenu = document.getElementById(keyword + "-prob-container");
    if (checkbox.checked) {
        selectMenu.classList.add("show");
        selectMenu.classList.remove("hide");
    } else {
        selectMenu.classList.add("hide");
        selectMenu.classList.remove("show");
    }
}


document.getElementById("generate").addEventListener("click", generateCharNew);