/*************************************************************************
 * File: modeTabs.js
 * Desc: Contains the JavaScript functions to handle interactions 
 * with the mode tabs ("Feed", "Rounds", "Courses", "Buddies"). 
 * We use the w3.org "Example of Tabs with Manual Activiation" as a 
 * specification for implementing the accessible keyboard interface:
 * https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
*************************************************************************/

/*************************************************************************
 * @function switchMode 
 * @desc 
 * Switch from the current mode to a new mode. Unhighlight previous
 * mode tab button, highlight new mode tab button, hide previous mode
 * tab panel, show new mode tab panel, and update mode variables.
 * @param newMode, an integer index (into modeTabButtons and 
 *        modeTabPanels) corresponding to the new mode
 *************************************************************************/

console.log("SpeedScore app initialized: mode tabs ready");

function switchMode(newMode) {
    //Switch mode button
    GlobalModeTabButtons[GlobalCurrentMode.get()].classList.remove("modetab-selected");
    GlobalModeTabButtons[GlobalCurrentMode.get()].setAttribute("aria-selected",false);
    GlobalModeTabButtons[newMode].classList.add("modetab-selected");
    GlobalModeTabButtons[newMode].setAttribute("aria-selected",true);
    //Switch tab panel
    GlobalModeTabPanels[GlobalCurrentMode.get()].classList.add("hidden");
    GlobalModeTabPanels[newMode].classList.remove("hidden");
    GlobalCurrentMode.set(newMode);
    GlobalFocusedMode.set(newMode);
    if (GlobalHistoryLogging) {
        const historyObj = {
            page: GlobalModeNumbersToModes.get(newMode),
            mode: newMode,
            path: GlobalModeNumbersToRoutes.get(newMode)  
        };   
        history.pushState(historyObj, "", historyObj.path);
        console.log("Console: In switchMode; pushing state: ", 
            JSON.stringify(historyObj));
    }
}

/*************************************************************************  
 * Bind switchMode() to each tab button's click handler.
 *************************************************************************/
for (let i = 0; i < GlobalModeTabButtons.length; ++i) {
    GlobalModeTabButtons[i].addEventListener("click",() => switchMode(i));
}


/*************************************************************************
 * @function keyDownModeTabFocused 
 * @Desc 
 * Handles valid keydown events when a mode tab button has the focus.
 * Left/Right Arrow move focus; Home/End jump to first/last tab;
 * Enter/Space select the focused tab; Tab resets focus to current tab.
 * @param key: the string corresponding the key pressed
 *************************************************************************/
function keyDownModeTabFocused(key) {
    if (key == "Enter" || key == "Space") {
      switchMode(GlobalFocusedMode.get()); 
    } else if (key == "ArrowRight") {
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set((GlobalFocusedMode.get() + 1) % GlobalModeTabButtons.length); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus();  
    } else if (key == "ArrowLeft") {
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set((GlobalFocusedMode.get() - 1 + 
            GlobalModeTabButtons.length) % GlobalModeTabButtons.length); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus(); 
    } else if (key == "Home") {
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set(0); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus(); 
    } else if (key == "End") {
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set(GlobalModeTabButtons.length - 1);
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus();  
    } else if (key == "Tab") {
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set(GlobalCurrentMode.get()); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");  
    }  
}