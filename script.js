let employeeList = [];
let monthlyCost = 0;

$(document).ready(onReady);

function onReady() {
  $("#buttonToAddEmployee").on("click", addNewEmployee);
  $("#buttonToAddEmployee").on("click", employeeSalary);
  $("body").on("click", ".deleteemployee", deletebutton);
  $('#buttonToAddEmployee').on('click', render)
 
}

function render() {
   
    if (monthlyCost > 20000) {
        console.log(monthlyCost)
      $("h3").css("background-color", "red");
    }
  }

function addNewEmployee() {
  let newFirstName = $("#employeefirstname").val();
  let newLastName = $("#employeelastname").val();
  let newJobTitle = $("#JobTitle").val();
  let newID = $("#JobID").val();
  let newAnnualSalary = $("#AnnualSalary").val();

  let newEmployeeList = {
    firstName: newFirstName,
    lastName: newLastName,
    ID: newID,
    jobTitle: newJobTitle,
    annualSalary: newAnnualSalary,
  };

  employeeList.push(newEmployeeList);

  $(".rowData").empty();

  for (let i = 0; i < employeeList.length; i++) {
    $("table").append(`
    <tr class="rowData">
            <th> ${employeeList[i].firstName}</th> 
            <th> ${employeeList[i].lastName}</th> 
            <th> ${employeeList[i].ID}</th> 
            <th> ${employeeList[i].jobTitle}</th> 
            <th> ${employeeList[i].annualSalary}</th> 
            <th><button class='deleteemployee'> Delete </button></th> 
    </tr> `);
  }
}

function deletebutton() {
  let getRidOf = $(this).parent().parent();
console.log(employeeList);
  getRidOf.remove();
}

$("#employeefirstname").val("");
$("#employeelastname").val("");
$("#JobTitle").val("");
$("#JobID").val("");
$("#AnnualSalary").val("");
render();

function employeeSalary() {
  let yearlySalary = $("#AnnualSalary").val();
  let monthlySalary = yearlySalary / 12;
  monthlyCost = monthlyCost + monthlySalary;
  $("#Salary").text(monthlyCost);
}

function whenEmployeeDeleted (){
    $('')

}