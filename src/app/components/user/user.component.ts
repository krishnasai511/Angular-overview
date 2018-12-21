import { Component, OnInit } from '@angular/core';
import { DataService }  from '../../services/data.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string;
age:number;

address:{
  street:string,
  Door:number
}
hobbies:string[];

posts:Posts[];

  constructor(private dataservice : DataService) { }

  ngOnInit() {
this.age=21;
this.name="king";
this.address={
  street:"saibabanagar",
  Door:212
}
this.hobbies=['Interacting','coding','Enjoying','eating'];
this.dataservice.getposts().subscribe((posts)=>{
  this.posts=posts;
 });
  }

Onclick()
{
  
 // this.hobbies.push("Swimming");
}

AddHobby(hobby){
console.log(hobby);
this.hobbies.push(hobby);
return false;
}

deleteHobby(item){
  for(let i=0;i<this.hobbies.length;i++)
  {
    if(this.hobbies[i]===item)
    {
      this.hobbies.splice(i,1);
    }
  }

}


}
interface Posts{
  id:number,
  title:string,
  body:string,
  userId:number
}