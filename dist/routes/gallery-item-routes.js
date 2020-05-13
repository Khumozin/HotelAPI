"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gallery_item_controller_1 = require("../controllers/gallery-item-controller");
class GalleryItemRoutes {
    constructor() {
        this.galleryItemController = new gallery_item_controller_1.GalleryItemController();
    }
    routes(app) {
        // Create a new galleryItem
        app.route('/galleryItem')
            .post(this.galleryItemController.addNewGalleryItem);
        // Get all contacts
        app.route('/galleryItem')
            .get(this.galleryItemController.getGalleryItems);
        app.route('/galleryItemByRoomTypeID/:roomTypeId')
            .get(this.galleryItemController.getGalleryItemWithRoomTypeID);
        // get, update, delete a specific galleryItem
        app.route('/galleryItem/:galleryItemId')
            .get(this.galleryItemController.getGalleryItemWithID)
            // update a specific galleryItem
            .put(this.galleryItemController.updateGalleryItem)
            // delete a specific galleryItem
            .delete(this.galleryItemController.deleteGalleryItem);
    }
}
exports.GalleryItemRoutes = GalleryItemRoutes;
//# sourceMappingURL=gallery-item-routes.js.map