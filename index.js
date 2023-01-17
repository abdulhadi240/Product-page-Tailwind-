function toggle()
        {
            let blur=document.getElementById('blur');
            blur.classList.toggle('active');

            let popup=document.getElementById('popup');
            popup.classList.toggle('active');
            popup.onclick.remove('active');
            //popup.classList.remove('active');
        }

        let c=document.getElementById('text').innerText;
        console.log(c);
let count=1;
function increment(){
    count++;
    document.getElementById('text').innerText=count;
    //console.log(count);
    
    
}   
function decrement(){
    if(count<1)
    {
        count==0;
    }
    else{
        count--;
    document.getElementById('text').innerText=count;
    //console.log(count);
    }
    
    
} 

if(count>9)
{
    document.getElementById('contan').style.width='140px';
    console.log(count);
}


function variant1(color1,color2,color3){

    let c=document.getElementById('bl').style.background='black';
    document.getElementById(color1).style.background='transparent';
    document.getElementById(color2).style.background='transparent';
    document.getElementById(color3).style.background='transparent';
    
    
}

function variant2(color1,color2,color3){

    let c=document.getElementById('b').style.background='blue';
    document.getElementById(color1).style.background='transparent';
    document.getElementById(color2).style.background='transparent';
    document.getElementById(color3).style.background='transparent';
    
    
}

function variant3(color1,color2,color3){

    let c=document.getElementById('y').style.background='yellow';
    document.getElementById(color1).style.background='transparent';
    document.getElementById(color2).style.background='transparent';
    document.getElementById(color3).style.background='transparent';
    
    
}

function variant4(color1,color2,color3){

    let c=document.getElementById('r').style.background='red';
    document.getElementById(color1).style.background='transparent';
    document.getElementById(color2).style.background='transparent';
    document.getElementById(color3).style.background='transparent';
    
    
}

function checkout(){
    window.location='product2.html';
}

function change(){
    document.getElementById("img").src="Images/shoe2-removebg-preview.png";
    let a= document.getElementById("img");
    a.style.width='600px';
    a.style.transform='rotate(0deg)'
    //let a= document.getElementById("img").style.transform.scale='500px';
    console.log("hello");
}
function change1(){
    document.getElementById("img").src="Images/shoe3.png";
    let q= document.getElementById("img");
    q.style.width='600px';
    //let a= document.getElementById("img").style.transform.scale='500px';
    console.log("hello");
}
function change2(){
    document.getElementById("img").src="Images/shoes1.png";
    let v= document.getElementById("img");
    document.getElementById('img').style.width='600px';
    v.style.transform='rotate(45deg)';
   // a.style.position.abs
    
    console.log("hello");
}
function change3(){
    document.getElementById("img").src="Images/shoe.png";
    let x= document.getElementById("img");
    x.style.width='600px';
    x.transform='rotate(45deg)';


    console.log("hello");
}

