document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    const newBurgerInput = document.querySelector('new-burger');
    const goneBurgerInput = document.querySelector('gone-burger');
    const formSubmitInput = document.getElementById('form-submit');


    // Handle when the customer form is submitted
    const handleFormSubmit = (e) => {
        e.preventDefault();


        burger_name: formSubmitInput.value.trim(),

        }
    fetch('/api/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(function () {
            console.log("Success")
        })
        .catch((err) => console.error(err));


    document
        .getElementById('form-submit')
        .addEventListener('submit', handleFormSubmit);
});