import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-download-csv',
  templateUrl: './download-csv.component.html',
  styleUrls: ['./download-csv.component.scss']
})
export class DownloadCSVComponent implements OnInit {

  constructor() { }

  form:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  getErrorMessage() {
    if (this.form.valid) {
      return 'You must enter a value';
    }

    return this.form.hasError('email') ? 'Not a valid email' : '';
  }
  options:any = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],
    showTitle: true,
    title: 'asfasf',
    useBom: false,
    removeNewLines: true,
    keys: ['approved','age','name' ]
  };
  data = [
    {
      name: "Test, 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 3',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    }
  ];

  ngOnInit(): void {
  }

}
