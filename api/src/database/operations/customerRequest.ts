import { CustomerRequest } from "../models/customerRequest.model";

export const saveCustomerRequest = async (name: string, email: string, phonenumber: string, message: string): Promise<boolean> => {
    
    try{
        const save: CustomerRequest = await CustomerRequest.create({
            name: name,
            email: email,
            phonenumber: phonenumber,
            message: message
        })

        if(save){
            return true;
        }
        return false;
    }catch(err){
        console.log(err);
        return false;
    }
}