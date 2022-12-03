

let employeeList=[];

$(document).ready(onReady) ;
 

function onReady (){
 $('#buttonToAddEmployee').on('click',addNewEmployee);

}


 function addNewEmployee () {

   let newFirstName = $('#employee first name').val();
    let newLastName = $('#employee last name').val();
    let newJobTitle = $('#Job Title').val();
    let newID= $('#Job ID').val();
    let newAnnualSalary=$('#Annual Salary').val();
    
  
     let newEmployeeList= {
         firstName:(newFirstName),
        lastName:(newLastName),
        ID:(newID),
        jobTitle:(newJobTitle),

         annualSalary:(newAnnualSalary)
 }

employeeList.push(newEmployeeList)

}

function renderEmployees (){
    $('#employeeList').empty();

for (let i=0; i<employeeList.length; i++){

    $('table').append (`
    <tr class="rowData">
            <th> ${employeeList[i].firstName}</th> 
            <th> ${employeeList[i].lastName}</th> 
            <th> ${employeeList[i].jobTitle}</th> 
            <th> ${employeeList[i].annualSalary}</th> 
            <th> ${employeeList[i].lastName}</th> 

    `)
}

}