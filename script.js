document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('errorMessage').innerText = 'Passwords do not match!';
        return;
    }

    const userData = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        if (data.success) {
            alert('Registration successful!');
        } else {
            document.getElementById('errorMessage').innerText = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('errorMessage').innerText = 'An error occurred. Please try again later.';
    }
});
