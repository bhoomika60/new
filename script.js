document.getElementById('contact-form')
.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = "New message from " + name; 
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    var mailto_link = 'mailto:appajigowda142002@gmail.com' + '?subject=' 
    + subject + '&body=' + encodeURIComponent(body);
    window.location.href = mailto_link;
  });