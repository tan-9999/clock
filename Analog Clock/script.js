const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

    //check if the mode is already set to "Dark Mode" in localStorage
    if(localStorage.getItem("mode") === "Dark Mode") {
        //add "dark" class to body and set modeSwitch text to "Light Mode"
        body.classList.add("dark");
        modeSwitch.textContent = "Light Mode";
    }

    // add a click event listener to modeSwitch
    modeSwitch.addEventListener("click", () => {
        //toggle the "dark" class on the body element
        body.classList.toggle("dark");
        //check if "dark" class is present on the body element
        const isDarkMode = body.classList.contains("dark");
        // set modeSwitch text based on "dark" class presence
        modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        //set localStroge "mode" item based on "dark" class presence
        localStorage.setItem("mode", isDarkMode ?"Dark Mode" : "Light Mode");
    })

    const updateTime = () =>{
        //Get current time and calculate deg for clock hands
        let date = new Date(),
            secToDeg = (date.getSeconds() / 60) * 360;
            minToDeg = (date.getMinutes() / 60) * 360;
            hrToDeg = (date.getHours() / 12) * 360;

        //Rotate the clock hand with respect to deg based on current time
        secondHand.style.transform = `rotate(${secToDeg}deg)`;
        minuteHand.style.transform = `rotate(${minToDeg}deg)`;
        hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    }

//call updateTime to set clock hands every sec
setInterval(updateTime, 1000);


//call updateTime function on page load
updateTime();