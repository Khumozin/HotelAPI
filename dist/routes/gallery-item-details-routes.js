"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gallery_item_details_controller_1 = require("../controllers/gallery-item-details-controller");
class GalleryItemDetailsRoutes {
    constructor() {
        this.galleryItemDetailsController = new gallery_item_details_controller_1.GalleryItemDetailsController();
    }
    routes(app) {
        // Create a new galleryItem
        app.route('/galleryItemDetails')
            .post(this.galleryItemDetailsController.addNewGalleryItemDetails);
        // Get all contacts
        app.route('/galleryItemDetails')
            .get(this.galleryItemDetailsController.getGalleryItemDetails);
        app.route('/galleryItemDetailsByGalleryItemID/:galleryItemId')
            .get(this.galleryItemDetailsController.getGalleryItemDetailsWithGalleryItemID);
        // get, update, delete a specific galleryItem
        app.route('/galleryItemDetails/:galleryItemDetailsId')
            .get(this.galleryItemDetailsController.getGalleryItemDetailsWithID)
            // update a specific galleryItem
            .put(this.galleryItemDetailsController.updateGalleryItemDetails)
            // delete a specific galleryItem
            .delete(this.galleryItemDetailsController.deleteGalleryItemDetails);
    }
}
exports.GalleryItemDetailsRoutes = GalleryItemDetailsRoutes;
//# sourceMappingURL=gallery-item-details-routes.js.map