"use strict";
console.log("Connection is successful");

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings"]; // Add more categories as needed

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Hot Air Balloon Ride",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 365.00
    },
    // Add more activity details as needed
    // second
    {
        category: "Arts & Crafts",
        id: "A101",
        name: "So Good",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 3989.980
    },
    // third
    {
        category: "Museums",
        id: "A101",
        name: "Rich History",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 356.00
    },
    {
        category: "Wine Tastings",
        id: "A101",
        name: "Long lasting Tastes",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 4000.00
    },



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
        }
    }

}

window.onload = function () {
    getActivities()
    console.log("window Loaded successfuly")

    console.log("------------------------");
    console.log("Adding Event Lsitener to category")
    document.getElementById("category").addEventListener("change", display);
}
