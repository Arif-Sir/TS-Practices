const creatArraybyGeneric = <T>(value: T) =>{
return [value];
};

const arrString = creatArraybyGeneric ("Arif");
const arrNum = creatArraybyGeneric(11);
const arrObj = creatArraybyGeneric({
    id: 123,
    name: "Ami",
});

//tuple

const creatArrayByTuple = (param1: string, param2: string) => [
    param1,param2 ];

    const creatArrtByGT = <X, Y>
    (param1: X, parama2: Y) => [
        param1, parama2 ];

        const result = creatArrtByGT(1212, {name: "AR"})

        // m 6-6  Constraint in typescript
        const addStu = <T extends{id: number; name: string}>(
            stuInfo: T
        )=>{
            return{
                course: "PH",
                ...stuInfo,
            };
        };

        const stu1 = {
            // id: 11,
            hasPen: true,
            name: 'A'
        };

        // const r1 = addStu(stu1);

        // 6-7 keyof constraint with generics

        // 6-9 Use as const instead of enum

        // 6-11 Explore mapped types

        const arrayNum: number[] = [1,41,4];

        const arrtyStingMap: string[] = 
        arrayNum.map((num) => num.toString() )

        console.log(arrtyStingMap);