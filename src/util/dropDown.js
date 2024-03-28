var dropDown = {
    showUserDropDown() {
        let userButton = document.getElementById("user");
        let dropDown = document.createElement("div");
        dropDown.setAttribute("class", "dropDown");
        dropDown.setAttribute("id", "dropdown");
        
        let accountButton = document.createElement("div");
        accountButton.setAttribute("class", "dropItem");
        accountButton.innerHTML = "User Profile";
    
        let logoutButton = document.createElement("div");
        logoutButton.setAttribute("class", "dropItem");
        logoutButton.innerHTML = "Log out";
    
        dropDown.appendChild(accountButton);
        dropDown.appendChild(logoutButton);
    
        userButton.appendChild(dropDown); 
    },

    showSettingDropDown() {
        let settingButton = document.getElementById("setting");
        let dropDown = '';
        settingButton.appendChild(dropDown); 
    }
}

export default dropDown;