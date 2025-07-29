import { Router } from "express";
import { getImmos, getCarouselImages, createImmo, getFurtherImages, getImmoItem } from "../handlers/immo";
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

router.get('/getFurtherImages/:objectnr', getFurtherImages);

router.get('/getImmoItem/:objectnr', getImmoItem);

export default router;