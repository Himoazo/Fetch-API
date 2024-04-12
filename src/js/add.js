"use strict"
const url = "http://localhost:3000/api/"
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const company = document.getElementById("coName");
    const jobTitle = document.getElementById("title");
    const jobLocation = document.getElementById("location");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("slutDatum");

    let companyname = company.value;
    let jobtitle = jobTitle.value;
    let location = jobLocation.value;
    let startdate = startDate.value;
    let enddate = endDate.value;
    
    if(companyname && jobtitle && location && startdate){
        postData(companyname, jobtitle, location, startdate, enddate);
        company.value = "";
        jobTitle.value = "";
        jobLocation.value = "";
        startDate.value = "";
        endDate.value = "";
    }else{
        document.getElementById("printed").textContent = "Alla fält markerade med '*' måste fyllas i"
    }
});

async function postData(companyname, jobtitle, location, startdate, enddate){

    let exp = {
        companyname: companyname,
        jobtitle: jobtitle,
        location: location,
        startdate: startdate,
        enddate: enddate
    }

    let error;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(exp)
        });
        const data = await response.json();
        
    } catch (err) {
        error = err;
        console.error('Fetch error:', error);
        document.getElementById("postErr").textContent = "Det gick inte att lägga till pga: " + error.message;
    }finally{
        if(!error){
            document.getElementById("printed").textContent = "En arbetserfarenhet har laggts till och kan synas på startsidan"
        }
    }
}