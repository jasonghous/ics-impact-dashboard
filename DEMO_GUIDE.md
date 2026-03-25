# ICS Impact Dashboard - Demo Guide

**Birmingham & Solihull ICS Real-Time Impact Monitoring**

---

## Quick Start

```bash
npm run dev
```

Open: **http://localhost:5174**

---

## Dashboard Tour (Top to Bottom)

### 1. Header (Sticky)
- **Left:** ICS name (Birmingham and Solihull ICS)
- **Right:** Live status indicator (green pulse) + last update time
- **Status:** Updates every 30 seconds

### 2. KPI Cards (4 Cards)
**Card 1 - Total Users (YTD)**
- Value: **289 users**
- Trend: "+14% vs target"
- Icon: Users (blue)

**Card 2 - System Reach**
- Value: **2.7%** of all deaths
- Subtitle: "Target: 3.0%"
- Icon: Trending Up (orange)

**Card 3 - Benefits Accessed**
- Value: **£287,500**
- Trend: "ROI: 7.96:1"
- Icon: Dollar Sign (green)

**Card 4 - User Satisfaction**
- Value: **4.7** out of 5.0
- Trend: "94% completion rate"
- Icon: Heart (purple)

### 3. Real-Time Activity (2 Columns)

**Left Panel (2/3 width) - 7-Day Activity Trend**
- Line chart with 2 lines:
  - Orange: New users per day
  - Blue: Total calls per day
- X-axis: Mon 10 Mar → Today
- Shows "Today" is highlighted

**Right Panel (1/3 width) - System Status**
- Status: ✅ Operational
- Uptime: 99.8%
- Active Users: 17
- Queue: 2 calls
- Avg Wait: 4 mins
- Staff on Duty: 6

### 4. Health Inequalities Focus (2 Columns)

**Left Panel - Core20PLUS5 Reach**
- **3 Hero Stats:**
  - 67.3% - Service Users (orange)
  - 60.0% - ICS Population (grey)
  - +7.3% - Over-indexing (green)

- **Bar Chart:** Service users vs ICS population by deprivation quintile
  - Q1 (Most deprived): 33.6% vs 32.1%
  - Q2: 28.7% vs 24.3%
  - Q3: 18.7% vs 19.8%
  - Q4: 12.1% vs 14.2%
  - Q5 (Least): 6.9% vs 9.6%

**Right Panel - Ethnicity Distribution**
- Pie chart with 5 segments:
  - White British: 42.6%
  - Asian/Asian British: 30.1%
  - Black/Black British: 14.9%
  - Mixed/Multiple: 7.3%
  - Other: 5.2%

### 5. Outcomes & Interventions (2 Columns)

**Left Panel - Wellbeing Impact**
- **3 Boxes:**
  - Pre-Support: 3.2 (red)
  - Post-Support: 6.8 (green)
  - Improvement: +3.6 (green border)

- **Support Tier Distribution:**
  - Crisis (RED): 12 users (4.2%) - "< 1 hour"
  - High (AMBER): 67 users (23.2%) - "< 4 hours"
  - Moderate (YELLOW): 134 users (46.4%) - "< 24 hours"
  - Low (GREEN): 76 users (26.3%) - "< 48 hours"

**Right Panel - Top Interventions**
- Progress bars showing:
  1. Funeral Price Comparison - 267 (92.4%)
  2. Funeral Payment Support - 234 (81.0%)
  3. Bereavement Benefits - 198 (68.5%)
  4. Emotional Support Referral - 156 (54.0%)
  5. Housing/Tenancy Support - 89 (30.8%)
  6. Multi-Agency Coordination - 67 (23.2%)

### 6. Financial Impact (3 Columns)

**Left Panel (2/3 width) - Cost Avoidance Breakdown**
- Horizontal bar chart:
  1. Primary Care (GP) - £9,828
  2. A&E Attendance - £4,186
  3. Mental Health Services - £11,250
  4. Social Care - £8,010
  5. Housing Crisis - £6,000

**Right Panel (1/3 width) - ROI Summary**
- 4 Boxes:
  1. Total Investment: £36,125 (grey)
  2. Cost Avoidance: £39,274 (green border)
  3. Benefits Accessed: £287,500 (orange border)
  4. Total System Value: £326,774 (blue border)

### 7. Performance Trends (Full Width)

**9-Month Performance Trend**
- Dual-axis line chart:
  - Left Y-axis: Users (orange line)
  - Right Y-axis: Satisfaction (blue line)
- X-axis: Jul 2025 → Mar 2026 (current month highlighted)
- Shows steady growth: 18 → 34 users

### 8. Geographic Coverage (Full Width)

**Table: Constituency-Level Reach**
- 10 rows (Birmingham areas + Solihull)
- Columns:
  - Constituency name
  - Users
  - Annual Deaths
  - Reach %
  - Coverage bar (visual)

**Top 3 Areas by Reach:**
1. Birmingham Ladywood - 43 users, 27.6% reach (green bar)
2. Birmingham Hodge Hill - 38 users, 26.8% reach (green bar)
3. Birmingham Perry Barr - 34 users, 25.4% reach (green bar)

**Color Coding:**
- Green: >25% reach
- Orange: 20-25% reach
- Grey: <20% reach

### 9. Footer
- "Powered by FuneralExperts | Data compliant with NHS DSPT & GDPR"
- "Birmingham & Solihull ICS Demo Dashboard - March 2026"

---

## Key Talking Points for Commissioners

### 1. Health Inequalities (Slide 3-4)
**"We're over-indexing to those in greatest need"**
- 67.3% of service users from Core20 (most deprived)
- ICS population: 60% in Core20
- **+7.3% over-indexing** = reaching those who need it most

### 2. Outcomes (Slide 5)
**"Measurable wellbeing improvement"**
- Pre-support wellbeing: 3.2/10
- Post-support wellbeing: 6.8/10
- **+3.6 point improvement** (target: 3.0)

### 3. Financial Value (Slide 6)
**"Clear return on investment"**
- Investment: £36,125
- Cost avoidance: £39,274
- Benefits accessed: £287,500
- **Total system value: £326,774** (7.96:1 ROI)

### 4. System Reach (Slide 2)
**"Approaching Liverpool pilot performance"**
- Current reach: 2.7% of deaths
- Liverpool pilot: 3% reach
- Target: 3.0%
- **289 users supported** (YTD)

### 5. Real-Time Visibility (Slide 2)
**"Live operational monitoring"**
- System uptime: 99.8%
- Active users: 17
- Queue: 2 calls
- Avg wait: 4 minutes

---

## Demo Flow (3 Minutes)

### Minute 1: Impact Overview
1. Start at top - KPI cards
2. "289 users, £287,500 benefits, 4.7/5 satisfaction"
3. Scroll to financial panel (right side)
4. "£326k total system value from £36k investment = 7.96:1 ROI"

### Minute 2: Health Inequalities
1. Scroll to Core20PLUS5 section
2. "67.3% of users from most deprived vs 60% population"
3. Point to bar chart - "Over-indexing across Q1 and Q2"
4. Show ethnicity pie chart - "Reaching diverse communities"

### Minute 3: Outcomes & Trends
1. Scroll to wellbeing panel
2. "3.6 point improvement in wellbeing scores"
3. Show support tier distribution - "23% high/crisis, appropriate triage"
4. Scroll to 9-month trend - "Steady growth from 18 to 34 users/month"
5. End on geographic table - "Strongest reach in most deprived areas"

---

## Questions & Answers

### Q: "Is this real data?"
**A:** Demo data based on Birmingham & Solihull ICS demographics and Liverpool pilot outcomes. Production version would connect to live API.

### Q: "Can we filter by time period?"
**A:** Yes - production version includes date range picker (YTD, Last Quarter, Last Month, Custom).

### Q: "Can we export reports?"
**A:** Yes - production version includes PDF export and CSV download for all tables.

### Q: "What about data security?"
**A:** Dashboard uses anonymized aggregate data, GDPR compliant, follows NHS DSPT standards. Access controls via NHS Identity.

### Q: "How often does it update?"
**A:** Real-time updates every 30 seconds for operational metrics. Historical data refreshes hourly.

### Q: "Can other ICBs use this?"
**A:** Absolutely - dashboard is configurable for any ICS. Just update population, death stats, and service metrics in data file.

---

## Technical Notes

### Simulated Real-Time Updates
- `App.jsx` has 30-second interval
- Updates `lastUpdate` timestamp in header
- Production: Replace with API polling

### Data Structure
- All demo data in `src/data/demoData.js`
- Easy to swap for real API calls
- TypeScript interfaces available for production

### Customization Points
1. ICS name and population
2. Color scheme (Tailwind config)
3. KPI thresholds (target reach, ROI, etc.)
4. Geographic areas (constituencies)
5. Outcome measures (wellbeing scale, etc.)

---

## Next Steps for Production

1. **Backend API** - FastAPI endpoint returning JSON
2. **Authentication** - NHS Identity integration
3. **Date Filters** - Selectable time periods
4. **Export Functions** - PDF reports, CSV downloads
5. **Drill-Down** - Click charts to see detailed breakdowns
6. **Alerting** - Email notifications for KPI thresholds
7. **Mobile App** - React Native version for on-the-go

---

**Demo prepared by:** FuneralExperts
**Date:** 15 March 2026
**Contact:** info@funeralexperts.com
