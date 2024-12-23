declare module "user" {
    interface AccountType {
        email: string;
        nickName: string;
        password: string;
        passwordCheck: string;
    }

    interface LoginType {
        email: string;
        password: string;
    }

    interface Auth{
        email:string;
        profile?:string;
        uid:string;
        nickName:string;
    }
}