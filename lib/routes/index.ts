import * as express from 'express';

import { AmenityRoutes } from './amenity-routes';
import { BookingRoutes } from './booking-route';
import { GalleryItemDetailsRoutes } from './gallery-item-details-routes';
import { GalleryItemFeatureRoutes } from './gallery-item-feature-routes';
import { GalleryItemImageRoutes } from './gallery-item-image-routes';
import { GalleryItemRoutes } from './gallery-item-routes';
import { MessageRoutes } from './message-routes';
import { RoomTypeRoutes } from './room-type-router';

export class AppRoutes {

    private amenityRoutes: AmenityRoutes = new AmenityRoutes();
    private galleryItemRoutes: GalleryItemRoutes = new GalleryItemRoutes();
    private galleryItemDetailsRoutes: GalleryItemDetailsRoutes = new GalleryItemDetailsRoutes();
    private galleryItemFeatureRoutes: GalleryItemFeatureRoutes = new GalleryItemFeatureRoutes();
    private galleryItemImageRoutes: GalleryItemImageRoutes = new GalleryItemImageRoutes();
    private roomTypeRoutes: RoomTypeRoutes = new RoomTypeRoutes();
    private messageRoutes: MessageRoutes = new MessageRoutes();
    private bookingRoutes: BookingRoutes = new BookingRoutes();

    public approutes(app: express.Application) {
        this.amenityRoutes.routes(app);
        this.galleryItemRoutes.routes(app);
        this.galleryItemDetailsRoutes.routes(app);
        this.galleryItemFeatureRoutes.routes(app);
        this.galleryItemImageRoutes.routes(app);
        this.roomTypeRoutes.routes(app);
        this.messageRoutes.routes(app);
        this.bookingRoutes.routes(app);
    }

}