
console.clear()
{
    // 

    // type TUser = {
    //     name: string,
    //     age: number
    // };

    // type UserWithRole = TUser & {role: string};
    
    //  Inteface
    interface IUser {
        name: string,
        age: number
    }

    interface IUserWithRole extends IUser {
        role: string
    }

    const user: IUserWithRole = {
        name: "MD. HASAN MIA",
        age: 25,
        role: "admin"
    }
    console.log(user)

    // 
}