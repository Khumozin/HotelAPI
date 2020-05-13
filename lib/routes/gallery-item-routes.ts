import { GalleryItemController } from '../controllers/gallery-item-controller';

export class GalleryItemRoutes {

    public galleryItemController: GalleryItemController = new GalleryItemController();

    public routes(app): void {

        // Create a new galleryItem
        app.route('/galleryItem')
            .post(this.galleryItemController.addNewGalleryItem);

        // Get all contacts
        app.route('/galleryItem')
            .get(this.galleryItemController.getGalleryItems)

        app.route('/galleryItemByRoomTypeID/:roomTypeId')
            .get(this.galleryItemController.getGalleryItemWithRoomTypeID)

        // get, update, delete a specific galleryItem
        app.route('/galleryItem/:galleryItemId')
            .get(this.galleryItemController.getGalleryItemWithID)
            // update a specific galleryItem
            .put(this.galleryItemController.updateGalleryItem)
            // delete a specific galleryItem
            .delete(this.galleryItemController.deleteGalleryItem)
    }
}