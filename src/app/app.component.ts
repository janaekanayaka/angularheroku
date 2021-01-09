import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightDetails';
  key: any[];
  firstLetter1: any
  firstLetter2: any
  arrFliNum: any
  depFliNum: any
  arrivaDate: any
  depatuDate: any
  dayOfOperation: any
  capacity: any
  aircraftType: any
  arrivalRoute: any
  arrivalTime: any
  DepatureTime: any
  DepatureRoute: any
  typeOfFlight: any
  tabData:any
  tableDataArray = new Array();
  countOperationday:any

  textBoxValue(item) {

    this.key = item.value
    console.log(this.key.length)
    if (this.key.length == 61) {
          this.firstLetter1 = this.key[0]
          this.firstLetter2 = this.key[9]
          this.depFliNum = this.key.slice(10, 17)
          this.arrivaDate = this.key.slice(17, 22)
          this.depatuDate = this.key.slice(22,28)
          this.dayOfOperation = this.key.slice(28,35)
          this.capacity = this.key.slice(36,39)
          this.arrivalRoute = this.key.slice(43,46)
          this.arrivalTime = this.key.slice(46,50)
          this.DepatureTime = this.key.slice(51,55)
          this.DepatureRoute = this.key.slice(55,58)
          this.typeOfFlight = this.key.slice(59,61)
       }
   }

   arFliNum(afn){
    this.arrFliNum = afn.value
    console.log(this.arrFliNum)
   }

   deFliNum(dfn){
    this.depFliNum = dfn.value
    console.log(this.depFliNum)

   }
   arType(atype){
    this.aircraftType = atype.value
    console.log(this. aircraftType)
   }
   submitButton(){
       this.tableDataArray.push(this.arrFliNum ,this.depFliNum,this.arrivaDate,this.depatuDate,
           this.dayOfOperation,this.capacity, this.aircraftType
           ,this.arrivalRoute,this.arrivalTime,this.DepatureTime,this.DepatureRoute,this.typeOfFlight) 
    console.log(this.tableDataArray)
           if(this.tableDataArray[4] === "1000000" ){
      this.countOperationday = "Monday"
     }
     if(this.tableDataArray[4] === "0200000" ){
      this.countOperationday = "Tuesday"
     }
     if(this.tableDataArray[4] === "0030000" ){
      this.countOperationday = "Wednsday"
     }
     if(this.tableDataArray[4] === "0004000" ){
      this.countOperationday = "Thurseday"
     }
     if(this.tableDataArray[4] === "0000500" ){
      this.countOperationday = "Friday"
     }
     if(this.tableDataArray[4] === "0000060" ){
      this.countOperationday = "Saturday"
     }
     if(this.tableDataArray[4] === "0000007" ){
      this.countOperationday = "Sunday"
     }
        

       }



       
 }
