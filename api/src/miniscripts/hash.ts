import bcrypt from "bcrypt";

export const hashPassword = async (pw: string): Promise<string> => {
    const hash: string = await bcrypt.hash(pw, 10);
    return hash;
}

export const compareHash = async (pw: string, hash:string): Promise<boolean> => {
    const res: boolean = await bcrypt.compare(pw, hash);
    return res
}