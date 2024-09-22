import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  
  locations: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  departments: string[] = ['HR', 'IT', 'Sales', 'Marketing', 'Business'];
  isAddPopupOpen = false;
  isEditPopupOpen = false;
  isDeletePopupOpen = false;
  selectedEmployee: any = null;
  newEmployee: any = { employeeId: '', employeeName: '', employeePhone: '', dob: '', location: '', department: '', gender: '' };
  gender = ['Male', 'Female'];


   employees = [
    {
      employeeId: 101,
      employeeName: 'John Doe',
      employeePhone: '9457895489',
      dob: '1990-01-15',
      location: 'New York',
      department: 'HR',
      gender: 'Male'
    },
    {
      employeeId: 102,
      employeeName: 'Jane Smith',
      employeePhone: '7845624896',
      dob: '1985-03-22',
      location: 'Los Angeles',
      department: 'IT',
      gender: 'Female'
    },
    {
      employeeId: 103,
      employeeName: 'Mike Johnson',
      employeePhone: '78412549865',
      dob: '1992-06-30',
      location: 'Chicago',
      department: 'Sales',
      gender: 'Male'
    },
    {
      employeeId: 104,
      employeeName: 'Emily Davis',
      employeePhone: '8954795235',
      dob: '1988-11-12',
      location: 'Houston',
      department: 'Marketing',
      gender: 'Female'
    },
    {
      employeeId: 105,
      employeeName: 'David Brown',
      employeePhone: '954721538',
      dob: '1995-08-24',
      location: 'Miami',
      department: 'Business',
      gender: 'Male'
    }
  ];
  


  // Add Employee
  openAddPopup() {
    this.newEmployee = {
      employeeId: '',
      employeeName: '',
      employeePhone: '',
      dob: '',
      location: '',
      department: '',
    };
    this.isAddPopupOpen = true;
  }

  closeAddPopup() {
    this.isAddPopupOpen = false;
  }

  addEmployee(form: NgForm) {
    if (form.valid){
      console.log(this.newEmployee)
      this.employees.push({ ...this.newEmployee });
      this.closeAddPopup();
    }else{
      alert("Enter all field to proceed.")
    }
 
  }


  //Edit Employee
  openEditPopup(employee: any) {
    this.selectedEmployee = { ...employee };
    this.isEditPopupOpen = true;
  }

  closeEditPopup() {
    this.isEditPopupOpen = false;
  }

  saveEmployee(form: NgForm) {
    if (form.valid){
    // Find the index of the employee being edited
      const index = this.employees.findIndex((emp) => emp.employeeId === this.selectedEmployee.employeeId);
      if (index !== -1) {
        this.employees[index] = { ...this.selectedEmployee };
      }
      this.closeEditPopup();
   }else{
      alert("Enter all field to proceed.")
   }
  }



  // Delete Employee
  openDeletePopup(employee: any) {
    this.selectedEmployee = { ...employee };
    this.isDeletePopupOpen = true;
  }

  closeDeletePopup() {
    this.isDeletePopupOpen = false;
  }

  deleteEmployee() {
    this.employees = this.employees.filter((emp) => emp.employeeId !== this.selectedEmployee.employeeId);
    this.closeDeletePopup();
  }

}
