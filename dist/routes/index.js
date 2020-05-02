"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amenity_routes_1 = require("./amenity-routes");
const gallery_item_details_routes_1 = require("./gallery-item-details-routes");
const gallery_item_feature_routes_1 = require("./gallery-item-feature-routes");
const gallery_item_image_routes_1 = require("./gallery-item-image-routes");
const gallery_item_routes_1 = require("./gallery-item-routes");
const message_routes_1 = require("./message-routes");
const room_type_router_1 = require("./room-type-router");
class AppRoutes {
    constructor() {
        this.amenityRoutes = new amenity_routes_1.AmenityRoutes();
        this.galleryItemRoutes = new gallery_item_routes_1.GalleryItemRoutes();
        this.galleryItemDetailsRoutes = new gallery_item_details_routes_1.GalleryItemDetailsRoutes();
        this.galleryItemFeatureRoutes = new gallery_item_feature_routes_1.GalleryItemFeatureRoutes();
        this.galleryItemImageRoutes = new gallery_item_image_routes_1.GalleryItemImageRoutes();
        this.roomTypeRoutes = new room_type_router_1.RoomTypeRoutes();
        this.messageRoutes = new message_routes_1.MessageRoutes();
    }
    approutes(app) {
        this.amenityRoutes.routes(app);
        this.galleryItemRoutes.routes(app);
        this.galleryItemDetailsRoutes.routes(app);
        this.galleryItemFeatureRoutes.routes(app);
        this.galleryItemImageRoutes.routes(app);
        this.roomTypeRoutes.routes(app);
        this.messageRoutes.routes(app);
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=index.js.map