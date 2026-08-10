document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Sticky Header & Navigation Controllers
  // =========================================================================
  const header = document.getElementById('site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('hidden');
      mobileNav.classList.toggle('flex');
    });

    // Close menu when clicking link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('flex');
      });
    });
  }

  // =========================================================================
  // 2. Scroll Animation Observer (Fade In Elements)
  // =========================================================================
  const animatedElements = document.querySelectorAll('.reveal-fade-up');
  
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Apply animated classes to page elements for sleek scroll appearance
  document.querySelectorAll('section > div').forEach(el => {
    el.classList.add('reveal-fade-up');
  });

  // =========================================================================
  // 3. Interactive Law Firm ROI / Value Calculator
  // =========================================================================
  const attorneysInput = document.getElementById('input-attorneys');
  const rateInput = document.getElementById('input-rate');
  const adminHoursInput = document.getElementById('input-admin-hours');
  
  const hoursRecoveredOutput = document.getElementById('output-hours-recovered');
  const revenueRecoveredOutput = document.getElementById('output-revenue-recovered');

  function calculateROI() {
    const attorneys = parseFloat(attorneysInput.value) || 0;
    const rate = parseFloat(rateInput.value) || 0;
    const adminHours = parseFloat(adminHoursInput.value) || 0;

    // Calculations:
    // We assume automation/modern platforms recover 80% of admin hours lost.
    // Hours saved per year = attorneys * (adminHours * 0.8) * 52 weeks
    const hoursSavedYear = Math.round(attorneys * (adminHours * 0.8) * 52);
    
    // Revenue opportunity = hoursSavedYear * rate
    const revenueImpactYear = Math.round(hoursSavedYear * rate);

    // Format numbers
    hoursRecoveredOutput.textContent = hoursSavedYear.toLocaleString('en-US');
    revenueRecoveredOutput.textContent = '$' + revenueImpactYear.toLocaleString('en-US');
  }

  // Attach event listeners
  if (attorneysInput && rateInput && adminHoursInput) {
    [attorneysInput, rateInput, adminHoursInput].forEach(input => {
      input.addEventListener('input', calculateROI);
    });
    // Run initial calculation
    calculateROI();
  }

  // =========================================================================
  // 4. Conversational BI Terminal Simulator
  // =========================================================================
  const chatQueries = [
    {
      query: "Show practice group realization rate vs target this year.",
      steps: [
        { text: "Connecting to Medallion Gold Lakehouse (Azure Fabric / Databricks Delta Lake)...", type: "system" },
        { text: "Querying cached Power BI Tabular semantic models (joining Aderant, Elite 3E, and Fulcrum mappings)...", type: "system" },
        { text: "Calculating realization ratios (fees collected / billable hours logged at standard rate)...", type: "system" },
        { text: "Here is the comparative practice group realization chart:", type: "bot" },
        {
          type: "chart",
          data: [
            { label: "IP & Patent", val: 95.1, target: 93, color: "fill-cyan" },
            { label: "Litigation", val: 94.2, target: 92, color: "fill-emerald" },
            { label: "Corporate", val: 91.5, target: 94, color: "fill-purple" },
            { label: "Real Estate", val: 87.8, target: 90, color: "fill-purple" }
          ]
        },
        { text: "<strong>Key Insight:</strong> The Litigation group is outperforming its target by 2.2% following the Medallion Silver-to-Gold pipeline migration. Real Estate shows a 2.2% realization deficit, primarily due to delayed client invoicing structures.", type: "bot" }
      ]
    },
    {
      query: "Explain the leakage in our billing cycle for Litigation.",
      steps: [
        { text: "Scanning Databricks Bronze-zone raw RCM ingestion logs...", type: "system" },
        { text: "Correlating active Snowflake billing cache records with final Gold-ledger collections profiles...", type: "system" },
        { text: "Write-down leakage categories identified for Litigation:", type: "bot" },
        {
          type: "chart",
          data: [
            { label: "Late Entries", val: 182, target: 200, unit: "k", color: "fill-purple" },
            { label: "Cycle Delays", val: 94, target: 120, unit: "k", color: "fill-cyan" },
            { label: "Mismatched Codes", val: 63, target: 80, unit: "k", color: "fill-emerald" }
          ]
        },
        { text: "<strong>Actionable Deficit:</strong> Late timecard entries (submitted 48+ hours post-work) represent the highest write-down factor ($182K). Standardizing automated timekeeper alerts within the Tabular model can reduce this leakage by up to $145K annually.", type: "bot" }
      ]
    },
    {
      query: "Which clients have the highest outstanding WIP vs aging AR?",
      steps: [
        { text: "Querying Snowflake Gold-zone client ledger views...", type: "system" },
        { text: "Retrieving active client account profiles from DirectLake cache...", type: "system" },
        { text: "Ledger imbalance alerts (outstanding WIP / 60+ Days AR):", type: "bot" },
        {
          type: "chart",
          data: [
            { label: "Apex Holdings", val: 240, target: 250, unit: "k", color: "fill-purple" },
            { label: "BioTech Ltd", val: 150, target: 180, unit: "k", color: "fill-cyan" },
            { label: "Sterling Trust", val: 95, target: 100, unit: "k", color: "fill-emerald" }
          ]
        },
        { text: "<strong>Warning:</strong> Apex Holdings has $240K in Work-in-Progress (WIP) that has not been converted to invoices. This is currently delayed in the Fulcrum SAP billing workflow awaiting client code verification.", type: "bot" }
      ]
    }
  ];

  const terminalChatBody = document.getElementById('terminal-chat-body');
  const terminalInputDisplay = document.getElementById('terminal-input-display');
  const queryButtons = document.querySelectorAll('.query-selector-btn');
  
  let isTyping = false;

  function clearChat() {
    terminalChatBody.innerHTML = '';
  }

  function appendSystemMessage(text) {
    const el = document.createElement('div');
    el.className = 'chat-message chat-bot font-mono text-xs opacity-70 border-l border-slate-700 bg-slate-900/10';
    el.innerHTML = `[sys] ${text}`;
    terminalChatBody.appendChild(el);
    terminalChatBody.scrollTop = terminalChatBody.scrollHeight;
  }

  function appendBotMessage(text) {
    const el = document.createElement('div');
    el.className = 'chat-message chat-bot';
    el.innerHTML = text;
    terminalChatBody.appendChild(el);
    terminalChatBody.scrollTop = terminalChatBody.scrollHeight;
  }

  function appendUserMessage(text) {
    const el = document.createElement('div');
    el.className = 'chat-message chat-user';
    el.textContent = text;
    terminalChatBody.appendChild(el);
    terminalChatBody.scrollTop = terminalChatBody.scrollHeight;
  }

  function appendChart(chartData) {
    const container = document.createElement('div');
    container.className = 'terminal-chart-container chat-message chat-bot';
    
    chartData.forEach(item => {
      const unit = item.unit || '%';
      const row = document.createElement('div');
      row.className = 'chart-bar-row';
      row.innerHTML = `
        <div class="chart-label">${item.label}</div>
        <div class="chart-bar-track">
          <div class="chart-bar-fill ${item.color}" style="width: 0%;"></div>
        </div>
        <div class="chart-value">${item.val}${unit}</div>
      `;
      container.appendChild(row);
    });

    terminalChatBody.appendChild(container);
    terminalChatBody.scrollTop = terminalChatBody.scrollHeight;

    // Trigger bar fill animation after append
    setTimeout(() => {
      container.querySelectorAll('.chart-bar-fill').forEach((bar, idx) => {
        const item = chartData[idx];
        // Calculate max scale percentage
        const maxVal = Math.max(...chartData.map(d => d.val));
        const fillPercentage = (item.val / maxVal) * 100;
        bar.style.width = `${fillPercentage}%`;
      });
    }, 100);
  }

  // Typewriter Simulator
  function typeInputText(text, callback) {
    terminalInputDisplay.textContent = "";
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < text.length) {
        terminalInputDisplay.textContent += text[idx];
        idx++;
      } else {
        clearInterval(interval);
        setTimeout(callback, 300);
      }
    }, 30);
  }

  // Execute terminal query sequences
  function runTerminalSequence(index) {
    if (isTyping) return;
    isTyping = true;
    
    // Deactivate all query selector buttons
    queryButtons.forEach(btn => btn.classList.remove('active'));
    // Activate clicked button
    const activeBtn = document.getElementById(`btn-query-${index}`);
    if (activeBtn) activeBtn.classList.add('active');

    const queryData = chatQueries[index];
    
    clearChat();

    // Type the question in the terminal input bar
    typeInputText(queryData.query, () => {
      // Add the User chat bubble
      appendUserMessage(queryData.query);
      
      // Return input display to neutral state
      terminalInputDisplay.textContent = "Select a question to run query...";

      // Play steps with deliberate delays to simulate calculations
      let stepIdx = 0;
      
      function playNextStep() {
        if (stepIdx < queryData.steps.length) {
          const step = queryData.steps[stepIdx];
          
          let delay = 1000;
          if (step.type === 'system') {
            appendSystemMessage(step.text);
            delay = 600;
          } else if (step.type === 'bot') {
            appendBotMessage(step.text);
            delay = 1200;
          } else if (step.type === 'chart') {
            appendChart(step.data);
            delay = 1400;
          }
          
          stepIdx++;
          setTimeout(playNextStep, delay);
        } else {
          isTyping = false;
        }
      }

      setTimeout(playNextStep, 500);
    });
  }

  // Hook up selector buttons
  queryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-query-index'));
      runTerminalSequence(index);
    });
  });

  // Run initial query sequence on page load
  setTimeout(() => {
    runTerminalSequence(0);
  }, 1000);

  // =========================================================================
  // 5. Contact Form Simulator & Validation
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const alertContainer = document.getElementById('form-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validations
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const firm = document.getElementById('contact-firm').value.trim();
      const pms = document.getElementById('contact-pms').value;
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !firm) {
        showAlert("Please fill in all required fields.", "error");
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = "Transmitting to Azure Fabric CRM...";
      alertContainer.classList.add('hidden');

      // Simulate network request to Azure Web Function
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Request Diagnostic Workshop";
        
        // Show success alert
        showAlert(`Thank you, ${name}. Your request for ${firm} (utilizing ${pms}) has been logged in our secure system. One of our Legal Data Architects will contact you at ${email} within 24 hours.`, "success");
        
        // Reset form
        contactForm.reset();
      }, 1500);
    });
  }

  function showAlert(msg, type) {
    if (!alertContainer) return;
    alertContainer.textContent = msg;
    alertContainer.className = `rounded-lg p-4 text-sm mt-4 ${type}`;
    alertContainer.classList.remove('hidden');
  }

});
