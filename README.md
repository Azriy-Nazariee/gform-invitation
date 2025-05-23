# Google Forms Auto-Responder Script for Volunteer Registration

This Google Apps Script automatically sends a customized welcome email to users who submit a Google Form. It extracts the **full name** and **email** from the form responses and sends an HTML-formatted email with a link to join a WhatsApp group (or any other platform).

## 📋 Features

- Logs each submission for easy debugging
- Extracts respondent's **Full Name** and **Email**
- Sends a personalized **HTML welcome email**
- Includes a **join link** to your volunteer/event WhatsApp group
- Fallbacks to plain text if email clients don’t support HTML

## 🛠️ Setup Instructions

1. **Create a Google Form**  
   Include at least these two questions:
   - Full Name
   - Email Address

2. **Open Google Apps Script**
   - Click the three-dot menu on the Google Form → `Script editor`
   - Paste the contents of [`Code.gs`](./Code.gs) into the editor

3. **Replace Placeholder Text**
   - Replace `*event name*` with your event's name
   - Add your actual WhatsApp group link to the `whatsappGroupLink` variable

4. **Set up the Trigger**
   - In Apps Script: `Triggers (⏰ icon)` → `+ Add Trigger`
     - Choose function: `onFormSubmit`
     - Event type: `On form submit`

5. **Deploy**
   - Save and authorize the script when prompted
   - Test by submitting the form

## 📧 Example Email Output

![Example Email](./example.jpg)
