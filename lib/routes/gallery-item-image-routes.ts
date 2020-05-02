import { GalleryItemImageController } from '../controllers/gallery-item-image-controller';

export class GalleryItemImageRoutes {

    public galleryItemImageController: GalleryItemImageController = new GalleryItemImageController();

    public routes(app): void {

        // Create a new galleryItem
        app.route('/galleryItemImage')
            .post(this.galleryItemImageController.addNewGalleryItemImage);

        // Get all contacts
        app.route('/galleryItemImage')
            .get(this.galleryItemImageController.getGalleryItemImage)

        app.route('/galleryItemImageByGalleryItemID/:galleryItemId')
            .get(this.galleryItemImageController.getGalleryItemImageWithGalleryItemID)

        // get, update, delete a specific galleryItem
        app.route('/galleryItemImage/:galleryItemImageId')
            .get(this.galleryItemImageController.getGalleryItemImageWithID)
            // update a specific galleryItem
            .put(this.galleryItemImageController.updateGalleryItemImage)
            // delete a specific galleryItem
            .delete(this.galleryItemImageController.deleteGalleryItemImage)
    }
}