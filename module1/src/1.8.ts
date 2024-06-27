{
  //

  const getMeterSpeed = (value: unknown) => {
    if (typeof value === "number") {
      const convertedMeterSpeed = (value * 1000) / 3600;
      console.log(`the value will be ${convertedMeterSpeed}`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedMeterSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`the value will be ${convertedMeterSpeed}`);
    }
  };

  getMeterSpeed("10 kam^-2");
  //
}
