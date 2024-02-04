interface Dog {
  name: string;
  age: number;
}
const enum dogJob {
  AIRPORT,
  POLICE,
  DRUG,
}
interface ServiceDog extends Dog {
  job: dogJob;
}
const mike: ServiceDog = {
  name: "Mikey",
  age: 4,
  job: dogJob.AIRPORT,
};
