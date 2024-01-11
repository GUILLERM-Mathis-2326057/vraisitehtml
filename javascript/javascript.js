const modeButton = document.getElementById("mode-button");

    modeButton.addEventListener("click", function() {
      // Active le mode sombre
      document.body.classList.toggle("mode-dark");
    });