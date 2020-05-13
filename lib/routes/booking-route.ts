import { BookingController } from '../controllers/booking-controller';

export class BookingRoutes {

    public bookingController: BookingController = new BookingController();

    public routes(app): void {

        // Create a new book
        app.route('/booking')
            .post(this.bookingController.addNewBooking);

        // Get all contacts
        app.route('/booking')
            .get(this.bookingController.getBookings)

        // get, update, delete a specific book
        app.route('/booking/:bookingId')
            .get(this.bookingController.getBookingWithID)
            // update a specific book
            .put(this.bookingController.updateBooking)
            // delete a specific book
            .delete(this.bookingController.deleteBooking)
    }
}