function startRecognition() {
    const recognition = new window.webkitSpeechRecognition();
  
    recognition.onresult = function(event) {
      const message = event.results[0][0].transcript;
      sendMessage(message);
    };
  
    recognition.start();
  }