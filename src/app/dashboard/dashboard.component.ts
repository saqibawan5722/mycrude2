import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { map } from 'rxjs/operators'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  url = 'https://datapro-d01a4-default-rtdb.firebaseio.com/user.json';

  adds=[];

  editMode: boolean = false;
  editId;

  @ViewChild('userForm') userForm:NgForm;
  constructor( private router:Router, private http:HttpClient) { }
 
  ngOnInit(): void {
    this.onFetch()
  }

  onAdd(){
    this.router.navigateByUrl("/add-user")
  }
  
  
onDel(userId){
  if(confirm('Do you want to delete this?')){
    // console.log(userId)
    this.http.delete('https://datapro-d01a4-default-rtdb.firebaseio.com/user/'+userId+ '.json')
    .subscribe(()=>{
      this.onFetch()
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
