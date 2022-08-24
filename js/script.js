//**Select Assigned Items & Build an Array */
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//***Add an Event Listener & Create an Element */
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  console.log(guest);
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

//**Clear the Input Box */
const clearInput = function () {
  //set the value of the guestInput variable to an empty string, You need to select its value property because it’s a text input field
  guestInput.value = "";
};

//**Refactor Code */
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//**Limit the Guest List */
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//******** Assign a Potluck Dish */
const assignItems = function () {
  const potluckItems = [
    "lasagna",
    "chocolate cake",
    "roasted potatoes",
    "mac n cheese",
    "cookies",
    "wine",
    "salad",
    "biscuits & gravy",
    "string beans",
    "cheese cake",
    "brussell sprouts",
    "fried chicken"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //In the value, add the item from the potluckItems array at the index position of randomPotluckIndex.
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    //Set the innerText of listItem to a string with the guest name and item the person is bringing
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
