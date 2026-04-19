const GlobalMenuBtn = document.getElementById("menuBtn");
const GlobalMenuItems = document.querySelectorAll("#sideMenu li");

document.getElementById("menuBtn")
  .addEventListener("click", function () {
    const sideMenu = document.getElementById("sideMenu");
    const sideMenuIcon = document.getElementById("menuBtnIcon");
    const sideMenuBtn = document.getElementById("menuBtn");

    if (sideMenuIcon.classList.contains("fa-bars")) {
        sideMenuIcon.classList.remove("fa-bars");
        sideMenuIcon.classList.add("fa-times");

        sideMenuBtn.setAttribute("aria-expanded","true"); 
        sideMenu.classList.add("sidemenu-open");

    } else {
        sideMenuIcon.classList.remove("fa-times");
        sideMenuIcon.classList.add("fa-bars");

        sideMenuBtn.setAttribute("aria-expanded","false");
        sideMenu.classList.remove("sidemenu-open");
    }
});

for (let i = 0; i < GlobalMenuItems.length; ++i) {
    GlobalMenuItems[i].addEventListener("click", function() {
        GlobalMenuBtn.click();
    });
}

function keyDownMenuBtnFocused(key) {
    if (key === "ArrowDown" || key === "ArrowUp" ||
        key === "Space" || key === "Enter") {

        GlobalMenuBtn.click();

        if (key === "ArrowUp") {
            GlobalFocusedMenuItem.set(GlobalMenuItems.length - 1);
        } else {
            GlobalFocusedMenuItem.set(0);
        }

        GlobalMenuItems[GlobalFocusedMenuItem.get()].focus();
    }
}

function keyDownMenuItemFocused(key) {
    if (key == "Enter") {
        document.activeElement.click();

    } else if (key === "Tab") {
        GlobalMenuBtn.click();

    } else if (key == "Escape") {
        GlobalMenuBtn.click();
        GlobalMenuBtn.focus();

    } else if (key === "ArrowUp") {
        GlobalFocusedMenuItem.set(
            (GlobalFocusedMenuItem.get() - 1 + GlobalMenuItems.length) 
            % GlobalMenuItems.length
        );
        GlobalMenuItems[GlobalFocusedMenuItem.get()].focus();

    } else if (key === "ArrowDown") {
        GlobalFocusedMenuItem.set(
            (GlobalFocusedMenuItem.get() + 1) 
            % GlobalMenuItems.length
        );
        GlobalMenuItems[GlobalFocusedMenuItem.get()].focus();

    } else if (key === "Home") {
        GlobalFocusedMenuItem.set(0);
        GlobalMenuItems[GlobalFocusedMenuItem.get()].focus();

    } else if (key === "End") {
        GlobalFocusedMenuItem.set(GlobalMenuItems.length - 1);
        GlobalMenuItems[GlobalFocusedMenuItem.get()].focus();
    }
}