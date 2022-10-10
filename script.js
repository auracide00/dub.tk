 function redirectAndCheck() {
                            const email = document.getElementsByClassName("sign-up")[0].value;
                            const password = document.getElementsByClassName("password")[0].value;
                            if(!email || !password) {
                                alert("Please fill out email and or password before submitting");
                                return;
                            }
                            else {
                                window.location = "main-page.html"
                            }
                            // check if email contains @ and .
                            if(!email.includes("@") || !email.includes(".")) {
                                alert("Please enter a valid email");
                                return;
                            }
                            if(password.length < 8) {
                                alert("Password must be at least 8 characters");
                                return;
                            }
                        }
function myFunction(x) {
  x.classList.toggle("change");
}