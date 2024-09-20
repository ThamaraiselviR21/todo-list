let main=document.getElementsByClassName('main');
let add=document.getElementById('add');
let list=document.getElementById('list');
let ans=document.getElementById('answer');
let arr=[];


 let todo=(val)=>{
   let span=document.createElement('div');
   let check=document.createElement('input');
   check.type='checkbox';
   let todos=document.createElement('div'); 
   check.className="check"
   span.className='box';
   todos.innerHTML=val;
   span.appendChild(check);
   span.appendChild(todos);
   ans.appendChild(span);
   let btn=document.createElement("button");
   btn.innerHTML="delete";
   btn.className="btn";
   span.appendChild(btn);
   btn.addEventListener('click',()=>{if(check.checked){
      span.remove();  
   }
   else{
      alert("your task id not complete");
   }
     
   });
   check.addEventListener('click',()=>{if(check.checked){
      todos.style.textDecoration='line-through';
   }
   else{
      todos.style.textDecoration='none';
   }
   });
   
}
add.addEventListener('click',()=>{
   if(list.value==''){
      alert("plz..Enter your todos")
   }
   else{
   arr.push(list.value);
   todo(list.value);
   list.value=''; 
   localStorage.setItem('to-do-list',(arr),console.log(arr));  
}});

 
