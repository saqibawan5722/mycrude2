import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoapplication2';

  @ViewChild('userForm') userForm:NgForm;

  url = 'https://datapro-d01a4-default-rtdb.firebaseio.com/user.json';

  adds = [
    // {fname: "ali" , lname:"awan"}
  ]
 editMode: boolean = false;
 editId;
  constructor(private http:HttpClient){}
 
  ngOnInit(){
    this.onFetch()
  }


onAdd(userdata:User){ 
  if(this.editMode){
    this.http.put('https://datapro-d01a4-default-rtdb.firebaseio.com/user/'+this.editId+ '.json',userdata).subscribe(
      (response) =>{
       // console.log(response)
       this.onFetch();
      })
  }
  else{
     // console.log(userdata)
    this.adds.push(userdata)
    // use for post dataa to database(db)
    this.http.post<User>(this.url, userdata).subscribe(
      (response) =>{
        console.log(response)
      })
  }
  
 }




  onFetch(){
    this.http.get<User>(this.url)
    .pipe(map(resData=>{
      //console.log(resData);
     const userArray = [];
     for(const key in resData){
     //  console.log(resData[key])
     if(resData.hasOwnProperty(key)){
      userArray.push({userId:key, ...resData[key]})
     }
    
     }
     return userArray;
    }))
    .subscribe( 
     (Response) =>{
        //console.log(Response);
        this.adds = Response
   })
  }


// simple fetch data

// onFetch(){
// this.http.get<User>(this.url).subscribe(
//   (response) =>{
//     console.log(response)
//   })
// }


onDel(userId){
  if(confirm('Do you want to delete this?')){
    // console.log(userId)
    this.http.delete('https://datapro-d01a4-default-rtdb.firebaseio.com/user/'+userId+ '.json')
    .subscribe(()=>{
      this.onFetch()
    })
  }
}

onEdit(userId, index){
 //console.log(this.adds[index],fname)
 this.editId = userId;
 this.editMode = true;
 this.userForm.setValue({
   fname: this.adds[index].fname,
   lname: this.adds[index].lname,
 })
}
}