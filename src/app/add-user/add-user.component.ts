import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  @ViewChild('userForm') userForm:NgForm;

  adds=[];
  editMode: boolean = false;
  editId;

  url = 'https://datapro-d01a4-default-rtdb.firebaseio.com/user.json';


  constructor(private http:HttpClient, private router:Router) { }

  onAdd(userdata:User){ 
    if(this.editMode){
      this.http.put('https://datapro-d01a4-default-rtdb.firebaseio.com/user/'+this.editId+ '.json',userdata).subscribe(
        (response) =>{
         console.log(response)
         this.onFetch();
         //this.router.navigateByUrl('/dashboard')
        })
      
    }
    else{
       // console.log(userdata)
      this.adds.push(userdata)
      // use for post dataa to database(db)
      this.http.post<User>(this.url, userdata).subscribe((response) => {
          console.log(response)    
          this.router.navigateByUrl('/dashboard')  
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

  ngOnInit(): void {
    this.onFetch()
  }

}
