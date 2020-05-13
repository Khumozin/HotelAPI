"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booking_controller_1 = require("../controllers/booking-controller");
class BookingRoutes {
    constructor() {
        this.bookingController = new booking_controller_1.BookingController();
    }
    routes(app) {
        // Create a new book
        app.route('/booking')
            .post(this.bookingController.addNewBooking);
        // Get all contacts
        app.route('/booking')
            .get(this.bookingController.getBookings);
        // get, update, delete a specific book
        app.route('/booking/:bookingId')
            .get(this.bookingController.getBookingWithID)
            // update a specific book
            .put(this.bookingController.updateBooking)
            // delete a specific book
            .delete(this.bookingController.deleteBooking);
    }
}
exports.BookingRoutes = BookingRoutes;
//# sourceMappingURL=booking-route.js.map