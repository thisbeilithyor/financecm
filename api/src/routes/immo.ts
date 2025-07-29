import { Router } from "express";
import { getImmos, getCarouselImages, createImmo, getFurtherImages, getImmoItem } from "../handlers/immo";
import multer from "multer";
import { checkPermission } from "../security/checkAdminPermission.middleware";
import { limiter } from "../miniscripts/rate-limit";

const router = Router();
const uploader = multer({ dest: 'upload_images/'});

router.get('/getImmos', getImmos);

router.get('/getCarouselImages', getCarouselImages);

router.get('/getFurtherImages/:objectnr', getFurtherImages);

router.get('/getImmoItem/:objectnr', getImmoItem);

//priviledged routes
router.post('/createImmo', limiter, checkPermission, uploader.fields([{
    name: 'titleImage', maxCount: 1}, {
    name: 'furtherImages', maxCount: 25} ,{
    name: 'mapImage', maxCount: 1}
    ]), createImmo);

export default router;