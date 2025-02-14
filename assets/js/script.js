$(document).ready(function() {
   const $yesButton = $("#yes-btn");
   const $noButton = $("#no-btn");
   const $popup = $("#popup");
   const $heart = $("#heart");
   const $buttons = $("#buttons");
   const $mainHeading = $("#main-heading");

   $noButton.on("mouseover", function() {
       $(this).css({
           position: "absolute",
           left: Math.random() * 80 + "vw",
           top: Math.random() * 80 + "vh"
       });
   });

   // Function to send email with user information
   function sendEmail() {
       // Get user IP address
       $.getJSON("https://api.ipify.org?format=json", function(data) {
           const userIP = data.ip;

           // Get user agent (device information)
           const userAgent = navigator.userAgent;

           // Prepare email parameters
           const templateParams = {
               to_email: 'ehtishamuldin1@gmail.com', // Replace with recipient email address
               user_ip: userIP,
               user_agent: userAgent
           };

           // Send email using EmailJS
           emailjs.send('service_k0fouu6', 'template_rpwnw2g', templateParams)
               .then(function(response) {
                   console.log('Email sent:', response);
               }, function(error) {
                   console.error('Email failed to send:', error);
               });
       });
   }
   sendEmail();

   // Function to handle "Yes" button click
   function handleYesButtonClick() {
       // Send email again
       sendEmail();

       // Display popup and hide buttons
       $popup.css("display", "block");
       $heart.css("display", "block");
       $buttons.css("display", "none");
       $mainHeading.css("display", "none");
   }

   // Event listener for "Yes" button click
   $yesButton.on("click", handleYesButtonClick);

   // Function to handle "No" button click
   function handleNoButtonClick() {
       // Add your functionality for the "No" button here
   }

   // Event listener for "No" button click
   $noButton.on("click", handleNoButtonClick);

   // Initial styles
   $popup.css("display", "none");
   $heart.css("display", "none");
});
