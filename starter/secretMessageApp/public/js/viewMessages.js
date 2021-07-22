<<<<<<< HEAD
document.querySelector("#viewMsg").addEventListener("click", (e) => {
    const userPasscodeGuess = document.querySelector("#passcode").value;
    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
            const data = snapshot.val()
            for (let key in data) {
                    if(data[key].passcode == userPasscodeGuess) {
                            display(data[key]);
                            console.log(data[key]);
                    }
            }
    })
})

function display(messageObject) {
    document.querySelector("#message").innerHTML = messageObject.message;
}

=======
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
	for(let key in data) {
          const message = data[key];
          console.log(message);
	}
    });
}


const findMessage = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
	for(let key in data) {
          const message = data[key];
          console.log(message);
 	  if(myPass == message.passcode) {
           renderMessage(message);
	  }
	}
    });
}

document.querySelector("#viewMsg").addEventListener("click", () => {
 const passcode = document.querySelector("#passcode").value;
 findMessage(passcode);
});
>>>>>>> 9346cb2fbb5f4a2dea8c5f0c30d4ff4d4c1ce0bb
