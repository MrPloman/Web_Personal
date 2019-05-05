
//formulario de contacto y busqueda con BOOTSTRAP
'use strict';
window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });


//formulario de registro con jquery
    $(function() {

        $.validator.setDefaults({
            errorClass: 'text-danger',
            highlight: function(element) {
             $(element)
             .closest('.form-control')
             .addClass('is-invalid');
            },
            unhighlight: function(element) {
             $(element)
             .closest('.form-control')
             .removeClass('is-invalid');
            }
           });

        $.validator.addMethod('strongPass', function(value, element){
            return this.optional(element)
            ||value.length >=8
            && /\d/.test(value)
            && /[a-z]/i.test(value);
        }, "Your password must be at least 8 or more chracters and contains letters");

        $("#formRegister").validate({
            rules:{
                username:{
                    required: true
                },
                email:{
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    strongPass: true
                },
                repassword: {
                    required: true,
                    equalTo: "#inputPassword"
                },
                firstName:{
                    required: true,
                    nowhitespace: true,
                    lettersonly: true
                },
                firstSurname:{
                    required: true,
                    nowhitespace: true,
                    lettersonly: true
                },
                secondSurname:{
                    nowhitespace: true,
                    lettersonly: true
                },
                adress:{
                    required:true
                },
                adress2:{
                    required:true
                },
                city:{
                    required:true,
                    lettersonly: true
                },
                state:{
                    required:true
                },
                zip:{
                    required:true,
                }
            },
            messages:{
                username:{
                    required: 'Please enter a Username',
                    username: 'Please enter a valid Username',
                },
                email:{
                    required: 'Please enter an Email',
                    email: 'An email must contains @'
                },
                password:{
                    required: "Please introduce a Pass"
                },
                repassword:{
                    required: "Please introduce the same value"
                },
                firstName:{
                    required: "Please Introduce a real name"
                },
                firstSurname:{
                    required: "Please Introduce a real surname"
                }
            }
        });
    });

}, false);


