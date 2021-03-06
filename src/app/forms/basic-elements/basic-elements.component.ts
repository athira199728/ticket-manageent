import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent {
  topics=['Topic 1','Topic 2','Topic 3'];
   
  products=['Product 1','Product 2','Product 3'];
  questions=['questions 1','questions 2','questions 3'];
 userModel=new User('','','','','') ;
  TopicHasError: boolean=true;
  QuestionHasError: boolean=true;
  ProductHasError: boolean=true;


validateTopic(value: string)
{
if(value === 'default')
{
  this.TopicHasError=true;
}
else
{
  this.TopicHasError=false;
}
}
validateProduct(value: string)
{
if(value === 'default')
{
  this.ProductHasError=true;
}
else
{
  this.ProductHasError=false;
}
}

validateQuestion(value: string)
{
if(value === 'default')
{
  this.QuestionHasError=true;
}
else
{
  this.QuestionHasError=false;
}
}
}
