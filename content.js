// Find all the comments

let checkForNew = () => {
    let chats = document.querySelectorAll('[data-test-selector="chat-line-message-body"]')
    chats.forEach(chat => {
        // Check if they have already been marked with a class tw-highlighter
        if(!chat.classList.contains("tw-highlighter"))
        chat.classList.add("tw-highlighter") // Add class to represent their newness 
    });
    console.log(chats)
}

setInterval(checkForNew, 100)


// An effect will happen using css