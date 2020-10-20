This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## No additional library is used.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## About the project
  Checkbox component built using React functional component and hooks.
  The component has parent checkboxes for both `Companies` and `Roles`:
``•	Selecting a parent checkbox (eg. `Companies`) makes all children selected (eg. all company names)
``•	Deselecting a parent checkbox deselects all children
  
  (Work in progress feature)
  •	If some but not all children are selected, the parent checkbox displays a partial state (the “minus sign” icon in the image above).
  
  It accepts the following props:
•	`companies`. List of company names, eg. [‘Stream Flare’, ‘Kloudbound’, ‘Soundpatrol’]
•	`roles`. List of role names, eg. [‘Data Science’, Data Engineering’, ‘Developer’]
•	`handleApply`: A function that’s called when the “Apply filters” button is clicked; the function’s input arguments should be:
o	`selectedCompanies`. List of currently selected company names. Can be empty.
o	`selectedRoles`. List of currently selected role names. Can be empty.
