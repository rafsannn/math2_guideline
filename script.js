// --- DATA STORE ---
const syllabusData = [
    {
        id: "intro",
        title: "Definitions & DE Formulation",
        icon: "⚠️",
        examWeight: "Q1(a,b) - 5 marks",
        textbook: "Ch 1, Pg 1-10",
        lecture: "Implied background",
        description: "Basic definitions of ODE vs PDE. The key skill here is forming a differential equation from a family of curves by eliminating arbitrary constants.",
        mathNotes: "Example: If <span class='math'>x³ = c(y+c)²</span>, differentiate w.r.t x to find c, then substitute back.",
        prediction: "📈 Medium Probability. Almost guaranteed as a starting short question."
    },
    {
        id: "varsep",
        title: "Variable Separable & Reducible",
        icon: "⭐",
        examWeight: "Q1(c) - 5 marks",
        textbook: "Early Ch 2",
        lecture: "Lecture 1 & 3",
        description: "Isolating 'x' terms with 'dx' and 'y' terms with 'dy'. Includes 'Reducible' equations where a substitution is required first.",
        mathNotes: "Rule: For <span class='math'>dy/dx = (ax+by+c)²</span>, substitute <span class='math'>v = ax+by+c</span>.",
        prediction: "🎯 Very High Probability. Fundamental skill needed for all other sections."
    },
    {
        id: "homo",
        title: "Homogeneous DEs",
        icon: "🔥",
        examWeight: "Q2(a,b) - 9 marks",
        textbook: "Mid Ch 2",
        lecture: "Lecture 3 & 4",
        description: "Equations where the total degree of x and y in every term is the same. Reducible ones require shifting the origin.",
        mathNotes: "Method: Put <span class='math'>y = vx</span>, so <span class='math'>dy/dx = v + x(dv/dx)</span>.",
        prediction: "🎯 Very High Probability. Heavyweight question type."
    },
    {
        id: "linear1",
        title: "1st Order Linear DEs",
        icon: "🔥",
        examWeight: "Q3(a,b) - 8-10 marks",
        textbook: "Pg 20+ (implied from L6)",
        lecture: "Lecture 5",
        description: "Standard form dy/dx + Py = Q. Requires finding an Integrating Factor (I.F.) to make the left side a perfect derivative.",
        mathNotes: "I.F. = <span class='math'>e<sup>&int;P dx</sup></span>. Solution: <span class='math'>y * (I.F.) = &int;Q * (I.F.) dx + C</span>.",
        prediction: "🎯 Very High Probability. Often features complex logarithmic integration."
    },
    {
        id: "exact",
        title: "Exact DEs & IF Rules",
        icon: "🔥",
        examWeight: "Q4(a,b) - 10 marks",
        textbook: "Pg 20 (Referenced L6)",
        lecture: "Lecture 6",
        description: "Equations of form Mdx + Ndy = 0. Requires checking partial derivatives. If not exact, specific rules apply to find I.F.",
        mathNotes: "Condition: <span class='math'>&part;M/&part;y = &part;N/&part;x</span>. If not exact, find I.F.",
        prediction: "🎯 Very High Probability. Always asked; often requires finding the IF first."
    },
    {
        id: "higherorder",
        title: "Constant Coefficients (Higher Order)",
        icon: "⭐",
        examWeight: "Finals Focus",
        textbook: "Pg 60, 72, 73, 75, 84",
        lecture: "Lecture 7",
        description: "Solving equations like D²y + aDy + by = 0. Involves finding Auxiliary Roots to get Complementary Function.",
        mathNotes: "Let <span class='math'>y = e<sup>mx</sup></span> to find Auxiliary Equation roots. Cases for distinct, equal, or complex roots.",
        prediction: "🧠 Conceptually Important. Crucial for Finals, usually not deep in Midterms."
    }
];

const passContent = `
    <div class="space-y-4">
        <h3 class="text-lg font-bold text-teal-700 border-b border-teal-100 pb-2">🎯 The "Survival" Path</h3>
        <ul class="space-y-3">
            <li class="flex items-start gap-2">
                <span class="text-teal-500 mt-1">✓</span>
                <div>
                    <strong class="text-slate-800 block text-sm">1. Linear DEs (I.F. Method)</strong>
                    <span class="text-xs text-slate-500">Memorize the <span class="math">e<sup>&int;P dx</sup></span> formula. (Guaranteed 5-8 marks)</span>
                </div>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-teal-500 mt-1">✓</span>
                <div>
                    <strong class="text-slate-800 block text-sm">2. Homogeneous Substitutions</strong>
                    <span class="text-xs text-slate-500">Learn the <span class="math">y=vx</span> method steps. (Guaranteed 5-6 marks)</span>
                </div>
            </li>
        </ul>
    </div>
    <div class="bg-teal-50 border border-teal-100 rounded-lg p-5 flex flex-col justify-center">
        <div class="text-center">
            <span class="text-3xl mb-2 block">⏳</span>
            <h4 class="font-bold text-teal-800">Prep Time: 6-8 Hours</h4>
            <p class="text-xs text-teal-600 mt-2">Targeting ~15-18 marks out of 30.</p>
        </div>
    </div>
`;

const highContent = `
    <div class="space-y-4">
        <h3 class="text-lg font-bold text-indigo-700 border-b border-indigo-100 pb-2">🚀 The "A+" Path</h3>
        <ul class="space-y-3">
            <li class="flex items-start gap-2">
                <span class="text-indigo-500 mt-1">✦</span>
                <div>
                    <strong class="text-slate-800 block text-sm">1. Master Reducible Forms</strong>
                    <span class="text-xs text-slate-500">Master substitutions like <span class="math">v = 4x+y+1</span> and origin shifts.</span>
                </div>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-500 mt-1">✦</span>
                <div>
                    <strong class="text-slate-800 block text-sm">2. Non-Exact I.F. Rules</strong>
                    <span class="text-xs text-slate-500">Memorize rules for finding IF when <span class="math">M<sub>y</sub> &ne; N<sub>x</sub></span>.</span>
                </div>
            </li>
        </ul>
    </div>
    <div class="bg-indigo-50 border border-indigo-100 rounded-lg p-5 flex flex-col justify-center">
        <div class="text-center">
            <span class="text-3xl mb-2 block">📚</span>
            <h4 class="font-bold text-indigo-800">Prep Time: 15-20 Hours</h4>
            <p class="text-xs text-indigo-600 mt-2">Targeting 25+ marks.</p>
        </div>
    </div>
`;

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    if (!container) return;
    container.innerHTML = '';
    syllabusData.forEach((topic, index) => {
        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md";
        const header = document.createElement('div');
        header.className = "p-4 cursor-pointer flex justify-between items-center bg-slate-50 hover:bg-indigo-50 transition-colors";
        header.onclick = () => toggleAccordion(`acc-${index}`);
        header.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-2xl">${topic.icon}</span>
                <h3 class="font-bold text-slate-800">${topic.title}</h3>
            </div>
            <span class="text-indigo-400 font-bold text-xl" id="icon-${index}">+</span>
        `;
        const body = document.createElement('div');
        body.id = `acc-${index}`;
        body.className = "hidden border-t border-slate-200 p-4 bg-white";
        body.innerHTML = `
            <p class="text-sm text-slate-600 mb-3">${topic.description}</p>
            <div class="bg-slate-50 p-3 rounded-md mb-3 border border-slate-100">
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Key Concept/Formula</h4>
                <p class="text-sm text-slate-800">${topic.mathNotes}</p>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="bg-indigo-50 text-indigo-800 p-2 rounded"><strong>Book:</strong> ${topic.textbook}</div>
                <div class="bg-indigo-50 text-indigo-800 p-2 rounded"><strong>Notes:</strong> ${topic.lecture}</div>
                <div class="bg-teal-50 text-teal-800 p-2 rounded col-span-2"><strong>Weight:</strong> ${topic.examWeight}</div>
                <div class="bg-amber-50 text-amber-800 p-2 rounded col-span-2"><strong>Prediction:</strong> ${topic.prediction}</div>
            </div>
        `;
        card.appendChild(header);
        card.appendChild(body);
        container.appendChild(card);
    });
}

function toggleAccordion(id) {
    const el = document.getElementById(id);
    const iconId = 'icon-' + id.split('-')[1];
    const icon = document.getElementById(iconId);
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        icon.innerText = '-';
    } else {
        el.classList.add('hidden');
        icon.innerText = '+';
    }
}

function setStrategyMode(mode) {
    const btnPass = document.getElementById('btn-pass');
    const btnHigh = document.getElementById('btn-high');
    const content = document.getElementById('strategy-content');
    if (!btnPass || !btnHigh || !content) return;

    if (mode === 'pass') {
        btnPass.className = "px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 bg-white shadow-sm text-teal-700";
        btnHigh.className = "px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 text-slate-500 hover:text-slate-900";
        content.innerHTML = passContent;
    } else {
        btnHigh.className = "px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 bg-white shadow-sm text-indigo-700";
        btnPass.className = "px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 text-slate-500 hover:text-slate-900";
        content.innerHTML = highContent;
    }
}

function initCharts() {
    const distEl = document.getElementById('distributionChart');
    const effortEl = document.getElementById('effortYieldChart');

    if (distEl) {
        const ctxDist = distEl.getContext('2d');
        new Chart(ctxDist, {
            type: 'doughnut',
            data: {
                labels: ['Homogeneous/Reducible', 'Exact DEs', 'Linear 1st Order', 'Definitions & Curve Form', 'Basic Separable'],
                datasets: [{
                    data: [25, 25, 20, 15, 15],
                    backgroundColor: ['#4f46e5', '#3b82f6', '#0ea5e9', '#14b8a6', '#94a3b8'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15, font: { family: 'Inter', size: 11 } } }
                }
            }
        });
    }

    if (effortEl) {
        const ctxEffort = effortEl.getContext('2d');
        new Chart(ctxEffort, {
            type: 'bar',
            data: {
                labels: ['Basic Sep', 'Definitions', 'Linear', 'Homogeneous', 'Exact'],
                datasets: [{
                    label: 'Potential Marks',
                    data: [5, 5, 8, 9, 10],
                    backgroundColor: '#4f46e5',
                    borderRadius: 4
                }, {
                    label: 'Study Hours Required',
                    data: [1, 2, 4, 6, 5],
                    backgroundColor: '#14b8a6',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 } } },
                    x: { grid: { display: false }, ticks: { font: { size: 10 } } }
                },
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } }
                }
            }
        });
    }
}

window.onload = function() {
    renderSyllabus();
    setStrategyMode('pass');
    initCharts();
};