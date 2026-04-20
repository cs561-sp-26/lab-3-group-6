# CS 561 Lab 3: Branch `feature/mode-actions`

## Branch Author
Gagan Kashyap Muralidhara

## Summary of Work Done in this Branch
In this branch, I worked on implementing the Mode Action Buttons and dialog functionality. This included handling user interactions with floating action buttons, showing the correct dialog box based on the selected mode, and updating the UI by hiding tab panels and disabling navigation elements when needed.

I also added support for dialog actions like OK and Cancel to make sure the UI returns to its normal state after interaction. In addition, I handled keyboard accessibility using the keyDownDialogFocused() function to manage focus within the dialog and support Escape key behavior.

## Commits

| Commit ID | Commit Message | # Lines Changed |
|-----------|----------------|-----------------|
| 6069228 | Document final merge of feature/mode-actions into main | ~4 |
| a52a812 | Add merge conflict description to branch README | ~4 |
| 3cfbea0 | Resolve merge conflict in index.html | ~2 |
| 561abcc | Update title in feature branch to create conflict | ~2 |
| 0317e6e | Update title in main to create conflict | ~2 |
| c64680a | Update branch README with final cherry-pick and rebase details | ~2 |
| a214730 | Update branch README with final cherry-pick and rebase details | ~2 |
| c3a9f3d | Cherry-pick: reference from sideMenu.js (console log added) | ~1 |
| 4806cde | Adding SideMenu | ~100+ |
| 965b041 | Implementing modeActions.js script into scripts folder | ~160 |
| b6edb7d | Implement mode action buttons and dialog behavior | ~80 |

### Total Commits Made in this Branch: 11

### Merge Conflict Description
A merge conflict was intentionally created between the `main` branch and the `feature/mode-actions` branch by modifying the same line in `index.html` in both branches.

When merging `main` into `feature/mode-actions`, Git detected a conflict. The conflict was resolved manually by editing the file and committing the resolution with commit ID `3cfbea0`.

### Rebase Description
Rebased `feature/mode-actions` onto `origin/main` to ensure the branch includes the latest updates from the main branch and maintains a linear commit history with a commit ID: `a214730`.

### Cherry Pick Description
A commit was selectively integrated using `git cherry-pick`. The commit with ID `eb86ce5`, authored by Kaveenaya, was applied from the side menu implementation. Only this specific commit was included to reuse relevant functionality without merging the entire branch.

### Final Merge to Main

The `feature/mode-actions` branch was merged into the `main` branch using Git. This integration includes all implemented functionality such as mode action handlers, dialog behavior, cherry-pick integration, rebase updates, and resolved merge conflicts.
