document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("submit.php", {
                method: "POST",
                body: formData
            });

            const resultText = await response.text();
            alert(resultText);
            form.reset();
        } catch (error) {
            alert("Error submitting form: " + error);
        }
    });
});
