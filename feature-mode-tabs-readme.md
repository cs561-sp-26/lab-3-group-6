# CS 561 Lab 3: Branch `feature/mode-tabs`

## Branch Author
Trisha Gopinath

## Summary of Work Done in this Branch
In this branch, I worked on implementing the mode tab switching functionality for the SpeedScore app. This included creating the switchMode() function to handle switching between different mode tabs (Feed, Rounds, Courses, Buddies), binding click event listeners to all tab buttons, and implementing full keyboard navigation support through the keyDownModeTabFocused() function.

The keyboard navigation follows the ARIA tabs pattern, supporting Enter/Space to activate tabs, ArrowLeft/Right to move focus between tabs, Home/End to jump to first/last tab, and Tab key to reset focus. I also fixed a bug in the End key handler that was using .get() instead of .set().

## Commits

| Commit ID | Commit Message | # Lines Changed |
|-----------|----------------|-----------------|
| 6839d74 | Add modeTabs.js file with header comment | ~10 |
| 95ca140 | Add switchMode() to update active tab and push history state | ~25 |
| 0526f86 | Bind switchMode() to click events on all mode tab buttons | ~7 |
| 37583ad | Add keyDownModeTabFocused() for keyboard navigation of mode tabs | ~40 |
| 515119b | Fix End key handler in keyDownModeTabFocused() | ~1 |
| 1d505f0 | Adjust mode-page-content font size in style.css for conflict setup | ~5 |

### Total Commits Made in this Branch: 6

### Merge Conflict Description
A merge conflict was intentionally created between the `main` branch and the `feature/mode-tabs` branch by modifying the `.mode-page-content` font-size property in `styles/style.css` in both branches.

When merging `feature/mode-tabs` into `main`, Git detected a conflict. The conflict was resolved manually by editing the file to choose the appropriate font-size value and committing the resolution.

### Rebase Description
Rebased `feature/mode-tabs` onto `origin/main` to ensure the branch includes the latest updates from the main branch and maintains a linear commit history with commit ID `be9e2c7`.

### Cherry Pick Description
I cherry-picked commit `0526f86` ("Bind switchMode() to click events on all mode tab buttons") to the `main` branch before the full feature merge. This gave the team early access to the click handler functionality. The cherry-pick caused a conflict since `scripts/modeTabs.js` didn't exist in main yet, which I resolved by staging the file and continuing the cherry-pick.

### Final Merge to Main

The `feature/mode-tabs` branch was merged into the `main` branch using Git. This integration includes all implemented functionality such as mode tab switching, click handlers, keyboard navigation, cherry-pick integration, rebase updates, and resolved merge conflicts.