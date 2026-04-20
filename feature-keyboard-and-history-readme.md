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
To be completed after cherry pick is performed.