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

// Track if swipe hint has been shown
let hasShownSwipeHint = localStorage.getItem("hasShownSwipeHint") === "true";

// Function to show a swipe hint toast the first time a user clicks a message
function showSwipeHintToast() {
  if (!hasShownSwipeHint) {
    showToast("Swipe left on this message to see options", "info", 3000);
    localStorage.setItem("hasShownSwipeHint", "true");
    hasShownSwipeHint = true;
  }
}

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
  // Start continuous monitoring
  startContinuousMonitoring();
  initializeMessagesPage(); // Add messages page initialization

  // Add keyboard event listeners for modals
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Close any open modals
      closeHelpModal();
      closeSettingsModal();
      closeNewMessageModal();
    }
  });
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

  // Add event listeners for mobile navigation buttons
  const reportsButton = document.getElementById("reportsNavButton");
  const accountButton = document.getElementById("accountNavButton");

  if (reportsButton) {
    reportsButton.addEventListener("click", () => {
      showToast("Reports button clicked", "info", 2000);
    });
  }

  if (accountButton) {
    accountButton.addEventListener("click", () => {
      showToast("Account button clicked", "info", 2000);
    });
  }

  // Add event listeners for desktop navigation buttons
  const desktopHomeButton = document.getElementById("desktopHomeNavLink");
  const desktopMessagesButton = document.getElementById(
    "desktopMessagesNavLink"
  );
  const desktopReportsButton = document.getElementById(
    "desktopReportsNavButton"
  );

  if (desktopHomeButton) {
    desktopHomeButton.addEventListener("click", () => {
      // Navigate to home - same behavior as mobile home button
      const messagesPage = document.getElementById("messagesPage");
      const mainContent = document.querySelector("main");

      messagesPage.classList.add("hidden");
      mainContent.classList.remove("hidden");

      // Update active states
      document.querySelectorAll("nav a").forEach((navLink) => {
        navLink.classList.remove("text-white");
        navLink.classList.add("text-gray-300");
      });
      desktopHomeButton.classList.remove("text-gray-300");
      desktopHomeButton.classList.add("text-white");
    });
  }

  if (desktopMessagesButton) {
    desktopMessagesButton.addEventListener("click", () => {
      // Navigate to messages page - same behavior as mobile messages button
      const messagesPage = document.getElementById("messagesPage");
      const mainContent = document.querySelector("main");

      mainContent.classList.add("hidden");
      document.querySelectorAll(".page").forEach((page) => {
        page.classList.add("hidden");
      });
      messagesPage.classList.remove("hidden");

      // Update active states
      document.querySelectorAll("nav a").forEach((navLink) => {
        navLink.classList.remove("text-white");
        navLink.classList.add("text-gray-300");
      });
      desktopMessagesButton.classList.remove("text-gray-300");
      desktopMessagesButton.classList.add("text-white");

      // Render message list
      if (typeof renderMessageList === "function") {
        renderMessageList();
      }
    });
  }

  if (desktopReportsButton) {
    desktopReportsButton.addEventListener("click", () => {
      showToast("Reports button clicked", "info", 2000);
    });
  }

  // Add event listener for profile button
  const profileButton = document.getElementById("profileButton");
  if (profileButton) {
    profileButton.addEventListener("click", () => {
      showToast("Profile button clicked", "info", 2000);
    });
  }
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

// Help Modal Functions
function openHelpModal() {
  const modal = document.getElementById("helpModal");
  modal.classList.remove("hidden");

  // Focus the close button for accessibility
  setTimeout(() => {
    const closeButton = modal.querySelector(
      'button[onclick="closeHelpModal()"]'
    );
    if (closeButton) {
      closeButton.focus();
    }
  }, 100);
}

function closeHelpModal() {
  const modal = document.getElementById("helpModal");
  modal.classList.add("hidden");
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

// Message functions
function openNewMessageModal() {
  const modal = document.getElementById("newMessageModal");
  if (modal) {
    modal.classList.remove("hidden");

    // Reset the form
    document.getElementById("newMessageForm").reset();
    document.getElementById("attachedFileName").textContent = "";
  }
}

function closeNewMessageModal() {
  const modal = document.getElementById("newMessageModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

// Messages data structure to store messages
const messages = [
  {
    id: 1,
    sender: {
      id: 2,
      name: "Jane Smith",
      role: "Nurse",
      room: "203B",
      photo: "https://i.pravatar.cc/150?img=2",
    },
    subject: "Blood pressure readings are concerning",
    content:
      "Patient's systolic pressure has increased to 160. Please review the latest readings and advise on next steps.",
    timestamp: new Date().setHours(new Date().getHours() - 1),
    isRead: false,
    priority: "urgent",
    tag: "Urgent",
  },
  {
    id: 2,
    sender: {
      id: 5,
      name: "William Chen",
      role: "Doctor",
      room: "ICU-2",
      photo: "https://i.pravatar.cc/150?img=5",
    },
    subject: "Medication update for patient in ICU-2",
    content:
      "I've adjusted the medication schedule. Please ensure the updated dosage is administered as per the new schedule attached.",
    timestamp: new Date().setDate(new Date().getDate() - 1),
    isRead: false,
    priority: "normal",
    tag: "Update",
  },
  {
    id: 3,
    sender: {
      id: 3,
      name: "Robert Johnson",
      role: "Lab",
      room: "ICU-1",
      photo: "https://i.pravatar.cc/150?img=3",
    },
    subject: "Lab results available",
    content:
      "The lab results for patient Robert Johnson are now available. Please review at your earliest convenience.",
    timestamp: new Date().setDate(new Date().getDate() - 1),
    isRead: false,
    priority: "normal",
    tag: "Lab Results",
  },
  {
    id: 4,
    sender: {
      id: 1,
      name: "John Doe",
      role: "Nurse",
      room: "101A",
      photo: "https://i.pravatar.cc/150?img=1",
    },
    subject: "Patient status update",
    content:
      "Patient is recovering well after the procedure. Vital signs are stable and pain is being managed with current medication.",
    timestamp: new Date().setDate(new Date().getDate() - 3),
    isRead: true,
    priority: "normal",
    tag: "Status Update",
  },
  {
    id: 5,
    sender: {
      id: 4,
      name: "Maria Garcia",
      role: "Admin",
      room: "102A",
      photo: "https://i.pravatar.cc/150?img=4",
    },
    subject: "Staff meeting reminder",
    content:
      "Reminder that we have a staff meeting scheduled for Friday at 2:00 PM. Please prepare your weekly reports.",
    timestamp: new Date().setDate(new Date().getDate() - 10),
    isRead: true,
    priority: "normal",
    tag: "Meeting",
  },
];

// Enhanced initializeMessagesPage function
function initializeMessagesPage() {
  const messagesNavLink = document.getElementById("messagesNavLink");
  const messagesPage = document.getElementById("messagesPage");
  const mainContent = document.querySelector("main");
  const newMessageForm = document.getElementById("newMessageForm");
  const attachFileButton = document.getElementById("attachFileButton");
  const hasSeenSwipeHint = localStorage.getItem("hasSeenSwipeHint") === "true";

  // Function to open the messages page
  function openMessagesPage() {
    // Hide all other pages
    mainContent.classList.add("hidden");
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.add("hidden");
    });

    // Show messages page
    messagesPage.classList.remove("hidden");

    // Add active class to messages nav link
    document.querySelectorAll("nav a").forEach((navLink) => {
      navLink.classList.remove("text-white");
      navLink.classList.add("text-gray-400");
    });
    messagesNavLink.classList.remove("text-gray-400");
    messagesNavLink.classList.add("text-white");

    // Render the message list when the page is opened
    renderMessageList();

    // Show swipe hint if user hasn't seen it before
    if (!hasSeenSwipeHint && "ontouchstart" in window) {
      setTimeout(() => {
        showToast("Swipe left on messages for actions", "info", 5000);
        localStorage.setItem("hasSeenSwipeHint", "true");
      }, 1500);
    }
  }

  // Event listener for messages nav link
  if (messagesNavLink) {
    messagesNavLink.addEventListener("click", openMessagesPage);
  }

  // Handle message tab switching
  const messageTabs = document.querySelectorAll(".message-tab");

  messageTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      messageTabs.forEach((t) => {
        t.classList.remove(
          "active",
          "text-white",
          "border-[#c2f542]",
          "border-b-2"
        );
        t.classList.add("text-gray-400");
      });

      // Add active class to clicked tab
      tab.classList.add(
        "active",
        "text-white",
        "border-b-2",
        "border-[#c2f542]"
      );
      tab.classList.remove("text-gray-400");

      // Filter messages based on tab - get fresh reference to message items
      const tabType = tab.getAttribute("data-tab");
      const currentMessageItems = document.querySelectorAll(".message-item");
      let visibleCount = 0;

      currentMessageItems.forEach((item) => {
        if (tabType === "all") {
          item.classList.remove("hidden");
          visibleCount++;
        } else if (tabType === "unread" && item.classList.contains("unread")) {
          item.classList.remove("hidden");
          visibleCount++;
        } else if (
          tabType === "urgent" &&
          (item.querySelector(".bg-red-500\\/20") ||
            item.classList.contains("message-priority-urgent"))
        ) {
          item.classList.remove("hidden");
          visibleCount++;
        } else if (
          tabType === "archived" &&
          item.classList.contains("archived")
        ) {
          item.classList.remove("hidden");
          visibleCount++;
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  // Make message items clickable to mark as read - REMOVED incorrect reference to messageItems
  // Events will be attached in attachMessageEventListeners function

  // Home link to go back to main dashboard
  const homeLink = document.getElementById("homeNavLink");
  if (homeLink) {
    homeLink.addEventListener("click", () => {
      messagesPage.classList.add("hidden");
      mainContent.classList.remove("hidden");

      // Update nav link active states
      document.querySelectorAll("nav a").forEach((navLink) => {
        navLink.classList.remove("text-white");
        navLink.classList.add("text-gray-400");
      });
      homeLink.classList.remove("text-gray-400");
      homeLink.classList.add("text-white");
    });
  }

  // Handle file attachment
  if (attachFileButton) {
    attachFileButton.addEventListener("click", () => {
      // Simulate file selection dialog
      // In a real app, this would use <input type="file">
      setTimeout(() => {
        document.getElementById("attachedFileName").textContent =
          "patient_vitals.pdf";
      }, 500);
    });
  }

  // Handle new message form submission
  if (newMessageForm) {
    newMessageForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const recipient = document.getElementById("messageRecipient").value;
      const subject = document.getElementById("messageSubject").value;
      const content = document.getElementById("messageContent").value;
      const priority = document.querySelector(
        'input[name="messagePriority"]:checked'
      ).value;

      // Create a new message object
      const newMessage = {
        id: messages.length + 1,
        sender: {
          id: 0, // Current user
          name: "You",
          role: "Nurse",
          photo: "https://i.pravatar.cc/150?img=1",
        },
        recipient: patients.find((p) => p.id == recipient) || {
          name: "All Staff",
        },
        subject: subject,
        content: content,
        timestamp: new Date(),
        isRead: true,
        priority: priority,
        tag: priority === "urgent" ? "Urgent" : "Message",
      };

      // Add to messages array (in a real app, this would be sent to server)
      messages.push(newMessage);

      // Render the updated message list
      renderMessageList();

      // Show success toast instead of alert
      showToast("Message sent successfully!", "success");

      // Close modal
      closeNewMessageModal();
    });
  }

  // The renderMessageList function has been moved outside of this function to be globally accessible

  // The attachMessageEventListeners function has been moved outside of this function to be globally accessible

  // Call the global renderMessageList function to initialize the list at startup
  setTimeout(renderMessageList, 100); // Small delay to ensure DOM is ready

  // Populate recipient dropdown from patients data
  function populateRecipientDropdown() {
    const select = document.getElementById("messageRecipient");
    if (select) {
      // Clear existing options except the first one
      const defaultOption = select.options[0];
      select.innerHTML = "";
      select.appendChild(defaultOption);

      // Add patients as options
      patients.forEach((patient) => {
        const option = document.createElement("option");
        option.value = patient.id;
        option.textContent = `${patient.name} (Room ${patient.room})`;
        select.appendChild(option);
      });

      // Add group options
      const groups = [
        { value: "group_nurses", text: "All Nurses" },
        { value: "group_doctors", text: "All Doctors" },
        { value: "group_staff", text: "All Staff" },
      ];

      // Add a separator
      const separator = document.createElement("option");
      separator.disabled = true;
      separator.textContent = "───────────────";
      select.appendChild(separator);

      // Add group options
      groups.forEach((group) => {
        const option = document.createElement("option");
        option.value = group.value;
        option.textContent = group.text;
        select.appendChild(option);
      });
    }
  }

  // Call the function to populate the dropdown
  populateRecipientDropdown();
}

// Function to update the unread message count in navigation
function updateUnreadMessageCount() {
  const unreadMessages = document.querySelectorAll(
    ".message-item.unread"
  ).length;
  console.log(`Updating unread count to: ${unreadMessages}`);

  // Update the badge in the messages nav link
  const navBadge = document.querySelector("#messagesNavLink .bg-red-500");
  if (navBadge) {
    if (unreadMessages > 0) {
      navBadge.textContent = unreadMessages;
      navBadge.classList.remove("hidden");
      console.log("Updated nav badge");
    } else {
      navBadge.classList.add("hidden");
      console.log("Hid nav badge");
    }
  } else {
    console.log("Nav badge not found");
  }

  // Try multiple selectors to find the unread tab badge
  let tabBadge = document.querySelector(
    '.message-tab[data-tab="unread"] .ml-1.bg-red-500'
  );

  if (!tabBadge) {
    console.log("First selector failed, trying another approach");
    // Try a more general selector
    tabBadge = document.querySelector('.message-tab[data-tab="unread"] span');
  }

  if (!tabBadge) {
    console.log("Second selector failed, trying direct child selector");
    // Try direct child selector
    const unreadTab = document.querySelector('.message-tab[data-tab="unread"]');
    if (unreadTab) {
      tabBadge = unreadTab.querySelector("span");
    }
  }

  if (tabBadge) {
    console.log(`Found tab badge, updating to ${unreadMessages}`);
    tabBadge.textContent = unreadMessages;
    if (unreadMessages === 0) {
      tabBadge.classList.add("hidden");
    } else {
      tabBadge.classList.remove("hidden");
    }
  } else {
    console.log("Failed to find tab badge with any selector");
  }
}

// Function to update the archived message count
function updateArchivedMessageCount() {
  const archivedMessages = messages.filter((msg) => msg.isArchived).length;
  console.log(`Updating archived count to: ${archivedMessages}`);

  // Update the badge in the archived tab
  const archivedCountBadge = document.getElementById("archivedCount");
  if (archivedCountBadge) {
    if (archivedMessages > 0) {
      archivedCountBadge.textContent = archivedMessages;
      archivedCountBadge.classList.remove("hidden");
      console.log("Updated archived badge");
    } else {
      archivedCountBadge.classList.add("hidden");
      console.log("Hid archived badge");
    }
  } else {
    console.log("Archived badge not found");
  }
}

// Function to render messages that can be called directly from HTML
function renderMessageList() {
  // Get the message list container
  const messageList = document.getElementById("messageList");
  if (!messageList) {
    console.error("Message list container not found");
    return;
  }

  // Sort messages by timestamp (newest first)
  const sortedMessages = [...messages].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  // Count unread messages
  const unreadCount = sortedMessages.filter((msg) => !msg.isRead).length;
  console.log(`Rendering message list with ${unreadCount} unread messages`);

  // Clear the list
  messageList.innerHTML = "";

  // Add messages to the list
  sortedMessages.forEach((message) => {
    // Format the timestamp
    const messageDate = new Date(message.timestamp);
    let timeString;

    const now = new Date();
    const isToday = messageDate.toDateString() === now.toDateString();
    const isYesterday =
      new Date(now - 86400000).toDateString() === messageDate.toDateString();

    if (isToday) {
      timeString = messageDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (isYesterday) {
      timeString = "Yesterday";
    } else {
      timeString = messageDate.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      });
    }

    // Create message HTML with message ID as data attribute and support for swipe actions
    const messageHTML = `
      <div class="card p-4 hover:bg-[rgba(255,255,255,0.05)] cursor-pointer transition-colors message-item ${
        message.isRead ? "" : "unread"
      } message-priority-${message.priority} ${
      message.isArchived ? "archived" : ""
    } relative" data-message-id="${message.id}">
        <div class="flex justify-between items-start mb-2">
          <div class="flex items-center">
            <div class="relative">
              <img src="${message.sender.photo}" alt="${
      message.sender.name
    }" class="w-10 h-10 rounded-full mr-3">
              ${
                !message.isRead
                  ? `<span class="absolute top-0 right-2 h-3 w-3 rounded-full bg-[#c2f542]"></span>`
                  : ""
              }
            </div>
            <div>
              <h3 class="font-semibold text-white">${message.sender.name}</h3>
              <p class="text-xs text-gray-400">
                ${
                  message.sender.id === 0
                    ? `To: ${message.recipient.name}${
                        message.recipient.room
                          ? ` • Room ${message.recipient.room}`
                          : ""
                      }`
                    : `Room ${message.sender.room || ""} ${
                        message.sender.role ? `• ${message.sender.role}` : ""
                      }`
                }
              </p>
            </div>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-xs text-gray-400">${timeString}</span>
            ${
              !message.isRead
                ? `<span class="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>`
                : ""
            }
          </div>
        </div>
        <div>
          <p class="text-white font-medium">${message.subject}</p>
          <p class="text-gray-400 text-sm mt-1 line-clamp-2">${
            message.content
          }</p>
        </div>
        <div class="flex justify-between items-center mt-3">
          <span class="${getBadgeClass(message.tag)}">${message.tag}</span>
          <div class="prevent-message-click">
            <button class="p-1 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
        ${
          message.isArchived
            ? `<div class="absolute top-0 right-0 bg-blue-500 text-xs text-white px-2 py-1 rounded-bl-md archive-badge">Archived</div>`
            : ""
        }
      </div>
    `;

    // Add to the list
    messageList.innerHTML += messageHTML;
  });

  // After rendering, add event listeners to prevent click propagation on action buttons
  document
    .querySelectorAll(".prevent-message-click")
    .forEach((actionContainer) => {
      actionContainer.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });

  // Attach event listeners to message items
  attachMessageEventListeners();

  // Set up swipe functionality
  setupMessageSwipeEvents();

  // Update the unread count
  updateUnreadMessageCount();

  // Update the archived count
  updateArchivedMessageCount();

  // Apply current active tab filter
  applyActiveTabFilter();

  // Show toast notification
  if (sortedMessages.length === 0) {
    showToast("No messages found", "info");
  }
}

// Function to attach event listeners to message items
function attachMessageEventListeners() {
  const messageItems = document.querySelectorAll(".message-item");
  console.log(
    `Attaching event listeners to ${messageItems.length} message items`
  );

  messageItems.forEach((item) => {
    // Remove existing event listeners first to prevent duplicates
    const newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);

    // Add new event listeners - only for clicking on message content area
    newItem.addEventListener("click", (e) => {
      // Skip if clicked on action buttons, menu or swipe areas
      if (
        e.target.closest(".message-options-btn") ||
        e.target.closest(".message-actions-menu") ||
        e.target.closest(".swipe-actions")
      ) {
        return;
      }

      // Additionally check if click was on any button element or SVG
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "svg" ||
        e.target.tagName.toLowerCase() === "path"
      ) {
        return;
      }

      // Show swipe hint animation using the CSS animation
      if (!newItem.querySelector(".swipe-actions")) {
        newItem.classList.add("swipe-hint");

        // Show toast guidance the first time
        showSwipeHintToast();

        // Remove the animation class after it finishes
        setTimeout(() => {
          newItem.classList.remove("swipe-hint");
        }, 800);
      }

      // Mark as read
      const wasUnread = newItem.classList.contains("unread");
      console.log(`Message clicked, was unread: ${wasUnread}`);

      if (wasUnread) {
        newItem.classList.remove("unread");

        // Remove the unread indicator
        const indicator = newItem.querySelector(
          ".absolute .bg-\\[\\#c2f542\\]"
        );
        if (indicator) {
          indicator.remove();
        }

        // Remove the unread badge
        const badge = newItem.querySelector(".ml-2.bg-red-500");
        if (badge) {
          badge.remove();
        }

        // Find the message in the messages array by ID
        const messageId = parseInt(newItem.getAttribute("data-message-id"));
        console.log(`Looking for message with ID: ${messageId}`);

        if (!isNaN(messageId)) {
          const messageIndex = messages.findIndex((m) => m.id === messageId);
          if (messageIndex !== -1) {
            console.log(
              `Found message at index ${messageIndex}, marking as read`
            );
            messages[messageIndex].isRead = true;
          } else {
            console.log(
              `Message with ID ${messageId} not found in messages array`
            );
          }
        }

        // Update the unread count
        updateUnreadMessageCount();

        // Direct DOM update to the unread tab badge as a failsafe
        const unreadCount = document.querySelectorAll(
          ".message-item.unread"
        ).length;
        const tabBadge = document.querySelector(
          '.message-tab[data-tab="unread"] span'
        );
        if (tabBadge) {
          tabBadge.textContent = unreadCount;
          if (unreadCount === 0) {
            tabBadge.classList.add("hidden");
          }
        }

        // Show toast notification
        showToast("Message marked as read", "info", 2000);
      }
    });
  });
}

// Function to apply the active tab filter for messages
function applyActiveTabFilter() {
  const activeTab = document.querySelector(".message-tab.active");
  if (activeTab) {
    const tabType = activeTab.getAttribute("data-tab");
    const messageItems = document.querySelectorAll(".message-item");

    // Apply filtering based on the active tab
    messageItems.forEach((item) => {
      if (tabType === "all") {
        // Show all except archived
        if (item.classList.contains("archived")) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      } else if (tabType === "unread" && item.classList.contains("unread")) {
        item.classList.remove("hidden");
      } else if (
        tabType === "urgent" &&
        (item.querySelector(".bg-red-500\\/20") ||
          item.classList.contains("message-priority-urgent"))
      ) {
        item.classList.remove("hidden");
      } else if (
        tabType === "archived" &&
        item.classList.contains("archived")
      ) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }
}

// Function to get the appropriate badge class based on tag
function getBadgeClass(tag) {
  switch (tag) {
    case "Urgent":
      return "bg-red-500/20 text-red-400 text-xs py-1 px-2 rounded-full";
    case "Update":
      return "bg-yellow-500/20 text-yellow-400 text-xs py-1 px-2 rounded-full";
    case "Lab Results":
      return "bg-blue-500/20 text-blue-400 text-xs py-1 px-2 rounded-full";
    case "Status Update":
      return "bg-green-500/20 text-green-400 text-xs py-1 px-2 rounded-full";
    case "Meeting":
      return "bg-purple-500/20 text-purple-400 text-xs py-1 px-2 rounded-full";
    default:
      return "bg-gray-500/20 text-gray-400 text-xs py-1 px-2 rounded-full";
  }
}

// Launch page functionality
function initializeLaunchPage() {
  const launchPage = document.getElementById('launchPage');
  const progressBar = document.getElementById('progressBar');
  const loadingText = document.getElementById('loadingText');
  const progressPercent = document.getElementById('progressPercent');
  
  if (!launchPage || !progressBar || !loadingText || !progressPercent) {
    console.error('Launch page elements not found');
    // If launch page elements are not found, start app normally
    init();
    return;
  }

  // Loading steps with realistic timing
  const loadingSteps = [
    { progress: 15, text: 'Loading patient data...', duration: 600 },
    { progress: 30, text: 'Establishing connections...', duration: 500 },
    { progress: 50, text: 'Initializing monitoring systems...', duration: 700 },
    { progress: 70, text: 'Setting up charts...', duration: 500 },
    { progress: 85, text: 'Configuring alerts...', duration: 400 },
    { progress: 95, text: 'Finalizing setup...', duration: 300 },
    { progress: 100, text: 'Ready!', duration: 300 }
  ];

  let currentStep = 0;
  let currentProgress = 0;

  function updateProgress() {
    if (currentStep >= loadingSteps.length) {
      // Launch sequence complete
      setTimeout(() => {
        launchPage.style.opacity = '0';
        launchPage.style.transform = 'scale(0.95)';
        launchPage.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        setTimeout(() => {
          launchPage.style.display = 'none';
          // Initialize the main application after launch
          init();
        }, 500);
      }, 400);
      return;
    }

    const step = loadingSteps[currentStep];
    const targetProgress = step.progress;
    
    // Animate progress bar
    const progressInterval = setInterval(() => {
      currentProgress += 1;
      progressBar.style.width = `${currentProgress}%`;
      progressPercent.textContent = `${currentProgress}%`;
      
      if (currentProgress >= targetProgress) {
        clearInterval(progressInterval);
        loadingText.textContent = step.text;
        
        setTimeout(() => {
          currentStep++;
          updateProgress();
        }, step.duration);
      }
    }, 20); // Smooth animation
  }

  // Start the launch sequence
  updateProgress();
}

// Toast notification system
let toastContainer;
const toasts = [];
let toastIdCounter = 0;

// Initialize toast container reference when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  toastContainer = document.getElementById("toastContainer");
  
  // Start the launch sequence
  initializeLaunchPage();
});

// Initialize the app (called after launch sequence)
// Note: init() is now called from the launch sequence

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} type - The type of toast (success, error, info, warning)
 * @param {number} duration - Duration in ms before auto-dismiss (default: 3000ms)
 */
function showToast(message, type = "info", duration = 3000) {
  const id = `toast-${toastIdCounter++}`;

  // Create toast element
  const toast = document.createElement("div");
  toast.id = id;
  toast.className = `toast ${type}`;

  // Icon based on type
  let icon = "";
  switch (type) {
    case "success":
      icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>`;
      break;
    case "error":
      icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>`;
      break;
    case "warning":
      icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>`;
      break;
    default: // info
      icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>`;
  }

  // Structure toast content
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">${message}</div>
    <button class="toast-close" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  `;

  // Add to DOM
  if (toastContainer) {
    toastContainer.appendChild(toast);
    toasts.push({ id, timeoutId: null });

    // Add click handler for close button
    toast.querySelector(".toast-close").addEventListener("click", () => {
      dismissToast(id);
    });

    // Animate in
    setTimeout(() => {
      toast.classList.add("visible");
    }, 10);

    // Auto dismiss after duration
    const timeoutId = setTimeout(() => {
      dismissToast(id);
    }, duration);

    // Update timeout ID in toasts array
    const toastIndex = toasts.findIndex((t) => t.id === id);
    if (toastIndex !== -1) {
      toasts[toastIndex].timeoutId = timeoutId;
    }
  } else {
    console.error("Toast container not found");
  }

  return id;
}

/**
 * Dismiss a toast notification
 * @param {string} id - The ID of the toast to dismiss
 */
function dismissToast(id) {
  const toast = document.getElementById(id);
  if (!toast) return;

  // Animate out
  toast.classList.remove("visible");

  // Remove from DOM after animation
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);

  // Clear timeout and remove from toasts array
  const toastIndex = toasts.findIndex((t) => t.id === id);
  if (toastIndex !== -1) {
    clearTimeout(toasts[toastIndex].timeoutId);
    toasts.splice(toastIndex, 1);
  }
}

// Initialize the app (called after launch sequence)

// Function to handle message actions (delete, archive)
function handleMessageAction(messageId, action) {
  const messageIndex = messages.findIndex((m) => m.id === messageId);
  if (messageIndex === -1) {
    console.log(`Message with ID ${messageId} not found`);
    return;
  }

  // Get message element for animations
  const messageElement = document.querySelector(
    `.message-item[data-message-id="${messageId}"]`
  );

  switch (action) {
    case "delete":
      if (messageElement) {
        // Add deletion animation
        messageElement.style.transition = "all 0.3s ease";
        messageElement.style.opacity = "0";
        messageElement.style.height = messageElement.offsetHeight + "px";
        messageElement.style.marginTop = "0";
        messageElement.style.marginBottom = "0";

        setTimeout(() => {
          messageElement.style.height = "0";
          messageElement.style.padding = "0";

          // Remove message from array and render after animation
          setTimeout(() => {
            messages.splice(messageIndex, 1);
            renderMessageList();
            showToast("Message deleted", "success");
          }, 300);
        }, 100);
      } else {
        // If element not found, just remove it immediately
        messages.splice(messageIndex, 1);
        renderMessageList();
        showToast("Message deleted", "success");
      }
      break;

    case "archive":
      // Mark message as archived with animation
      messages[messageIndex].isArchived = true;

      if (messageElement) {
        // Add archive badge with animation
        const archiveBadge = document.createElement("div");
        archiveBadge.className =
          "absolute top-0 right-0 bg-blue-500 text-xs text-white px-2 py-1 rounded-bl-md archive-badge";
        archiveBadge.textContent = "Archived";
        messageElement.appendChild(archiveBadge);

        // Hide the swipe actions first
        hideSwipeActions(messageElement);

        // Then update the message list
        setTimeout(() => {
          renderMessageList();
          showToast("Message archived", "success");
        }, 500);
      } else {
        renderMessageList();
        showToast("Message archived", "success");
      }
      break;

    case "unarchive":
      // Remove archived flag with animation
      messages[messageIndex].isArchived = false;

      if (messageElement) {
        // Hide the archive badge with animation
        const archiveBadge = messageElement.querySelector(".archive-badge");
        if (archiveBadge) {
          archiveBadge.style.transition =
            "transform 0.3s ease, opacity 0.3s ease";
          archiveBadge.style.transform = "translateY(-100%)";
          archiveBadge.style.opacity = "0";
        }

        // Hide the swipe actions
        hideSwipeActions(messageElement);

        // Update the message list after animation
        setTimeout(() => {
          renderMessageList();
          showToast("Message removed from archive", "success");
        }, 500);
      } else {
        renderMessageList();
        showToast("Message removed from archive", "success");
      }
      break;

    default:
      console.log(`Unknown action: ${action}`);
      return;
  }
}

// Function to set up touch events for message swiping
function setupMessageSwipeEvents() {
  const messageItems = document.querySelectorAll(".message-item");

  messageItems.forEach((item) => {
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;
    const swipeThreshold = 100; // Minimum distance to trigger swipe action

    item.addEventListener("touchstart", (e) => {
      // Only start swiping if the touch is not on a button or action element
      if (
        e.target.closest(".message-options-btn") ||
        e.target.closest(".message-actions-menu") ||
        e.target.closest(".swipe-actions") ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "svg" ||
        e.target.tagName.toLowerCase() === "path"
      ) {
        return;
      }

      startX = e.touches[0].clientX;
      currentX = startX;
      isSwiping = true;

      // Remove transition temporarily for responsive swiping
      item.style.transition = "";
    });

    item.addEventListener("touchmove", (e) => {
      if (!isSwiping) return;

      currentX = e.touches[0].clientX;
      const diffX = currentX - startX;

      // Add appropriate swiping class based on direction
      if (diffX < 0) {
        item.classList.add("swiping-left");
        item.classList.remove("swiping-right");
      } else if (diffX > 0) {
        item.classList.add("swiping-right");
        item.classList.remove("swiping-left");
      }

      // If swiping right and actions are visible, hide them
      if (diffX > 0 && item.querySelector(".swipe-actions")) {
        const translateX = Math.min(diffX, 130); // Limit how far right they can swipe
        item.style.transform = `translateX(${translateX - 130}px)`;
        return;
      }

      // Only allow left swipe (negative diffX) when no actions are visible
      if (diffX < 0 && !item.querySelector(".swipe-actions")) {
        // Limit the swipe to a maximum distance with resistance effect
        const translateX = Math.max(diffX * 0.9, -150); // Add a bit of resistance
        item.style.transform = `translateX(${translateX}px)`;
      }
    });

    item.addEventListener("touchend", (e) => {
      if (!isSwiping) return;

      const diffX = currentX - startX;
      const hasSwipeActions = item.querySelector(".swipe-actions");

      // Restore transition for smooth animation at end of swipe
      item.style.transition = "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";

      // If swiping right and actions are visible, hide them if swiped enough
      if (diffX > 30 && hasSwipeActions) {
        hideSwipeActions(item);
      }
      // If swiping left and no actions are visible, show them if swiped enough
      else if (diffX < -swipeThreshold && !hasSwipeActions) {
        showSwipeActions(item);
      }
      // Otherwise reset to initial position
      else {
        if (hasSwipeActions) {
          item.style.transform = "translateX(-130px)";
        } else {
          item.style.transform = "translateX(0)";
        }
      }

      // Remove swiping classes after animation completes
      setTimeout(() => {
        item.classList.remove("swiping-left", "swiping-right");
      }, 300);

      isSwiping = false;
    });
  });

  // Hide swipe actions when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".swipe-actions") &&
      !e.target.closest(".message-options-btn")
    ) {
      const allMessageItems = document.querySelectorAll(".message-item");
      allMessageItems.forEach((item) => {
        if (item.querySelector(".swipe-actions")) {
          hideSwipeActions(item);
        }
      });
    }
  });
}

// Function to hide swipe actions
function hideSwipeActions(messageItem) {
  messageItem.style.transition =
    "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
  messageItem.style.transform = "translateX(0)";

  // Remove the swipe actions after animation
  setTimeout(() => {
    const swipeActions = messageItem.querySelector(".swipe-actions");
    if (swipeActions && swipeActions.parentNode === messageItem) {
      // Fade out animation before removal
      swipeActions.style.opacity = "0";
      swipeActions.style.transition = "opacity 0.2s ease";

      setTimeout(() => {
        if (swipeActions.parentNode === messageItem) {
          messageItem.removeChild(swipeActions);
        }
      }, 200);
    }
  }, 300);
}

// Function to show swipe actions
function showSwipeActions(messageItem) {
  // Check if actions are already added
  if (messageItem.querySelector(".swipe-actions")) {
    return;
  }

  // Add transition for smooth animation
  messageItem.style.transition =
    "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
  messageItem.style.transform = "translateX(-130px)";

  // Get message ID
  const messageId = parseInt(messageItem.getAttribute("data-message-id"));
  if (isNaN(messageId)) return;

  // Create action buttons container
  const actionsContainer = document.createElement("div");
  actionsContainer.className =
    "swipe-actions absolute right-0 top-0 bottom-0 flex h-full";

  // Get message to check if archived
  const message = messages.find((m) => m.id === messageId);
  if (!message) return;

  const isArchived = message.isArchived;

  // Create actions
  actionsContainer.innerHTML = `
    <button class="h-full w-16 flex items-center justify-center ${
      isArchived ? "bg-green-600" : "bg-blue-600"
    }" 
            onclick="handleMessageAction(${messageId}, '${
    isArchived ? "unarchive" : "archive"
  }')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    </button>
    <button class="h-full w-16 flex items-center justify-center bg-red-600" 
            onclick="handleMessageAction(${messageId}, 'delete')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  `;

  // Add actions to the message item
  messageItem.appendChild(actionsContainer);

  // Prevent action buttons from triggering message click events
  const actionButtons = actionsContainer.querySelectorAll("button");
  actionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}
