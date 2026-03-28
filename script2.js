document.getElementById("formAdherents").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement

    const nom = document.getElementById("nom").value.trim();
    const postnom = document.getElementById("postnom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const lieuNaissance = document.getElementById("lieuNaissance").value.trim();
    const dateNaissance = document.getElementById("dateNaissance").value.trim();
    const dateBapteme = document.getElementById("dateBapteme").value.trim();
    const adresse = document.getElementById("adresse").value.trim();

    const message = document.getElementById("message");

    // Validation
    if (!nom || !postnom || !prenom || !lieuNaissance || !dateNaissance || !dateBapteme || !adresse) {
        message.textContent = "Veuillez remplir tous les champs.";
        message.style.color = "red";
        return;
    }

    // Ajout à la liste
    const liste = document.getElementById("listeAdherents");
    const nouvelAdherent = document.createElement("li");
    nouvelAdherent.textContent = `${nom}, ${postnom}, ${prenom}, ${lieuNaissance}, ${dateNaissance}, ${dateBapteme}, Adresse: ${adresse}`;
    liste.appendChild(nouvelAdherent);

    // Message de succès
    message.textContent = "Adhésion enregistrée avec succès !";
    message.style.color = "green";

    // Réinitialiser le formulaire
    document.getElementById("formAdherents").reset();
});