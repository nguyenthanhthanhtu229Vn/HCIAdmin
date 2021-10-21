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

// Tạo sân
let btnCreate = document.querySelector(".main_content .createBtn");
let layout = document.querySelector(".layout");
let create_Pitch = document.querySelector(".create_Pitch");
let main_top = document.querySelector(".main_top");
btnCreate.addEventListener("click", function (e) {
  layout.classList.add("active");
  create_Pitch.classList.add("active");
  main_top.classList.add("active");
});

let close = document.querySelector(".create_Pitch .close");
close.addEventListener("click", function (e) {
  layout.classList.remove("active");
  create_Pitch.classList.remove("active");
  main_top.classList.remove("active");
});

let namePitch = document.getElementById("namePitch");
let typePitch = document.getElementById("typePitch");
let timeStart = document.getElementById("timeStart");
let timeEnd = document.getElementById("timeEnd");
let pricePitch = document.getElementById("pricePitch");
let statusPitch = document.getElementById("statusPitch");
let createButton = document.querySelector(".action .createButton");
let listPitch = document.getElementById("listPitch");
let row = document.createElement("tr");
let column1 = document.createElement("td");
let column2 = document.createElement("td");
let column3 = document.createElement("td");
let column4 = document.createElement("td");
let column5 = document.createElement("td");
let column6 = document.createElement("td");
let div = document.createElement("div");
div.classList.add("imgTable");
let p = document.createElement("p");
let img = document.createElement("img");
let editBtn = document.createElement("p");
editBtn.classList.add("editBtn");
let deleteBtn = document.createElement("p");
deleteBtn.classList.add("deleteBtn");
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVCRj2Zr3MWYKnfQ0ocXC4JjzqR2UYCwJCg&usqp=CAU";
namePitch.addEventListener("change", function (e) {
  p.textContent = namePitch.value;
});
typePitch.addEventListener("change", function (e) {
  column2.textContent = typePitch.value;
});
statusPitch.addEventListener("change", function (e) {
  column3.textContent = statusPitch.value;
});
timeStart.addEventListener("change", function (e) {
  column4.textContent = timeStart.value + "-" + timeEnd.value;
});
timeEnd.addEventListener("change", function (e) {
  column4.textContent = timeStart.value + "-" + timeEnd.value;
});
p.textContent = namePitch.value;
column2.textContent = typePitch.value;
column3.textContent = statusPitch.value;
column4.textContent = timeStart.value + "-" + timeEnd.value;
editBtn.textContent = "Sửa";
deleteBtn.textContent = "Xóa";
column6.textContent = "...";
if (statusPitch.value == "Đang hoạt động") {
  column3.style.color = "green";
} else {
  column3.style.color = "red";
}
createButton.addEventListener("click", function (e) {
  div.appendChild(img);
  column1.appendChild(div);
  column1.appendChild(p);
  column5.appendChild(editBtn);
  column5.appendChild(deleteBtn);
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column5);
  row.appendChild(column6);
  listPitch.appendChild(row);
  alert("Tạo sân thành công");
});

let deleteAction = document.querySelectorAll(".pitch .deleteBtn");
let pitchTr = document.querySelectorAll(".pitch tbody tr");
let deleteConfirm = document.querySelector(".confirm_delete");
deleteAction.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    layout.classList.add("active");
    main_top.classList.add("active");
    deleteConfirm.classList.add("active");
    let btnSuccess = document.querySelector(
      ".confirm_delete .option button:first-child"
    );
    let btnCancel = document.querySelector(
      ".confirm_delete .option button:last-child"
    );
    btnSuccess.addEventListener("click", function (e) {
      pitchTr[index].style.display = "none";
      layout.classList.remove("active");
      main_top.classList.remove("active");
      deleteConfirm.classList.remove("active");
    });
    btnCancel.addEventListener("click", function (e) {
      layout.classList.remove("active");
      main_top.classList.remove("active");
      deleteConfirm.classList.remove("active");
    });
  });
});
