const teamNames=new Array();
const venues=["Arun Jaitley Stadium, Delhi"," M. A. Chidambaram Stadium, Chennai","Rajiv Gandhi International Cricket Stadium, Hyderabad","Eden Gardens, Kolkata","Narendra Modi Stadium, Ahmedabad","Chinnaswamy Stadium, Bangalore","Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium,	Lucknow","JSCA International Cricket Stadium	Ranchi"]
function add(){
     
    const getTeam=document.getElementById("teams").value;
    teamNames.push(getTeam);
    if(getTeam=='') 
    document.getElementById("disp").innerHTML="Please enter a valid Team Name❌";
    else document.getElementById("disp").innerHTML=getTeam+" - Added Successfully✅";
    document.getElementById("teams").value="";
}


function schedule(){
  const tourName=document.getElementById("tourName").value;
document.getElementById("res1").innerText=tourName+" Schedule";
const emp=new Array();
const he=document.getElementById("res");
const startDate = document.getElementById("startDate").value;
const currentDate = new Date(startDate);
for(let i=0;i<5;i+=1){
    for(let j=0;j<5;j+=1){
        if(i==j||i>j)  continue;
    else{      
             emp.push((teamNames[i]+" vs "+teamNames[j])+ " - ");
    }
}
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(emp);
  for(let i=0;i<emp.length;i++){
    const matchVenue=venues[(Math.floor(Math.random() * venues.length))];
    emp[i]+=currentDate.toDateString()+", Venue: "+matchVenue+".";
    currentDate.setDate(currentDate.getDate() + 1);
  }

  function resultArray(elementArray) {
    const container = document.getElementById('input-container2');
    elementArray.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('my-element');
        element.textContent = item;
        container.appendChild(element);
    });
}
resultArray(emp);
document.getElementById("disp").innerHTML="";
const jsonString = JSON.stringify(emp);
console.log( jsonString);
}





