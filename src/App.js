import React, { useState, useEffect } from 'react';
import './App.css';

// Simple icon components
const DollarSign = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const Coins = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="8" cy="8" r="6"></circle>
    <path d="M18.09 10.37A6 6 0 1 1 10.37 18.09"></path>
  </svg>
);

const TrendingUp = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const Zap = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const Eye = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOff = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a13.16 13.16 0 0 1-1.67 2.68"></path>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 8 11 8a9.74 9.74 0 0 0 5.39-1.61"></path>
    <line x1="2" y1="2" x2="22" y2="22"></line>
  </svg>
);

const Calculator = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
    <line x1="8" y1="6" x2="16" y2="6"></line>
    <line x1="8" y1="10" x2="8" y2="10"></line>
    <line x1="12" y1="10" x2="12" y2="10"></line>
    <line x1="16" y1="10" x2="16" y2="10"></line>
  </svg>
);

const FileText = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const Download = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Calendar = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

function App() {
  const [bills, setBills] = useState({
    100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 1: 0
  });
  
  const [coins, setCoins] = useState({
    100: 0, 50: 0, 25: 0, 10: 0, 5: 0, 1: 0
  });

  const [showBreakdown, setShowBreakdown] = useState(true);
  const [animateTotal, setAnimateTotal] = useState(false);
  const [totalHistory, setTotalHistory] = useState([]);
  const [countPurpose, setCountPurpose] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [savedCounts, setSavedCounts] = useState([]);
  const [showBusinessFeatures, setShowBusinessFeatures] = useState(false);
  const [startingCash, setStartingCash] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcExpression, setCalcExpression] = useState('');
  const [calcResult, setCalcResult] = useState('');
  const [selectedRegister, setSelectedRegister] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [shift, setShift] = useState('');

  const coinData = {
    100: { name: 'Dollar' }, 50: { name: 'Half Dollar' }, 25: { name: 'Quarter' },
    10: { name: 'Dime' }, 5: { name: 'Nickel' }, 1: { name: 'Penny' }
  };

  const countPurposes = [
    'Daily Till Count', 'Cash Deposit', 'Petty Cash Reconciliation', 
    'Customer Payment', 'Vendor Payment', 'End of Shift Count',
    'Bank Deposit Preparation', 'Safe Count', 'Register Audit',
    'Lumber Delivery Payment', 'Contractor Payment', 'Refund Processing',
    'Material Purchase', 'Equipment Rental Payment', 'Miscellaneous', 'Other'
  ];

  const registers = [
    'Main Counter', 'Lumber Yard', 'Hardware Section', 'Tool Rental',
    'Contractor Sales', 'Outdoor Sales', 'Drive-Through', 'Office', 'Warehouse', 'Other'
  ];

  const shifts = ['Morning (6AM-12PM)', 'Afternoon (12PM-6PM)', 'Night (6PM-6AM)', 'Full Day Report', 'Other'];

  const calculateTotal = () => {
    let total = 0;
    Object.entries(bills).forEach(([denomination, count]) => {
      total += parseInt(denomination) * parseInt(count || 0);
    });
    Object.entries(coins).forEach(([denomination, count]) => {
      total += (parseInt(denomination) / 100) * parseInt(count || 0);
    });
    return total;
  };

  const total = calculateTotal();
  const variance = expectedAmount ? total - parseFloat(expectedAmount) : 0;
  const netCash = startingCash ? total - parseFloat(startingCash) : total;

  const totalBills = Object.entries(bills).reduce((sum, [denom, count]) => sum + (parseInt(denom) * (count || 0)), 0);
  const totalCoins = Object.entries(coins).reduce((sum, [denom, count]) => sum + ((parseInt(denom) / 100) * (count || 0)), 0);
  const billCount = Object.values(bills).reduce((sum, count) => sum + (count || 0), 0);
  const coinCount = Object.values(coins).reduce((sum, count) => sum + (count || 0), 0);

  useEffect(() => {
    if (total > 0) {
      setAnimateTotal(true);
      const timer = setTimeout(() => setAnimateTotal(false), 600);
      if (totalHistory.length === 0 || totalHistory[totalHistory.length - 1] !== total) {
        setTotalHistory(prev => [...prev.slice(-4), total]);
      }
      return () => clearTimeout(timer);
    }
  }, [total, totalHistory]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD'
    }).format(amount);
  };

  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true
    }).format(date);
  };

  const handleBillChange = (denomination, value) => {
    setBills(prev => ({ ...prev, [denomination]: Math.max(0, parseInt(value) || 0) }));
  };

  const handleCoinChange = (denomination, value) => {
    setCoins(prev => ({ ...prev, [denomination]: Math.max(0, parseInt(value) || 0) }));
  };

  const clearAll = () => {
    setBills({ 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 1: 0 });
    setCoins({ 100: 0, 50: 0, 25: 0, 10: 0, 5: 0, 1: 0 });
    setTotalHistory([]);
    setCountPurpose('');
    setExpectedAmount('');
    setNotes('');
    setStartingCash('');
    setSelectedRegister('');
    setEmployeeName('');
    setShift('');
  };

  const saveCount = () => {
    if (total === 0) return;
    
    const newCount = {
      id: Date.now(),
      date: new Date(),
      purpose: countPurpose || 'General Count',
      register: selectedRegister,
      employee: employeeName,
      shift: shift,
      total: total,
      expected: expectedAmount ? parseFloat(expectedAmount) : null,
      startingCash: startingCash ? parseFloat(startingCash) : null,
      netCash: netCash,
      variance: variance,
      bills: { ...bills },
      coins: { ...coins },
      notes: notes,
      billsTotal: totalBills,
      coinsTotal: totalCoins,
      billCount: billCount,
      coinCount: coinCount
    };
    
    setSavedCounts(prev => [newCount, ...prev.slice(0, 49)]);
    clearAll();
  };

  // Calculator functions
  const calculate = (expression) => {
    try {
      const sanitized = expression.replace(/[^0-9+\-*/.() ]/g, '');
      // Safe evaluation using eval with strict sanitization
      // eslint-disable-next-line no-eval
      const result = eval(sanitized);
      return isFinite(result) ? result : 'Error';
    } catch (error) {
      return 'Error';
    }
  };

  const handleCalcInput = (value) => {
    if (value === '=') {
      const result = calculate(calcExpression);
      setCalcResult(result.toString());
      if (result !== 'Error') {
        setExpectedAmount(result.toString());
      }
    } else if (value === 'C') {
      setCalcExpression('');
      setCalcResult('');
    } else if (value === '⌫') {
      setCalcExpression(prev => prev.slice(0, -1));
    } else {
      setCalcExpression(prev => prev + value);
    }
  };

  const generateReport = () => {
    const report = `LUMBER COMPANY CASH COUNT REPORT
${'='.repeat(60)}
Generated: ${formatDateTime(new Date())}

CURRENT COUNT DETAILS:
${'-'.repeat(30)}
Employee: ${employeeName || 'Not specified'}
Register/Location: ${selectedRegister || 'Not specified'}
Shift: ${shift || 'Not specified'}
Purpose: ${countPurpose || 'Not specified'}

CASH BREAKDOWN:
${'-'.repeat(30)}
Total Amount: ${formatCurrency(total)}
${startingCash ? `Starting Cash: ${formatCurrency(parseFloat(startingCash))}` : ''}
${startingCash ? `Net Cash (Sales): ${formatCurrency(netCash)}` : ''}
${expectedAmount ? `Expected: ${formatCurrency(parseFloat(expectedAmount))}` : ''}
${expectedAmount ? `Variance: ${formatCurrency(variance)} ${variance > 0 ? '(Over)' : variance < 0 ? '(Under)' : '(Exact)'}` : ''}

Bills Total: ${formatCurrency(totalBills)} (${billCount} pieces)
Coins Total: ${formatCurrency(totalCoins)} (${coinCount} pieces)

DETAILED BILL COUNT:
${Object.entries(bills).filter(([_, count]) => count > 0).map(([denom, count]) => 
  `  $${denom} × ${count} = ${formatCurrency(parseInt(denom) * count)}`).join('\n')}

DETAILED COIN COUNT:
${Object.entries(coins).filter(([_, count]) => count > 0).map(([denom, count]) => 
  `  ${coinData[denom].name} × ${count} = ${formatCurrency((parseInt(denom) / 100) * count)}`).join('\n')}

${notes ? `NOTES: ${notes}\n` : ''}

RECENT SAVED COUNTS:
${'-'.repeat(30)}
${savedCounts.slice(0, 5).map(count => 
  `${formatDateTime(count.date)} | ${count.register || 'N/A'} | ${count.employee || 'N/A'} | ${count.purpose}: ${formatCurrency(count.total)}${count.variance !== 0 ? ` (Var: ${formatCurrency(count.variance)})` : ''}`).join('\n')}

${'='.repeat(60)}
End of Report
`;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lumber-company-cash-report-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportData = () => {
    const data = {
      exportDate: new Date().toISOString(),
      counts: savedCounts,
      summary: {
        totalCounts: savedCounts.length,
        totalAmount: savedCounts.reduce((sum, count) => sum + count.total, 0),
        avgVariance: savedCounts.filter(c => c.variance !== 0).reduce((sum, count, _, arr) => 
          sum + Math.abs(count.variance) / arr.length, 0)
      }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lumber-company-cash-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const QuickAddButton = ({ amount, label }) => (
    <button
      onClick={() => {
        if (amount >= 1) {
          handleBillChange(amount, (bills[amount] || 0) + 1);
        } else {
          const centValue = amount * 100;
          handleCoinChange(centValue, (coins[centValue] || 0) + 1);
        }
      }}
      className="quick-add-btn"
    >
      +{label}
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-icons">
            <div className="header-icon">
              <DollarSign size={24} color="white" />
            </div>
            <h1 className="main-title">Till Counter</h1>
            <div className="header-icon secondary">
              <Calculator size={24} color="white" />
            </div>
          </div>
          <p className="subtitle">Till counter for bookkeeping and reconciliation</p>
        </div>

        {/* Business Controls */}
        <div className="business-controls">
          <button
            onClick={() => setShowBusinessFeatures(!showBusinessFeatures)}
            className="toggle-business-btn"
          >
            <Calculator size={16} />
            {showBusinessFeatures ? 'Hide' : 'Show'} Business Features
          </button>
        </div>

        {showBusinessFeatures && (
          <div className="business-section">
            <div className="business-inputs">
              <div className="input-group">
                <label>Employee Name:</label>
                <input
                  type="text"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  placeholder="Enter employee name"
                  className="business-input"
                />
              </div>

              <div className="input-group">
                <label>Register/Location:</label>
                <select 
                  value={selectedRegister} 
                  onChange={(e) => setSelectedRegister(e.target.value)}
                  className="business-select"
                >
                  <option value="">Select register...</option>
                  {registers.map(register => (
                    <option key={register} value={register}>{register}</option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>Shift:</label>
                <select 
                  value={shift} 
                  onChange={(e) => setShift(e.target.value)}
                  className="business-select"
                >
                  <option value="">Select shift...</option>
                  {shifts.map(shiftTime => (
                    <option key={shiftTime} value={shiftTime}>{shiftTime}</option>
                  ))}
                </select>
              </div>
              
              <div className="input-group">
                <label>Count Purpose:</label>
                <select 
                  value={countPurpose} 
                  onChange={(e) => setCountPurpose(e.target.value)}
                  className="business-select"
                >
                  <option value="">Select purpose...</option>
                  {countPurposes.map(purpose => (
                    <option key={purpose} value={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>
              
              <div className="input-group">
                <label>Starting Cash:</label>
                <input
                  type="number"
                  step="0.01"
                  value={startingCash}
                  onChange={(e) => setStartingCash(e.target.value)}
                  placeholder="0.00"
                  className="business-input"
                />
              </div>

              <div className="input-group">
                <label>Expected Amount:</label>
                <div className="expected-input-group">
                  <input
                    type="number"
                    step="0.01"
                    value={expectedAmount}
                    onChange={(e) => setExpectedAmount(e.target.value)}
                    placeholder="0.00"
                    className="business-input"
                  />
                  <button
                    onClick={() => setShowCalculator(!showCalculator)}
                    className="calc-toggle-btn"
                  >
                    🧮
                  </button>
                </div>
              </div>
              
              <div className="input-group">
                <label>Notes:</label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add notes about this count..."
                  className="business-input"
                />
              </div>
            </div>

            {/* Calculator Modal */}
            {showCalculator && (
              <div className="calculator-overlay">
                <div className="calculator">
                  <div className="calc-header">
                    <span>Quick Calculator</span>
                    <button onClick={() => setShowCalculator(false)} className="calc-close">×</button>
                  </div>
                  <div className="calc-display">
                    <div className="calc-expression">{calcExpression}</div>
                    <div className="calc-result">{calcResult}</div>
                  </div>
                  <div className="calc-buttons">
                    {['C', '⌫', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'].map(btn => (
                      <button 
                        key={btn} 
                        onClick={() => handleCalcInput(btn)}
                        className={`calc-btn ${btn === '=' ? 'equals' : ''}`}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Current Session Summary */}
            <div className="session-summary">
              <div className="summary-item">
                <span>Bills: {formatCurrency(totalBills)} ({billCount} pieces)</span>
              </div>
              <div className="summary-item">
                <span>Coins: {formatCurrency(totalCoins)} ({coinCount} pieces)</span>
              </div>
              {startingCash && (
                <div className="summary-item net-cash">
                  <span>Net Cash (Sales): {formatCurrency(netCash)}</span>
                </div>
              )}
            </div>

            {expectedAmount && (
              <div className={`variance-display ${variance === 0 ? 'exact' : variance > 0 ? 'over' : 'under'}`}>
                <strong>Variance: {formatCurrency(variance)} 
                  {variance > 0 ? ' (Over)' : variance < 0 ? ' (Under)' : ' (Exact Match!)'}
                </strong>
              </div>
            )}
          </div>
        )}

        {/* Quick Add Buttons */}
        <div className="quick-add-section">
          <span className="quick-add-label">Quick Add:</span>
          <QuickAddButton amount={100} label="$100" />
          <QuickAddButton amount={20} label="$20" />
          <QuickAddButton amount={10} label="$10" />
          <QuickAddButton amount={5} label="$5" />
          <QuickAddButton amount={1} label="$1" />
          <QuickAddButton amount={0.25} label="25¢" />
          <QuickAddButton amount={0.10} label="10¢" />
          <QuickAddButton amount={0.01} label="1¢" />
        </div>

        <div className="main-grid">
          {/* Bills Section */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-icon bills">
                <DollarSign size={20} color="#059669" />
              </div>
              <h2 className="section-title">Bills</h2>
            </div>
            
            <div className="currency-items">
              {Object.entries(bills).map(([denomination, count]) => (
                <div key={`bill-${denomination}`} className="currency-item">
                  <div className={`bill bill-${denomination}`}>
                    <span>${denomination}</span>
                  </div>
                  
                  <div className="currency-controls">
                    <div className="control-buttons">
                      <button
                        onClick={() => handleBillChange(denomination, Math.max(0, count - 1))}
                        className="control-btn minus"
                      >
                        −
                      </button>
                      
                      <input
                        type="number"
                        min="0"
                        value={count || ''}
                        onChange={(e) => handleBillChange(denomination, e.target.value)}
                        className="currency-input"
                        placeholder="0"
                      />
                      
                      <button
                        onClick={() => handleBillChange(denomination, count + 1)}
                        className="control-btn plus"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="currency-value">
                    <div className="value-amount bills">
                      {formatCurrency(parseInt(denomination) * (count || 0))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coins Section */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-icon coins">
                <Coins size={20} color="#ea580c" />
              </div>
              <h2 className="section-title">Coins</h2>
            </div>
            
            <div className="currency-items">
              {Object.entries(coins).map(([denomination, count]) => (
                <div key={`coin-${denomination}`} className="currency-item">
                  <div className={`coin coin-${denomination}`}>
                    <span>
                      {parseInt(denomination) >= 100 ? `$${parseInt(denomination)/100}` : `${denomination}¢`}
                    </span>
                  </div>
                  
                  <div className="currency-controls">
                    <div className="coin-name">{coinData[denomination].name}</div>
                    <div className="control-buttons">
                      <button
                        onClick={() => handleCoinChange(denomination, Math.max(0, count - 1))}
                        className="control-btn minus"
                      >
                        −
                      </button>
                      
                      <input
                        type="number"
                        min="0"
                        value={count || ''}
                        onChange={(e) => handleCoinChange(denomination, e.target.value)}
                        className="currency-input"
                        placeholder="0"
                      />
                      
                      <button
                        onClick={() => handleCoinChange(denomination, count + 1)}
                        className="control-btn plus"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="currency-value">
                    <div className="value-amount coins">
                      {formatCurrency((parseInt(denomination) / 100) * (count || 0))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total Section */}
        <div className="total-section">
          <div className="total-header">
            <TrendingUp size={24} color="#3b82f6" />
            <h3 className="total-title">Total Amount</h3>
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="breakdown-toggle"
            >
              {showBreakdown ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
            </button>
          </div>
          
          <div className={`total-amount ${animateTotal ? 'animate' : ''}`}>
            {formatCurrency(total)}
          </div>

          {showBreakdown && total > 0 && (
            <div className="breakdown">
              <div className="breakdown-item">
                <div className="breakdown-label">Bills Total</div>
                <div className="breakdown-value bills">
                  {formatCurrency(totalBills)}
                </div>
              </div>
              <div className="breakdown-item">
                <div className="breakdown-label">Coins Total</div>
                <div className="breakdown-value coins">
                  {formatCurrency(totalCoins)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button onClick={clearAll} className="action-btn clear">
            <Zap size={16} />
            Clear All
          </button>
          
          <button
            onClick={() => navigator.clipboard?.writeText(formatCurrency(total))}
            className="action-btn copy"
          >
            📋 Copy Total
          </button>

          {total > 0 && (
            <button onClick={saveCount} className="action-btn save">
              <Calendar size={16} />
              Save Count
            </button>
          )}

          <button onClick={generateReport} className="action-btn report">
            <FileText size={16} />
            Generate Report
          </button>

          {savedCounts.length > 0 && (
            <button onClick={exportData} className="action-btn export">
              <Download size={16} />
              Export Data
            </button>
          )}
        </div>

        {/* Saved Counts */}
        {savedCounts.length > 0 && (
          <div className="saved-counts-section">
            <h3 className="saved-counts-title">Recent Cash Counts</h3>
            <div className="saved-counts-list">
              {savedCounts.slice(0, 5).map(count => (
                <div key={count.id} className="saved-count-item">
                  <div className="saved-count-header">
                    <div className="saved-count-info">
                      <span className="saved-count-date">{formatDateTime(count.date)}</span>
                      {count.employee && <span className="saved-count-employee">👤 {count.employee}</span>}
                      {count.register && <span className="saved-count-register">📍 {count.register}</span>}
                      {count.shift && <span className="saved-count-shift">⏰ {count.shift}</span>}
                    </div>
                    <span className="saved-count-purpose">{count.purpose}</span>
                    <span className={`saved-count-total ${count.variance !== 0 ? 'has-variance' : ''}`}>
                      {formatCurrency(count.total)} Till counter for bookkeeping and reconciliation
                    </span>
                  </div>
                  {count.variance !== 0 && (
                    <div className={`saved-count-variance ${count.variance > 0 ? 'over' : 'under'}`}>
                      Variance: {formatCurrency(count.variance)}
                    </div>
                  )}
                  {count.notes && (
                    <div className="saved-count-notes">{count.notes}</div>
                  )}
                  {count.startingCash && (
                    <div className="saved-count-net">
                      Net Sales: {formatCurrency(count.netCash)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;