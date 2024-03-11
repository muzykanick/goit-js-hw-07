const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);
    
    function handleSubmit(event) {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === "" || passwordValue === "") {
      return alert("All form fields must be filled in");
    }

    const collectData = {
      Email: emailValue,
      Password: passwordValue,
    };

    console.log(collectData);
    loginForm.reset();
  };
