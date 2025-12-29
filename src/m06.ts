
const kgTogm = (input: number | string) :
string | number | undefined => {
    if (typeof input === "number"){
        return input*1000;
    } else if (typeof input === "string"){
        const [value] = input.split(" ");
        return ` COnvert : ${Number(value)*1000}`;
    }
};

const r1 = kgTogm(2);
console.log({r1});

const r2 = kgTogm("2 kg");
console.log({r2});