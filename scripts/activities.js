"use strict";
console.log("Connection is successful");

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];
function getActivities() {
    let dropDownCategory = document.getElementById("category");

    for (let i = 0; i < categories.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = categories[i];
        option.value = categories[i];
        dropDownCategory.appendChild(option);

    }

}

function display() {
    let selectedCategory = document.getElementById("category").value
    let detailsSection = document.getElementById("detailsOfActivities");
    detailsSection.innerHTML = "";

    for (let i = 0; i < activities.length; i++) {
        if (activities[i].category === selectedCategory) {
            let activitiesDiv = document.createElement("div");
            let nameOfActivity = document.createElement("h3");
            nameOfActivity.innerHTML = activities[i].name;
            let paragraphDescription = document.createElement("p");
            paragraphDescription.innerHTML = "Description " + activities[i].description;
            let paragraphLocation = document.createElement("p");
            paragraphLocation.innerHTML = "Location " + activities[i].location;
            let paragraphForPrice = document.createElement("p");
            paragraphForPrice.innerHTML = "Price " + activities[i].price.toFixed(2);

            activitiesDiv.appendChild(nameOfActivity);
            activitiesDiv.appendChild(paragraphDescription);
            activitiesDiv.appendChild(paragraphLocation);
            activitiesDiv.appendChild(paragraphForPrice);

            detailsSection.appendChild(activitiesDiv);

            // checking the price
            if (activities[i].price > 0) {
                let displayForm = document.createElement("form");

                let labelOfTicket = document.createElement("label");
                labelOfTicket.innerHTML = "the number of tickets needed: ";
                let inputOfTicket = document.createElement("input");
                inputOfTicket.type = "number";
                inputOfTicket.min = 1;
                // inputOfTicket.max = 1;
                inputOfTicket.placeholder = "price";
                inputOfTicket.name = "tickets";
                displayForm.appendChild(labelOfTicket);
                displayForm.appendChild(inputOfTicket);


                // info

                let creditCardLabel = document.createElement("label");
                creditCardLabel.innerHTML = "Credit Card Number: ";
                let inputCard = document.createElement("input");
                inputCard.required = true;
                inputCard.type = "text";
                displayForm.appendChild(creditCardLabel);
                displayForm.appendChild(inputCard)

                // email

                let userEmailLabel = document.createElement("label");
                userEmailLabel.innerHTML = "Email address: ";
                let userEmailInput = document.createElement("input");
                userEmailInput.required = true;
                userEmailInput.type = "email";
                userEmailInput.name = "email";
                displayForm.appendChild(userEmailLabel);
                displayForm.appendChild(userEmailInput);

                let buttonForPurchase = document.createElement("button");
                buttonForPurchase.type = "button";
                buttonForPurchase.innerHTML = "Purchase";
                buttonForPurchase.onclick = function () {
                    // purchase
                    let numberOfTickets = inputOfTicket.value;
                    let totalPrice = activities[i].price * numberOfTickets;
                    let email = userEmailInput.value;
                    // test
                    // console.log(email)
                    console.log(totalPrice.toFixed(2));
                    console.log(numberOfTickets);
                    console.log(activities[i].name);
                    console.log(email);

                    let displayInfo = document.createElement("p");

                    displayInfo.innerHTML = ("Your credit card has been charged $" + totalPrice.toFixed(2) + " for " + numberOfTickets + " to " + activities[i].name + ". A confirmation email has been sent to " + email + ".");
                    detailsSection.appendChild(displayInfo)

                }
                displayForm.appendChild(buttonForPurchase);

                let reset = document.createElement("button");
                reset.type = "reset";
                reset.innerHTML = "Reset";
                displayForm.appendChild(reset);
                activitiesDiv.appendChild(displayForm)


            }
        }
    }

}

window.onload = function () {
    getActivities()
    console.log("window Loaded successfuly")

    console.log("------------------------");
    console.log("Adding Event Listener to category")
    document.getElementById("category").addEventListener("change", display);
}
