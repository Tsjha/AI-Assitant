
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US"

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {

    //convert text to voice
    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command) {

        if (command.includes("open youtube")) {
            speak("Opening Youtube...");
            window.open("https://www.youtube.com", "_blank");
        }
        else if (command.includes("open facebook")) {
            speak("Opening facebook...");
            window.open("https://www.facebook.com", "_blank");
        }
        else if (command.includes("open instagram")) {
            speak("Opening instagram...");
            window.open("https://www.instagram.com", "_blank");
        }
        else if (command.includes("open whatsapp")) {
            speak("Opening whatsapp...");
            window.open("https://www.whatsapp.com", "_blank");
        }
        else if (command.includes("open google")) {
            speak("Opening google...");
            window.open('https://www.google.com', "_blank");
        }
        else if (command.includes("open linkedin")) {
            speak("Opening LinkedIn...");
            window.open("https://in.linkedin.com/", "_blank");
        }
        else if (command.includes("satyam jha")) {
            speak("Opening bio of satyam jha...");
            window.open("https://in.linkedin.com/in/tejashwi-satyam-5301a340/zh-cn?trk=people-guest_people_search-card", "_blank");
        }

        else {
            speak(`Searching on Google... ${command}`)
            window.open(`https://www.google.com/search?q=${command}`, "_blank");
        }
    }
    speak("Hello Tejashwi Satyam,how can I help you.")

    setTimeout(() => {
        btn.innerHTML = 'Listening...'
        btn.style.backgroundColor = "red";
        recognition.start()
    }, 2000);


    recognition.onresult = (event) => {
        const cmd = event.results[0][0].transcript.toLowerCase();
        handleCommands(cmd);
    };

    recognition.onend = () => {
        btn.innerHTML = '🎙️ Start listening'
        btn.style.backgroundColor = "#4CAF50";
    }
})

