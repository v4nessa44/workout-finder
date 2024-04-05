"use strict"
const apiKey = "";
let btn = document.querySelector("button");
let inputEl = document.querySelector("input");
let card = document.querySelector(".card");


const getWorkOut = async() =>{
    console.log(inputEl.value);
try{
    const muscle = inputEl.value.trim()
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
    const response = await fetch(url, {
        headers: {
            "X-Api-Key": apiKey,
        },
    });


    const data = await response.json();

     let muscleWork = data[0];
     console.log(muscleWork);

     let html = `
     
     <h2>${muscleWork.name}</h2>
     <ul class="workoutInfo">
         <li><b>Muscle Group:</b> ${muscleWork.muscle}</li>
         <li><b>Equipment: </b>${muscleWork.equipment} </li>
         <li><b>Difficulty Level:</b> ${muscleWork.difficulty}</li>
         <li><b>Instruction: </b> ${muscleWork.instructions}
         </li>  
     </ul>`
     
     //put html into card
     card.innerHTML = html;

    }catch (err){
        alert("Error");
        //console.log("Error");
    }
};

btn.addEventListener("click", getWorkOut);

/* 
<img src="Gym.jpg" alt="workout GIF"/>
    <h2>Name: Landmine twist</h2>
    <ul class="workoutInfo">
        <li><b>Muscle Group:</b> abdominals</li>
        <li><b>Equipment: </b>other </li>
        <li><b>Difficulty Level:</b> intermediate</li>
        <li><b>Instruction: </b>"Position a bar into a landmine or securely anchor it in a 
            corner. Load the bar to an appropriate weight. Raise the bar from the floor, 
            taking it to shoulder height with both hands with your arms extended in front
             of you. Adopt a wide stance. This will be your starting position. Perform the 
             movement by rotating the trunk and hips as you swing the weight all the way 
             down to one side. Keep your arms extended throughout the exercise. Reverse the 
             motion to swing the weight all the way to the opposite side. Continue alternating 
             the movement until the set is complete."
        </li>  
    </ul>

 */