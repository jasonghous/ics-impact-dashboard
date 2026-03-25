/**
 * ICS Impact Dashboard Demo Data
 * Based on Birmingham & Solihull ICS (Population: 1,359,160)
 *
 * Data Sources:
 * - Birmingham & Solihull ICS Population: 1.36m (ONS 2021)
 * - Annual Deaths: ~12,000 (9.3 per 1,000 population - West Midlands rate)
 * - Deprivation: 60% GP practices serve most deprived quintile
 * - Ethnicity: 51.4% BAME in Birmingham, lower in Solihull
 * - Life Expectancy Gap: 9.5 years (male), 6.2 years (female)
 */

// Current timestamp for real-time simulation
const now = new Date();

// Calculate realistic service metrics
// Assuming 3% reach (Liverpool pilot achieved 3% of all deaths)
const annualDeaths = 12000;
const monthlyDeaths = Math.floor(annualDeaths / 12);
const targetReach = 0.03; // 3%
const monthlyTarget = Math.floor(monthlyDeaths * targetReach);
const currentMonthUsers = 34; // Realistic for early rollout
const ytdUsers = 289; // 9 months at growing rate

export const icsSummaryData = {
  icsName: "Birmingham and Solihull ICS",
  population: 1359160,
  annualDeaths: 12000,
  reportingPeriod: "Year to Date - March 2026",
  lastUpdated: now.toISOString(),

  // Key Performance Indicators
  kpis: {
    totalUsersYTD: ytdUsers,
    currentMonthUsers: currentMonthUsers,
    systemReach: ((ytdUsers / (monthlyDeaths * 9)) * 100).toFixed(1), // % of deaths
    avgSatisfaction: 4.7,
    completionRate: 94,
    avgResponseTime: 2.4, // hours
  },

  // Health Inequalities Reach
  core20Reach: {
    serviceUsers: 67.3, // % from most deprived 20%
    icbPopulation: 60.0, // % ICS population in Core20
    gap: 7.3, // Positive gap = over-indexing to need
  },

  // Financial Impact
  financial: {
    costPerUser: 125,
    totalInvestment: 36125, // 289 users × £125
    benefitsAccessed: 287500, // £995/user avg (Liverpool: £900 + £235k/149 users)
    funeralSavings: 260100, // £900/user avg
    roi: 7.96, // Total benefits / investment
  }
};

// Real-time activity data (last 7 days)
export const recentActivityData = [
  { date: "Mon 10 Mar", newUsers: 6, calls: 14, benefitsClaimed: 7800 },
  { date: "Tue 11 Mar", newUsers: 4, calls: 11, benefitsClaimed: 5200 },
  { date: "Wed 12 Mar", newUsers: 7, calls: 17, benefitsClaimed: 9400 },
  { date: "Thu 13 Mar", newUsers: 5, calls: 13, benefitsClaimed: 6100 },
  { date: "Fri 14 Mar", newUsers: 8, calls: 19, benefitsClaimed: 11200 },
  { date: "Sat 15 Mar", newUsers: 2, calls: 4, benefitsClaimed: 1900 },
  { date: "Today", newUsers: 2, calls: 6, benefitsClaimed: 3400, isToday: true },
];

// Demographics breakdown
export const demographicsData = {
  byDeprivation: [
    { quintile: "Q1 (Most)", count: 97, percentage: 33.6, icbAvg: 32.1 },
    { quintile: "Q2", count: 83, percentage: 28.7, icbAvg: 24.3 },
    { quintile: "Q3", count: 54, percentage: 18.7, icbAvg: 19.8 },
    { quintile: "Q4", count: 35, percentage: 12.1, icbAvg: 14.2 },
    { quintile: "Q5 (Least)", count: 20, percentage: 6.9, icbAvg: 9.6 },
  ],

  byEthnicity: [
    { group: "White British", count: 123, percentage: 42.6, icbAvg: 48.6 },
    { group: "Asian/Asian British", count: 87, percentage: 30.1, icbAvg: 26.4 },
    { group: "Black/Black British", count: 43, percentage: 14.9, icbAvg: 13.2 },
    { group: "Mixed/Multiple", count: 21, percentage: 7.3, icbAvg: 6.8 },
    { group: "Other", count: 15, percentage: 5.2, icbAvg: 5.0 },
  ],

  byAge: [
    { ageGroup: "18-24", count: 8, percentage: 2.8 },
    { ageGroup: "25-34", count: 23, percentage: 8.0 },
    { ageGroup: "35-44", count: 34, percentage: 11.8 },
    { ageGroup: "45-54", count: 52, percentage: 18.0 },
    { ageGroup: "55-64", count: 67, percentage: 23.2 },
    { ageGroup: "65-74", count: 71, percentage: 24.6 },
    { ageGroup: "75+", count: 34, percentage: 11.8 },
  ],

  byGender: [
    { gender: "Female", count: 173, percentage: 59.9 },
    { gender: "Male", count: 111, percentage: 38.4 },
    { gender: "Other/Prefer not to say", count: 5, percentage: 1.7 },
  ],
};

// Outcomes data
export const outcomesData = {
  wellbeingScores: {
    preSupport: 3.2,
    postSupport: 6.8,
    improvement: 3.6,
    target: 3.0,
  },

  supportTiers: [
    { tier: "Crisis (RED)", count: 12, percentage: 4.2, timeToResponse: "< 1 hour" },
    { tier: "High (AMBER)", count: 67, percentage: 23.2, timeToResponse: "< 4 hours" },
    { tier: "Moderate (YELLOW)", count: 134, percentage: 46.4, timeToResponse: "< 24 hours" },
    { tier: "Low (GREEN)", count: 76, percentage: 26.3, timeToResponse: "< 48 hours" },
  ],

  interventions: [
    { type: "Funeral Price Comparison", count: 267, percentage: 92.4 },
    { type: "Funeral Payment Support", count: 234, percentage: 81.0 },
    { type: "Bereavement Benefits", count: 198, percentage: 68.5 },
    { type: "Emotional Support Referral", count: 156, percentage: 54.0 },
    { type: "Housing/Tenancy Support", count: 89, percentage: 30.8 },
    { type: "Multi-Agency Coordination", count: 67, percentage: 23.2 },
    { type: "Mental Health Referral", count: 45, percentage: 15.6 },
    { type: "Crisis Intervention", count: 12, percentage: 4.2 },
  ],

  onwardReferrals: [
    { service: "Cruse Bereavement Care", count: 87 },
    { service: "Local Authority Housing", count: 54 },
    { type: "Citizens Advice", count: 43 },
    { service: "Mental Health Services", count: 34 },
    { service: "Samaritans", count: 12 },
    { service: "Sue Ryder", count: 23 },
  ],
};

// Monthly trend data
export const monthlyTrendData = [
  { month: "Jul 2025", users: 18, satisfaction: 4.5, benefitsAccessed: 19800 },
  { month: "Aug 2025", users: 24, satisfaction: 4.6, benefitsAccessed: 26400 },
  { month: "Sep 2025", users: 28, satisfaction: 4.6, benefitsAccessed: 30800 },
  { month: "Oct 2025", users: 31, satisfaction: 4.7, benefitsAccessed: 34100 },
  { month: "Nov 2025", users: 35, satisfaction: 4.7, benefitsAccessed: 38500 },
  { month: "Dec 2025", users: 33, satisfaction: 4.8, benefitsAccessed: 36300 },
  { month: "Jan 2026", users: 37, satisfaction: 4.7, benefitsAccessed: 40700 },
  { month: "Feb 2026", users: 39, satisfaction: 4.7, benefitsAccessed: 42900 },
  { month: "Mar 2026", users: 34, satisfaction: 4.7, benefitsAccessed: 37400, isCurrent: true },
];

// Geographic coverage (Birmingham & Solihull constituencies)
export const geographicData = [
  { area: "Birmingham Ladywood", users: 43, deaths: 156, reach: 27.6 },
  { area: "Birmingham Hodge Hill", users: 38, deaths: 142, reach: 26.8 },
  { area: "Birmingham Perry Barr", users: 34, deaths: 134, reach: 25.4 },
  { area: "Birmingham Erdington", users: 29, deaths: 127, reach: 22.8 },
  { area: "Birmingham Yardley", users: 26, deaths: 118, reach: 22.0 },
  { area: "Birmingham Hall Green", users: 24, deaths: 112, reach: 21.4 },
  { area: "Birmingham Edgbaston", users: 21, deaths: 98, reach: 21.4 },
  { area: "Birmingham Selly Oak", users: 19, deaths: 94, reach: 20.2 },
  { area: "Birmingham Northfield", users: 18, deaths: 89, reach: 20.2 },
  { area: "Solihull", users: 37, deaths: 184, reach: 20.1 },
];

// Cost avoidance calculations
export const costAvoidanceData = {
  categories: [
    {
      category: "Primary Care (GP)",
      units: 234,
      unitCost: 42,
      totalSavings: 9828,
      description: "Reduced GP visits for distress/crisis",
    },
    {
      category: "A&E Attendance",
      units: 23,
      unitCost: 182,
      totalSavings: 4186,
      description: "Crisis prevention",
    },
    {
      category: "Mental Health Services",
      units: 45,
      unitCost: 250,
      totalSavings: 11250,
      description: "Early intervention reduces acute MH demand",
    },
    {
      category: "Social Care",
      units: 89,
      unitCost: 90,
      totalSavings: 8010,
      description: "Coordinated support reduces social work hours",
    },
    {
      category: "Housing Crisis",
      units: 12,
      unitCost: 500,
      totalSavings: 6000,
      description: "Prevented homelessness/eviction",
    },
  ],

  totalCostAvoidance: 39274,
  totalInvestment: 36125,
  netSaving: 3149,
};

// Service quality metrics
export const qualityMetrics = {
  safeguarding: {
    concernsIdentified: 8,
    appropriatelyReferred: 8,
    responseTime: "< 2 hours",
  },

  userFeedback: {
    totalResponses: 267,
    responseRate: 92.4,
    ratings: [
      { score: 5, count: 187, percentage: 70.0 },
      { score: 4, count: 63, percentage: 23.6 },
      { score: 3, count: 12, percentage: 4.5 },
      { score: 2, count: 3, percentage: 1.1 },
      { score: 1, count: 2, percentage: 0.7 },
    ],
  },

  complaints: 1,
  compliments: 43,
};

// Referral sources data
export const referralSourcesData = {
  // Current month breakdown
  bySource: [
    {
      source: "Hospital Trusts",
      count: 98,
      percentage: 33.9,
      conversion: 78,
      avgResponseTime: 3.2,
      color: "#0a7c03",
      partners: ["UHB", "Birmingham Women's & Children's", "Heart of England"]
    },
    {
      source: "Medical Examiner",
      count: 67,
      percentage: 23.2,
      conversion: 92,
      avgResponseTime: 1.8,
      color: "#fc9401",
      partners: ["Birmingham & Solihull ME Office"]
    },
    {
      source: "Primary Care (GP/PCN)",
      count: 54,
      percentage: 18.7,
      conversion: 71,
      avgResponseTime: 4.1,
      color: "#00b0f0",
      partners: ["43 GP practices", "7 PCNs"]
    },
    {
      source: "Local Authority",
      count: 31,
      percentage: 10.7,
      conversion: 85,
      avgResponseTime: 2.9,
      color: "#8b5cf6",
      partners: ["Bereavement Services", "Registrars"]
    },
    {
      source: "Hospices",
      count: 18,
      percentage: 6.2,
      conversion: 94,
      avgResponseTime: 1.2,
      color: "#f59e0b",
      partners: ["St Mary's", "John Taylor", "Acorns"]
    },
    {
      source: "VCSE/Charities",
      count: 12,
      percentage: 4.2,
      conversion: 67,
      avgResponseTime: 5.3,
      color: "#ec4899",
      partners: ["Cruse", "Sue Ryder", "Local groups"]
    },
    {
      source: "Self-Referral",
      count: 9,
      percentage: 3.1,
      conversion: 100,
      avgResponseTime: 0.8,
      color: "#14b8a6",
      partners: ["Website", "Phone", "Social media"]
    },
  ],

  // Monthly trend by source
  monthlyTrend: [
    {
      month: "Jul 2025",
      hospital: 12,
      medicalExaminer: 8,
      primaryCare: 7,
      localAuthority: 4,
      hospice: 2,
      vcse: 1,
      selfReferral: 1
    },
    {
      month: "Aug 2025",
      hospital: 16,
      medicalExaminer: 10,
      primaryCare: 9,
      localAuthority: 5,
      hospice: 2,
      vcse: 2,
      selfReferral: 1
    },
    {
      month: "Sep 2025",
      hospital: 19,
      medicalExaminer: 12,
      primaryCare: 10,
      localAuthority: 6,
      hospice: 3,
      vcse: 2,
      selfReferral: 1
    },
    {
      month: "Oct 2025",
      hospital: 21,
      medicalExaminer: 14,
      primaryCare: 11,
      localAuthority: 6,
      hospice: 3,
      vcse: 2,
      selfReferral: 1
    },
    {
      month: "Nov 2025",
      hospital: 24,
      medicalExaminer: 16,
      primaryCare: 12,
      localAuthority: 7,
      hospice: 3,
      vcse: 2,
      selfReferral: 1
    },
    {
      month: "Dec 2025",
      hospital: 22,
      medicalExaminer: 15,
      primaryCare: 11,
      localAuthority: 7,
      hospice: 3,
      vcse: 2,
      selfReferral: 1
    },
    {
      month: "Jan 2026",
      hospital: 25,
      medicalExaminer: 17,
      primaryCare: 13,
      localAuthority: 7,
      hospice: 4,
      vcse: 2,
      selfReferral: 1
    },
    {
      month: "Feb 2026",
      hospital: 27,
      medicalExaminer: 18,
      primaryCare: 13,
      localAuthority: 7,
      hospice: 4,
      vcse: 2,
      selfReferral: 1
    },
    {
      month: "Mar 2026",
      hospital: 23,
      medicalExaminer: 15,
      primaryCare: 12,
      localAuthority: 6,
      hospice: 3,
      vcse: 2,
      selfReferral: 1,
      isCurrent: true
    },
  ],

  // Partnership development opportunities
  partnerships: {
    established: [
      { partner: "University Hospitals Birmingham NHS FT", referrals: 156, active: true },
      { partner: "Birmingham & Solihull ME Office", referrals: 127, active: true },
      { partner: "Birmingham Women's & Children's NHS FT", referrals: 87, active: true },
    ],
    developing: [
      { partner: "Heart of England NHS FT", referrals: 34, active: true },
      { partner: "St Mary's Hospice", referrals: 28, active: true },
      { partner: "Solihull Healthcare Partnership PCN", referrals: 23, active: true },
    ],
    potential: [
      { partner: "Birmingham Community Healthcare NHS FT", referrals: 0, active: false },
      { partner: "West Midlands Ambulance Service", referrals: 0, active: false },
      { partner: "Birmingham City Council Social Care", referrals: 0, active: false },
    ],
  },

  // Conversion funnel
  conversionFunnel: [
    { stage: "Referral Received", count: 372, percentage: 100 },
    { stage: "Contact Attempted", count: 349, percentage: 93.8 },
    { stage: "Contact Made", count: 312, percentage: 83.9 },
    { stage: "Assessment Completed", count: 289, percentage: 77.7 },
    { stage: "Support Provided", count: 289, percentage: 77.7 },
  ],

  // Quality by source
  qualityBySource: [
    { source: "Medical Examiner", appropriateness: 98, avgSeverity: "Moderate" },
    { source: "Hospices", appropriateness: 97, avgSeverity: "High" },
    { source: "Hospital Trusts", appropriateness: 89, avgSeverity: "Moderate" },
    { source: "Local Authority", appropriateness: 92, avgSeverity: "Moderate" },
    { source: "Primary Care", appropriateness: 83, avgSeverity: "Low-Moderate" },
    { source: "VCSE/Charities", appropriateness: 78, avgSeverity: "Varied" },
    { source: "Self-Referral", appropriateness: 100, avgSeverity: "High" },
  ],
};

// Real-time status indicators
export const systemStatus = {
  status: "operational",
  uptime: 99.8,
  activeUsers: 17,
  queuedCalls: 2,
  avgWaitTime: 4, // minutes
  staffOnDuty: 6,
  lastIncident: "2026-02-28",
};
