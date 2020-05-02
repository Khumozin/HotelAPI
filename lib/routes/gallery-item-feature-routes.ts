import { GalleryItemFeatureController } from '../controllers/gallery-item-feature-controller';

export class GalleryItemFeatureRoutes {

    public galleryItemFeatureController: GalleryItemFeatureController = new GalleryItemFeatureController();

    public routes(app): void {

        // Create a new galleryItem
        app.route('/galleryItemFeature')
            .post(this.galleryItemFeatureController.addNewGalleryItemFeature);

        // Get all contacts
        app.route('/galleryItemFeature')
            .get(this.galleryItemFeatureController.getGalleryItemFeature)

        app.route('/galleryItemFeatureByGalleryItemID/:galleryItemId')
            .get(this.galleryItemFeatureController.getGalleryItemFeatureWithGalleryItemID)

        // get, update, delete a specific galleryItem
        app.route('/galleryItemFeature/:galleryItemFeatureId')
            .get(this.galleryItemFeatureController.getGalleryItemFeatureWithID)
            // update a specific galleryItem
            .put(this.galleryItemFeatureController.updateGalleryItemFeature)
            // delete a specific galleryItem
            .delete(this.galleryItemFeatureController.deleteGalleryItemFeature)
    }
}