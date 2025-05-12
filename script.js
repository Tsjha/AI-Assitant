// Check if SpeechRecognition is supported
if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    document.querySelector("#message").textContent =
        "Your browser doesn't support voice recognition. Please use Google Chrome.";
} else {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    const btn = document.querySelector("#btn");

    // Convert text to speech
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    // Handle voice commands
    function handleCommands(command) {
        if (command.includes("open youtube")) {
            speak("Opening YouTube...");
            window.open("https://www.youtube.com", "_blank");
        } else if (command.includes("open facebook")) {
            speak("Opening Facebook...");
            window.open("https://www.facebook.com", "_blank");
        } else if (command.includes("open instagram")) {
            speak("Opening Instagram...");
            window.open("https://www.instagram.com", "_blank");
        } else if (command.includes("open whatsapp")) {
            speak("Opening WhatsApp...");
            window.open("https://www.whatsapp.com", "_blank");
        } else if (command.includes("open google")) {
            speak("Opening Google...");
            window.open("https://www.google.com", "_blank");
        } else if (command.includes("open linkedin")) {
            speak("Opening LinkedIn...");
            window.open("https://in.linkedin.com", "_blank");
        } else if (command.includes("satyam jha")) {
            speak("Opening bio of Satyam Jha...");
            window.open("https://in.linkedin.com/in/tejashwi-satyam-5301a340", "_blank");
        }
        else if (command.includes("play music")) {
            speak("Playing music on YouTube...");
            window.open("https://www.youtube.com/results?search_query=music", "_blank");
        }
        else if (command.includes("weather")) {
            speak("Here's the weather forecast.");
            window.open("https://www.google.com/search?q=weather", "_blank");
        }
        else if (command.includes("news")) {
            speak("Fetching latest news.");
            window.open("https://news.google.com", "_blank");
        }
        else if (command.includes("tell me a joke")) {
            speak("Why don't scientists trust atoms? Because they make up everything!");
        }


        else {
            speak(`Searching Google for ${command}...`);
            window.open(`https://www.google.com/search?q=${command}`, "_blank");
        }
    }

    // Start listening on button click
    btn.addEventListener("click", () => {
        speak("Hello Tejashwi Satyam, how can I help you?");
        setTimeout(() => {
            btn.textContent = "Listening...";
            btn.style.backgroundColor = "red";
            recognition.start();
        }, 2000);
    });

    // When voice input is detected
    recognition.onresult = (event) => {
        const cmd = event.results[0][0].transcript.toLowerCase();
        handleCommands(cmd);
    };

    // Reset button when recognition ends
    recognition.onend = () => {
        btn.textContent = "🎙️ Start listening";
        btn.style.backgroundColor = "#4CAF50";
    };

    // Handle recognition errors
    recognition.onerror = (event) => {
        speak("Sorry, an error occurred. Please try again.");
        console.error("Speech recognition error:", event.error);
        btn.textContent = "🎙️ Start listening";
        btn.style.backgroundColor = "#4CAF50";
    };
}
