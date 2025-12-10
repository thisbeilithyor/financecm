import { Router } from "express";
import { getImmos, getCarouselImages, createImmo, getFurtherImages, getImmoItem } from "../handlers/immo";
import multer from "multer";
import { checkPermission } from "../security/checkAdminPermission.middleware";
import { limiter } from "../miniscripts/rate-limit";
import path from "path";

const router = Router();
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        if (file.fieldname.startsWith('pdf')) {
            cb(null, 'file_exchange/');
        } else {
            cb(null, 'upload_images/');
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if(ext === ".pdf"){
            cb(null, file.originalname);
        }else{
            const ext = path.extname(file.originalname);
            cb(null, `${file.fieldname}-${Date.now()}${ext}`);
        }
    }
})

const uploader = multer({ storage });

router.get('/getImmos', getImmos);

router.get('/getCarouselImages', getCarouselImages);

router.get('/getFurtherImages/:objectnr', getFurtherImages);

router.get('/getImmoItem/:objectnr', getImmoItem);

//priviledged routes
router.post('/createImmo', limiter, checkPermission, 
    uploader.fields([
        {name:'pdf_de', maxCount: 1},
        {name:'pdf_en', maxCount: 1},
        {name:'pdf_ru', maxCount: 1},
        {name:'titleImage', maxCount: 1}, 
        {name:'furtherImages', maxCount: 25},
        {name:'mapImage', maxCount: 1}
    ]), createImmo);

export default router;