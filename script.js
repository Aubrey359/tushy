// Global variables
let currentMovie = '';
let basePrice = 0;
let currentSpace = '';
let fullDayPrice = 0;
let halfDayPrice = 0;

// Ticket Booking Functions
function openBooking(movieName, price) {
    currentMovie = movieName;
    basePrice = price;
    document.getElementById('modalTitle').textContent = `Book Tickets - ${movieName}`;
    document.getElementById('ticketCount').value = 1;
    document.getElementById('seatType').value = 1;
    updateTotal();
    document.getElementById('bookingModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateTickets(change) {
    const input = document.getElementById('ticketCount');
    let value = parseInt(input.value) + change;
    if (value >= 1 && value <= 10) {
        input.value = value;
        updateTotal();
    }
}

function updateTotal() {
    const tickets = parseInt(document.getElementById('ticketCount').value);
    const multiplier = parseFloat(document.getElementById('seatType').value);
    const total = basePrice * tickets * multiplier;
    
    document.getElementById('ticketPrice').textContent = `$${basePrice.toFixed(2)}`;
}