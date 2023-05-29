function sendMail() {
  var params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  };
  const serviceID ="service_7pvvwqm"
  const templateID ="template_4za1b1j"
  
  emailjs.send(serviceID,templateID, params).then(
    res => {
      name : document.getElementById("name").value = "";
      email : document.getElementById("email").value = "";
      subject : document.getElementById("subject").value = "";
      message : document.getElementById("message").value = "";
      console.log(res);
      alert("Message sent");
    })
    .catch(console.log(err))
}
