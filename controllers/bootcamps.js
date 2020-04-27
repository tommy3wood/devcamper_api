const Bootcamp = require('../models/Bootcamp');

//@description Get all Bootcamps (index)
//@route GET /api/v1/bootcamps
//@access PUBLIC
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'show all bootcamps'
    });
}

//@description Get Bootcamp(show)
//@route GET /api/v1/bootcamps/:id
//@access PUBLIC
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Display bootcamp ${req.params.id}`
    });
}

//@description Create Bootcamp (create)
//@route POST /api/v1/bootcamps
//@access private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }

};

//@description Update Bootcamp (update)
//@route PUT /api/v1/bootcamps/:id
//@access private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    });
};

//@description Delete Bootcamp (destroy)
//@route DELETE /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    });
};