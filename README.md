# Health Monitor Dashboard

<div align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Framework-Vanilla_JS-yellow" alt="Framework">
  <img src="https://img.shields.io/badge/CSS-Tailwind-06B6D4" alt="Tailwind CSS">
</div>

## 🏥 Overview

Health Monitor Dashboard is a real-time patient care monitoring system designed for healthcare professionals. It provides an intuitive interface for tracking patient vital signs, managing alerts, and facilitating communication between medical staff.

### ✨ Key Features

- **Real-time Monitoring**: Live vital signs tracking with automatic updates
- **Smart Alerts**: Intelligent alert system for abnormal readings
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Launch Animation**: Engaging startup sequence with progress indicators
- **Staff Messaging**: Built-in communication system for medical personnel
- **Customizable Thresholds**: Adjustable safe range settings for different patients
- **Dark/Light Mode**: Adaptive theming for different environments

## 🚀 Demo

### Launch Page

![Launch Page Animation](https://via.placeholder.com/800x400/0f172a/c2f542?text=Health+Monitor+Launch+Animation)

### Dashboard Overview

![Dashboard](https://via.placeholder.com/800x400/1e293b/ffffff?text=Patient+Dashboard+Interface)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Charts**: Chart.js for vital signs visualization
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (DM Sans, Plus Jakarta Sans)

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/lawjingw/health-monitor.git
   cd health-monitor
   ```

2. **Open in browser**

   - For development: Use a local server (Live Server extension in VS Code)
   - For production: Deploy to any web hosting service

3. **No build process required** - This is a vanilla JavaScript application

## 📱 Features Breakdown

### 🎬 Launch Page

- Animated gradient background
- Floating logo with glow effects
- Progress bar with loading steps
- Smooth transition to main dashboard

### 📊 Patient Monitoring

- **Vital Signs Tracking**:
  - Heart Rate (BPM)
  - Blood Pressure (Systolic/Diastolic)
  - Oxygen Level (%)
- **Real-time Charts**: Interactive Chart.js visualizations
- **Patient Cards**: Quick overview with status indicators
- **Search & Filter**: Find patients by name, room, or status

### 🚨 Alert System

- **Smart Notifications**: Automatic alerts for abnormal readings
- **Customizable Thresholds**: Set safe ranges per patient
- **Priority Levels**: Normal, urgent, and critical alerts
- **Visual Indicators**: Color-coded status system

### 💬 Communication

- **Staff Messaging**: Send messages to individuals or groups
- **Message Categories**: Normal and urgent priority levels
- **Attachment Support**: File sharing capabilities
- **Real-time Updates**: Live message notifications

### 📱 Mobile Optimization

- **Bottom Navigation**: Easy thumb navigation on mobile
- **Responsive Layout**: Adaptive design for all screen sizes
- **Touch Interactions**: Optimized for touch devices
- **Fixed Headers**: Consistent navigation experience

## 🎨 Design System

### Color Palette

- **Primary Green**: `#c2f542` - Main accent color
- **Dark Background**: `#0f172a` - Primary background
- **Secondary Dark**: `#1e293b` - Card backgrounds
- **Text Colors**: Adaptive based on theme

### Typography

- **Display Font**: Plus Jakarta Sans (headings)
- **Body Font**: DM Sans (content)
- **Responsive Scaling**: Adaptive font sizes

## 📂 Project Structure

```
health-monitor/
├── index.html          # Main application file
├── app.js             # JavaScript logic and data
├── styles.css         # Custom CSS and animations
├── preview.html       # Preview/demo page
├── test.html          # Testing interface
└── README.md          # Project documentation
```

## 🔄 Core Functions

### Patient Data Management

- Patient information storage and retrieval
- Vital signs history tracking
- Status monitoring and updates

### Alert Processing

- Real-time threshold checking
- Alert generation and management
- Notification system

### Chart Rendering

- Dynamic chart updates
- Historical data visualization
- Interactive chart controls

## 🎛️ Configuration

### Safe Range Settings

Default vital sign thresholds:

```javascript
const defaultSafeRanges = {
  heartRate: { min: 50, max: 110 },
  bloodPressure: {
    systolic: { min: 85, max: 150 },
    diastolic: { min: 55, max: 95 },
  },
  oxygenLevel: { min: 92, max: 100 },
};
```

### Customization

- Modify `app.js` for data structure changes
- Update `styles.css` for visual customizations
- Configure chart options in Chart.js initialization

## 🖥️ Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📈 Performance

- **Launch Time**: ~2-3 seconds with animations
- **Real-time Updates**: 1-second intervals
- **Mobile Optimized**: 60fps animations
- **Lightweight**: No external dependencies beyond CDNs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Initial work_ - [lawjingw](https://github.com/lawjingw)

## 🙏 Acknowledgments

- Chart.js for beautiful data visualizations
- Tailwind CSS for utility-first styling
- Font Awesome for comprehensive icons
- Google Fonts for typography
- Healthcare professionals for feature insights

## 📞 Support

For support, email support@healthmonitor.com or join our Slack channel.

## 🔮 Future Enhancements

- [ ] Database integration
- [ ] User authentication system
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Integration with medical devices
- [ ] Multi-language support
- [ ] Advanced reporting features

---

<div align="center">
  <p>Made with ❤️ for healthcare professionals</p>
  <p>© 2024 Health Monitor Dashboard. All rights reserved.</p>
</div>
