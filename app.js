const text = "I have come from a small family, and have big aspirations. I have been training for this moment to meet a Knight like you here, I challenge you to a duel.";
        const typingSpeed = 50; // Speed of typing in milliseconds
        let index = 0;
        const dialogueElement = document.getElementById("dialogue");
        typeText();

        function typeText() {
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    dialogueElement.innerHTML += text.charAt(i);
                }, i * typingSpeed);
            }
        }
