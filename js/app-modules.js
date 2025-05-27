/**
 * Application Modules Loader
 * Coordinates loading and initialization of all feature modules
 */

// Import all modules in dependency order
// Core modules first
import "./core/patient-management.js";
import "./core/data-simulation.js";

// Utility modules
import "./utils/filter-search.js";
import "./utils/navigation.js";

// UI modules
import "./ui/theme.js";
import "./ui/toast-notifications.js";
import "./ui/modal-management.js";
import "./ui/mobile-interface.js";

// Feature modules
import "./features/vitals-monitoring.js";
import "./features/alert-system.js";
import "./features/charts.js";
import "./features/settings.js";
import "./features/messages.js";

// Initialize the application
import "./core/app-init.js";

// Module loader functions will go here
