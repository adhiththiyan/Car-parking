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



























// class parking{
//     constructor(){
//         this.vehicle=[]
//     }
//     filldetails(vno,vmodel,name,phone,checkin){
//         let vehicledetail={
//             vno,
//             vmodel,
//             name,
//             phone,
//             checkin,
//             checkout:null
//         }
//     this.vehicle.push(vehicledetail)
//     }
//     display(){
//         console.log(this.vehicle)
        
//     }
//     search(vehicleno){
//             let data=this.vehicle.find(n=>n.vno===vehicleno)
//             if(data==undefined){
//                 console.log(vehicleno+"no found")
//                 return false
//             }
//         console.log(data)
//     }
// checkoutvehicle(VNO,checkout_time){
//     let data=this.vehicle.find(n=>n.vno===VNO)
//     if (data==undefined){
//         console.log(VNO+"no found")
//         return false
//     }
//     let duration=(new Date(checkout_time)-new Date(data.checkin))/(1000*60)
//     let amount=0
//     let extratime=duration-30

//     if(duration<30){
//         amount=30
//     }
//     else{
//         amount=30+Math.ceil(extratime/30)*10
//     }
//     console.log("duartion is"+duration)
//     console.log("pay amount"+amount)
//     var a=document.getElementById("car").innerHTML=duration
//     var b=document.getElementById("amo").innerHTML=amount
//     var c=document.getElementById("no").innerHTML=VNO

// }  
// }

// const p1=new parking()
// p1.filldetails("ka-01-hh-3763","car","adhi",9566853297,new Date("03 01 2023 12:00:00"))
// p1.checkoutvehicle("ka-01-hh-3763",new Date("03 01 2023 14:00:00"))
