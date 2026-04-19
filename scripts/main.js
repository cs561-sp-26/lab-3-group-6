/*************************************************************************
 * File: main.js
 * Definitions of variables to maintain app state and provide
 * convenient access to frequently used DOM elements.
 *************************************************************************/
let GlobalHistoryLogging = true;
let GlobalDialogClose = null;

/************************************/
/* MENU VARIABLES                   */
/************************************/
const GlobalMenuBtn =  document.getElementById("menuBtn"); 
const GlobalMenuItems = document.querySelectorAll("li[role='menuitem']");

//Note: Per Josh Wulf's blog post, we implement all immutable global variables using
//immediately invoked function expressions
const GlobalFocusedMenuItem = (() => {
    let _focusedMenuItem = 0
    const Store = {
        get: () => _focusedMenuItem,
        set: val => (_focusedMenuItem = val)
    }
    return Object.freeze(Store)
})()

/************************************/
/* MODE TAB VARIABLES               */
/************************************/
//Array of mode names
const GlobalModeNumbersToModes = new Map([
    [0, "ACTIVITY_FEED"],
    [1, "ROUNDS"],
    [2, "COURSES"],
    [3, "BUDDIES"]
  ]);
  const GlobalModeNumbersToRoutes = new Map([
    [0, "/activityfeed"],
    [1, "/rounds"],
    [2, "/courses"],
    [3, "/buddies"]
  ]);
  const GlobalModeDialogNumbersToRoutes = new Map([
    [0, "/activityfeed/newpost"],
    [1, "/rounds/newround"],
    [2, "/courses/addcourse"],
    [3, "/buddies/findbuddy"]
  ]);

/*****************************************************/
/* FLOATING ACTION BUTTON AND MODAL DIALOG VARIABLES */
/*****************************************************/

/*****************************************************/
/* OTHER UI COMPONENT VARIABLES */
/*****************************************************/