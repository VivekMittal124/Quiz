var div=document.getElementById("my-div");
           var questions=[
               {
                   title:"A complete graph can have",
                   options:["n2 spanning trees","nn-2 spanning trees","nn-2 spanning trees","nn-2 spanning trees"],
             answer:"n2 spanning trees",
             score:"1"  
                   },
                 {
                     title:"What is full-form of CSS",
                     options:["JavaScript","java","HTML","None of these"],
                    answer:"None of these",
                    score:"1"
                 },
                 {
                     title:"How to include JavaScript",
                     options:["script","html","CSS","None"],
                     answer:"script",
                     score:"1"
                 },
                 {
                     title:"How to declare variable in JS",
                     options:["var","char","int","float"],
                     answer:"var",
                     score:"1"
                 },
                 {
                     title:"What => means in JS",
                     options:["ab","cd","af","dd"],
                     answer:"af",
                     score:"1"
                 }
                   ];
                    var option1 = document.getElementById("opt1");
                    var option2 = document.getElementById("opt2");
                     var option3 = document.getElementById("opt3");
                    var option4 = document.getElementById("opt4");
                    
                   var l1=document.getElementById("l1");
                    var l2=document.getElementById("l2");
                     var l3=document.getElementById("l3");
                      var l4=document.getElementById("l4");
                      var sub=document.getElementById("ss");
                      function xyz(){
                   for(var i=0;i<questions.length;i++)
                   {
                       if(questions[i].answer==l1.innerHTML && option1.checked)
                       {
                           p.innerHTML="Correct";
                            
                            if(questions.length!=n-1)
                            sub.value="Next";
                            sub.backgroundColor="green";
                       }
                       else if(questions[i].answer==l2.innerHTML &&option2.checked)
                       {
                           p.innerHTML="Correct";
                            if(questions.length!=n-1)
                            sub.value="Next";
                            sub.backgroundColor="green";
                       
                       }
                       else if(questions[i].answer==l3.innerHTML && option3.checked)
                       {
                           p.innerHTML="Correct";
                           
                            if(questions.length!=n-1)
                            sub.value="Next";
                           sub.backgroundColor="green";
                       
                       }
                       else if(questions[i].answer==l4.innerHTML && option4.checked)
                       {
                           p.innerHTML="Correct";
                           
                            if(questions.length!=n-1)
                            sub.value="Next";
                            sub.backgroundColor="green";
                       
                       }
                       else{
                     
                       p.innerHTML="Incorrect";
                      if(questions.length!=n-1)
                            sub.value="Next";
                            sub.backgroundColor="green";
                       
                       }
                   }
                      }
              
                   

                   
