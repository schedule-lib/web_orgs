function transformKeyInDayName(dayKeys = []) {
  if (!(typeof dayKeys === "object")) return dayKeys;

  let dayNames = [];

  dayKeys.map((key) => {
    switch (key) {
      case 1:
        dayNames.push("Segunda");
        break;
      case 2:
        dayNames.push("Terça");
        break;
      case 3:
        dayNames.push("Quarta");
        break;
      case 4:
        dayNames.push("Quinta");
        break;
      case 5:
        dayNames.push("Sexta");
        break;
      case 6:
        dayNames.push("Sábado");
        break;
      case 7:
        dayNames.push("Domingo");
        break;
    }
  });

  return dayNames;
}

export { transformKeyInDayName }