document.addEventListener("DOMContentLoaded", function () {
    const boutonsContainer = document.querySelector(".boutons");
    const affichage = document.querySelector(".affichage");

    // Liste des boutons
    const boutons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", "(", ")", "+",
        "=", ".", "⌫", "C",
    ];

    // Fonction pour ajuster la taille du texte selon la longueur
    function adjustFontSize() {
        let length = affichage.textContent.length;

        if (length > 10) {
            affichage.style.fontSize = "30px"; // Réduit la taille du texte si trop long
        } else if (length > 7) {
            affichage.style.fontSize = "40px";
        } else {
            affichage.style.fontSize = "60px"; // Taille normale
        }
    }

    // Ajouter les boutons dynamiquement
    boutons.forEach(texte => {
        const button = document.createElement("button");
        button.textContent = texte;
        button.classList.add("btn");
        boutonsContainer.appendChild(button);

        // Gérer les clics sur les boutons
        button.addEventListener("click", function () {
            if (texte === "C") {
                affichage.textContent = "";
                affichage.style.fontSize = "24px";
             // Réinitialiser la taille du texte
            } 
            
            else if (texte === "⌫") {
                affichage.textContent = affichage.textContent.slice(0, -1);
            }
            else if (texte === "=") {
                try {
                    let result = eval(affichage.textContent);
                    affichage.textContent = result.toString().substring(0, 40); // Limiter à 40 caractères
                } catch {
                    affichage.textContent = "Erreur";
                }
            } else {
                if (affichage.textContent.length < 40) { // Limite à 40 caractères
                    affichage.textContent += texte;
                }
            }
            adjustFontSize(); // Ajuster la taille du texte après chaque mise à jour
        });
    });
});
