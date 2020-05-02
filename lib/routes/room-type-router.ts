import { RoomTypeController } from '../controllers/room-type-controller';

export class RoomTypeRoutes {

    public roomTypeController: RoomTypeController = new RoomTypeController();

    public routes(app): void {

        // Create a new roomType
        app.route('/roomType')
            .post(this.roomTypeController.addNewRoomType);

        // Get all contacts
        app.route('/roomType')
            .get(this.roomTypeController.getRoomTypes)

        // get, update, delete a specific roomType
        app.route('/roomType/:roomTypeId')
            .get(this.roomTypeController.getRoomTypeWithID)
            // update a specific roomType
            .put(this.roomTypeController.updateRoomType)
            // delete a specific roomType
            .delete(this.roomTypeController.deleteRoomType)
    }
}