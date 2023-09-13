const submit = document.getElementById("submit");
const display = document.getElementById("display");
const searchVno = document.getElementById("searchVno").value;
const personName = document.querySelector(".personname")
const vehicleNumber = document.querySelector(".vehiclenumber")
const duration = document.querySelector(".duration")

function getDetails() {
    const vno = document.getElementById("vno").value;
    const name = document.getElementById("name").value;
    const checkIn = new Date();
    const phoneNo = document.getElementById("phoneno").value;
    let vehicle = {
        vno: vno,
        name: name,
        checkIn: checkIn.toString(),
        phoneNo: phoneNo
    };
    let storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    storedVehicles.push(vehicle);
    localStorage.setItem("vehicles", JSON.stringify(storedVehicles));
}

function checkOut(vno) {
    let storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    let foundVehicle = storedVehicles.find(vehicle => vehicle.vno === vno);
    
    if (foundVehicle) {
        const checkInTime = new Date(foundVehicle.checkIn);
        const checkOutTime = new Date();
        const timesecond = checkOutTime - checkInTime;
        const time = Math.floor(timesecond / (1000 * 60));
        
        let amount
        var extraTime = time - 30
        if(time <= 30){
            amount = 30
        }
        else{
            amount = 30 + Math.ceil(extraTime/30)*10          
        } 
        let dis = document.querySelector(".amount")
        dis.style.visibility = "visible"
        let amt = dis.querySelector("h1")
        duration.innerHTML = `the duration is ${time} minutes`
        personName.innerHTML = `The person name is ${foundVehicle.name}`
        vehicleNumber.innerHTML = `The vehicle number is ${foundVehicle.vno}`
        amt.innerHTML = `The amount is ${amount}RS`        
       
    } else {
        let dis = document.querySelector(".amount")
        dis.style.visibility = "visible"
        let amt = dis.querySelector("h1")       
        amt.innerHTML = `The vehicle number: ${vno} is not fount`    
       
    }
    
}
submit.addEventListener("click", getDetails);
display.addEventListener("click", () => {
    const searchVno = document.getElementById("searchVno").value;
    checkOut(searchVno);
});
backBtn.addEventListener("click",()=>{
    let dis = document.querySelector(".amount")
    dis.style.visibility = "hidden"
})
