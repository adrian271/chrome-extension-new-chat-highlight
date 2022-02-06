let checkForNew = () => {
  let chats = document.querySelectorAll(
    '[data-test-selector="chat-line-message-body"]'
  );
  chats.forEach((chat) => {
    if (!chat.classList.contains("tw-highlighter"))
      chat.classList.add("tw-highlighter");
  });
  console.log(chats);
};

setInterval(checkForNew, 100);
