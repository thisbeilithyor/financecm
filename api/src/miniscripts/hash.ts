import bcrypt from "bcrypt";

export const hashPassword = async (pw: string): Promise<string> => {
    const saltedHash: string = await bcrypt.hash(pw, 10); //10 means a salt is generated in 10 rounds and saved with the passwort
    return saltedHash;
}

export const compareHash = async (pw: string, hash:string): Promise<boolean> => {
    const res: boolean = await bcrypt.compare(pw, hash);
    return res
}