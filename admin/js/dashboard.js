function logout() {
    localStorage.clear();
    location.href = 'index.html';
}

$(document).ready(function() {
    $('#linkForm').form({
        fields: {
            productLink: {
                identifier: 'productLink',
                rules: [{
                        type: 'empty',
                        prompt: 'Please enter a url'
                    },
                    {
                        type: 'url',
                        prompt: 'Please enter proper url'
                    }
                ]
            },
        },
        onSuccess: function(e, fields) {
            e.preventDefault();
            console.log(fields);
        }
    });
});