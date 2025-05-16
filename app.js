// Default safe ranges configuration
const defaultSafeRanges = {
  heartRate: {
    min: 50, // Reduced from 60
    max: 110, // Increased from 100
  },
  bloodPressure: {
    systolic: {
      min: 85, // Reduced from 90
      max: 150, // Increased from 140
    },
    diastolic: {
      min: 55, // Reduced from 60
      max: 95, // Increased from 90
    },
  },
  oxygenLevel: {
    min: 92, // Reduced from 95
    max: 100,
  },
};

// Current safe ranges (initialized with defaults)
let safeRanges = JSON.parse(JSON.stringify(defaultSafeRanges));

// Extended patient data structure with more information
const patients = [
  {
    id: 1,
    name: "John Doe",
    room: "101A",
    floor: "1st",
    photo: "https://i.pravatar.cc/150?img=1",
    vitals: {
      heartRate: 72,
      bloodPressure: { systolic: 120, diastolic: 80 },
      oxygenLevel: 98,
    },
    status: "stable",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 2,
    name: "Jane Smith",
    room: "203B",
    floor: "2nd",
    photo: "https://i.pravatar.cc/150?img=2",
    vitals: {
      heartRate: 85,
      bloodPressure: { systolic: 130, diastolic: 85 },
      oxygenLevel: 95,
    },
    status: "alert",
    priority: "high",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 3,
    name: "Robert Johnson",
    room: "ICU-1",
    floor: "3rd",
    photo: "https://i.pravatar.cc/150?img=3",
    vitals: {
      heartRate: 95,
      bloodPressure: { systolic: 145, diastolic: 95 },
      oxygenLevel: 92,
    },
    status: "alert",
    priority: "high",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 4,
    name: "Maria Garcia",
    room: "102A",
    floor: "1st",
    photo: "https://i.pravatar.cc/150?img=4",
    vitals: {
      heartRate: 68,
      bloodPressure: { systolic: 118, diastolic: 75 },
      oxygenLevel: 99,
    },
    status: "stable",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 5,
    name: "William Chen",
    room: "ICU-2",
    floor: "3rd",
    photo: "https://i.pravatar.cc/150?img=5",
    vitals: {
      heartRate: 110,
      bloodPressure: { systolic: 160, diastolic: 100 },
      oxygenLevel: 91,
    },
    status: "alert",
    priority: "high",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 6,
    name: "Sarah Thompson",
    room: "201A",
    floor: "2nd",
    photo: "https://i.pravatar.cc/150?img=6",
    vitals: {
      heartRate: 75,
      bloodPressure: { systolic: 125, diastolic: 82 },
      oxygenLevel: 97,
    },
    status: "stable",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 7,
    name: "Michael Brown",
    room: "202B",
    floor: "2nd",
    photo: "https://i.pravatar.cc/150?img=7",
    vitals: {
      heartRate: 88,
      bloodPressure: { systolic: 135, diastolic: 88 },
      oxygenLevel: 94,
    },
    status: "alert",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 8,
    name: "Emily Davis",
    room: "103B",
    floor: "1st",
    photo: "https://i.pravatar.cc/150?img=8",
    vitals: {
      heartRate: 70,
      bloodPressure: { systolic: 115, diastolic: 75 },
      oxygenLevel: 98,
    },
    status: "stable",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 9,
    name: "David Wilson",
    room: "ICU-3",
    floor: "3rd",
    photo: "https://i.pravatar.cc/150?img=9",
    vitals: {
      heartRate: 115,
      bloodPressure: { systolic: 155, diastolic: 95 },
      oxygenLevel: 90,
    },
    status: "alert",
    priority: "high",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 10,
    name: "Lisa Anderson",
    room: "204A",
    floor: "2nd",
    photo: "https://i.pravatar.cc/150?img=10",
    vitals: {
      heartRate: 78,
      bloodPressure: { systolic: 128, diastolic: 84 },
      oxygenLevel: 96,
    },
    status: "stable",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 11,
    name: "James Taylor",
    room: "104A",
    floor: "1st",
    photo: "https://i.pravatar.cc/150?img=11",
    vitals: {
      heartRate: 92,
      bloodPressure: { systolic: 142, diastolic: 92 },
      oxygenLevel: 93,
    },
    status: "alert",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
  {
    id: 12,
    name: "Sofia Rodriguez",
    room: "205B",
    floor: "2nd",
    photo: "https://i.pravatar.cc/150?img=12",
    vitals: {
      heartRate: 73,
      bloodPressure: { systolic: 122, diastolic: 78 },
      oxygenLevel: 97,
    },
    status: "stable",
    priority: "normal",
    lastCheck: new Date().toISOString(),
    history: {
      heartRate: [],
      bloodPressure: [],
      oxygenLevel: [],
    },
    safeRanges: JSON.parse(JSON.stringify(defaultSafeRanges)), // Initialize with defaults
  },
];

let currentFilter = "all";
let searchQuery = "";
let sortCriteria = "room";

// Chart instances
let heartRateChart, bloodPressureChart, oxygenChart;
let currentPatientId = null;
let updateInterval;

// DOM Elements
const patientList = document.getElementById("patientList");
const patientDetails = document.getElementById("patientDetails");
const alertBanner = document.getElementById("alertBanner");

let recentPatients = [];
const MAX_RECENT = 5;

// Alert management
let activeAlerts = new Map();
let lastAlertTime = new Map();
let dismissedAlerts = new Set(); // Track dismissed alerts

// Initialize history with some data points
function initializePatientHistory() {
  const now = new Date();
  patients.forEach((patient) => {
    // Generate 10 initial data points
    for (let i = 0; i < 10; i++) {
      const timestamp = new Date(now - (9 - i) * 2000).toLocaleTimeString();

      // Generate values close to current vitals
      const heartRate = Math.round(
        patient.vitals.heartRate + (Math.random() * 4 - 2)
      );
      const systolic = Math.round(
        patient.vitals.bloodPressure.systolic + (Math.random() * 4 - 2)
      );
      const diastolic = Math.round(
        patient.vitals.bloodPressure.diastolic + (Math.random() * 4 - 2)
      );
      const oxygen = Math.round(
        patient.vitals.oxygenLevel + (Math.random() * 2 - 1)
      );

      patient.history.heartRate.push({ x: timestamp, y: heartRate });
      patient.history.bloodPressure.push({ x: timestamp, y: systolic });
      patient.history.oxygenLevel.push({ x: timestamp, y: oxygen });
    }
  });
}

// Initialize the application
function init() {
  initializePatientHistory();
  renderPatientList();
  setupEventListeners();
  initializeCharts();
  initializeMobileView();
  initializeTheme(); // Initialize theme based on user preference

  // Track user interaction
  window.hasUserInteracted = false;
  document.addEventListener(
    "click",
    () => {
      window.hasUserInteracted = true;
    },
    { once: true }
  );

  // Start continuous monitoring
  startContinuousMonitoring();
}

// Initialize Chart.js charts
function initializeCharts() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 300,
      easing: "easeInOutQuart",
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(26, 26, 26, 0.9)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        titleFont: {
          family: "'Plus Jakarta Sans', sans-serif",
          size: 14,
          weight: "600",
        },
        bodyFont: {
          family: "'DM Sans', sans-serif",
          size: 12,
        },
        padding: 12,
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += Math.round(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
          drawBorder: false,
          lineWidth: 1,
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
          font: {
            family: "'DM Sans', sans-serif",
            size: 12,
          },
          padding: 10,
          callback: function (value) {
            return Math.round(value);
          },
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
        borderColor: "#c2f542",
        fill: true,
        backgroundColor: "rgba(194, 245, 66, 0.1)",
      },
      point: {
        radius: 0,
        hitRadius: 5,
        hoverRadius: 5,
        hoverBorderWidth: 2,
        hoverBackgroundColor: "#c2f542",
        hoverBorderColor: "#ffffff",
      },
    },
  };

  // Heart Rate Chart
  heartRateChart = new Chart(document.getElementById("heartRateChart"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Heart Rate",
          data: [],
          borderColor: "#c2f542",
          backgroundColor: "rgba(194, 245, 66, 0.1)",
          fill: true,
        },
      ],
    },
    options: {
      ...chartOptions,
      scales: {
        ...chartOptions.scales,
        y: {
          ...chartOptions.scales.y,
          min: safeRanges.heartRate.min - 20,
          max: safeRanges.heartRate.max + 20,
          ticks: {
            ...chartOptions.scales.y.ticks,
            stepSize: 20,
          },
        },
      },
    },
  });

  // Blood Pressure Chart
  bloodPressureChart = new Chart(
    document.getElementById("bloodPressureChart"),
    {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Systolic",
            data: [],
            borderColor: "#c2f542",
            backgroundColor: "rgba(194, 245, 66, 0.1)",
            fill: true,
          },
          {
            label: "Diastolic",
            data: [],
            borderColor: "#f5c842",
            backgroundColor: "rgba(245, 200, 66, 0.1)",
            fill: true,
          },
        ],
      },
      options: {
        ...chartOptions,
        scales: {
          ...chartOptions.scales,
          y: {
            ...chartOptions.scales.y,
            min: safeRanges.bloodPressure.diastolic.min - 20,
            max: safeRanges.bloodPressure.systolic.max + 20,
            ticks: {
              ...chartOptions.scales.y.ticks,
              stepSize: 20,
            },
          },
        },
      },
    }
  );

  // Oxygen Level Chart
  oxygenChart = new Chart(document.getElementById("oxygenChart"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Oxygen Level",
          data: [],
          borderColor: "#c2f542",
          backgroundColor: "rgba(194, 245, 66, 0.1)",
          fill: true,
        },
      ],
    },
    options: {
      ...chartOptions,
      scales: {
        ...chartOptions.scales,
        y: {
          ...chartOptions.scales.y,
          min: safeRanges.oxygenLevel.min - 5,
          max: safeRanges.oxygenLevel.max + 5,
          ticks: {
            ...chartOptions.scales.y.ticks,
            stepSize: 2,
          },
        },
      },
    },
  });
}

// Start continuous monitoring of all patients
function startContinuousMonitoring() {
  // Initial check of all patients
  patients.forEach((patient) => {
    checkVitalAlerts(patient);
  });

  // Set up interval for continuous monitoring
  setInterval(() => {
    patients.forEach((patient) => {
      // Simulate new vital signs
      simulateVitalSigns(patient.id);
      // Check for alerts
      checkVitalAlerts(patient);
    });
  }, 10000); // Check every 10 seconds instead of 2 seconds
}

// Check for vital sign alerts
function checkVitalAlerts(patient) {
  const alerts = [];
  const ranges = patient.safeRanges || defaultSafeRanges;
  let isAbnormal = false;

  // Skip if this patient's alerts were dismissed
  if (dismissedAlerts.has(patient.id)) {
    return;
  }

  if (
    patient.vitals.heartRate < ranges.heartRate.min ||
    patient.vitals.heartRate > ranges.heartRate.max
  ) {
    alerts.push(`Heart Rate: ${patient.vitals.heartRate} bpm`);
    isAbnormal = true;
  }

  if (
    patient.vitals.bloodPressure.systolic < ranges.bloodPressure.systolic.min ||
    patient.vitals.bloodPressure.systolic > ranges.bloodPressure.systolic.max
  ) {
    alerts.push(`Systolic BP: ${patient.vitals.bloodPressure.systolic}`);
    isAbnormal = true;
  }

  if (
    patient.vitals.bloodPressure.diastolic <
      ranges.bloodPressure.diastolic.min ||
    patient.vitals.bloodPressure.diastolic > ranges.bloodPressure.diastolic.max
  ) {
    alerts.push(`Diastolic BP: ${patient.vitals.bloodPressure.diastolic}`);
    isAbnormal = true;
  }

  if (patient.vitals.oxygenLevel < ranges.oxygenLevel.min) {
    alerts.push(`Oxygen Level: ${patient.vitals.oxygenLevel}%`);
    isAbnormal = true;
  }

  if (alerts.length > 0) {
    patient.status = "alert";
    patient.isAbnormal = true;
    showAlert(`${patient.name}: ${alerts.join(", ")}`, patient.id);
  } else {
    patient.status = "stable";
    patient.isAbnormal = false;
    // Remove from active alerts if all vitals are normal
    activeAlerts.delete(patient.id);
    lastAlertTime.delete(patient.id);
    updateAlertCount();
    updateAlertList();
  }

  // Update the patient list to reflect status changes
  renderPatientList();
}

// Simulate real-time data updates
function simulateVitalSigns(patientId) {
  const patient = patients.find((p) => p.id === patientId);
  if (!patient) return;

  // Generate new vital signs with slight variations
  const newHeartRate = Math.max(
    50,
    Math.min(120, patient.vitals.heartRate + (Math.random() * 4 - 2))
  );
  const newSystolic = Math.max(
    80,
    Math.min(
      160,
      Math.round(
        patient.vitals.bloodPressure.systolic + (Math.random() * 4 - 2)
      )
    )
  );
  const newDiastolic = Math.max(
    50,
    Math.min(
      100,
      Math.round(
        patient.vitals.bloodPressure.diastolic + (Math.random() * 4 - 2)
      )
    )
  );
  const newOxygen = Math.max(
    90,
    Math.min(100, patient.vitals.oxygenLevel + (Math.random() * 2 - 1))
  );

  // Update patient vitals
  patient.vitals = {
    heartRate: newHeartRate,
    bloodPressure: { systolic: newSystolic, diastolic: newDiastolic },
    oxygenLevel: newOxygen,
  };

  // Add to history
  const timestamp = new Date().toLocaleTimeString();
  patient.history.heartRate.push({ x: timestamp, y: newHeartRate });
  patient.history.bloodPressure.push({ x: timestamp, y: newSystolic });
  patient.history.oxygenLevel.push({ x: timestamp, y: newOxygen });

  // Keep only last 20 data points
  if (patient.history.heartRate.length > 20) {
    patient.history.heartRate.shift();
    patient.history.bloodPressure.shift();
    patient.history.oxygenLevel.shift();
  }

  // Update charts if this is the current patient
  if (currentPatientId === patientId) {
    updateCharts(patient);
    updateVitalSigns(patient);
  }

  // Update patient list
  renderPatientList();
}

// Swipe gesture handling
let touchStartX = 0;
let touchStartY = 0;
const SWIPE_THRESHOLD = 100;

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  // Check if it's a horizontal swipe (not a vertical scroll)
  if (
    Math.abs(deltaX) > Math.abs(deltaY) &&
    Math.abs(deltaX) > SWIPE_THRESHOLD
  ) {
    if (deltaX > 0) {
      // Swipe right - close modal
      closeModal();
    }
  }
}

// Event listeners
function setupEventListeners() {
  // Close modal when clicking outside
  patientDetails.addEventListener("click", (e) => {
    if (e.target === patientDetails) {
      closeModal();
    }
  });

  // Add swipe gesture support
  patientDetails.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  patientDetails.addEventListener("touchend", handleTouchEnd, {
    passive: true,
  });

  // Handle orientation changes
  window.addEventListener("orientationchange", () => {
    // Redraw charts on orientation change
    if (currentPatientId) {
      setTimeout(() => {
        const patient = patients.find((p) => p.id === currentPatientId);
        if (patient) {
          updateCharts(patient);
        }
      }, 100);
    }
  });

  // Handle resize events
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (currentPatientId) {
        const patient = patients.find((p) => p.id === currentPatientId);
        if (patient) {
          updateCharts(patient);
        }
      }
    }, 250);
  });
}

// Update charts with new data
function updateCharts(patient) {
  const timestamps = patient.history.heartRate.map((point) => point.x);
  const currentTheme = document.documentElement.classList.contains("light")
    ? "light"
    : "dark";

  // Get theme-appropriate colors
  const lineColor = currentTheme === "dark" ? "#c2f542" : "#3f88f5";
  const secondaryLineColor = currentTheme === "dark" ? "#f5c842" : "#f5a742";
  const gridColor =
    currentTheme === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.05)";
  const textColor =
    currentTheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";

  // Update chart colors based on theme
  const updateChartColors = (chart, primaryColor) => {
    if (
      chart &&
      chart.data &&
      chart.data.datasets &&
      chart.data.datasets.length > 0
    ) {
      chart.data.datasets[0].borderColor = primaryColor;
      chart.data.datasets[0].backgroundColor = `${primaryColor}1A`; // 10% opacity

      // Update scale colors
      if (chart.options && chart.options.scales) {
        chart.options.scales.y.grid.color = gridColor;
        chart.options.scales.y.ticks.color = textColor;
      }
    }
  };

  // Update Heart Rate Chart
  updateChartColors(heartRateChart, lineColor);
  heartRateChart.data.labels = timestamps;
  heartRateChart.data.datasets[0].data = patient.history.heartRate.map(
    (point) => point.y
  );
  heartRateChart.update();

  // Update Blood Pressure Chart
  updateChartColors(bloodPressureChart, lineColor);
  if (bloodPressureChart.data.datasets.length > 1) {
    bloodPressureChart.data.datasets[1].borderColor = secondaryLineColor;
    bloodPressureChart.data.datasets[1].backgroundColor = `${secondaryLineColor}1A`;
  }
  bloodPressureChart.data.labels = timestamps;
  bloodPressureChart.data.datasets[0].data = patient.history.bloodPressure.map(
    (point) => point.y
  );
  bloodPressureChart.data.datasets[1].data = patient.history.bloodPressure.map(
    (point) => point.y * 0.65
  );
  bloodPressureChart.update();

  // Update Oxygen Chart
  updateChartColors(oxygenChart, lineColor);
  oxygenChart.data.labels = timestamps;
  oxygenChart.data.datasets[0].data = patient.history.oxygenLevel.map(
    (point) => point.y
  );
  oxygenChart.update();

  // Update current values display
  document.getElementById("currentHeartRate").textContent = Math.round(
    patient.vitals.heartRate
  );
  document.getElementById("currentBP").textContent = `${Math.round(
    patient.vitals.bloodPressure.systolic
  )}/${Math.round(patient.vitals.bloodPressure.diastolic)}`;
  document.getElementById("currentO2").textContent = Math.round(
    patient.vitals.oxygenLevel
  );
  document.getElementById("lastUpdated").textContent =
    new Date().toLocaleTimeString();
}

// Modal functions
function openPatientDetail(patientId) {
  const patient = patients.find((p) => p.id === patientId);
  if (patient) {
    currentPatientId = patientId;
    document.getElementById("selectedPatientName").textContent = patient.name;
    document.getElementById("selectedPatientPhoto").src = patient.photo;
    patientDetails.classList.add("visible");

    // Start real-time updates
    clearInterval(updateInterval);
    updateInterval = setInterval(() => simulateVitalSigns(patientId), 2000);
  }
}

function closeModal() {
  patientDetails.classList.remove("visible");
  clearInterval(updateInterval);
  currentPatientId = null;
}

// Render patient list with updated styling
function renderPatientList() {
  const filteredPatients = filterAndSortPatients();
  const currentTheme = document.documentElement.classList.contains("light")
    ? "light"
    : "dark";

  // Define theme-appropriate text colors
  const primaryTextColor =
    currentTheme === "dark" ? "text-white" : "text-gray-900";
  const secondaryTextColor =
    currentTheme === "dark" ? "text-gray-400" : "text-gray-600";
  const dangerColor = currentTheme === "dark" ? "text-red-500" : "text-red-600";

  patientList.innerHTML = filteredPatients
    .map(
      (patient) => `
    <div class="card patient-card p-4 cursor-pointer hover:ring-2 hover:ring-[var(--accent-color)] transition-all ${
      patient.id === currentPatientId ? "selected" : ""
    }"
         onclick="selectPatient(${patient.id})">
      <div class="flex items-center space-x-3">
        <div class="relative flex-shrink-0">
          <img src="${patient.photo}" alt="${
        patient.name
      }" class="w-12 h-12 rounded-full">
          <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full ${
            patient.isAbnormal ? "bg-red-500" : "neon-bg"
          } ring-2 ring-[var(--bg-primary)]"></span>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold ${primaryTextColor} truncate">${
        patient.name
      }</h3>
            <span class="${secondaryTextColor} text-sm">Room ${
        patient.room
      }</span>
          </div>
          <div class="mt-1 flex items-center space-x-4 text-sm">
            <span class="${secondaryTextColor}">HR: <span class="${
        patient.vitals.heartRate < patient.safeRanges.heartRate.min ||
        patient.vitals.heartRate > patient.safeRanges.heartRate.max
          ? dangerColor
          : primaryTextColor
      }">${Math.round(patient.vitals.heartRate)}</span></span>
            <span class="${secondaryTextColor}">BP: <span class="${
        patient.vitals.bloodPressure.systolic <
          patient.safeRanges.bloodPressure.systolic.min ||
        patient.vitals.bloodPressure.systolic >
          patient.safeRanges.bloodPressure.systolic.max ||
        patient.vitals.bloodPressure.diastolic <
          patient.safeRanges.bloodPressure.diastolic.min ||
        patient.vitals.bloodPressure.diastolic >
          patient.safeRanges.bloodPressure.diastolic.max
          ? dangerColor
          : primaryTextColor
      }">${Math.round(patient.vitals.bloodPressure.systolic)}/${Math.round(
        patient.vitals.bloodPressure.diastolic
      )}</span></span>
            <span class="${secondaryTextColor}">O2: <span class="${
        patient.vitals.oxygenLevel < patient.safeRanges.oxygenLevel.min
          ? dangerColor
          : primaryTextColor
      }">${Math.round(patient.vitals.oxygenLevel)}%</span></span>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Select patient and show details
function selectPatient(patientId) {
  const patient = patients.find((p) => p.id === patientId);
  if (!patient) return;

  // Add to recent patients
  if (!recentPatients.find((p) => p.id === patient.id)) {
    recentPatients.unshift(patient);
    if (recentPatients.length > MAX_RECENT) {
      recentPatients.pop();
    }
  }

  // Update selected state
  currentPatientId = patientId;
  renderPatientList();

  // Update patient details
  document.getElementById("selectedPatientPhoto").src = patient.photo;
  document.getElementById("selectedPatientName").textContent = patient.name;
  updateVitalSigns(patient);

  // Show charts section
  patientDetails.classList.add("visible");

  // Start real-time updates for this patient's charts
  clearInterval(updateInterval);
  updateInterval = setInterval(() => {
    simulateVitalSigns(patientId);
  }, 2000);

  // Scroll to charts smoothly
  patientDetails.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Update vital signs display
function updateVitalSigns(patient) {
  const currentTheme = document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
  const primaryTextColor =
    currentTheme === "dark" ? "text-white" : "text-gray-900";
  const dangerColor = currentTheme === "dark" ? "text-red-500" : "text-red-600";

  document.getElementById("currentHeartRate").textContent = Math.round(
    patient.vitals.heartRate
  );
  document.getElementById("currentHeartRate").className = `text-2xl font-bold ${
    patient.vitals.heartRate < patient.safeRanges.heartRate.min ||
    patient.vitals.heartRate > patient.safeRanges.heartRate.max
      ? dangerColor
      : primaryTextColor
  }`;

  document.getElementById("currentBP").textContent = `${Math.round(
    patient.vitals.bloodPressure.systolic
  )}/${Math.round(patient.vitals.bloodPressure.diastolic)}`;
  document.getElementById("currentBP").className = `text-2xl font-bold ${
    patient.vitals.bloodPressure.systolic <
      patient.safeRanges.bloodPressure.systolic.min ||
    patient.vitals.bloodPressure.systolic >
      patient.safeRanges.bloodPressure.systolic.max ||
    patient.vitals.bloodPressure.diastolic <
      patient.safeRanges.bloodPressure.diastolic.min ||
    patient.vitals.bloodPressure.diastolic >
      patient.safeRanges.bloodPressure.diastolic.max
      ? dangerColor
      : primaryTextColor
  }`;

  document.getElementById("currentO2").textContent = Math.round(
    patient.vitals.oxygenLevel
  );
  document.getElementById("currentO2").className = `text-2xl font-bold ${
    patient.vitals.oxygenLevel < patient.safeRanges.oxygenLevel.min
      ? dangerColor
      : primaryTextColor
  }`;

  document.getElementById("lastUpdated").textContent =
    new Date().toLocaleTimeString();
}

// Filter and sort patients
function filterAndSortPatients() {
  let filtered = [...patients];

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (patient) =>
        patient.name.toLowerCase().includes(query) ||
        patient.room.toLowerCase().includes(query) ||
        patient.status.toLowerCase().includes(query)
    );
  }

  // Apply status filter
  if (currentFilter !== "all") {
    filtered = filtered.filter((patient) => {
      switch (currentFilter) {
        case "critical":
          return patient.priority === "high";
        case "alerts":
          return patient.status === "alert";
        case "stable":
          return patient.status === "stable";
        default:
          return true;
      }
    });
  }

  // Apply sorting
  filtered.sort((a, b) => {
    switch (sortCriteria) {
      case "room":
        return a.room.localeCompare(b.room);
      case "name":
        return a.name.localeCompare(b.name);
      case "status":
        return b.priority.localeCompare(a.priority);
      default:
        return 0;
    }
  });

  return filtered;
}

// Filter patients based on search input
function filterPatients() {
  searchQuery = document.getElementById("patientSearch").value;
  renderPatientList();
}

// Sort patients
function sortPatients() {
  sortCriteria = document.getElementById("sortBy").value;
  renderPatientList();
}

// Toggle filter chips
function toggleFilter(filter) {
  const chips = document.querySelectorAll(".filter-chip");
  const isCurrentlyActive = currentFilter === filter;

  // If clicking the same filter, reset to "all"
  if (isCurrentlyActive) {
    currentFilter = "all";
    chips.forEach((chip) => chip.classList.remove("active"));
  } else {
    // Otherwise, apply the new filter
    currentFilter = filter;
    chips.forEach((chip) => {
      if (chip.dataset.filter === filter) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });
  }

  // Update the patient list for both desktop and mobile views
  renderPatientList();
  updateMobilePatientList();
}

// Create mobile patient card
function createMobilePatientCard(patient) {
  const currentTheme = document.documentElement.classList.contains("light")
    ? "light"
    : "dark";

  // Define theme-appropriate text colors
  const primaryTextColor =
    currentTheme === "dark" ? "text-white" : "text-gray-900";
  const secondaryTextColor =
    currentTheme === "dark" ? "text-gray-400" : "text-gray-600";
  const dangerColor = currentTheme === "dark" ? "text-red-500" : "text-red-600";

  return `
    <div class="card p-3 cursor-pointer" onclick="selectPatient(${patient.id})">
      <div class="flex items-center space-x-3">
        <div class="relative flex-shrink-0">
          <img src="${patient.photo}" alt="${
    patient.name
  }" class="w-10 h-10 rounded-full">
          <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full ${
            patient.isAbnormal ? "bg-red-500" : "neon-bg"
          } ring-2 ring-[var(--bg-primary)]"></span>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start">
            <h3 class="text-base font-semibold ${primaryTextColor} truncate">${
    patient.name
  }</h3>
            <span class="${secondaryTextColor} text-sm">Room ${
    patient.room
  }</span>
          </div>
          <div class="mt-1 flex items-center space-x-3 text-sm">
            <span class="${secondaryTextColor}">HR: <span class="${
    patient.vitals.heartRate < patient.safeRanges.heartRate.min ||
    patient.vitals.heartRate > patient.safeRanges.heartRate.max
      ? dangerColor
      : primaryTextColor
  }">${Math.round(patient.vitals.heartRate)}</span></span>
            <span class="${secondaryTextColor}">BP: <span class="${
    patient.vitals.bloodPressure.systolic <
      patient.safeRanges.bloodPressure.systolic.min ||
    patient.vitals.bloodPressure.systolic >
      patient.safeRanges.bloodPressure.systolic.max ||
    patient.vitals.bloodPressure.diastolic <
      patient.safeRanges.bloodPressure.diastolic.min ||
    patient.vitals.bloodPressure.diastolic >
      patient.safeRanges.bloodPressure.diastolic.max
      ? dangerColor
      : primaryTextColor
  }">${Math.round(patient.vitals.bloodPressure.systolic)}/${Math.round(
    patient.vitals.bloodPressure.diastolic
  )}</span></span>
            <span class="${secondaryTextColor}">O2: <span class="${
    patient.vitals.oxygenLevel < patient.safeRanges.oxygenLevel.min
      ? dangerColor
      : primaryTextColor
  }">${Math.round(patient.vitals.oxygenLevel)}%</span></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Update mobile patient list based on current filter
function updateMobilePatientList() {
  const container = document.getElementById("mobileAlertPatients");
  const title = document.getElementById("patientListTitle");
  let filteredPatients = [...patients];

  // Apply current filter
  if (currentFilter !== "all") {
    filteredPatients = filteredPatients.filter((patient) => {
      switch (currentFilter) {
        case "critical":
          return patient.priority === "high";
        case "alerts":
          return patient.status === "alert";
        case "stable":
          return patient.status === "stable";
        default:
          return true;
      }
    });
  }

  // Apply search filter if there's a search query
  const searchQuery = document
    .getElementById("mobileSearch")
    .value.toLowerCase();
  if (searchQuery) {
    filteredPatients = filteredPatients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchQuery) ||
        patient.room.toLowerCase().includes(searchQuery)
    );
  }

  // Update the title based on the current filter
  let titleText = "All Patients";
  if (currentFilter !== "all") {
    titleText = `${
      currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)
    } Patients`;
  } else if (searchQuery) {
    titleText = "Search Results";
  }

  // Update the container with filtered patients
  container.innerHTML =
    filteredPatients.length > 0
      ? filteredPatients
          .map((patient) => createMobilePatientCard(patient))
          .join("")
      : '<div class="text-center text-gray-400 py-4">No patients found</div>';

  title.textContent = titleText;
}

// Show recent patients
function showRecentPatients() {
  const container = document.getElementById("mobileAlertPatients");
  const title = document.getElementById("patientListTitle");

  // Toggle between recent and all patients
  if (currentFilter === "recent") {
    currentFilter = "all";
    updateMobilePatientList();
    title.textContent = "All Patients";
  } else {
    currentFilter = "recent";
    container.innerHTML = recentPatients
      .map((patient) => createMobilePatientCard(patient))
      .join("");
    title.textContent = "Recent Patients";
  }

  // Update quick action buttons
  updateQuickActionButtons(currentFilter === "recent" ? "recent" : "all");
}

// Show alert patients
function showAlertPatients() {
  const container = document.getElementById("mobileAlertPatients");
  const title = document.getElementById("patientListTitle");

  // Toggle between alerts and all patients
  if (currentFilter === "alerts") {
    currentFilter = "all";
    updateMobilePatientList();
    title.textContent = "All Patients";
  } else {
    currentFilter = "alerts";
    const alertPatients = patients.filter(
      (patient) => patient.status === "alert"
    );
    container.innerHTML = alertPatients
      .map((patient) => createMobilePatientCard(patient))
      .join("");
    title.textContent = "Alert Patients";
  }

  // Update quick action buttons
  updateQuickActionButtons(currentFilter === "alerts" ? "alerts" : "all");
}

// Show patients by floor
function showByFloor(floor) {
  const container = document.getElementById("mobileAlertPatients");
  const title = document.getElementById("patientListTitle");

  // Toggle between floor and all patients
  if (currentFilter === floor) {
    currentFilter = "all";
    updateMobilePatientList();
    title.textContent = "All Patients";
  } else {
    currentFilter = floor;
    const floorPatients = patients.filter((patient) => patient.floor === floor);
    container.innerHTML = floorPatients
      .map((patient) => createMobilePatientCard(patient))
      .join("");
    title.textContent = `${floor} Floor Patients`;
  }

  // Update quick action buttons
  updateQuickActionButtons(currentFilter === floor ? floor : "all");
}

// Update quick action buttons
function updateQuickActionButtons(activeAction) {
  const buttons = document.querySelectorAll(".quick-action-btn");
  buttons.forEach((button) => {
    if (button.dataset.action === activeAction) {
      button.classList.add("active");
      button.classList.add("neon-bg");
      button.classList.add("text-[#1a1a1a]");
    } else {
      button.classList.remove("active");
      button.classList.remove("neon-bg");
      button.classList.remove("text-[#1a1a1a]");
    }
  });
}

// Handle mobile search
function handleMobileSearch() {
  const searchQuery = document
    .getElementById("mobileSearch")
    .value.toLowerCase();
  updateMobilePatientList();
}

// Clear mobile search
function clearMobileSearch() {
  document.getElementById("mobileSearch").value = "";
  updateMobilePatientList();
  document.body.classList.remove("mobile-search-focused");
}

// Initialize mobile view
function initializeMobileView() {
  currentFilter = "all"; // Set initial filter
  updateMobilePatientList();
  // Set initial active button
  updateQuickActionButtons("recent");
}

// Alert management
function toggleAlertDropdown() {
  const dropdown = document.getElementById("alertDropdown");
  dropdown.classList.toggle("hidden");

  // On mobile, scroll to top when opening dropdown
  if (window.innerWidth < 768) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updateAlertCount() {
  const alertCount = document.getElementById("alertCount");
  const mobileAlertCount = document.getElementById("mobileAlertCount");

  if (activeAlerts.size > 0) {
    // Update desktop count
    alertCount.textContent = activeAlerts.size;
    alertCount.classList.remove("hidden");
    alertCount.classList.add("bg-red-500");

    // Update mobile count
    mobileAlertCount.textContent = activeAlerts.size;
    mobileAlertCount.classList.remove("hidden");
  } else {
    // Hide both counts when no alerts
    alertCount.classList.add("hidden");
    alertCount.classList.remove("bg-red-500");
    mobileAlertCount.classList.add("hidden");
  }
}

function updateAlertList() {
  const alertList = document.getElementById("alertList");
  const mobileAlertList = document.getElementById("mobileAlertList");
  const currentTheme = document.documentElement.classList.contains("light")
    ? "light"
    : "dark";

  // Define theme-appropriate text colors
  const primaryTextColor =
    currentTheme === "dark" ? "text-white" : "text-gray-900";
  const secondaryTextColor =
    currentTheme === "dark" ? "text-gray-400" : "text-gray-600";
  const mutedTextColor =
    currentTheme === "dark" ? "text-gray-500" : "text-gray-400";
  const alertTextColor =
    currentTheme === "dark" ? "text-red-400" : "text-red-500";
  const bgColor =
    currentTheme === "dark"
      ? "bg-[rgba(255,255,255,0.05)]"
      : "bg-[rgba(0,0,0,0.05)]";

  const alertContent = Array.from(activeAlerts.entries())
    .map(([patientId, alert]) => {
      const patient = patients.find((p) => p.id === patientId);
      return `
        <div class="p-3 rounded-lg ${bgColor}">
          <div class="flex justify-between items-start">
            <div>
              <p class="${primaryTextColor} font-medium">${patient.name}</p>
              <p class="${secondaryTextColor} text-sm">Room ${patient.room}</p>
            </div>
            <button
              onclick="dismissPatientAlert(${patientId})"
              class="${secondaryTextColor} hover:${primaryTextColor}"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="${alertTextColor} text-sm mt-2">${alert}</p>
          <p class="${mutedTextColor} text-xs mt-1">${new Date().toLocaleTimeString()}</p>
        </div>
      `;
    })
    .join("");

  // Update both desktop and mobile alert lists
  alertList.innerHTML = alertContent;
  mobileAlertList.innerHTML = alertContent;
}

function toggleMobileAlertDropdown() {
  const dropdown = document.getElementById("mobileAlertDropdown");
  dropdown.classList.toggle("hidden");

  // Prevent body scroll when dropdown is open
  document.body.classList.toggle("overflow-hidden");
}

// Update dismissPatientAlert to close mobile dropdown after dismissing all alerts
function dismissPatientAlert(patientId) {
  activeAlerts.delete(patientId);
  lastAlertTime.delete(patientId);
  dismissedAlerts.add(patientId); // Add to dismissed set
  updateAlertCount();
  updateAlertList();

  // If no more alerts, close the mobile dropdown
  if (activeAlerts.size === 0) {
    const mobileDropdown = document.getElementById("mobileAlertDropdown");
    mobileDropdown.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// Close dropdowns when clicking outside
document.addEventListener("click", (event) => {
  const mobileDropdown = document.getElementById("mobileAlertDropdown");
  const mobileButton = event.target.closest("button");

  // If click is outside dropdown and not on the toggle button, close dropdown
  if (
    !mobileDropdown.contains(event.target) &&
    !mobileButton?.onclick?.toString().includes("toggleMobileAlertDropdown")
  ) {
    mobileDropdown.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});

// Enhanced alert system
function showAlert(message, patientId) {
  const alertBanner = document.getElementById("alertBanner");
  const alertMessage = document.getElementById("alertMessage");

  // Skip if this alert was previously dismissed
  if (dismissedAlerts.has(patientId)) {
    return;
  }

  // Round all numbers in the message to integers
  const roundedMessage = message.replace(/\d+\.?\d*/g, (match) =>
    Math.round(parseFloat(match))
  );

  // Check if this is a new alert or an update to an existing one
  const currentTime = Date.now();
  const lastAlert = lastAlertTime.get(patientId) || 0;
  const isNewAlert = !activeAlerts.has(patientId);
  const isUpdate = currentTime - lastAlert > 30000; // Only show banner if 30 seconds have passed

  // Always update the alert list
  activeAlerts.set(patientId, roundedMessage);
  lastAlertTime.set(patientId, currentTime);
  updateAlertCount();
  updateAlertList();

  // Only show banner for new alerts or updates after 30 seconds
  if (isNewAlert || isUpdate) {
    alertMessage.textContent = roundedMessage;
    alertBanner.classList.remove("hidden");
    alertBanner.classList.add("alert-pulse", "alert-slide-in");

    // Only trigger vibration and audio if the page has been interacted with
    if (document.hasFocus() && window.hasUserInteracted) {
      try {
        // Check if vibration is supported and allowed
        if (navigator.vibrate) {
          navigator.vibrate([200, 100, 200, 100, 200]);
        }
      } catch (e) {
        console.log("Vibration not supported or not allowed");
      }
    }

    // Auto-dismiss after 15 seconds
    setTimeout(() => {
      dismissAlert();
    }, 15000);
  }
}

function dismissAlert() {
  const alertBanner = document.getElementById("alertBanner");
  alertBanner.classList.remove("alert-pulse", "alert-slide-in");
  alertBanner.classList.add("hidden");
}

// Settings Modal Functions
function openSettingsModal() {
  const modal = document.getElementById("settingsModal");
  const patient = patients.find((p) => p.id === currentPatientId);
  if (!patient) return;

  // Update input values with patient's current safe ranges
  document.getElementById("heartRateMin").value =
    patient.safeRanges.heartRate.min;
  document.getElementById("heartRateMax").value =
    patient.safeRanges.heartRate.max;

  document.getElementById("systolicMin").value =
    patient.safeRanges.bloodPressure.systolic.min;
  document.getElementById("systolicMax").value =
    patient.safeRanges.bloodPressure.systolic.max;
  document.getElementById("diastolicMin").value =
    patient.safeRanges.bloodPressure.diastolic.min;
  document.getElementById("diastolicMax").value =
    patient.safeRanges.bloodPressure.diastolic.max;

  document.getElementById("oxygenMin").value =
    patient.safeRanges.oxygenLevel.min;
  document.getElementById("oxygenMax").value =
    patient.safeRanges.oxygenLevel.max;

  modal.classList.remove("hidden");
}

function closeSettingsModal() {
  const modal = document.getElementById("settingsModal");
  modal.classList.add("hidden");
}

function saveSettings() {
  const patient = patients.find((p) => p.id === currentPatientId);
  if (!patient) return;

  // Update patient's safe ranges
  patient.safeRanges.heartRate.min = parseInt(
    document.getElementById("heartRateMin").value
  );
  patient.safeRanges.heartRate.max = parseInt(
    document.getElementById("heartRateMax").value
  );

  patient.safeRanges.bloodPressure.systolic.min = parseInt(
    document.getElementById("systolicMin").value
  );
  patient.safeRanges.bloodPressure.systolic.max = parseInt(
    document.getElementById("systolicMax").value
  );
  patient.safeRanges.bloodPressure.diastolic.min = parseInt(
    document.getElementById("diastolicMin").value
  );
  patient.safeRanges.bloodPressure.diastolic.max = parseInt(
    document.getElementById("diastolicMax").value
  );

  patient.safeRanges.oxygenLevel.min = parseInt(
    document.getElementById("oxygenMin").value
  );
  patient.safeRanges.oxygenLevel.max = parseInt(
    document.getElementById("oxygenMax").value
  );

  // Recheck patient's vitals with new ranges
  checkVitalAlerts(patient);

  closeSettingsModal();
}

function resetToDefaults() {
  const patient = patients.find((p) => p.id === currentPatientId);
  if (!patient) return;

  // Reset patient's safe ranges to default values
  patient.safeRanges = JSON.parse(JSON.stringify(defaultSafeRanges));

  // Update input fields
  document.getElementById("heartRateMin").value =
    patient.safeRanges.heartRate.min;
  document.getElementById("heartRateMax").value =
    patient.safeRanges.heartRate.max;

  document.getElementById("systolicMin").value =
    patient.safeRanges.bloodPressure.systolic.min;
  document.getElementById("systolicMax").value =
    patient.safeRanges.bloodPressure.systolic.max;
  document.getElementById("diastolicMin").value =
    patient.safeRanges.bloodPressure.diastolic.min;
  document.getElementById("diastolicMax").value =
    patient.safeRanges.bloodPressure.diastolic.max;

  document.getElementById("oxygenMin").value =
    patient.safeRanges.oxygenLevel.min;
  document.getElementById("oxygenMax").value =
    patient.safeRanges.oxygenLevel.max;

  // Recheck patient's vitals with default ranges
  checkVitalAlerts(patient);
}

// Theme management
function initializeTheme() {
  // Check if user has a saved theme preference
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  // Set up event listeners for theme toggle buttons
  const mobileToggle = document.getElementById("darkModeToggle");
  const desktopToggle = document.getElementById("desktopDarkModeToggle");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleTheme);
  }

  if (desktopToggle) {
    desktopToggle.addEventListener("click", toggleTheme);
  }

  // Update toggle button icons to match current theme
  updateThemeToggleIcons(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

function setTheme(theme) {
  // Remove both theme classes and add the selected one
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(theme);

  // Save theme preference to localStorage
  localStorage.setItem("theme", theme);

  // Update toggle button icons
  updateThemeToggleIcons(theme);

  // Re-render patient list with correct colors
  renderPatientList();

  // Update mobile patient list
  updateMobilePatientList();

  // Update alert list with correct colors
  updateAlertList();

  // Re-render charts with new theme colors if needed
  if (currentPatientId) {
    const patient = patients.find((p) => p.id === currentPatientId);
    if (patient) {
      updateCharts(patient);
      updateVitalSigns(patient);
    }
  }
}

function updateThemeToggleIcons(theme) {
  // Define SVG paths for moon and sun icons
  const moonPath =
    "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";
  const sunPath =
    "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";

  // Get all toggle buttons
  const toggleButtons = [
    document.getElementById("darkModeToggle"),
    document.getElementById("desktopDarkModeToggle"),
  ];

  // Update the path for each button's icon
  toggleButtons.forEach((button) => {
    if (button) {
      const svgPath = button.querySelector("svg path");
      if (svgPath) {
        svgPath.setAttribute("d", theme === "dark" ? moonPath : sunPath);
      }
    }
  });
}

// Initialize the app
init();
