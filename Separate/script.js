// Initialize Vanta.js Globe Background
VANTA.GLOBE({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x004996, // A blue color to match the theme
    color2: 'black',
    size: 1.10,
    backgroundColor: 'white' // Original light gray background
});

// Data for the Championship Win Probabilities chart (from the original notebook's df_test_sorted)
const winProbabilityData = [
    { squad: 'Barcelona', win_probability_percent: 86.164 },
    { squad: 'Real Madrid', win_probability_percent: 13.836 },
];

// Sort data by win_probability_percent in descending order for the chart
winProbabilityData.sort((a, b) => b.win_probability_percent - a.win_probability_percent);

// Plotly chart data and layout for Championship Win Probabilities
const winProbabilitiesChartData = [{
    x: winProbabilityData.map(d => d.squad),
    y: winProbabilityData.map(d => d.win_probability_percent),
    type: 'bar',
    marker: {
        color: ['#a50044', '#004996'] // Example colors for Barcelona and Real Madrid
    },
    hovertemplate: '<b>%{x}</b><br>Win Probability: %{y:.3f}%<extra></extra>',
}];

const winProbabilitiesChartLayout = {
    title: {
        text: 'Championship Win Probabilities (2025 Season)',
        font: { size: 24, color: '#333' }
    },
    xaxis: {
        title: { text: 'Team', font: { size: 18, color: '#555' } },
        tickfont: { size: 14 }
    },
    yaxis: {
        title: { text: 'Win Probability (%)', font: { size: 18, color: '#555' } },
        range: [0, 100],
        tickfont: { size: 14 }
    },
    margin: { l: 60, r: 60, b: 80, t: 80, pad: 4 },
    plot_bgcolor: '#f8fafc',
    paper_bgcolor: '#ffffff',
    font: { family: 'Inter, sans-serif' },
    hovermode: 'closest',
    responsive: true
};

Plotly.newPlot('win-probability-chart', winProbabilitiesChartData, winProbabilitiesChartLayout, {responsive: true});

// Data for the Top Finishes by Team and Rank (Last 10 Years) chart
const topFinishesData = [
    { rk: 1, squad: 'Barcelona', count: 6 },
    { rk: 1, squad: 'Real Madrid', count: 4 },
    { rk: 1, squad: 'Atlético Madrid', count: 1 },
    { rk: 2, squad: 'Real Madrid', count: 5 },
    { rk: 2, squad: 'Barcelona', count: 4 },
    { rk: 2, squad: 'Atlético Madrid', count: 2 },
    { rk: 3, squad: 'Atlético Madrid', count: 7 },
    { rk: 3, squad: 'Real Madrid', count: 2 },
    { rk: 3, squad: 'Barcelona', count: 1 },
    { rk: 3, squad: 'Girona', count: 1 }
];

topFinishesData.sort((a, b) => {
    if (a.squad === b.squad) {
        return a.rk - b.rk;
    }
    const squadOrder = ['Atlético Madrid', 'Barcelona', 'Real Madrid', 'Girona'];
    return squadOrder.indexOf(a.squad) - squadOrder.indexOf(b.squad);
});

const topFinishesChartData = [{
    x: topFinishesData.map(d => d.squad),
    y: topFinishesData.map(d => d.count),
    type: 'bar',
    marker: {
        color: topFinishesData.map(d => d.rk),
        colorscale: 'Viridis',
        colorbar: { title: 'Rank' }
    },
    hovertemplate: '<b>Team: %{x}</b><br>Finish Count: %{y}<br>Rank: %{marker.color}<extra></extra>',
}];

const topFinishesChartLayout = {
    title: {
        text: 'Top Finishes by Team and Rank (Last 10 Years)',
        font: { size: 24, color: '#333' }
    },
    xaxis: {
        title: { text: 'Team', font: { size: 18, color: '#555' } },
        tickfont: { size: 14 },
        categoryorder: 'total descending'
    },
    yaxis: {
        title: { text: 'Finish Count', font: { size: 18, color: '#555' } },
        tickfont: { size: 14 }
    },
    margin: { l: 60, r: 60, b: 80, t: 80, pad: 4 },
    plot_bgcolor: '#fcf8f8ff',
    paper_bgcolor: '#ffffff',
    font: { family: 'Inter, sans-serif' },
    hovermode: 'closest',
    responsive: true
};

Plotly.newPlot('top-finishes-chart', topFinishesChartData, topFinishesChartLayout, {responsive: true});