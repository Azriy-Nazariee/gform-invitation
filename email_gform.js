function onFormSubmit(e) {
  Logger.log("✅ SPKG 2025 Helper Form Submission Triggered");

  var response = e.response;
  if (!response) {
    Logger.log("🚨 ERROR: No response object received!");
    return;
  }

  var itemResponses = response.getItemResponses();
  var email = "";
  var fullName = "";
  var whatsappGroupLink = ""; // Replace with your actual WhatsApp group link

  // Extract full name and email
  for (var i = 0; i < itemResponses.length; i++) {
    var question = itemResponses[i].getItem().getTitle().toLowerCase();
    var answer = itemResponses[i].getResponse();

    if (Array.isArray(answer)) {
      answer = answer.join(", ");
    }
    answer = String(answer).trim();

    Logger.log("📝 " + question + " → " + answer);

    if (question.includes("full name")) {
      fullName = answer;
    }

    if (question.includes("email")) {
      email = answer;
    }
  }

  if (!email || !fullName) {
    Logger.log("🚨 ERROR: Missing email or full name.");
    return;
  }

  try {
    MailApp.sendEmail({
      to: email,
      subject: "Welcome to *event name* Team 🎉",
      body: "Dear Volunteers,\n\n"
        + "Thank you once again for registering to be part of the *event name* team. "
        + "We are truly delighted to have you on board and look forward to working with you in making this program a success.\n\n"
        + "To ensure you stay informed about important updates, planning details, and announcements, "
        + "we have created an official WhatsApp group for all confirmed volunteers.\n\n"
        + "📌 Join the group via the link here: " + whatsappGroupLink + "\n\n"
        + "Kindly join the group as soon as possible to avoid missing any essential information. "
        + "This will be our main communication platform leading up to and during the event days.\n\n"
        + "We look forward to your contributions and enthusiasm!\n\n"
        + "Warm regards,\n*event name* Secretariat",
      htmlBody: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <div style="text-align: center; max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #4CAF50;">🎉 Welcome, ${fullName}!</h2>
            <p>Thank you once again for registering to be part of the <strong>*event name*</strong>.</p>
            <p>We are truly delighted to have you on board and look forward to working with you in making this program a success.</p>
            <p>To ensure you stay informed about important updates, planning details, and announcements, we have created an official <strong>WhatsApp group</strong> for all confirmed volunteers.</p>
            <a href="${whatsappGroupLink}" style="display: inline-block; padding: 12px 20px; background: #25D366; color: white; text-decoration: none; border-radius: 5px;" target="_blank">Join WhatsApp Group</a>
            <p style="margin-top: 20px;">If the button doesn't work, here is the link:</p>
            <p><a href="${whatsappGroupLink}" target="_blank">${whatsappGroupLink}</a></p>
            <p>Kindly join the group as soon as possible to avoid missing any essential information. This will be our main communication platform leading up to and during the event days.</p>
            <p>We look forward to your contributions and enthusiasm!</p>
            <p style="font-size: 14px; color: #666;">– *event name* Secretariat</p>
          </div>
        </div>`
    });
    Logger.log("✅ Email sent successfully to: " + email);
  } catch (error) {
    Logger.log("🚨 ERROR: Unable to send email! " + error.message);
  }
}
