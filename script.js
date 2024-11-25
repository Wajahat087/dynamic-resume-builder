// Elements
var form = document.getElementById("resume-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
var skillsInput = document.getElementById("skills");
// Preview elements
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewPhone = document.getElementById("preview-phone");
var previewEducation = document.getElementById("preview-education");
var previewExperience = document.getElementById("preview-experience");
var previewSkills = document.getElementById("preview-skills");
// Update Preview
function updatePreview() {
    previewName.textContent = nameInput.value || "Your Name";
    previewEmail.textContent = emailInput.value || "Your Email";
    previewPhone.textContent = phoneInput.value || "Your Phone Number";
    previewEducation.textContent = educationInput.value || "Your Education Details";
    previewExperience.textContent = experienceInput.value || "Your Work Experience";
    previewSkills.textContent = skillsInput.value ? skillsInput.value.split(",").join(", ") : "Your Skills";
}
// Event Listeners for Real-Time Update
[nameInput, emailInput, phoneInput, educationInput, experienceInput, skillsInput].forEach(function (input) {
    input.addEventListener("input", updatePreview);
});
// Submit Handler (Prevents Page Refresh)
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Resume generated successfully!");
});
