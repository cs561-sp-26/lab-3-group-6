# CS 561 Lab 3: Branch `feature/side-menu`

## Branch Author  
Kaveenaya Srinivasagam Omkumar

---

## Summary of Work Done in this Branch  
In this branch, I implemented the Side Menu functionality for the SpeedScore application. This includes handling user interactions with the menu button to open and close the side menu, updating the menu icon state, and managing accessibility attributes.

I also implemented click handlers for menu items so that the menu closes after a selection is made. In addition, I added full keyboard accessibility support, including navigation using arrow keys, Home/End keys, Enter/Space activation, Tab behavior, and Escape handling. The keyboard interaction logic is handled through the `keyDownMenuBtnFocused()` and `keyDownMenuItemFocused()` functions.

Finally, the file was refined to match the provided “after” repository exactly, including formatting, structure, and comments.

---

## Commits  

| Commit ID | Commit Message | # Lines Changed |
|----------|----------------|-----------------|
| 4cdead4 | Updated branch README with rebase discription | 4 |
| a844b66 | Add console log for side menu initialization | 2 |
| e0232a9 | Update README with correct number of commits made | 2 |
| 7121da7 | Update README with side menu contributions | 44 |
| f2d7484 | Refactor code for readbility and consistency | 119 |
| b9761f9 | Implement full keyboard navigation within side menu items | 35 |
| b45b8c0 | Implement keyboard navigation for menu button focus | 16 |
| 6d5674f | Add click handlers for menu items to close side menu | 8 |
| 0602399 | Implement menu button click handler to toggle side menu | 24 |
| bc4e428 | Add initial structure for side menu functionality | 2 |
| 82d5953 | Create scripts folder and sideMenu.js file | 0|

### Total Commits Made in this Branch: 11

---

## Merge Conflict Description  
A merge conflict was intentionally created between the main branch and the feature/side-menu branch by modifying the same line in index.html and adding the same file scripts/sideMenu.js in both branches.
When merging feature/side-menu into main, Git detected a content conflict in the HTML and an add/add conflict in the JavaScript file. The conflicts were resolved manually by editing the affected files to combine the changes and committing the resolution with commit ID 5b192d0.


---

## Rebase Description  
A rebase was performed on the feature/side-menu branch using the git rebase origin/main command to incorporate the latest updates from the main branch. This ensured that the branch was up to date with the most recent changes made by other team members before merging.
The rebase completed successfully without any merge conflicts, indicating that the changes in this branch were compatible with the current state of the main branch. The branch history was rewritten to maintain a clean and linear commit structure, avoiding unnecessary merge commits.
This process helped ensure a smoother integration into the main branch and demonstrated proper use of rebasing as part of collaborative version control practices.

---

## Cherry Pick Description  
Gagan performed a cherry pick from this branch.

I (Kaveenaya) performed a cherry pick from Roshan's branch.
