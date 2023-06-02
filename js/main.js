// HTML SELECTION
const elBody = document.querySelector(".js-body"),
elLoader = elBody.querySelector(".js-loader"),
elMainContent = elBody.querySelector(".js-main-content"),
templateJob = elBody.querySelector(".js-job-template"), // template
elJobList = elBody.querySelector(".js-job-list")

// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none")
  }, 800);
});

// VARIABLES
const api = "http://localhost:3000/jobList";


// GET LOCAL DATA
async function getLocalData() {
  const response = await fetch(api);
  const localData = await response.json();
  updateUserInterface(localData);
  return localData;
};

let templateJobContent = templateJob.content;
let elFragment = document.createDocumentFragment();

function updateUserInterface(item) {
  item.forEach((item)=> {
    const {
      company,
      logo,
      newBadge,
      featuredBadge,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools
    } = item;

    let templateItem = templateJobContent.cloneNode(true);

    const elJobItem = templateItem.querySelector(".js-item-job");
    const elJobElementImg = templateItem.querySelector(".js-job-element-img");
    const elCompanyName = templateItem.querySelector(".js-company-name");
    const elBadgeNew = templateItem.querySelector(".js-badge-new");
    const elBadgeFeatured = templateItem.querySelector(".js-badge-featured");
    const elJobTitle = templateItem.querySelector(".js-job-title");
    const elExtraInfo = templateItem.querySelector(".js-extra-info");


    // STATUS
    const status = ((role + ",").split() + (level + ",").split() + (languages + ",") + tools).split(","),
    statusResult = status.filter((e) => e !== '');

    elJobTitle.textContent = position;
    elJobElementImg.src = logo

    elFragment.appendChild(templateItem);
  });
  elJobList.appendChild(elFragment)
};

getLocalData();
