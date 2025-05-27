# Health Monitor JavaScript Modules

This directory contains the modularized JavaScript code for the Health Monitor application. The original `app.js` file has been split into logical modules for better maintainability and organization.

## Directory Structure

```
js/
├── core/                    # Core application modules
│   ├── patient-management.js    # Patient data and management
│   ├── data-simulation.js       # Real-time data simulation
│   └── app-init.js             # Application initialization
├── features/                # Main feature modules
│   ├── vitals-monitoring.js     # Vital signs monitoring
│   ├── alert-system.js         # Alert notifications
│   ├── messages.js             # Messaging system
│   ├── charts.js               # Chart visualization
│   └── settings.js             # Settings management
├── ui/                      # User interface modules
│   ├── mobile-interface.js      # Mobile-specific UI
│   ├── modal-management.js      # Modal handling
│   ├── theme.js                # Theme switching
│   └── toast-notifications.js   # Toast notifications
├── utils/                   # Utility modules
│   ├── filter-search.js         # Filtering and search
│   └── navigation.js            # Page navigation
├── app-modules.js           # Module loader and coordinator
└── README.md               # This file
```

## Module Dependencies

### Loading Order

1. **Core modules** - Essential data and initialization
2. **Utility modules** - Helper functions
3. **UI modules** - Interface components
4. **Feature modules** - Main application features
5. **Initialization** - Start the application

### Key Dependencies

- `patient-management.js` - Required by most other modules
- `theme.js` - Required by modules that handle UI styling
- `toast-notifications.js` - Used by many modules for user feedback
- `app-init.js` - Should be loaded last to initialize everything

## Usage

### Option 1: Module Imports (Recommended)

Include the module loader in your HTML:

```html
<script type="module" src="js/app-modules.js"></script>
```

### Option 2: Individual Script Tags

If not using ES6 modules, include scripts in dependency order:

```html
<!-- Core -->
<script src="js/core/patient-management.js"></script>
<script src="js/core/data-simulation.js"></script>

<!-- Utils -->
<script src="js/utils/filter-search.js"></script>
<script src="js/utils/navigation.js"></script>

<!-- UI -->
<script src="js/ui/theme.js"></script>
<script src="js/ui/toast-notifications.js"></script>
<script src="js/ui/modal-management.js"></script>
<script src="js/ui/mobile-interface.js"></script>

<!-- Features -->
<script src="js/features/vitals-monitoring.js"></script>
<script src="js/features/alert-system.js"></script>
<script src="js/features/charts.js"></script>
<script src="js/features/settings.js"></script>
<script src="js/features/messages.js"></script>

<!-- Initialize -->
<script src="js/core/app-init.js"></script>
```

## Migration Notes

When extracting code from the original `app.js`:

1. **Global Variables** - Move shared variables to appropriate modules and export them
2. **Function Dependencies** - Ensure functions can access required dependencies
3. **Event Listeners** - Group related event listeners in their respective modules
4. **State Management** - Consider which module should own specific state
5. **Initialization Order** - Some functions depend on DOM elements or other modules being ready

## Next Steps

1. Extract functions from `app.js` into their respective modules
2. Set up proper import/export statements
3. Test each module individually
4. Update HTML to use the new modular structure
5. Remove the original `app.js` file once migration is complete
