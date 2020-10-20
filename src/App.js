import React, {useState} from "react";
import Checkbox from './component/Checkbox';
import './App.css'

const companiesInputData = [
  { id: 'company1', name: "Stream Flare", isSelected: false},
  { id: 'company2', name: "Kloudbound", isSelected: false},
  { id: 'company3', name: "Soundpatrol", isSelected: false}
];

const rolesInputData = [
  { id: 'role1', name: "Data Science", isSelected: false},
  { id: 'role2', name: "Data Engineering", isSelected: false},
  { id: 'role3', name: "Developer", isSelected: false}
];

function App() {
  const [allCompaniesChecked, setAllCompaniesChecked] = useState(false);
  const [allRolesChecked, setAllRolesChecked] = useState(false);
  const [companies, setCompanies] = useState([...companiesInputData]); 
  const [roles, setRoles] = useState([...rolesInputData]);

// handles parent Company's select all checkbox
  const handleAllCompaniesCheck = (e) => {
    setAllCompaniesChecked(e.target.checked);
    for (let i = 0; i<companies.length; i++) {
      companies[i].isSelected = e.target.checked;
    }
    setCompanies([...companies]);
  };

  // handles child company's selecttion
  const handleCompanies = (checked, id) => {
    const index = companies.findIndex(element => element.id === id);
    companies[index].isSelected = checked;
    setCompanies([...companies]);
    if (!checked) {
      setAllCompaniesChecked(false);
    } else {
      let index = companies.findIndex(item => item.isSelected === false);
      if (index === -1) {
        setAllCompaniesChecked(true);
      } else {
        setAllCompaniesChecked(false);
      }
    }
  }

// handles parent roles select all checkbox
  const handleAllRolesCheck = (e) => {
    setAllRolesChecked(e.target.checked);
    for (let i = 0; i<roles.length; i++) {
      roles[i].isSelected = e.target.checked;
    }
    setRoles([...roles]);
  };  

  // handles child role's selection 
  const handleRoles = (checked, id) => {
    const index = roles.findIndex(element => element.id === id);
    roles[index].isSelected = checked;
    setRoles([...roles]);    
    if (!checked) {
      setAllRolesChecked(false);
    } else {
      let index = roles.findIndex(item => item.isSelected === false);
      if (index === -1) {
        setAllRolesChecked(true);
      } else {
        setAllRolesChecked(false);
      }
    }
  }

  // accepts child element's id and status
  const handleSingleClick = (checked, id) => {
    if (id.includes('company')) {
      handleCompanies(checked, id)
    } else {
      handleRoles(checked, id);
    }
  }

  // Cancel button resets values to unchecked
  const handleCancel = () => {
    setAllCompaniesChecked(false);
    for (let i = 0; i<companies.length; i++) {
      companies[i].isSelected = false;
    }
    setCompanies([...companies]);
    setAllRolesChecked(false);
    for (let i = 0; i<roles.length; i++) {
      roles[i].isSelected = false;
    }
    setRoles([...roles]);
  }

//Apply button shows selected values in alert 
  const handleApply = () => {
    let selectedCompanies = companies.filter(company => company.isSelected);
    alert('Selected companies: ' + selectedCompanies.map(function(element) {
      return element.name;
    }).join(','));
    let selectedRoles = roles.filter(role => role.isSelected);
    alert('Selected roles: ' + selectedRoles.map(function(element) {
      return element.name;
    }).join(','));
  }

  return (
    <div className="pos">
      <div className="align">
        <div className="innerContainer">
          <div className="companiesContainer">
            <input type="checkbox" onChange={handleAllCompaniesCheck} checked={allCompaniesChecked}/><b> Companies</b>
          </div>
          <div className="items">
              {companies.map((company ,i) => (
              <Checkbox
                key={'c'+i}
                id={company.id}
                firstName={company.name}
                isChecked={company.isSelected}
                handleSingleClick={handleSingleClick}
                parentCheck={allCompaniesChecked}
              />
               ))}
          </div>
        </div>
        <div className="innerContainer">
          <div  className="companiesContainer">
            <input type="checkbox" onChange={handleAllRolesCheck} checked={allRolesChecked}/> <b>Roles</b>
          </div>
          <div className="items">
            {roles.map((role ,i) => (
            <Checkbox
              key={'r'+i}
              id={role.id}
              firstName={role.name}
              isChecked={role.isSelected}
              handleSingleClick={handleSingleClick}
              parentCheck={allRolesChecked}
            />
              ))}
          </div>
        </div>
      </div>
      <div className="btn">
        <button type="button" className="cancel" onClick={handleCancel}> Cancel</button>
        <button type="button" className="applyFilter" onClick={handleApply}> Apply filter</button>
      </div>
    </div>
  );
}

export default App;
