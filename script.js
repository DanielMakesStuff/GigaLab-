// ==========================================
// 💰 SPEND THE BILLIONAIRE'S MONEY
// ==========================================

// Starting money
let money = 100000000000;

// Game stats
let totalSpent = 0;
let kindness = 0;
let happiness = 0;
let impact = 0;
let waste = 0;

// Purchased items
let owned = {};

// Game status
let gameFinished = false;
let choiceOpen = false;


// ==========================================
// 🛒 BUY ITEM
// ==========================================

function buyItem(price, name, id) {

    // Don't allow buying after checkout
    if (gameFinished) {
        return;
    }

    // Don't allow another purchase while making a choice
    if (choiceOpen) {
        return;
    }

    // Not enough money
    if (money < price) {

        alert("💀 You don't have enough money!");

        return;
    }

    // Take the money
    money -= price;

    // Add to total spent
    totalSpent += price;

    // Add ownership
    if (!owned[name]) {
        owned[name] = 0;
    }

    owned[name]++;

    // Update the screen
    updateScreen(id);

    // Show consequences
    showChoice(name);
}


// ==========================================
// 📊 UPDATE SCREEN
// ==========================================

function updateScreen(id) {

    document.getElementById("money").textContent =
        "$" + money.toLocaleString();

    document.getElementById("spent").textContent =
        "$" + totalSpent.toLocaleString();

    document.getElementById("remaining").textContent =
        "$" + money.toLocaleString();

    if (id && document.getElementById(id)) {

        document.getElementById(id).textContent =
            "Owned: " + owned[getNameFromId(id)];
    }

    updateStats();
}


// ==========================================
// 📊 UPDATE STATS
// ==========================================

function updateStats() {

    document.getElementById("kindness").textContent =
        kindness;

    document.getElementById("happiness").textContent =
        happiness;

    document.getElementById("impact").textContent =
        impact;

    document.getElementById("waste").textContent =
        waste;
}


// ==========================================
// 🔎 FIND ITEM NAME
// ==========================================

function getNameFromId(id) {

    const names = {

        pizza: "Pizza",
        phone: "Phone",
        gamingpc: "Gaming PC",
        supercar: "Supercar",
        mansion: "Mansion",
        jet: "Private Jet",
        rocket: "Rocket",
        hospital: "Hospital",
        yacht: "Yacht",
        island: "Private Island",
        skyscraper: "Skyscraper",
        school: "School",

        charity: "Charity",

        helicopter: "Helicopter",
        stadium: "Sports Stadium",
        studio: "Movie Studio",
        themepark: "Theme Park",
        hotel: "Luxury Hotel",
        satellite: "Satellite",
        forest: "Forest",
        animalrescue: "Animal Rescue Center",
        university: "University",
        water: "Clean Water Project",
        neighborhood: "Neighborhood",
        techcompany: "Tech Company",
        art: "Art Collection",
        concert: "Concert Festival",
        museum: "Museum"
    };

    return names[id];
}


// ==========================================
// 🎯 CONSEQUENCES
// ==========================================

function showChoice(name) {

    let title =
        document.getElementById("choiceTitle");

    let description =
        document.getElementById("choiceDescription");

    let choices =
        document.getElementById("choices");

    let box =
        document.getElementById("choiceBox");

    choices.innerHTML = "";

    choiceOpen = true;


    // ======================================
    // 🍕 PIZZA
    // ======================================

    if (name === "Pizza") {

        title.textContent =
            "🍕 What will you do with the pizza?";

        description.textContent =
            "Your $20 pizza is ready.";

        addChoice("😋 Eat it yourself", function() {

            happiness += 5;

        });

        addChoice("❤️ Give it to someone who needs a meal", function() {

            kindness += 10;
            impact += 5;

        });

        addChoice("🗑️ Throw it away", function() {

            waste += 5;

        });
    }


    // ======================================
    // 📱 PHONE
    // ======================================

    else if (name === "Phone") {

        title.textContent =
            "📱 What will you do with the phone?";

        description.textContent =
            "You just bought a brand-new phone.";

        addChoice("😎 Keep it", function() {

            happiness += 5;

        });

        addChoice("🎁 Give it to someone who needs one", function() {

            kindness += 10;
            impact += 8;

        });

        addChoice("♻️ Recycle your old phone", function() {

            impact += 5;
            waste -= 2;

        });
    }


    // ======================================
    // 🎮 GAMING PC
    // ======================================

    else if (name === "Gaming PC") {

        title.textContent =
            "🎮 What will you do with the Gaming PC?";

        description.textContent =
            "This thing is absolutely stacked.";

        addChoice("🎮 Game on it", function() {

            happiness += 10;

        });

        addChoice("🎓 Give it to a student", function() {

            kindness += 12;
            impact += 15;

        });

        addChoice("💻 Use it to learn coding", function() {

            happiness += 8;
            impact += 12;

        });
    }


    // ======================================
    // 🚗 SUPERCAR
    // ======================================

    else if (name === "Supercar") {

        title.textContent =
            "🚗 You bought a supercar!";

        description.textContent =
            "What happens next?";

        addChoice("🏎️ Drive it", function() {

            happiness += 15;

        });

        addChoice("🎁 Give it away", function() {

            kindness += 20;
            impact += 10;

        });

        addChoice("💨 Show everyone how rich you are", function() {

            happiness += 5;
            waste += 8;

        });
    }


    // ======================================
    // 🏠 MANSION
    // ======================================

    else if (name === "Mansion") {

        title.textContent =
            "🏠 You bought a MASSIVE mansion!";

        description.textContent =
            "What will you do with it?";

        addChoice("👑 Live like a king", function() {

            happiness += 25;

        });

        addChoice("❤️ Turn it into a shelter", function() {

            kindness += 30;
            impact += 30;

        });

        addChoice("🏫 Turn it into a community center", function() {

            kindness += 20;
            impact += 35;

        });
    }


    // ======================================
    // ✈️ PRIVATE JET
    // ======================================

    else if (name === "Private Jet") {

        title.textContent =
            "✈️ You bought a private jet!";

        description.textContent =
            "What's its purpose?";

        addChoice("🌎 Travel everywhere", function() {

            happiness += 20;
            waste += 5;

        });

        addChoice("🚑 Use it for humanitarian missions", function() {

            kindness += 25;
            impact += 30;

        });

        addChoice("🛫 Let scientists use it", function() {

            impact += 25;

        });
    }


    // ======================================
    // 🚀 ROCKET
    // ======================================

    else if (name === "Rocket") {

        title.textContent =
            "🚀 You own a ROCKET!";

        description.textContent =
            "What's your mission?";

        addChoice("🌙 Explore space", function() {

            happiness += 20;
            impact += 20;

        });

        addChoice("🔬 Fund scientific research", function() {

            impact += 45;
            kindness += 10;

        });

        addChoice("🚀 Build another rocket", function() {

            happiness += 10;
            waste += 10;

        });
    }


    // ======================================
    // 🏥 HOSPITAL
    // ======================================

    else if (name === "Hospital") {

        title.textContent =
            "🏥 Your hospital is ready!";

        description.textContent =
            "How will you run it?";

        addChoice("❤️ Free healthcare", function() {

            kindness += 35;
            impact += 45;

        });

        addChoice("💰 Premium healthcare", function() {

            happiness += 5;

        });

        addChoice("🔬 Make it a research hospital", function() {

            impact += 40;

        });
    }


    // ======================================
    // 🛥️ YACHT
    // ======================================

    else if (name === "Yacht") {

        title.textContent =
            "🛥️ You bought a yacht!";

        description.textContent =
            "What will you do with it?";

        addChoice("🌊 Enjoy the ocean", function() {

            happiness += 20;

        });

        addChoice("🔬 Turn it into a research ship", function() {

            impact += 35;
            kindness += 10;

        });

        addChoice("🌊 Use it for ocean cleanups", function() {

            impact += 40;
            kindness += 15;

        });
    }


    // ======================================
    // 🏝️ ISLAND
    // ======================================

    else if (name === "Private Island") {

        title.textContent =
            "🏝️ You own an entire island!";

        description.textContent =
            "What will you do with it?";

        addChoice("🏖️ Build your dream vacation home", function() {

            happiness += 30;

        });

        addChoice("🌳 Turn it into a nature reserve", function() {

            impact += 50;
            kindness += 25;

        });

        addChoice("🏘️ Build a community", function() {

            kindness += 30;
            impact += 35;

        });
    }


    // ======================================
    // 🏢 SKYSCRAPER
    // ======================================

    else if (name === "Skyscraper") {

        title.textContent =
            "🏢 Your skyscraper is complete!";

        description.textContent =
            "What will the building become?";

        addChoice("💼 Luxury offices", function() {

            happiness += 10;

        });

        addChoice("🏠 Affordable apartments", function() {

            kindness += 30;
            impact += 35;

        });

        addChoice("🏫 Free learning center", function() {

            kindness += 25;
            impact += 40;

        });
    }


    // ======================================
    // 🏫 SCHOOL
    // ======================================

    else if (name === "School") {

        title.textContent =
            "🏫 You built a school!";

        description.textContent =
            "How will you use it?";

        addChoice("📚 Make education free", function() {

            kindness += 25;
            impact += 45;

        });

        addChoice("💰 Make it expensive", function() {

            happiness += 5;

        });

        addChoice("💻 Give every student technology", function() {

            kindness += 20;
            impact += 40;

        });
    }


    // ======================================
    // ❤️ CHARITY
    // ======================================

    else if (name === "Charity") {

        title.textContent =
            "❤️ Where should your charity money go?";

        description.textContent =
            "Choose where your $10 million donation goes.";

        addChoice("🍎 Feed families", function() {

            kindness += 35;
            impact += 30;

        });

        addChoice("🏥 Help hospitals", function() {

            kindness += 30;
            impact += 40;

        });

        addChoice("🏫 Help schools", function() {

            kindness += 30;
            impact += 40;

        });

        addChoice("🌳 Protect nature", function() {

            kindness += 20;
            impact += 45;

        });
    }


    // ======================================
    // 🚁 HELICOPTER
    // ======================================

    else if (name === "Helicopter") {

        title.textContent =
            "🚁 You bought a helicopter!";

        description.textContent =
            "How will you use it?";

        addChoice("😎 Fly around", function() {

            happiness += 15;

        });

        addChoice("🚑 Emergency rescue missions", function() {

            kindness += 20;
            impact += 30;

        });

        addChoice("🌲 Search and rescue", function() {

            kindness += 15;
            impact += 35;

        });
    }


    // ======================================
    // 🏟️ STADIUM
    // ======================================

    else if (name === "Sports Stadium") {

        title.textContent =
            "🏟️ You built a stadium!";

        description.textContent =
            "What will you do with it?";

        addChoice("⚽ Free community events", function() {

            kindness += 25;
            happiness += 15;
            impact += 25;

        });

        addChoice("💰 Expensive tickets", function() {

            happiness += 5;

        });

        addChoice("🏫 Let schools use it", function() {

            kindness += 15;
            impact += 25;

        });
    }


    // ======================================
    // 🎬 MOVIE STUDIO
    // ======================================

    else if (name === "Movie Studio") {

        title.textContent =
            "🎬 You own a movie studio!";

        description.textContent =
            "What kind of movies will you make?";

        addChoice("🔬 Educational movies", function() {

            impact += 30;
            kindness += 15;

        });

        addChoice("🍿 Huge blockbusters", function() {

            happiness += 20;

        });

        addChoice("🌎 Movies about important issues", function() {

            impact += 25;
            kindness += 20;

        });
    }


    // ======================================
    // 🎢 THEME PARK
    // ======================================

    else if (name === "Theme Park") {

        title.textContent =
            "🎢 Your theme park is ready!";

        description.textContent =
            "Choose your park's future.";

        addChoice("🎟️ Free entry for kids", function() {

            kindness += 30;
            happiness += 20;
            impact += 20;

        });

        addChoice("💰 Make everything expensive", function() {

            happiness += 10;

        });

        addChoice("❤️ Donate profits to charity", function() {

            kindness += 30;
            impact += 30;

        });
    }


    // ======================================
    // 🏨 HOTEL
    // ======================================

    else if (name === "Luxury Hotel") {

        title.textContent =
            "🏨 You own a luxury hotel!";

        description.textContent =
            "How will you run it?";

        addChoice("👑 Ultra-luxury hotel", function() {

            happiness += 20;

        });

        addChoice("🏠 Temporary housing", function() {

            kindness += 30;
            impact += 35;

        });

        addChoice("🌱 Make it eco-friendly", function() {

            impact += 30;

        });
    }


    // ======================================
    // 🛰️ SATELLITE
    // ======================================

    else if (name === "Satellite") {

        title.textContent =
            "🛰️ Your satellite is ready!";

        description.textContent =
            "What's its mission?";

        addChoice("🔬 Scientific research", function() {

            impact += 40;

        });

        addChoice("🌦️ Track extreme weather", function() {

            kindness += 15;
            impact += 40;

        });

        addChoice("📡 Improve internet access", function() {

            kindness += 20;
            impact += 35;

        });
    }


    // ======================================
    // 🌳 FOREST
    // ======================================

    else if (name === "Forest") {

        title.textContent =
            "🌳 You planted a forest!";

        description.textContent =
            "What happens next?";

        addChoice("🌎 Protect it forever", function() {

            kindness += 20;
            impact += 50;

        });

        addChoice("🏕️ Make it a public park", function() {

            kindness += 25;
            impact += 40;

        });

        addChoice("🪓 Sell the land", function() {

            waste += 25;

        });
    }


    // ======================================
    // 🐶 ANIMAL RESCUE
    // ======================================

    else if (name === "Animal Rescue Center") {

        title.textContent =
            "🐶 Animal rescue center built!";

        description.textContent =
            "What will you do?";

        addChoice("❤️ Rescue animals", function() {

            kindness += 35;
            impact += 30;

        });

        addChoice("🏠 Find animals new homes", function() {

            kindness += 30;
            impact += 25;

        });

        addChoice("💎 Luxury pet resort", function() {

            happiness += 10;

        });
    }


    // ======================================
    // 🎓 UNIVERSITY
    // ======================================

    else if (name === "University") {

        title.textContent =
            "🎓 You built a university!";

        description.textContent =
            "Who gets to study there?";

        addChoice("📚 Free education", function() {

            kindness += 40;
            impact += 50;

        });

        addChoice("💰 Only wealthy students", function() {

            happiness += 5;

        });

        addChoice("💻 Free technology programs", function() {

            kindness += 25;
            impact += 45;

        });
    }


    // ======================================
    // 💧 CLEAN WATER
    // ======================================

    else if (name === "Clean Water Project") {

        title.textContent =
            "💧 Clean water project funded!";

        description.textContent =
            "Where should the money go?";

        addChoice("💧 Build wells", function() {

            kindness += 40;
            impact += 50;

        });

        addChoice("🏙️ Improve city water systems", function() {

            kindness += 25;
            impact += 40;

        });

        addChoice("🌍 Fund water research", function() {

            impact += 45;

        });
    }


    // ======================================
    // 🏡 NEIGHBORHOOD
    // ======================================

    else if (name === "Neighborhood") {

        title.textContent =
            "🏡 You built a neighborhood!";

        description.textContent =
            "What kind of neighborhood will it be?";

        addChoice("🏠 Affordable homes", function() {

            kindness += 35;
            impact += 40;

        });

        addChoice("💎 Luxury homes", function() {

            happiness += 20;

        });

        addChoice("🌳 Green community", function() {

            kindness += 20;
            impact += 35;

        });
    }


    // ======================================
    // 💻 TECH COMPANY
    // ======================================

    else if (name === "Tech Company") {

        title.textContent =
            "💻 You are now the CEO!";

        description.textContent =
            "What's your first decision?";

        addChoice("🚀 Build useful technology", function() {

            impact += 35;
            happiness += 10;

        });

        addChoice("💰 Focus only on profit", function() {

            happiness += 15;

            waste += 5;

        });

        addChoice("🎓 Give students free technology", function() {

            kindness += 25;
            impact += 35;

        });
    }


    // ======================================
    // 🖼️ ART
    // ======================================

    else if (name === "Art Collection") {

        title.textContent =
            "🖼️ You bought an incredible art collection!";

        description.textContent =
            "What will you do with it?";

        addChoice("🏛️ Put it in a free museum", function() {

            kindness += 20;
            impact += 25;

        });

        addChoice("🏠 Keep it in your mansion", function() {

            happiness += 20;

        });

        addChoice("🎓 Give it to schools", function() {

            kindness += 20;
            impact += 30;

        });
    }


    // ======================================
    // 🎤 CONCERT
    // ======================================

    else if (name === "Concert Festival") {

        title.textContent =
            "🎤 Your festival is ready!";

        description.textContent =
            "How will you run the event?";

        addChoice("🎟️ Free tickets", function() {

            happiness += 25;
            kindness += 15;

        });

        addChoice("💰 Expensive VIP tickets", function() {

            happiness += 15;

        });

        addChoice("❤️ Donate profits", function() {

            kindness += 25;
            impact += 30;

        });
    }


    // ======================================
    // 🏛️ MUSEUM
    // ======================================

    else if (name === "Museum") {

        title.textContent =
            "🏛️ Your museum is complete!";

        description.textContent =
            "Who gets to visit?";

        addChoice("🎟️ Free entry", function() {

            kindness += 25;
            impact += 30;

        });

        addChoice("💰 Huge entrance fees", function() {

            happiness += 5;
            waste += 5;

        });

        addChoice("🎓 Free school trips", function() {

            kindness += 20;
            impact += 35;

        });
    }


    // Show popup
    box.style.display = "flex";
}


// ==========================================
// 🔘 CREATE CHOICE BUTTON
// ==========================================

function addChoice(text, action) {

    let button =
        document.createElement("button");

    button.className =
        "choice-button";

    button.textContent =
        text;

    button.onclick = function() {

        action();

        updateStats();

        closeChoice();

    };

    document
        .getElementById("choices")
        .appendChild(button);
}


// ==========================================
// ❌ CLOSE CHOICE
// ==========================================

function closeChoice() {

    document.getElementById("choiceBox").style.display =
        "none";

    choiceOpen = false;

    updateStats();
}


// ==========================================
// 🧾 FINAL CHECK
// ==========================================

function finalCheck() {

    // Don't checkout while making a decision
    if (choiceOpen) {

        alert("⚠️ Make your choice first!");

        return;
    }

    if (gameFinished) {
        return;
    }

    gameFinished = true;


    // Disable shop buttons
    let buttons =
        document.querySelectorAll(".item button");


    buttons.forEach(function(button) {

        button.disabled = true;

        button.textContent =
            "🔒 CLOSED";

    });


    // Disable checkout
    document.getElementById("checkoutButton").disabled =
        true;


    // Work out ending
    let ending =
        getEnding();


    // List purchases
    let purchases = "";


    for (let item in owned) {

        purchases +=
            "<p>🛒 " +
            item +
            " × " +
            owned[item] +
            "</p>";
    }


    if (purchases === "") {

        purchases =
            "<p>😭 You bought absolutely nothing.</p>";
    }


    // Final result
    document.getElementById("result").innerHTML = `

        <div class="final-message">

            <h2>🏁 FINAL RESULTS</h2>

            <br>

            ${purchases}

            <hr>

            <br>

            <p>
                💸 <strong>Total Spent:</strong>
                $${totalSpent.toLocaleString()}
            </p>

            <p>
                💰 <strong>Money Left:</strong>
                $${money.toLocaleString()}
            </p>

            <br>

            <p>❤️ Kindness: ${kindness}</p>

            <p>😊 Happiness: ${happiness}</p>

            <p>🌎 Impact: ${impact}</p>

            <p>🗑️ Waste: ${waste}</p>

            <br>

            <h2>${ending}</h2>

            <br>

            <h3>🔒 SHOP CLOSED</h3>

            <p>
                Your choices have determined your legacy.
            </p>

        </div>

    `;
}


// ==========================================
// 🏆 ENDINGS
// ==========================================

function getEnding() {

    // Best possible ending
    if (
        kindness >= 100 &&
        impact >= 120 &&
        waste < 20
    ) {

        return "🌎 THE WORLD CHANGER";
    }


    // Very generous
    if (kindness >= 70) {

        return "❤️ THE GENEROUS BILLIONAIRE";
    }


    // Huge impact
    if (impact >= 100) {

        return "🚀 THE VISIONARY";
    }


    // Very happy
    if (happiness >= 80) {

        return "💎 THE LUXURY KING";
    }


    // Lots of waste
    if (waste >= 40) {

        return "🗑️ THE WASTEFUL BILLIONAIRE";
    }


    // Spent almost everything
    if (money <= 1000000000) {

        return "💀 THE BROKE LEGEND";
    }


    // Default
    return "😐 THE AVERAGE BILLIONAIRE";
}