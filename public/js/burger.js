document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');


    const textarea = document.getElementById('burger-textarea');


    // Handle when the customer form is submitted
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {

            burger_name: textarea.value.trim(),

        }
        fetch('/api/burgers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(function () {
                console.log("Success")
                window.location.reload()
            })
            .catch((err) => console.error(err));

    }
    document
        .getElementById('form-submit')
        .addEventListener('submit', handleFormSubmit);

    document.querySelectorAll('.devour-btn').forEach((button) => {
        button.addEventListener('click', (e) => {

            fetch('/api/burgers/' + button.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ devoured: true }),
            })
                .then(function () {
                    console.log("Success")
                    window.location.reload()
                })
                .catch((err) => console.error(err));


        })
    })
});