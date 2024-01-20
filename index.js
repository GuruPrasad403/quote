const btn = document.querySelector("#Getdata");
const Data =  document.querySelector(".addData");
const aut = document.querySelector("#author")
const api = "b2X4GjevFhATeaA1ogAUuiqU0eR0FlZSW1SUuxQc";
const cat = ["age","alone","amazing","anger","architecture","art","attitude","beauty","best","birthday","business","car","change","communication","computers","cool","courage","dad","dating","death","design","dreams","education","environmental","equality","experience","failure","faith","family","famous","fear","fitness","food","forgiveness","freedom","friendship","funny","future","god","good","government","graduation","great","happiness","health","history","home","hope","humor","imagination","inspirational","intelligence","jealousy","knowledge","leadership","learning","legal","life","love","marriage","medical","men","mom","money","morning","movies","success",
]
const selectElement = document.querySelector(".dynamic");

cat.forEach((e) => {
    const optionElement = document.createElement("option");
    optionElement.value = e;
    optionElement.text = e.toUpperCase();
    selectElement.appendChild(optionElement);
});
const options ={
    method:'GET',
    headers:{
        "X-Api-Key" : api,
    },
}
btn.addEventListener("click",getdata)
async function getdata (e){
    e.preventDefault();
url =`https://api.api-ninjas.com/v1/quotes?category=${selectElement.value}`
    const   response =  await fetch(url,options)
    console.log(response)
    const data = await response.json()
    console.log(data)
data.forEach(e=>{
    Data.innerHTML = e.quote
    aut.innerHTML=`-${e.author}`;
})    }

