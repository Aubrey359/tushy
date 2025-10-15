cinemax-booking-system/
│
├── server.js                 # Main server file
├── package.json              # Project dependencies
├── .env                      # Environment variables (create this)
│
├── public/                   # Static files
│   ├── css/
│   │   └── styles.css       # Main stylesheet
│   ├── js/
│   │   └── script.js        # Client-side JavaScript
│   └── images/              # Image assets
│
├── views/                    # EJS templates
│   ├── index.ejs            # Main page template
│   ├── 404.ejs              # Error page (create this)
│   │
│   ├── partials/            # Reusable components
│   │   ├── header.ejs       # Header component
│   │   ├── footer.ejs       # Footer component
│   │   └── modals.ejs       # Modal components
│   │
│   └── admin/               # Admin pages (optional)
│       ├── events.ejs       # Manage events
│       ├── bookings.ejs     # View bookings
│       └── spaces.ejs       # Manage spaces
│
├── models/                   # Database models (if using MongoDB/SQL)
│   ├── Event.js
│   ├── Booking.js
│   └── Space.js
│
├── routes/                   # Route handlers
│   ├── index.js             # Main routes
│   ├── api.js               # API routes
│   └── admin.js             # Admin routes
│
├── controllers/              # Business logic
│   ├── bookingController.js
│   ├── eventController.js
│   └── paymentController.js
│
└── config/                   # Configuration files
    ├── database.js          # Database config
    └── payment.js           # Payment gateway config