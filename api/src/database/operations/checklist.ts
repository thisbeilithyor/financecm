import { Checklist } from "../models/checklist.model";

export const saveChecklistToDB = async (name: string, phonenumber: string, email: string, immobilientyp: string, kaufzeitraum: string): Promise<boolean> => {
    try{
        const save: Checklist = await Checklist.create({
            name: name,
            email: email,
            phonenumber: phonenumber,
            immobilientyp: immobilientyp,
            kaufzeitraum: kaufzeitraum
        } as Checklist)

        if(save){
            return true;
        }
        return false;
    }catch(err){
        console.log(err);
        return false;
    }
}