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
  // Add js-enabled class to body for progressive enhancement animations
  document.body.classList.add('js-enabled');

  // Apply animated classes to page elements for sleek scroll appearance
  document.querySelectorAll('section > div').forEach(el => {
    el.classList.add('reveal-fade-up');
  });

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
  // 4. Medallion Ingestion Pipeline Simulator
  // =========================================================================
  const pipelineSequences = [
    {
      query: "Salesforce CRM & Aderant PMS Ingestion Stream",
      steps: [
        { text: "Connecting to secure Salesforce API & Aderant PMS financial database...", type: "system" },
        { text: "BRONZE: Extracting 2,450 CRM account rows and landing raw Delta tables in private Azure tenant...", type: "system" },
        { text: "SILVER: Enforcing schema validation. Mapping Salesforce Billing IDs to Aderant client master keys (resolved 12 unmapped IDs). Applying practice-specific ethical walls...", type: "system" },
        { text: "GOLD: Aggregating business development pipelines against actual billed hours. Materializing Gold ledger schemas...", type: "system" },
        { text: "Ingestion and validation pipeline completed successfully. Data synchronized:", type: "bot" },
        {
          type: "chart",
          data: [
            { label: "Salesforce CRM", val: 2450, maxVal: 12800, unit: " rows", color: "fill-purple" },
            { label: "Aderant PMS", val: 12800, maxVal: 12800, unit: " rows", color: "fill-cyan" }
          ]
        },
        { text: "<strong>Lakehouse Status:</strong> Ingestion sync at 100% integrity. Unified Client-Matter dataset is now structured and ready for advanced analytics and secure down-stream search.", type: "bot" }
      ]
    },
    {
      query: "Intapp Timesheet Queue Ingestion & Validation",
      steps: [
        { text: "Querying Intapp Time REST API queue for pending fee-earner logs...", type: "system" },
        { text: "BRONZE: Ingesting 840 raw timesheet records. Landing raw timecard payloads in Bronze staging zone...", type: "system" },
        { text: "SILVER: Matching timekeeper IDs against active employee rosters. Mapping active matter references. Flagged 3 timesheet outlier entries (> 16 billable hours/day) for partner approval...", type: "system" },
        { text: "GOLD: Aggregating daily billable hours, fee realization ratios, and practice group utilization rates. Loading into Gold-zone analytics schemas...", type: "system" },
        { text: "Pipeline run complete. Ingested records mapped:", type: "bot" },
        {
          type: "chart",
          data: [
            { label: "Synced Records", val: 837, maxVal: 840, unit: " entries", color: "fill-emerald" },
            { label: "Flagged (Review)", val: 3, maxVal: 840, unit: " entries", color: "fill-purple" }
          ]
        },
        { text: "<strong>Lakehouse Status:</strong> Raw timesheets successfully processed and aligned with Aderant matter masters. 3 entries routed to dashboard exception queue for partner review.", type: "bot" }
      ]
    },
    {
      query: "Partner Budgets & Goal Allocations Merging",
      steps: [
        { text: "Polling secure Azure Blob Storage for latest partner budget spreadsheets...", type: "system" },
        { text: "BRONZE: Loading 240 target allocation Excel files. Landing raw table states in budget_bronze Delta ledger...", type: "system" },
        { text: "SILVER: Parsing workbook structures. Standardizing currency indicators (USD/NZD/GBP exchange rates). Enforcing integrity constraints and mapping partner codes...", type: "system" },
        { text: "GOLD: Joining budget allocations with active Aderant partner assignment histories. Rebuilding budget-variance Gold ledger view...", type: "system" },
        { text: "Financial target database update finished. Datasets integrated:", type: "bot" },
        {
          type: "chart",
          data: [
            { label: "Target Budgets", val: 240, maxVal: 240, unit: " files", color: "fill-cyan" },
            { label: "Assigned Partners", val: 120, maxVal: 240, unit: " codes", color: "fill-emerald" }
          ]
        },
        { text: "<strong>Lakehouse Status:</strong> Target budgeting allocations are now unified with live matter billing histories. Variance reports and partner metrics are fully populated.", type: "bot" }
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
    el.className = 'chat-message chat-bot font-mono text-xs opacity-75 border-l-2 border-cyan-500 bg-slate-900/10';
    el.innerHTML = `[pipeline] ${text}`;
    terminalChatBody.appendChild(el);
    terminalChatBody.scrollTop = terminalChatBody.scrollHeight;
  }

  function appendBotMessage(text) {
    const el = document.createElement('div');
    el.className = 'chat-message chat-bot border-l-2 border-emerald-500 bg-emerald-950/5';
    el.innerHTML = `[success] ${text}`;
    terminalChatBody.appendChild(el);
    terminalChatBody.scrollTop = terminalChatBody.scrollHeight;
  }

  function appendUserMessage(text) {
    const el = document.createElement('div');
    el.className = 'chat-message chat-user font-mono text-xs border-l-2 border-purple-500 bg-slate-900/10';
    el.innerHTML = `&gt; Starting Pipeline: ${text}`;
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
        const maxVal = item.maxVal || Math.max(...chartData.map(d => d.val));
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
    }, 15);
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

    const queryData = pipelineSequences[index];
    
    clearChat();

    // Type the command in the terminal input bar
    typeInputText(`sh run_pipeline --name "${queryData.query}"`, () => {
      // Add the User pipeline trigger message
      appendUserMessage(queryData.query);
      
      // Return input display to neutral state
      terminalInputDisplay.textContent = "Select a pipeline to run ingestion simulation...";

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
  // 5. Contact Form Submission (Live Delivery)
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
      submitBtn.textContent = "Sending Request...";
      alertContainer.classList.add('hidden');

      // Send form data using fetch to FormSubmit's AJAX endpoint
      fetch("https://formsubmit.co/ajax/support@c-grid.tech", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "Creative Grid - New Diagnostic Workshop Request",
          Name: name,
          Email: email,
          "Firm Name": firm,
          "Core Systems": pms,
          Message: message
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Request Diagnostic Workshop";
        
        // Show success alert
        showAlert(`Thank you, ${name}. Your request for ${firm} has been sent successfully. One of our Legal Data Architects will contact you at ${email} within 24 hours.`, "success");
        
        // Reset form
        contactForm.reset();
      })
      .catch(error => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Request Diagnostic Workshop";
        showAlert("Failed to transmit request. Please try again or contact us directly at support@c-grid.tech.", "error");
      });
    });
  }

  function showAlert(msg, type) {
    if (!alertContainer) return;
    alertContainer.textContent = msg;
    alertContainer.className = `rounded-lg p-4 text-sm mt-4 ${type}`;
    alertContainer.classList.remove('hidden');
  }

});
