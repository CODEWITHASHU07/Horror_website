let scare_1="./music/scary_1.mp4";
let scare_2="./music/scary_2.mp4";
let main_music_bg="./music/The_main_background_music.mp4";
let the_nun="./music/new trimed the nun music.mp3";
let mess_1="YOU Did The Biggest Mistake Of your Life To Come Here ,Now Nobody Can Save Yuuuh <br> She Is annoying <br> Here's The Mantra Who Have The Power To Save Yuuhh.....<br>Run away..oh no she is coming run,run away,Please";
// !music control by this function
function musiccontrol(tag)
{
    if(tag)
    {
        music.currentTime=0;
        music.play();
        lamp.setAttribute('ID','on');
        Top.setAttribute('class','animate');
    }
    else
    {
        music.pause();
        lamp.setAttribute('ID','off');
        Top.setAttribute('class','no_animate');
    }
}
// !music change by this function
function musicchange(source)
{
            // mainmusic.currentTime=0;
            mainmusic.src=source;
           
}
// !first class on first click actions

class case_1{
    task1(t1)
    {
        setTimeout(()=>{
            lamp.setAttribute('ID','off');
          
    
        },t1);
    }
    task2(t2)
    {
        setTimeout(() => {
            Evileye.classList.add("horroron");
        }, t2);
    }
     task3(t3)
    {
        setTimeout(()=>{
            alert("Please Don't Switch On the Lamp,Otherwise You Would be Cause of The NUN's Anger!");
            Evileye.classList.remove("horroron")
            musicchange(main_music_bg);
        },t3);
    }
    }
    //! -------second class for second click action----------------------------
    class case_2{
     task1(t)
    {
        setTimeout(() => {
            musicchange(scare_2);
            mainmusic.play();
          
        }, t-3000);
        setTimeout(() => {
            Evileye.classList.add("girlactive");
          
        }, t);
        setTimeout(() => {
            document.getElementById('mess').innerHTML=mess_1;
            alert_message.style.display='block';
            
        }, t+2000);
    }
    task2(t)
    {
        setTimeout(() => {
            Mantra.setAttribute("class","mantra_active");
            lamp.classList.add('bgcolor')
            
        }, t);
    }
    task3(t)
    {
        setTimeout(() => {
            Evileye.classList.remove("girlactive");
            
        }, t);
        setTimeout(() => {
            Evileye.setAttribute('class',"hangingboy");
            Top.setAttribute('class','animate');
            lamp.setAttribute('ID','off');
            alert_message.style.display='none';
            
        }, t+800);
    }
    task5(t)
    {
        setTimeout(() => {
            Mantra.setAttribute("class","mantra");
        }, t);
    }
    task4(t)
    {
             
        setTimeout(() => {
            Evileye.classList.remove("hangingboy");
            Top.setAttribute('class','no_animate');
            musicchange(the_nun);
            music.currentTime=0;
            mainmusic.play();
            
            
            
        }, t);
    }
    task6(t)
    {
        setTimeout(() => {
            body.setAttribute('class','vibrate')
        }, t);
        
        setTimeout(() => {
            Evileye.classList.add("themainnun");
        }, t+4000);
    }
}
// declaration of vaiables
let button=document.getElementById("t2");
let button_2=document.getElementById("t2_1");
let lamp=document.getElementsByClassName("layer")[0];
let Top=document.getElementById("Top");
let Evileye=document.getElementsByClassName('horror')[0];
let Mantra=document.getElementsByClassName('mantra')[0];
let alert_message=document.getElementsByClassName('message')[0];
let body=document.getElementsByTagName('body')[0];
let flag_for_music=true;
let count=0;
// alert message button control 
let alert_button =document.getElementById('t3');

// music control from here
let mainmusic = document.getElementById('mainmusic');

let music = document.getElementById('music_anabella');

// for disclaimer
let div=document.getElementById('notice');
setTimeout(() => {
        div.style.display='block';
}, 4000);
let item=document.
getElementById('t1');
item.addEventListener('click',()=>{
    div.style.display='none';
    alert("As you want to fill horror ,here are two skull's \n The first skull to call the nun ,which works automatic \n The second skull to See the scar! ")

});
// on function call by disclaimer click
function close()
    { alert_message.style.display='none';
alert()}
// main function executed from here by clicked on button 1
//! button_2
button_2.addEventListener('click',()=>{
    if(flag_for_music)
    {mainmusic.pause();
        musiccontrol(true);
        flag_for_music=false;
    }
    else{ 
        
        
        musiccontrol(false);
        mainmusic.play();
        flag_for_music=true;
    }
},false);
// ! function call on the click on first button
// !button-1
    function fun()
    {  if(mainmusic.play)
        {
            mainmusic.pause();
        }
       
        switch(count)
        {
        case 0:
            console.log('inside fun case_!');
            lamp.setAttribute('ID','on');
            let theta = new case_1();
            setTimeout(()=>{
            musicchange(scare_1);
            mainmusic.play();},2100)
            theta.task1(7000);
            theta.task2(10000);
            theta.task3(12000);
            count++;
            break;
            case 1:
                lamp.setAttribute('ID','on');
                let delta =new case_2();
                delta.task1(8000);
                delta.task2(13000);
                delta.task3(25100);
                delta.task4(38000);
                delta.task5(50000);
                delta.task6(59000);
                count++;
                break;
            }
        }
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    

    

        

        


   

 
  
