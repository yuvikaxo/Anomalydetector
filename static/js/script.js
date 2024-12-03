// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebarIcons = document.querySelectorAll('.sidebar-item');

    // Add click event listeners to each icon in the sidebar
    sidebarIcons.forEach(icon => {
        icon.addEventListener('click', event => {
            event.preventDefault();
            const href = icon.getAttribute('href');
            window.location.href = href;
        });
    });

    // Function to load charts on the dash.html page
    const loadDashCharts = () => {
        const ctx1 = document.getElementById('chart1').getContext('2d');
        const chart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'Traffic Anomalies',
                    data: [3, 6, 2, 8, 5],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2
                }]
            },
        });

        const ctx2 = document.getElementById('chart2').getContext('2d');
        const chart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Service A', 'Service B', 'Service C', 'Service D'],
                datasets: [{
                    label: 'Service Downtime',
                    data: [5, 2, 7, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }]
            },
        });
    };

    if (document.getElementById('chart1') && document.getElementById('chart2')) {
        loadDashCharts();
    }
});
