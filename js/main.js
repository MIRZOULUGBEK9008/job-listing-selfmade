// HTML SELECTION
const elBody = document.querySelector(".js-body"),
elLoader = elBody.querySelector(".js-loader"),
elMainContent = elBody.querySelector(".js-main-content"),
elJobList = elBody.querySelector(".js-job-list"),
templateJob = elBody.querySelector(".js-job-template"), // template
elJobElementImg = templateJob.querySelector(".js-job-element-img"),
elCompanyName = templateJob.querySelector(".js-company-name"),
elBadgeNew = templateJob.querySelector(".js-badge-new"),
elBadgeFeatured = templateJob.querySelector(".js-badge-featured"),
elJobTitle = templateJob.querySelector(".js-job-title"),
elExtraInfo = templateJob.querySelector(".js-extra-info"),
elStatusList = templateJob.querySelector(".js-status-list"),
templateStatus = elBody.querySelector(".js-status-template"), // template
elStatusItem = templateStatus.querySelector(".js-status-item");

// VARIABLES
// const api = "http://localhost:3000/jobList";


// async function getLocalData() {
//   const response = await fetch(api);
//   const localData = await response.json();
//   return localData;
//   updateUserInterface(localData)
// };

// getLocalData();

// function updateUserInterface(item) {
//   item.forEach((item)=> {
//     elJobList.appendChild(templateJob)
//   });
// }


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none")
  }, 800);
});