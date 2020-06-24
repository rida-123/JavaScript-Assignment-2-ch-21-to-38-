                                        // --------chapter # 21-25-----------

                                                
                                              //TASK 1

// var firstName=prompt("Enter your first name");
// var secondName=prompt("Enter your second name");
// var fullName=firstName+" "+secondName;
// alert("Welcome"+" "+fullName);


                                             //TASK 2

//   var fav=prompt("Enter your favourite phone");

//   document.write("My favourite phone is:"+" "+fav+"<br>");
//   document.write("Length of string:"+" "+fav.length);                                       




                                             //TASK 3

//    var word="Pakistani";
//    var letter=word.indexOf("n");
//    document.write("String is:"+" "+word+"<br>");
//       document.write("index of 'n' is"+" "+letter);                                        



                                             //TASK 4

// var word="Hello World";
//   var letter=word.lastIndexOf("l");
// document.write("String is:"+" "+word+"<br>");
//  document.write("last index of 'l' is"+" "+letter);  




                                              //TASK 5


//    var word="Pakistani";
//   var char=word.charAt(3)
//    document.write("String is:"+" "+word+"<br>");
//    document.write("Character at index 3 is"+" "+char); 



                                              //TASK 6


// var firstName=prompt("Enter your first name");
// var secondName=prompt("Enter your second name");
// var fullName=firstName.concat(" "+secondName);
// alert("Welcome"+" "+fullName);



                                              //TASK 7

//  var city1="Hyderabad";
// var sec="Islam"+city1.slice(5);
// document.write("City:"+" "+city1+"<br>");
// document.write("After Replacement:"+" "+sec); 



                                             //TASK 8

// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// var repMess=message.replace(/and/g,"&");
// document.write(repMess);  



                                            //TASK 9

    //  var str="472";
    //  var display=typeof(str);
    //  document.write("Value:"+" "+str+"<br>");
    //   document.write("Type:"+" "+display+"<br>");
    
    //   document.write("Value:"+" "+(+str)+"<br>");
    //   var display1=typeof(+str)
    //   document.write("Type:"+" "+display1);



                                              //TASK 10


// var input=prompt("Enter some text");
// var input1=input.toUpperCase();
// document.write("User input:"+" "+input+"<br>");
// document.write("Uppercase:"+" "+input1);


                                              //TASK 11


//  var input=prompt("Enter some text");
// var firstChar=input.slice(0,1);
// var other=input.slice(1);
// firstChar=firstChar.toUpperCase();
// other=other.toLowerCase();
// document.write("User input:"+" "+input+"<br>");
// document.write("Title case:"+" "+firstChar.concat(other));

                                           
                                                //TASK 12
                                                 
//    var num=35.36;
//    var str=num.toString();
//    str=str.split(".").join("");
//    document.write(str);



                                                  //TASK 13



    //  var username=prompt("Enter username") ;
    //  var user=username;
    // for(var i=0;i<user.length;i++){
    //     if(user[i]==="@" || user[i]==="." || user[i]==="," || user[i]==="!"){
    //       var userName=prompt("please enter valid username");
    //       document.write(userName); 
          
    //     }

        
    // }  
   
    

                                                   //TASK 14

// var menu=["cake", "apple pie", "cookie", "chips", "patties"]
// var input=prompt("Welcome to ABC Bakkery!  What do you want to order sir/maam?");
// input=input.toLowerCase();

// for(var i=0;i<menu.length;i++){
//     if(input === menu[i]){
//         document.write(menu[i]+" "+"is available"+" "+"at index"+" "+i+" "+"in our bakery");
//      break;
//     }
// }
// if(input!==menu[i]){
//             document.write("We are sory"+" "+input+" "+"is not available"+" "+"in our bakery"); 
// } 
    

    

                                                    //TASK 15


//   var pass=prompt("Enter your password") ;
//   var res=/^[A-Za-z!@#$%^&*]\w{6,}$/;
  
//   if(pass.match(res)){
//      document.write(pass);}
//    else {
//        document.write("Entered password:"+" "+pass+"<br>");
//        document.write("Password does not start with number"+"<br>");
   
//        var pass1=prompt("Enter a valid password");
//        document.write("valid password:"+" "+pass1)
   
//    }



                                                   //TASK 16

// var university = "University of Karachi";
// var arr=university.split('');
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }



                                                   //TASK 17

//  var input=prompt("Enter some text");
  
// var last=input.charAt(input.length-1);
       
//       document.write("User input"+ " "+input+"<br>");
//       document.write("Last character of input: "+" "+last)  ;  



                                                  //TASK 18



    //    var str="The quick brown fox jumps over the lazy dog ";
    //     str=str.toLowerCase();
    //     var occur=str.split("the").length-1;
    //      document.write("Text:"+" "+str+"<br>");
    //        document.write("There are"+" "+occur+" "+"occurances of the word 'the' ")  ; 
    


       


                                                //   ------------------chapter # 26-30------------------



                                               //TASK 1 


//   var input=+prompt("Enter a postive interger");
//   if(input>0){
//         document.write("Number:"+" "+input+"<br>");
//         document.write("round off value:"+" "+Math.round(input)+"<br>");
//         document.write("floor value:"+" "+Math.floor(input)+"<br>");
//         document.write("ceil value:"+" "+Math.ceil(input));
//   }      



                                              //TASK 2



//  var input=prompt("Enter a negative floating interger");
//  var res=/[-+][0-9]+\.[0-9]+$/;
//  if(input.match(res)){
    
       
//          document.write("Number:"+" "+input+"<br>");
//         document.write("round off value:"+" "+Math.round(input)+"<br>");
//         document.write("floor value:"+" "+Math.floor(input)+"<br>");
//          document.write("ceil value:"+" "+Math.ceil(input));
//  }                                  




                                                  //TASK 3


      //    var num=+prompt("Enter a number");
      //    var num1=Math.abs(num);
      //    document.write("The absolute value of"+" "+num+" "+"is"+" "+num1);




                                                 //TASK 4


      //      var num=Math.random()*6+1;
      //      var num1=Math.floor(num)
      //      document.write("Random dice value"+" "+num1);     
      
      


                                                   //TASK 5
            
            //     var num=Math.random()*2+1; 
            //     var num1=Math.floor(num);
            //     if(num1===2){
            //           document.write(num1+"<br>");
            //           document.write("Random coin value:"+" "+" "+"Heads"+"<br>");
            //     }  
            //    else{
            //       document.write(num1+"<br>");
            //       document.write("Random coin value:"+" "+" "+"Tails")
            //     }                                 




                                                        //TASK 6



                  //     var num=Math.random()*100+1;
                  //     num=num.toFixed(0);
                  //     document.write("Random number between 1 and 100:"+" "+num);                                  




                                                       
                                                        //TASK 7

                  //  var weight=prompt("Enter your weight in kilogram");
                  //  var conv=parseFloat(weight);
                  //  document.write("The weight of user is"+" "+conv+" "+"kilogram")
                   

        

                  
                                                         //TASK 8


                  //     var sec=4;
                  //     var input =+prompt("Enter number between 1 to 10");
                  //     if(sec===input){
                  //           alert("Conguratulations")
                  //     }    
                  //     else{
                  //           alert("Try again")
                  //     }                              






                                                // --------------------------chapter # 31-34-------------------


                                                         //TASK 1



//      var d=new Date();
//      document.write(d);   



                                                         //TASK 2

      //   var month=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
      //   var d=new Date();
      //   var months=d.getMonth();
      //   var currentMonth=month[months];
      //   document.write(currentMonth);    
      
      



                                                          //TASK 3


      //    var d= new Date();
      //    var con=d.toString();
      //    var currentDay=con.slice(0,3);
      //    document.write("Today is"+" "+currentDay);



                                                            //TASK 4


     
//       var d= new Date();
//        var cuurent=d.getDay();
//       if(cuurent===0 || cuurent===6){
//       document.write("It's  fun day")
// }




                                                            //    TASK 5


                                                            
// var d= new Date();
// var date =d.getDate();
// if(date<16){
// document.write("First fifteen days of the month");
// }
// else{
//    document.write("Last days of the month");   
// }




                                                                 //TASK 6


// var d=new Date();
// var mili=d.getTime();
// var minutes=mili/(1000*60*60);
// document.write(d+"<br>")
// document.write("Elapsed miliseconds since January 1, 1970:"+" "+mili+"<br>");
// document.write("Elapsed minutes since January 1, 1970:"+" "+minutes);


                                                         
                                                                //TASK 7
                                                                
// var d= new Date();
// var hour=d.getHours();
// if(hour<12){
// document.write("it's AM");
// }
// else{
// document.write("it's PM");
// }


                                                                 //TASK 8


// var laterDate = new Date("Dec 31, 2020");
// document.write("Later Date:"+" "+laterDate);




                                                                 //TASK 9

                                                                 
// var d=new Date("June 18, 2015");
// var mili=d.getTime();
// var date=new Date();
// var mili1=date.getTime();
// var diff=mili1-mili;
// var milidiff=Math.floor(diff/(1000*60*60*24));
// alert(milidiff+" "+"days have passed since 1st Ramadan, 2015");



                                                              //TASK 10


// var d=new Date("Dec 05, 2015 22:50:16");
// var sec=d.getTime()
// var beg=new Date("Dec 31, 2014 00:00:00");
// var sec2=beg.getTime();
// var diff=sec-sec2;
// var secDiff=Math.floor(diff/(1000*60));
// document.write("On reference date"+" "+d+","+" "+secDiff+" "+"seconds has passed since beginning of 2015")



                                                          //      TASK 11     


// var d=new Date();
// document.write("Current date:"+" "+d+"<br>");
// d.setHours(d.getHours()-1);
// document.write("1 hour ago, it was"+" "+d);



                                                           //TASK 12          

// var d=new Date();

// alert("Current date:"+" "+d)

// d.setFullYear(d.getFullYear()-100);
// alert("100 years back, it was"+" "+d);




                                                            //TASK 13

// var age=prompt("Enter your age");
// var d=new Date();
// var num=d.getFullYear();
// var year=num-age;
// document.write("Your age is"+" "+age+"<br>");
// document.write("Your birth year is" +" "+year);



                                                               // TASK 14


                                                               
// var name=prompt("Enter your name");
// var month=prompt("Enter month");
// var unit=+prompt("Enter number of units");
// var charges=+prompt("Enter charges per unit");
// var late=+prompt("Enter late payment surcharge");
// var net=(unit*charges).toFixed(2);
// var gross=parseFloat(net)+parseFloat(late);

// document.write("<h1>"+"K-Electric bill"+"</h1>"+"<br>"+"<br>");
// document.write("Customer name:"+" "+name+"<br>");
// document.write("Month:"+" "+month+"<br>");
// document.write("Number per units:"+" "+unit+"<br>");
// document.write("Charges per units:"+" "+charges+"<br>"+"<br>");
// document.write("Net amount payable(within due date):"+" "+net+"<br>");
// document.write("late payment surcharge:"+" "+late+"<br>");
// document.write("Gross amount payable(after due date):"+" "+gross+"<br>");



                              // -------------------Chapter # 35-38----------------

    
                                                       //TASK 1


 // function currentDate(){
 //       var d=new Date();
 //       document.write(d);
// }  
// currentDate();  



                                                      //TASK 2

// var first=prompt("Enter first name");
// var last=prompt("Enter last name");
//    function greet(){
           
//       alert("Welcome"+ " "+first+" "+last);
//    }  
//    greet();              


                  
                                                     //TASK 3


      // var a=+prompt("Enter number 1") ;                                              
      // var b=+prompt("Enter number 2")  ;
      // function sum(){
      //       return a+b;
      // }  
      // document.write(sum());  




                                                     //TASK 4

//  function calc(num1,op,num2){
//  if(op==="+"){
//        return num1+num2;
//  }
//  else if(op==="-"){
//       return num1-num2;
// }
// else if(op==="*"){
//       return num1*num2;
// }
// else if(op==="/"){
//       return num1/num2;
// }
// else{
//       return "Invalid operator";
// }

//  }   
// var result=calc(1,"+",4) ;  
// var result1=calc(1,"-",4) ; 
// var result2=calc(1,"*",4) ; 
// var result3=calc(1,"/",4) ; 
// var result4=calc(1,"@",4) ; 
// document.write(result+"<br>") ; 
// document.write(result1+"<br>") ;                                           
// document.write(result2+"<br>") ;
// document.write(result3+"<br>") ;
// document.write(result4) ;
            


                                                        //TASK 5


      //  function square(a) 
      //  {
      //        return a*a;
      //  }    
       
      // var sq= square(8);
      // document.write(sq);



                                                       //TASK 6

//   var num=+prompt("Enter a number") ;
//   var num1=1;
   
// function fact(){
//       if(num===0||num===1){
//             return num1;
//       }
//       else{
//             for(var i=num;i>=2;i--){
//                    num1=num1*i;
                   
//             }
//             return num1;
          
//       }
// }
// document.write(fact());




                                                        //TASK 7


//    var start=+prompt("Enter starting number");
//    var end=+prompt("Enter ending number");

//    function count(){
       
//          for(var i=start;i<=end;i++){
//                 document.write(i+"<br>");
//          }
      
//    }     
//    count();
   
                                        


                                                       //TASK 8


      // var base=+prompt("Enter base"); 
      // var perpen=+prompt("Enter perpendicular");                                                
      // function calculateHypotenuse(){
      //       function calculateSqaure(){
      //             return Math.sqrt((base*base)+(perpen*perpen));
      //       }
      //       document.write(calculateSqaure()); 
      // }   
      // calculateHypotenuse();       
           



                                                         // TASK 9

//      (i)
      //  function area(width,height){
      //       return width*height;
      // }
      // document.write(area(3,4));


      //  (ii)
      // var w=+prompt("Enter width");
      // var h=+prompt("Enter height");
      // function area(){
      //       return w*h;
      // }
      // document.write(area(w,h));
      




                                                       //TASK 10

//  function palindrome(str){
//       if(str==str.split("").reverse().join("")){
//           alert("This is palindrome")
//       }
//       else{
//             alert("This is not palindrome")  
//       }
//  }
//  palindrome("madam");




                                                       //TASK 11


      //  function UpperCase(str) {
      // words = str.split(' ');
                                                     
      //  for(var i = 0; i < words.length; i++) {
      //  var letters = words[i].split('');
       
      // letters[0] = letters[0].toUpperCase();
      
      //  words[i] = letters.join('');
     
      //  }
      //  return words.join(' ');
      //  }
      //  UpperCase("my name is rida");
      //  document.write(words.join(' '));
                                              



                                                          //TASK 12

// var longest=0;
// var word;
//         function long(str){
//             var str1=str.split(' ');
//             for(var i=0;i<str1.length;i++){
//                   if(str1[i].length>longest){
//                         longest=str1[i].length;
//                         word=str1[i]
//                   }
                  
//             }
// return word;
//         }     
//         long("Web Development");
//         console.log(word)  ;              





                                                               //TASK 13



//     function count(str,letter){
//           var countLetter=0;
// for(var i=0;i<str.length;i++){
//       if(str.charAt(i)==letter){
//             countLetter+=1;
//       }
// }
//       return countLetter;

//     }       
//     document.write(count("Ridaa",'a'));





                                                               //TASK 14





            //  (i)                                                  
            // function calCircumference(r){
            //      return 2*3.14*r;
            // } 
            // var c=calCircumference(3);
            // document.write("The circumference is"+" "+c);  

            
            // (ii)
            // function calcArea(r){
            //       return 3.14*(r*r);
            //  } 
            //  var c=calcArea(3);
            //  document.write("The area is"+" "+c);
   
      




                      
       
    







