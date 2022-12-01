 window.addEventListener('keydown', handleKeyDown);


let positionX = 0;
let positionY = 0;

function handleKeyDown(event){


    const mimmiRunSprite = document.querySelector('#sprite-image')
    const mainArea = document.querySelector(".main-area")



    console.log(mainArea.position)

    if (event.key === "d") {
        console.log("you cliccked right arrow")
        positionX += 10;
        const rightLimit = mainArea.innerWidth -mimmiRunSprite.getBoundingClientRect().width
        if(positionX > rightLimit ){
            positionX = rightLimit
        }
        mimmiRunSprite.style.left = positionX + "px";
        mimmiRunSprite.style.transform = "scaleX(-1)"

    } else if (event.key === "a") {
        positionX -= 10;
        if(positionX < 0 ){
            positionX = 0
        }
        console.log("you clicked left arrow")
        mimmiRunSprite.style.left = positionX + "px";
        mimmiRunSprite.style.transform = "scaleX(1)"

    } else if (event.key === "w") {
        positionY -= 10;
        const topLimit = 0
        if(positionY > topLimit ){
            positionY = topLimit
        }
        mimmiRunSprite.style.top = positionY + "px";
        console.log("you cliccked top arrow")
        mimmiRunSprite.style.transform = "scaleY(+1)"

    }  else if (event.key === "s") {
        positionY += 10;

        const bottomLimit = mainArea.innerHeight -mimmiRunSprite.getBoundingClientRect().height
        console.log(bottomLimit)
        if(positionY > bottomLimit ){
            console.log("you reached the bottom limit")
            positionY = bottomLimit
        }

        console.log("you pressed q arrow")
        mimmiRunSprite.style.top = positionY + "px";
        
    }   
}


//play sprite animation
window.addEventListener('DOMContentLoaded', main)

let animationInterval;
let spriteSheet = document.getElementById("sprite-image");
let widthOfSpriteSheet = 1024;
let widthOfEachSprite = 128;

function main( ) {
    playAnimation();
}

function playAnimation() {
  let position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

function stopAnimation() {
    clearInterval(animationInterval);
  }



