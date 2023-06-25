// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", event=> {
    if (event.key === "ArrowLeft"){
        moveDodgerLeft();
    }else if (event.key === "ArrowRight"){
        moveDodgerRight();
    }else if (event.key === "ArrowUp"){
        moveDodgerUp();
    } else if (event.key === "ArrowDown"){
        moveDodgerDown();
    }
})

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt (leftNumbers, 10);

    if (left > 1){
        dodger.style.left =`${left - 10}px`
    }
}

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if(left <=359){
        dodger.style.left = `${left + 10}px`
    }
}

function moveDodgerUp(){
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom <= 359){
        dodger.style.bottom = `${bottom + 20}px`;
    }
}

function moveDodgerDown(){
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 1){
        dodger.style.bottom = `${bottom - 20}px`;
    }
}
