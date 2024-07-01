type a1 = string;
type a2 = string;

type a3 = a1 extends null ? true : false;
type a4 = a1 extends null ? true : a2 extends undefined ? undefined : any;

type Sheikh = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
type HasTractor = CheckVehicle<"honda">;
