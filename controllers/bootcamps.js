const Bootcamp = require('../models/Bootcamp');

//@description Get all Bootcamps (index)
//@route GET /api/v1/bootcamps
//@access PUBLIC
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
};

//@description Get Bootcamp(show)
//@route GET /api/v1/bootcamps/:id
//@access PUBLIC
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
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
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!bootcamp) {
            return res.status(400).json({
                success: false
            })
        };

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false,

        });
    }

};

//@description Delete Bootcamp (destroy)
//@route DELETE /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({
                success: false
            })
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        return res.status(400).json({
            success: false
        })
    }
};