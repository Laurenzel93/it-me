//get the form by its id
const form = document.getElementById('contact-form');
const formEvent = form.addEventListener('submit', (event) => {
    event.preventDefault();
})
let mail = new FormData(form);
sendMail(mail);

const sendMail = (mail) => {
    fetch("link", {
        method: 'post',
        body: mail, 
    }).then((response) => {
        return response.json();
    });
};


// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "sender@email_address.com",
//         Password: "Enter your password",
//         To: 'lwenzelwebdev@gmail.com',
//         From: "sender@email_address.com",
//         Subject: "Sending Email using javascript",
//         Body: "Well that was easy!!",
//         Attachments: [
//             {
//                 name: "File_Name_with_Extension",
//                 path: "Full Path of the file"
//             }]
//     })
//         .then(function (message) {
//             alert("Mail has been sent successfully")
//         });
// }