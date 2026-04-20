# CS 561 Lab 3: Branch `feature/index-integration`

## Branch Author
Akaash Bella (akaashbella)

## Summary of Work Done in this Branch
In this branch, I implemented the core HTML structure for the SpeedScore application by updating index.html to integrate all major UI components and connect them with the application’s JavaScript modules. This included:

- Adding script tags to load all application scripts (main.js, sideMenu.js, modeTabs.js, etc.)
- Implementing the side menu structure with navigation options (Settings, About, Log Out)
- Adding the mode tab system for switching between app sections (Feed, Rounds, Courses, Buddies)

## Commits

| Commit ID | Commit Message | # Lines Changed
| --------- | ----------- | ---------------
| 341833b | Add external script files to index.html | 12
| 67f1f26 | Add side menu with settings, about, and log out options to index.html | 12
| 8a883e2 | Add mode tabs to index.html for improved navigation and user interaction | 147

### Total Commits Made in this Branch: 3

### Merge Conflict Description
(To be completed)

### Rebase Description
I rebased the feature/index-integration branch onto the latest main branch using git rebase main. This was done after updating main to include recent changes from other branches.

During the rebase, Git reported that one commit was skipped because it had already been applied to main through a previous cherry-pick. As a result, Git did not duplicate that change and only reapplied the remaining commits from my branch.

The rebase completed successfully, and my branch history was updated so that all remaining commits were placed on top of the latest version of main, resulting in a clean, linear commit history.

### Cherry Pick Description
In this branch, I cherry-picked commit 341833b from feature/index-integration into the main branch. This commit added a specific portion of the HTML structure (such as script integration or UI elements) independently, allowing that change to be applied without merging the entire branch.