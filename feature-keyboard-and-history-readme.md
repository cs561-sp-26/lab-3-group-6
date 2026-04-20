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
In this branch, I encountered a merge conflict when merging
`feature/keyboard-and-history` into `main`. The conflict occurred
in `scripts/main.js` on the file header comment. Main had the comment
"main branch version" while my branch had "Global variables and app
state". I resolved the conflict by accepting the incoming change from
my branch as it was more descriptive. The commit ID for this merge
resolution is `1f6731a`.

### Rebase Description
In this branch, I rebased `feature/keyboard-and-history` onto main
after Person 1 merged `feature/global-variables` into main. I ran
`git fetch origin` followed by `git rebase origin/main` which replayed
my local commits on top of the updated main branch, ensuring my keyboard
and history feature was built on top of the latest codebase. The HEAD
commit ID after the rebase was completed is `eaedf3b`.

### Cherry Pick Description
In this branch, I cherry-picked commit `edc6071` from Trisha's
`feature/mode-tabs` branch. That commit added an initialization
log to switchMode() which is useful for debugging the restoreState()
function in window.js since both deal with mode switching. I ran
`git cherry-pick edc6071` and resolved a modify/delete conflict by
accepting the modeTabs.js file into my branch using `git add scripts/modeTabs.js`.
The commit ID for this cherry pick is `edc6071`.

Kaveenaya: 
A commit was selectively integrated from the feature/side-menu branch to the main branch using the git cherry-pick command. Instead of merging the entire branch, only this specific commit was applied to ensure minimal and controlled changes to the main branch.
To reflect this integration, a console log statement was added within the switchMode() function in modeTabs.js. This log outputs the currently selected mode whenever a tab switch occurs, providing lightweight debugging support and demonstrating successful cherry-pick integration.
This approach ensures that only a targeted change is incorporated, maintaining the integrity of the main branch while still reusing relevant functionality from another branch without introducing unrelated code.
