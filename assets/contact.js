function myMail(e) {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    phone_id: document.getElementById("phone").value,
    message: document.querySelector("textarea").value,
  };

  emailjs
    .send("service_b2l0xe7", "template_ocxokyl", params)
    .then(function (res) {
      alert("success! " + res.status);
    });
}
