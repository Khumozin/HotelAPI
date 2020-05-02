"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const room_type_controller_1 = require("../controllers/room-type-controller");
class RoomTypeRoutes {
    constructor() {
        this.roomTypeController = new room_type_controller_1.RoomTypeController();
    }
    routes(app) {
        // Create a new roomType
        app.route('/roomType')
            .post(this.roomTypeController.addNewRoomType);
        // Get all contacts
        app.route('/roomType')
            .get(this.roomTypeController.getRoomTypes);
        // get, update, delete a specific roomType
        app.route('/roomType/:roomTypeId')
            .get(this.roomTypeController.getRoomTypeWithID)
            // update a specific roomType
            .put(this.roomTypeController.updateRoomType)
            // delete a specific roomType
            .delete(this.roomTypeController.deleteRoomType);
    }
}
exports.RoomTypeRoutes = RoomTypeRoutes;
//# sourceMappingURL=room-type-router.js.map