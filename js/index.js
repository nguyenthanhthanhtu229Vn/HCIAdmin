let clickHumbergerMenu = document.querySelector(".main_top .main_top-left i");
let slidebar = document.querySelector(".slide_bar");
clickHumbergerMenu.addEventListener("click", function (e) {
  slidebar.classList.toggle("active");
  document.querySelector(".main_content-wrap").classList.toggle("active");
});

let chooseItemSlidebar = document.querySelectorAll(".slide_bar-item");
let chooseItemSlidebarA = document.querySelectorAll(".slide_bar-item a");
let mainContent = document.querySelectorAll(".main_content");
chooseItemSlidebar.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    chooseItemSlidebarA.forEach((element, index) => {
      element.classList.remove("active");
      mainContent[index].classList.remove("active");
    });
    chooseItemSlidebarA[index].classList.add("active");
    mainContent[index].classList.add("active");
  });
});
const labels = [
  "Sân bóng đá",
  "Sân cầu lông",
  "Sân tennis",
  "Sân bóng rổ",
  "Sân gold",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Sân đã đặt",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "RGB(0, 188, 28)",
        "RGB(192, 151, 242)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(10,20,30)",
        "RGB(0, 188, 28)",
        "RGB(192, 151, 242)",
      ],
      data: [10, 5, 5, 2, 0, 1],
    },
  ],
};

const dataBar = {
  labels: labels,
  datasets: [
    {
      label: "Sân còn trống",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "RGB(0, 188, 28)",
        "RGB(192, 151, 242)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "RGB(0, 188, 28)",
        "RGB(192, 151, 242)",
      ],
      data: [0, 5, 5, 8, 10],
    },
  ],
};
const labels1Year = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];
const data1Year = {
  labels: labels1Year,
  datasets: [
    {
      label: "Tổng thu nhập 1 năm",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "RGB(0, 188, 28)",
        "RGB(192, 151, 242)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "RGB(0, 188, 28)",
        "RGB(192, 151, 242)",
      ],
      data: [0, 5, 5, 8, 10, 20, 6, 12, 0],
    },
  ],
};
const config1Year = {
  type: "line",
  data: data1Year,
  options: {
    animations: {
      tension: {
        duration: 2000,
        easing: "linear",
        from: 0,
        to: 0.5,
        loop: true,
      },
    },
  },
};
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const configBar = {
  type: "bar",
  data: dataBar,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

var myChart = new Chart(document.getElementById("checkIncheckOut"), config);
var myChart2 = new Chart(document.getElementById("availableSport"), configBar);
var myChart3 = new Chart(document.getElementById("totalChart"), config1Year);
