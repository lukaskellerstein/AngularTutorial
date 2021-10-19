import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import * as ObjectMapper from 'object-mapper';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  testForm: FormGroup;
  testForm_definition = this.fb.group({
    name: ["", Validators.required],
    email: [
      "",
      Validators.required /*, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)*/
    ],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
      phones: this.fb.array([])
    }),
    healthCheck: this.fb.group({
      select: [""],
      httpHealthCheck: this.fb.group({
        url: [""]
      }),
      tcpHealthCheck: this.fb.group({
        send_payload: [""],
        extended_response: [""]
      })
    })
  });

  // testForm_definition2 = new FormGroup({
  //   name: new FormControl(""),
  //   email: new FormControl(""),
  //   address: new FormGroup({
  //     street: new FormControl(""),
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     zip: new FormControl(""),
  //     phones: new FormArray([
  //       new FormGroup({
  //         value: new FormControl("")
  //       })
  //     ])
  //   }),
  //   healthCheck: new FormGroup({
  //     select: new FormControl(""),
  //     httpHealthCheck: new FormGroup({
  //       url: new FormControl("")
  //     }),
  //     tcpHealthCheck: new FormGroup({
  //       send_payload: new FormControl(""),
  //       extended_response: new FormControl("")
  //     })
  //   })
  // });

  selectHealthcheckData = [
    {
      id: "default",
      text: "Select healthcheck",
      disabled: true
    },
    {
      id: "http",
      text: "http Healthcheck"
    },
    {
      id: "tcp",
      text: "tcp Healthcheck"
    }
  ];
  selectedHealthCheck = "default";

  get phonesForm() {
    return this.testForm.get(["address", "phones"]);
  }

  constructor(private fb: FormBuilder) {
    // Set default settings for FORM
    this.testForm = this.testForm_definition;

    // 1 - LOADED DATA ------------------------
    // const data = {
    //   name: "testName",
    //   email: "aaa@aaa.cz",
    //   address: {
    //     street: "testStreet",
    //     city: "testCity",
    //     state: "testState",
    //     zip: "10000",
    //     phones: [
    //       {
    //         value: "1111"
    //       },
    //       {
    //         value: "2222222"
    //       }
    //     ]
    //   },
    //   healthCheck: {
    //     select: "http",
    //     httpHealthCheck: {
    //       url: "http://wwww.aaa.bbb"
    //     },
    //     tcpHealthCheck: {
    //       send_payload: null,
    //       extended_response: null
    //     }
    //   }
    // };
    // this.testForm.setValue(data);

    // 1 - LOADED DATA 2 ------------------------
    const data = {
      name: "testName",
      email: "aaa@aaa.cz",
      address: {
        street: "testStreet",
        city: "testCity",
        state: "testState",
        zip: "10000",
        phones: [
          {
            value: "1111"
          },
          {
            value: "2222222"
          }
        ]
      },
      healthCheck: {
        select: "http",
        httpHealthCheck: {
          url: "http://wwww.aaa.bbb"
        },
        tcpHealthCheck: {
          send_payload: null,
          extended_response: null
        }
      }
    };

    //name
    let fName = this.testForm.get(["name"]);
    fName.setValue(data.name);

    //email
    let fEmail = this.testForm.get(["email"]);
    fEmail.setValue(data.email);

    //Address
    let fAddress = this.testForm.get(["address"]);
    let aaa = _.cloneDeep(data);
    aaa.address.phones = [];
    fAddress.setValue(aaa.address);

    //phones
    let aa = this.testForm.get(["address", "phones"]) as FormArray;
    // aa = this.fb.array([]);

    console.log(data.address.phones);
    for (const phone of data.address.phones) {
      console.log(phone);

      aa.push(this.fb.group(phone));
    }

    //select
    this.selectedHealthCheck = data.healthCheck.select;

    //this.testForm.patchValue(aaaa);
    console.log(this.testForm.value);

    // 2 - NEW EMPTY FORM ---------------------------
    //this.testForm = this.testForm_definition;
  }

  // createNewForm() {
  //   this.testForm = this.testForm_definition;
  // }

  addNewPhone() {
    let aaa = this.testForm.get(["address", "phones"]) as FormArray;
    aaa.push(
      this.fb.group({
        value: ""
      })
    );
  }

  onSubmit() {
    const obj = mapHealthCheckFormToObject(this.testForm.value);

    console.log(obj);

    console.log(this.testForm);
  }
}

/**
 * HealthCheck
 * Mapping object represents howto map Form object to API request
 */
const mapping_HealthCheck_Form_2_Object = {
  name: "metadata.name",
  email: "metadata.email"
  // healthCheck: [
  // 	{
  // 		key: 'spec.gc_spec.http_health_check',
  // 		transform: function(item) {
  // 			let result = null;

  // 			if (item.select === 'http') {
  // 				result = {
  // 					url: item.httpHealthCheck.url,
  // 					headers: []
  // 				};

  // 				for (const header of item.httpHealthCheck.headers) {
  // 					result.headers.push(header.value);
  // 				}
  // 			}

  // 			return result;
  // 		}
  // 	},
  // 	{
  // 		key: 'spec.gc_spec.tcp_health_check',
  // 		transform: function(item) {
  // 			let result = null;

  // 			if (item.select === 'tcp') {
  // 				result = {
  // 					send_payload: item.tcpHealthCheck.send_payload,
  // 					extended_response: item.tcpHealthCheck.extended_response
  // 				};
  // 			}

  // 			return result;
  // 		}
  // 	}
  // ]
};

export function mapHealthCheckFormToObject(data) {
  return ObjectMapper(data, mapping_HealthCheck_Form_2_Object);
}

/**
 * HealthCheck
 * Mapping object represents howto map API object to Form request
 */
const mapping_HealthCheck_Object_2_Form = {
  "metadata.name": "name",
  "metadata.email": "email"
  //HEALTH_CHEKC - Http
  //HEALTH_CHEKC - Tcp
};

export function mapHealthCheckObjectToForm(data) {
  const temp = ObjectMapper(data, mapping_HealthCheck_Object_2_Form);
  return temp;
}
