{

    // Generic Type

    type GenericArray<T> = Array<T>


    // const rollNumber: number[] = [3,6,8];
    const rollNumber: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: Array<boolean> = [true, false, true];

    const user: GenericArray<{
        name: string,
        age: number
    }> = [
            {
                name: 'Mezba',
                age: 100
            },
            {
                name: "MD. HASAN MIA",
                age: 100
            }
        ]


    // Generic Tuple
    type GenericTuple<X, Y> = [X, Y];


    const manus: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

    const userWithId: GenericTuple<number, { name: string, email: string }> = [1234, { name: "MD. HASAN MIA", email: "hasan@gmail.com " }]










}