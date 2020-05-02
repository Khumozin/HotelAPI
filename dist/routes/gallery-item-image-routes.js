"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gallery_item_image_controller_1 = require("../controllers/gallery-item-image-controller");
class GalleryItemImageRoutes {
    constructor() {
        this.galleryItemImageController = new gallery_item_image_controller_1.GalleryItemImageController();
    }
    routes(app) {
        // Create a new galleryItem
        app.route('/galleryItemImage')
            .post(this.galleryItemImageController.addNewGalleryItemImage);
        // Get all contacts
        app.route('/galleryItemImage')
            .get(this.galleryItemImageController.getGalleryItemImage);
        app.route('/galleryItemImageByGalleryItemID/:galleryItemId')
            .get(this.galleryItemImageController.getGalleryItemImageWithGalleryItemID);
        // get, update, delete a specific galleryItem
        app.route('/galleryItemImage/:galleryItemImageId')
            .get(this.galleryItemImageController.getGalleryItemImageWithID)
            // update a specific galleryItem
            .put(this.galleryItemImageController.updateGalleryItemImage)
            // delete a specific galleryItem
            .delete(this.galleryItemImageController.deleteGalleryItemImage);
    }
}
exports.GalleryItemImageRoutes = GalleryItemImageRoutes;
//# sourceMappingURL=gallery-item-image-routes.js.map