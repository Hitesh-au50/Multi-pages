import task from "../models/task.js"
export const General = async (req, res) => {

    try {

        const general = new task({
            title: req.body.title,
            Description: req.body.Description,
            about: req.body.about,
            price: req.body.price,
            instantBooking: req.body.instantBooking,
            noOfGuest: req.body.noOfGuest,
            Rprice: req.body.Rprice,
            minHourReservation: req.body.minHourReservation,
            maxHourReservation: req.body.maxHourReservation,
            start: req.body.start,
            end: req.body.end,
            appoinment: req.body.appoinment,
            tBappoinment: req.body.tBappoinment,
            recurring: req.body.recurring,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        })

        await general.save()

        res.status(200).json({ success: true, message: 'successfully created' })

    } catch (error) {
        res.status(500).json({ success: false, message: 'failed to created , invalid input' })
    }
}