# CS 561 Lab 3: Branch `feature/index-integration`

## Branch Author
Akaash Bella (akaashbella)

## Summary of Work Done in this Branch
In this branch, I added CSS styling for the mode pages in style.css, including layout and formatting for key UI components. I also introduced a controlled change to the .mode-page selector to set up a merge conflict scenario. After merging updates from main, I encountered and resolved a merge conflict in styles/style.css by selecting the correct final value. The resolved changes were then committed and merged back into main.

## Commits

| Commit ID | Commit Message | # Lines Changed
| --------- | ----------- | ---------------
| 6200a19 | Add CSS classes for mode pages in style.css | 9
| 6564348 | Changed padding top value to 70 | 2
| 815f513 | Merge branch 'main' of https://github.com/cs561-sp-26/lab-3-group-6 into feature/css-mode-page | 14

### Total Commits Made in this Branch: 3

### Merge Conflict Description
In this branch, I encountered a merge conflict in styles/style.css while merging main into feature/css-mode-page. The conflict occurred in the .mode-page selector because my branch changed padding-top to 70px, while the main branch changed it to 60px. I resolved the conflict by keeping the correct final value of 70px, then staged the file, completed the merge, and later merged the resolved branch back into main.