import { AmenityController } from '../controllers/amenity-controller';

export class AmenityRoutes {

    public amenityController: AmenityController = new AmenityController();

    public routes(app): void {

        // Create a new amenity
        app.route('/amenity')
            .post(this.amenityController.addNewAmenity);

        // Get all contacts
        app.route('/amenity')
            .get(this.amenityController.getAmenities)

        // get, update, delete a specific amenity
        app.route('/amenity/:amenityId')
            .get(this.amenityController.getAmenityWithID)
            // update a specific amenity
            .put(this.amenityController.updateAmenity)
            // delete a specific amenity
            .delete(this.amenityController.deleteAmenity)
    }
}