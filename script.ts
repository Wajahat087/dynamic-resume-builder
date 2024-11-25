// Elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

// Preview elements
const previewName = document.getElementById("preview-name") as HTMLElement;
const previewEmail = document.getElementById("preview-email") as HTMLElement;
const previewPhone = document.getElementById("preview-phone") as HTMLElement;
const previewEducation = document.getElementById("preview-education") as HTMLElement;
const previewExperience = document.getElementById("preview-experience") as HTMLElement;
const previewSkills = document.getElementById("preview-skills") as HTMLElement;

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
[nameInput, emailInput, phoneInput, educationInput, experienceInput, skillsInput].forEach(input => {
  input.addEventListener("input", updatePreview);
});

// Submit Handler (Prevents Page Refresh)
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  alert("Resume generated successfully!");
});
