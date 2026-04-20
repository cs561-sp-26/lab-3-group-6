# CS 561 Lab 3: Branch `feature/keyboard-and-history`

## Branch Author
Roshan Aditya Murali (roshan-aditya-murali)

## Summary of Work Done in this Branch
This branch implements the global keyboard routing system and browser 
history management for the SpeedScore app. Two files were added:

- `document.js`: Sets up a global keydown event listener on the document
  that routes keyboard input to the correct handler based on which UI 
  element currently has focus (menu button, menu item, mode tab, or 
  action dialog).

- `window.js`: Implements browser history state management through a 
  restoreState() function that reconstructs the correct UI state when 
  the user navigates with the browser back/forward buttons. Also 
  initializes the app on page load by clicking the first mode tab.

## Commits

| Commit ID | Commit Message | # Lines Changed |
| --------- | -------------- | --------------- |
| f93f138 | File creation for the keyboard and history feature JavaScript files | 0 |
| 34e1fed | First commit | 0 |
| 4754d1d | Add document keydown event listener skeleton | 13 |
| 637aef7 | Route keydown events to menu button and menu item handlers | 8 |
| 15d6168 | Route keydown events to mode tab and dialog handlers | 8 |
| f62f27e | Add restoreState function and initialize app on window load | 44 |
| d97a0c6 | Add popstate listener to handle browser back/forward navigation | 13 |

### Total Commits Made in this Branch: 7

### Merge Conflict Description
To be completed after merge conflict is performed and resolved.

### Rebase Description
To be completed after rebase is performed.

### Cherry Pick Description
In this branch, I cherry-picked commit `edc6071` from Trisha's
`feature/mode-tabs` branch. That commit added an initialization
log to switchMode() which is useful for debugging the restoreState()
function in window.js since both deal with mode switching. I ran
`git cherry-pick edc6071` and resolved a modify/delete conflict by
accepting the modeTabs.js file into my branch using `git add scripts/modeTabs.js`.
The commit ID for this cherry pick is `edc6071`.