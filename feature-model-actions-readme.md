# CS 561 Lab 3: Branch `feature/model-actions`

## Branch Author
Gagan Kashyap Muralidhara

## Summary of Work Done in this Branch
In this branch, I worked on implementing the Mode Action Buttons and dialog functionality. This included handling user interactions with floating action buttons, showing the correct dialog box based on the selected mode, and updating the UI by hiding tab panels and disabling navigation elements when needed.

I also added support for dialog actions like OK and Cancel to make sure the UI returns to its normal state after interaction. In addition, I handled keyboard accessibility using the keyDownDialogFocused() function to manage focus within the dialog and support Escape key behavior.

## Commits

| Commit ID | Commit Message | # Lines Changed |
|----------|----------------|-----------------|
| 7401ace | Improve documentation for dialog keyboard handling | 6 |
| af7d61d | Improve documentation for floating action button behavior | 3 |
| ca384b7 | Implement dialog and mode action handlers | ~80 |
| 85e28e5 | Add branch README for mode actions feature | ~25 |
| 63a5ed7 | Add modeActions.js and link it to index.html | ~3 |

### Total Commits Made in this Branch: 5

### Merge Conflict Description
A merge conflict was intentionally created between the `main` branch and the `feature/mode-actions` branch by modifying the same line in `index.html` in both branches. After committing the change in the `main` branch, a different modification was made to the same line in the feature branch.

When merging `main` into `feature/mode-actions`, Git detected a conflict in `index.html` due to these conflicting changes. The conflict was resolved manually by editing the file, removing the conflict markers, and keeping the appropriate final version. The resolution was then staged and committed with commit ID: 3cfbea0.

### Rebase Description
Rebased `feature/mode-actions` onto `origin/main` to ensure the branch includes the latest updates from the main branch and maintains a linear commit history with a commit ID: `a214730`.

### Cherry Pick Description
A commit was selectively integrated from a teammate’s branch using the `git cherry-pick` command. The commit with ID `eb86ce5`, authored by Kaveenaya, was chosen because it relates to side menu interaction behavior. Instead of merging the entire branch, only this specific commit was applied to keep the `feature/mode-actions` branch focused.

To reflect this integration, a small console log reference to the side menu functionality was added in `modeActions.js`. This shows how functionality from another feature can be incorporated without bringing in unrelated changes.

This approach keeps the branch clean and aligned with its purpose while still reusing relevant work from teammates.
