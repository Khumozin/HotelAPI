import { GalleryItemDetailsController } from '../controllers/gallery-item-details-controller';

export class GalleryItemDetailsRoutes {

    public galleryItemDetailsController: GalleryItemDetailsController = new GalleryItemDetailsController();

    public routes(app): void {

        // Create a new galleryItem
        app.route('/galleryItemDetails')
            .post(this.galleryItemDetailsController.addNewGalleryItemDetails);

        // Get all contacts
        app.route('/galleryItemDetails')
            .get(this.galleryItemDetailsController.getGalleryItemDetails)

        app.route('/galleryItemDetailsByGalleryItemID/:galleryItemId')
            .get(this.galleryItemDetailsController.getGalleryItemDetailsWithGalleryItemID)

        // get, update, delete a specific galleryItem
        app.route('/galleryItemDetails/:galleryItemDetailsId')
            .get(this.galleryItemDetailsController.getGalleryItemDetailsWithID)
            // update a specific galleryItem
            .put(this.galleryItemDetailsController.updateGalleryItemDetails)
            // delete a specific galleryItem
            .delete(this.galleryItemDetailsController.deleteGalleryItemDetails)
    }
}