import { Router } from "express";
import { getImmos, getCarouselImages, createImmo } from "../handlers/immo";
import multer from "multer";

const router = Router();
const uploader = multer({ dest: 'upload_images/'});

router.get('/getImmos', getImmos);

router.post('/createImmo', uploader.fields([{
    name: 'titleImage', maxCount: 1}, {
    name: 'furtherImages', maxCount: 25} ,{
    name: 'mapImage', maxCount: 1}
    ]), createImmo);

router.get('/getCarouselImages', getCarouselImages);


export default router;