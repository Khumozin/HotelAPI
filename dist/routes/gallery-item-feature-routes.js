"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gallery_item_feature_controller_1 = require("../controllers/gallery-item-feature-controller");
class GalleryItemFeatureRoutes {
    constructor() {
        this.galleryItemFeatureController = new gallery_item_feature_controller_1.GalleryItemFeatureController();
    }
    routes(app) {
        // Create a new galleryItem
        app.route('/galleryItemFeature')
            .post(this.galleryItemFeatureController.addNewGalleryItemFeature);
        // Get all contacts
        app.route('/galleryItemFeature')
            .get(this.galleryItemFeatureController.getGalleryItemFeature);
        app.route('/galleryItemFeatureByGalleryItemID/:galleryItemId')
            .get(this.galleryItemFeatureController.getGalleryItemFeatureWithGalleryItemID);
        // get, update, delete a specific galleryItem
        app.route('/galleryItemFeature/:galleryItemFeatureId')
            .get(this.galleryItemFeatureController.getGalleryItemFeatureWithID)
            // update a specific galleryItem
            .put(this.galleryItemFeatureController.updateGalleryItemFeature)
            // delete a specific galleryItem
            .delete(this.galleryItemFeatureController.deleteGalleryItemFeature);
    }
}
exports.GalleryItemFeatureRoutes = GalleryItemFeatureRoutes;
//# sourceMappingURL=gallery-item-feature-routes.js.map