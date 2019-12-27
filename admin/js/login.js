$(document).ready(function() {
    $('#loginForm').form({
        fields: {
            email: {
                identifier: 'email',
                rules: [{
                        type: 'empty',
                        prompt: 'Please enter your e-mail'
                    },
                    {
                        type: 'email',
                        prompt: 'Please enter a valid e-mail'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [{
                        type: 'empty',
                        prompt: 'Please enter your password'
                    },
                    {
                        type: 'length[6]',
                        prompt: 'Your password must be at least 6 characters'
                    }
                ]
            }
        },
        onSuccess: function(e, fields) {
            e.preventDefault();
            console.log(fields);
            if (fields.email === 'admin@indiandimers.com' && fields.password === 'admin@123!') {
                localStorage.setItem('login', true);
                location.href = 'dashboard.html';
            } else {
                $('.ui.error.message').html('User not registered.');
                $('.ui.error.message').addClass('visible');
            }
        }
    });
});