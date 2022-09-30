//kurye bahsis hesaplama programi

bahsisDOM = document.querySelector("#bahsis")
bahsisSonuc = 0;
let kr5 = document.querySelector("#kr5")
let kr10 = document.querySelector("#kr10")
let kr25 = document.querySelector("#kr25")
let kr50 = document.querySelector("#kr50")
let tl1 = document.querySelector("#tl1")
let tl5 = document.querySelector("#tl5")
let tl10 = document.querySelector("#tl10")
let tl20 = document.querySelector("#tl20")
let tl50 = document.querySelector("#tl50")
let tl100 = document.querySelector("#tl100")
let tl200 = document.querySelector("#tl200")

bahsisDOM.innerHTML = bahsisSonuc;

kr5.addEventListener("click",clickEvent)
kr10.addEventListener("click",clickEvent)
kr25.addEventListener("click",clickEvent)
kr50.addEventListener("click",clickEvent)
tl1.addEventListener("click",clickEvent)
tl5.addEventListener("click",clickEvent)
tl10.addEventListener("click",clickEvent)
tl20.addEventListener("click",clickEvent)
tl50.addEventListener("click",clickEvent)
tl100.addEventListener("click",clickEvent)
tl200.addEventListener("click",clickEvent)

function clickEvent(){
    //console.log(this.id)
    if( this.id== "kr5" ){
        bahsisDOM.innerHTML = `${bahsisSonuc += 0.05} tl`;
    }else if( this.id == "kr10"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 0.1} tl`;
    }else if( this.id == "kr25"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 0.25} tl`;
    }else if( this.id == "kr50"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 0.5} tl`;
    }else if( this.id == "tl1"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 1} tl`;
    }else if( this.id == "tl5"){
        bahsisDOM.innerHTML =`${bahsisSonuc += 5} tl` ;
    }else if( this.id == "tl10"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 10} tl`;
    }else if( this.id == "tl20"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 20} tl`;
    }else if( this.id == "tl50"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 50} tl`;
    }else if( this.id == "tl100"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 100} tl`;
    }else if( this.id == "tl200"){
        bahsisDOM.innerHTML = `${bahsisSonuc += 200} tl`;
    }
}