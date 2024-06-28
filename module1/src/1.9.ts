{
  //

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedkGToGm = parseFloat(value) * 1000;
      return `the value gm ${convertedkGToGm}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(10) as number;
  console.log(result1);
  //   kgToGm(10);
  //
}
