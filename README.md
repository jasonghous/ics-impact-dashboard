# ICS Impact Dashboard

**Real-time bereavement support service impact monitoring for NHS Integrated Care Systems**

Demo configured for **Birmingham and Solihull ICS** with realistic West Midlands demographics.

---

## Overview

This dashboard provides NHS commissioners with real-time visibility into the impact of bereavement support services across their ICS population. Built to NHS standards with DSPT and GDPR compliance in mind.

### Key Features

✅ **Real-Time KPIs** - Live service metrics updated every 30 seconds
✅ **Health Inequalities Focus** - Core20PLUS5 reach analysis and IMD quintile tracking
✅ **Financial Impact** - ROI calculations, cost avoidance, and benefits accessed
✅ **Outcomes Monitoring** - Wellbeing scores, satisfaction ratings, completion rates
✅ **Geographic Coverage** - Constituency-level reach analysis
✅ **Demographic Breakdown** - Age, ethnicity, deprivation analysis vs population benchmarks
✅ **Activity Trends** - 7-day and 9-month performance tracking

---

## Demo Data

Based on Birmingham & Solihull ICS actual demographics:

- **Population:** 1,359,160
- **Annual Deaths:** ~12,000 (9.3 per 1,000 - West Midlands rate)
- **Deprivation:** 60% GP practices serve most deprived quintile
- **Ethnicity:** 51.4% BAME in Birmingham
- **Life Expectancy Gap:** 9.5 years (male), 6.2 years (female)

### Service Metrics (Demo - Year to Date)
- **Users Supported:** 289 (YTD)
- **System Reach:** 2.7% of deaths
- **Benefits Accessed:** £287,500
- **Avg Satisfaction:** 4.7/5.0
- **ROI:** 7.96:1

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dashboard will be available at: `http://localhost:5174`

---

## Technology Stack

- **React 18** - Component framework
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 3** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons

---

## Dashboard Sections

### 1. KPI Overview
Four key metrics at-a-glance:
- Total Users (YTD)
- System Reach (% of deaths)
- Benefits Accessed (£)
- User Satisfaction (0-5)

### 2. Real-Time Activity
- 7-day trend chart (users, calls)
- System status (uptime, active users, queue)
- Live data simulation

### 3. Health Inequalities Analysis
- Core20PLUS5 reach vs ICS population
- Deprivation quintile distribution
- Ethnicity breakdown with pie chart
- Demonstrates over-indexing to most deprived

### 4. Outcomes & Interventions
- Wellbeing score improvement (pre/post)
- Support tier distribution (Crisis/High/Moderate/Low)
- Top 6 intervention types with progress bars
- Response time by tier

### 5. Financial Impact
- Cost avoidance breakdown by category
- ROI summary (investment vs value)
- Benefits accessed total
- Total system value calculation

### 6. Performance Trends
- 9-month trend line (users, satisfaction)
- Monthly benefits accessed
- Growth trajectory visualization

### 7. Geographic Coverage
- Constituency-level table
- Users, deaths, reach % by area
- Color-coded coverage indicators
- Identifies high/low reach areas

---

## Data Sources & References

### NHS Frameworks
- [NHS Strategic Commissioning Framework](https://www.england.nhs.uk/long-read/strategic-commissioning-framework/)
- [Core20PLUS5 Approach](https://www.england.nhs.uk/about/equality/equality-hub/national-healthcare-inequalities-improvement-programme/core20plus5/)
- [Public Health Outcomes Framework](https://fingertips.phe.org.uk/profile/public-health-outcomes-framework)

### Birmingham & Solihull ICS Data
- [CQC ICS Assessment Report](https://www.cqc.org.uk/care-services/integrated-care-system-assessment-reports/birmingham-and-solihull)
- Population: 1,359,160 (ONS 2021)
- Deprivation: 60% practices serve Core20
- Ethnicity: 51.4% BAME (Birmingham)

### West Midlands Statistics
- [ONS Deaths Data](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths)
- Mortality rate: 9.3 per 1,000 population
- Heat mortality: Highest in England (38 per million, 2024)

### Evidence Base
- Liverpool Pilot: 3% reach, £900 avg funeral savings, 4.7/5 satisfaction
- Sue Ryder: £22.9bn annual UK economic cost of bereavement
- Academic validation: Anglia Ruskin University (Dr Franziska Sohns)

---

## Customization

### Changing ICS Data
Edit `src/data/demoData.js` to update:
- ICS name and population
- Annual death statistics
- Demographic breakdowns
- Service metrics

### Branding
Colors defined in `tailwind.config.js`:
```js
colors: {
  'fe-orange': '#fc9401',
  'fe-green': '#0a7c03',
  'fe-blue': '#00b0f0',
}
```

### Real-Time Updates
Simulated every 30 seconds in `App.jsx`. For production, replace with API calls:
```js
useEffect(() => {
  // Replace with: fetch('/api/dashboard-data')
  setLastUpdate(new Date())
}, 30000)
```

---

## Production Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build static files:
```bash
npm run build
```
Deploy `dist/` folder to any static host (Netlify, AWS S3, etc.)

---

## Compliance

✅ **GDPR** - Demo uses anonymized aggregate data
✅ **NHS DSPT** - Dashboard design follows NHS data security principles
✅ **Accessibility** - WCAG 2.1 AA color contrast, keyboard navigation

**Note:** This is a demo with simulated data. For production use, ensure:
- Real data is appropriately anonymized
- Access controls are implemented
- Data storage meets NHS DSPT requirements
- Regular security audits are conducted

---

## NHS Commissioner Use Cases

### Strategic Planning
- Monitor service reach vs population need
- Identify geographic gaps in coverage
- Track health inequalities reduction

### Contract Monitoring
- KPI achievement tracking
- Quality metrics (satisfaction, outcomes)
- Value for money assessment

### Board Reporting
- Executive summary (KPI cards)
- Trend analysis (monthly/quarterly)
- Financial impact (ROI, cost avoidance)

### Quality Assurance
- Safeguarding activity monitoring
- User feedback analysis
- Complaints/compliments tracking

---

## Support

**FuneralExperts**
Email: info@funeralexperts.com
Website: https://www.funeralexperts.com

Built with ❤️ for NHS commissioners and bereaved families

---

## License

ISC License - Copyright (c) 2026 FuneralExperts
