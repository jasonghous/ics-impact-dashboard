import { Activity, Users, TrendingUp, DollarSign, Heart, AlertCircle, CheckCircle, GitBranch } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import {
  icsSummaryData,
  recentActivityData,
  demographicsData,
  outcomesData,
  monthlyTrendData,
  geographicData,
  costAvoidanceData,
  qualityMetrics,
  systemStatus,
  referralSourcesData
} from '../data/demoData'

const COLORS = ['#fc9401', '#0a7c03', '#00b0f0', '#ef4444', '#8b5cf6', '#f59e0b']

function Dashboard({ lastUpdate }) {
  const formatCurrency = (value) => `£${value.toLocaleString()}`
  const formatPercent = (value) => `${value}%`

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">ICS Impact Dashboard</h1>
              <p className="text-sm text-slate-400">{icsSummaryData.icsName}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className={`w-2 h-2 rounded-full ${systemStatus.status === 'operational' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                <span>Live</span>
              </div>
              <p className="text-xs text-slate-500">Updated {lastUpdate.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto px-6 py-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Total Users (YTD)"
            value={icsSummaryData.kpis.totalUsersYTD}
            icon={<Users className="w-6 h-6" />}
            trend="+14% vs target"
            color="bg-blue-500/10 text-blue-400"
            iconBg="bg-blue-500/20"
          />
          <KPICard
            title="System Reach"
            value={`${icsSummaryData.kpis.systemReach}%`}
            subtitle="of all deaths"
            icon={<TrendingUp className="w-6 h-6" />}
            trend="Target: 3.0%"
            color="bg-fe-orange/10 text-fe-orange"
            iconBg="bg-fe-orange/20"
          />
          <KPICard
            title="Benefits Accessed"
            value={formatCurrency(icsSummaryData.financial.benefitsAccessed)}
            icon={<DollarSign className="w-6 h-6" />}
            trend={`ROI: ${icsSummaryData.financial.roi.toFixed(1)}:1`}
            color="bg-fe-green/10 text-fe-green"
            iconBg="bg-fe-green/20"
          />
          <KPICard
            title="User Satisfaction"
            value={icsSummaryData.kpis.avgSatisfaction}
            subtitle="out of 5.0"
            icon={<Heart className="w-6 h-6" />}
            trend="94% completion rate"
            color="bg-purple-500/10 text-purple-400"
            iconBg="bg-purple-500/20"
          />
        </div>

        {/* Real-Time Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-fe-orange" />
              7-Day Activity Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={recentActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Line type="monotone" dataKey="newUsers" stroke="#fc9401" strokeWidth={2} name="New Users" />
                <Line type="monotone" dataKey="calls" stroke="#00b0f0" strokeWidth={2} name="Total Calls" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4">System Status</h2>
            <div className="space-y-4">
              <StatusItem label="Status" value="Operational" status="success" />
              <StatusItem label="Uptime" value={`${systemStatus.uptime}%`} status="success" />
              <StatusItem label="Active Users" value={systemStatus.activeUsers} />
              <StatusItem label="Queue" value={`${systemStatus.queuedCalls} calls`} />
              <StatusItem label="Avg Wait" value={`${systemStatus.avgWaitTime} mins`} />
              <StatusItem label="Staff on Duty" value={systemStatus.staffOnDuty} />
            </div>
          </div>
        </div>

        {/* Health Inequalities Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-fe-green" />
              Core20PLUS5 Reach
            </h2>
            <div className="bg-slate-900 rounded-lg p-6 mb-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-fe-orange">{icsSummaryData.core20Reach.serviceUsers}%</p>
                  <p className="text-sm text-slate-400">Service Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-400">{icsSummaryData.core20Reach.icbPopulation}%</p>
                  <p className="text-sm text-slate-400">ICS Population</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-fe-green">+{icsSummaryData.core20Reach.gap}%</p>
                  <p className="text-sm text-slate-400">Over-indexing</p>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={demographicsData.byDeprivation}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="quintile" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="percentage" fill="#fc9401" name="Service Users %" />
                <Bar dataKey="icbAvg" fill="#64748b" name="ICS Population %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4">Ethnicity Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demographicsData.byEthnicity}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ group, percentage }) => `${group}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {demographicsData.byEthnicity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Outcomes & Interventions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4">Wellbeing Impact</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-slate-900 rounded-lg">
                <p className="text-2xl font-bold text-red-400">{outcomesData.wellbeingScores.preSupport}</p>
                <p className="text-sm text-slate-400">Pre-Support</p>
              </div>
              <div className="text-center p-4 bg-slate-900 rounded-lg">
                <p className="text-2xl font-bold text-fe-green">{outcomesData.wellbeingScores.postSupport}</p>
                <p className="text-sm text-slate-400">Post-Support</p>
              </div>
              <div className="text-center p-4 bg-fe-green/10 rounded-lg border border-fe-green/30">
                <p className="text-2xl font-bold text-fe-green">+{outcomesData.wellbeingScores.improvement}</p>
                <p className="text-sm text-slate-400">Improvement</p>
              </div>
            </div>

            <h3 className="text-sm font-semibold mb-3 text-slate-300">Support Tier Distribution</h3>
            <div className="space-y-2">
              {outcomesData.supportTiers.map((tier) => (
                <div key={tier.tier} className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{tier.tier}</p>
                    <p className="text-xs text-slate-400">{tier.timeToResponse}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{tier.count}</p>
                    <p className="text-xs text-slate-400">{tier.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4">Top Interventions</h2>
            <div className="space-y-3">
              {outcomesData.interventions.slice(0, 6).map((intervention) => (
                <div key={intervention.type} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">{intervention.type}</span>
                    <span className="text-fe-orange font-medium">{intervention.count}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-fe-orange h-2 rounded-full transition-all duration-500"
                      style={{ width: `${intervention.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Referral Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-fe-orange" />
              Referral Sources (YTD)
            </h2>
            <div className="space-y-3">
              {referralSourcesData.bySource.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        />
                        <span className="text-sm font-medium text-slate-300">{source.source}</span>
                      </div>
                      <p className="text-xs text-slate-500 ml-5">{source.partners.join(", ")}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{source.count}</p>
                      <p className="text-xs text-slate-400">{source.percentage}%</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs text-slate-400 ml-5">
                    <span>{source.conversion}% conversion</span>
                    <span>•</span>
                    <span>{source.avgResponseTime}h response</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4">Referral Trends (9 Months)</h2>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={referralSourcesData.monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Legend />
                <Area type="monotone" dataKey="hospital" stackId="1" stroke="#0a7c03" fill="#0a7c03" name="Hospital" />
                <Area type="monotone" dataKey="medicalExaminer" stackId="1" stroke="#fc9401" fill="#fc9401" name="ME Office" />
                <Area type="monotone" dataKey="primaryCare" stackId="1" stroke="#00b0f0" fill="#00b0f0" name="Primary Care" />
                <Area type="monotone" dataKey="localAuthority" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" name="Local Authority" />
                <Area type="monotone" dataKey="hospice" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Hospice" />
                <Area type="monotone" dataKey="vcse" stackId="1" stroke="#ec4899" fill="#ec4899" name="VCSE" />
                <Area type="monotone" dataKey="selfReferral" stackId="1" stroke="#14b8a6" fill="#14b8a6" name="Self-Referral" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Partnership Development */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Partnership Development Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold mb-3 text-fe-green">Established Partnerships</h3>
              <div className="space-y-2">
                {referralSourcesData.partnerships.established.map((partner) => (
                  <div key={partner.partner} className="p-3 bg-fe-green/10 rounded-lg border border-fe-green/30">
                    <div className="flex items-center justify-between mb-1">
                      <div className="w-2 h-2 rounded-full bg-fe-green animate-pulse" />
                      <span className="text-xs font-medium text-fe-green">{partner.referrals} referrals</span>
                    </div>
                    <p className="text-xs text-slate-300">{partner.partner}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-fe-orange">Developing Partnerships</h3>
              <div className="space-y-2">
                {referralSourcesData.partnerships.developing.map((partner) => (
                  <div key={partner.partner} className="p-3 bg-fe-orange/10 rounded-lg border border-fe-orange/30">
                    <div className="flex items-center justify-between mb-1">
                      <div className="w-2 h-2 rounded-full bg-fe-orange" />
                      <span className="text-xs font-medium text-fe-orange">{partner.referrals} referrals</span>
                    </div>
                    <p className="text-xs text-slate-300">{partner.partner}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-400">Potential Partnerships</h3>
              <div className="space-y-2">
                {referralSourcesData.partnerships.potential.map((partner) => (
                  <div key={partner.partner} className="p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                    <div className="flex items-center justify-between mb-1">
                      <div className="w-2 h-2 rounded-full bg-slate-500" />
                      <span className="text-xs font-medium text-slate-500">Not active</span>
                    </div>
                    <p className="text-xs text-slate-400">{partner.partner}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Financial Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-fe-green" />
              Cost Avoidance Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={costAvoidanceData.categories} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis dataKey="category" type="category" stroke="#94a3b8" width={180} fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  formatter={(value) => formatCurrency(value)}
                />
                <Bar dataKey="totalSavings" fill="#0a7c03" name="Savings" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold mb-4">ROI Summary</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900 rounded-lg">
                <p className="text-sm text-slate-400">Total Investment</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(costAvoidanceData.totalInvestment)}</p>
              </div>
              <div className="p-4 bg-fe-green/10 rounded-lg border border-fe-green/30">
                <p className="text-sm text-slate-400">Cost Avoidance</p>
                <p className="text-2xl font-bold text-fe-green">{formatCurrency(costAvoidanceData.totalCostAvoidance)}</p>
              </div>
              <div className="p-4 bg-fe-orange/10 rounded-lg border border-fe-orange/30">
                <p className="text-sm text-slate-400">Benefits Accessed</p>
                <p className="text-2xl font-bold text-fe-orange">{formatCurrency(icsSummaryData.financial.benefitsAccessed)}</p>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-sm text-slate-400">Total System Value</p>
                <p className="text-2xl font-bold text-blue-400">
                  {formatCurrency(costAvoidanceData.totalCostAvoidance + icsSummaryData.financial.benefitsAccessed)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">9-Month Performance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis yAxisId="left" stroke="#94a3b8" />
              <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="users" stroke="#fc9401" strokeWidth={2} name="Users" />
              <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#00b0f0" strokeWidth={2} name="Satisfaction" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Geographic Coverage */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Geographic Coverage by Constituency</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-700">
                <tr>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Constituency</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">Users</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">Annual Deaths</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">Reach %</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {geographicData.map((area) => (
                  <tr key={area.area} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4">{area.area}</td>
                    <td className="text-right py-3 px-4 font-medium">{area.users}</td>
                    <td className="text-right py-3 px-4 text-slate-400">{area.deaths}</td>
                    <td className="text-right py-3 px-4">
                      <span className={`font-medium ${area.reach > 25 ? 'text-fe-green' : area.reach > 20 ? 'text-fe-orange' : 'text-slate-400'}`}>
                        {area.reach}%
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${area.reach > 25 ? 'bg-fe-green' : area.reach > 20 ? 'bg-fe-orange' : 'bg-slate-500'}`}
                          style={{ width: `${Math.min(area.reach * 3, 100)}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 py-6 border-t border-slate-800">
          <p>Powered by FuneralExperts | Data compliant with NHS DSPT & GDPR</p>
          <p className="mt-1">Birmingham & Solihull ICS Demo Dashboard - March 2026</p>
        </footer>
      </div>
    </div>
  )
}

function KPICard({ title, value, subtitle, icon, trend, color, iconBg }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-slate-400 mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold">{value}</p>
            {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
          </div>
        </div>
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <div className={color}>{icon}</div>
        </div>
      </div>
      {trend && (
        <p className="text-sm text-slate-400 flex items-center gap-1">
          <TrendingUp className="w-4 h-4 text-fe-green" />
          {trend}
        </p>
      )}
    </div>
  )
}

function StatusItem({ label, value, status }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-slate-700/50 last:border-0">
      <span className="text-sm text-slate-400">{label}</span>
      <div className="flex items-center gap-2">
        {status === 'success' && <CheckCircle className="w-4 h-4 text-fe-green" />}
        {status === 'warning' && <AlertCircle className="w-4 h-4 text-fe-orange" />}
        <span className="font-medium">{value}</span>
      </div>
    </div>
  )
}

export default Dashboard
