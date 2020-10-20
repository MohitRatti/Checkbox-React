import React from "react";

  function Checkbox(props) {

    const { parentCheck, isChecked } = props; 

    // Sends "id" and "checked" to Parent
    const handler =(event) => { 
      const checked = event.target.checked;        
      props.handleSingleClick(checked, props.id);
    };

    return (
      <table>
          <tbody>
              <tr>
                  <td>
                      <input
                        type="checkbox" value={isChecked} checked={ parentCheck || isChecked }
                        onChange={handler}>
                      </input>
                      {props.firstName}
                  </td>
              </tr>
          </tbody>
      </table>
    );
}

export default Checkbox;
