"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amenity_controller_1 = require("../controllers/amenity-controller");
class AmenityRoutes {
    constructor() {
        this.amenityController = new amenity_controller_1.AmenityController();
    }
    routes(app) {
        // Create a new amenity
        app.route('/amenity')
            .post(this.amenityController.addNewAmenity);
        // Get all contacts
        app.route('/amenity')
            .get(this.amenityController.getAmenities);
        // get, update, delete a specific amenity
        app.route('/amenity/:amenityId')
            .get(this.amenityController.getAmenityWithID)
            // update a specific amenity
            .put(this.amenityController.updateAmenity)
            // delete a specific amenity
            .delete(this.amenityController.deleteAmenity);
    }
}
exports.AmenityRoutes = AmenityRoutes;
//# sourceMappingURL=amenity-routes.js.map