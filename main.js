// script.js

// Sample data for recent patients and upcoming appointments
const recentPatients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];

const upcomingAppointments = [
    { id: 101, patientName: 'John Doe', date: '2023-10-05' },
    { id: 102, patientName: 'Jane Smith', date: '2023-10-07' }
];

// Function to display recent patients
function displayRecentPatients() {
    const patientList = document.querySelector('.patient-list');
    const ul = document.createElement('ul');
    ul.innerHTML = '<h2>Recent Patients</h2>';

    recentPatients.forEach(patient => {
        const li = document.createElement('li');
        li.textContent = patient.name;
        ul.appendChild(li);
    });

    patientList.innerHTML = '';
    patientList.appendChild(ul);
}

// Function to display upcoming appointments
function displayUpcomingAppointments() {
    const appointmentList = document.querySelector('.upcoming-appointments');
    const ul = document.createElement('ul');
    ul.innerHTML = '<h2>Upcoming Appointments</h2>';

    upcomingAppointments.forEach(appointment => {
        const li = document.createElement('li');
        li.textContent = `${appointment.patientName} - ${appointment.date}`;
        ul.appendChild(li);
    });

    appointmentList.innerHTML = '';
    appointmentList.appendChild(ul);
}

// Initialize the page with data
window.addEventListener('load', () => {
    displayRecentPatients();
    displayUpcomingAppointments();
});
