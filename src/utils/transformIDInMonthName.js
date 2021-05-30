export default (months = []) => {
  if (!(typeof months === "object")) return months;

  let monthNames = [];

  months.map((month) => {
    switch (month) {
      case 0:
        monthNames.push("Janeiro");
        break;
      case 1:
        monthNames.push("Fevereiro");
        break;
      case 2:
        monthNames.push("Março");
        break;
      case 3:
        monthNames.push("Abril");
        break;
      case 4:
        monthNames.push("Maio");
        break;
      case 5:
        monthNames.push("Junho");
        break;
      case 6:
        monthNames.push("Julho");
        break;
      case 7:
        monthNames.push("Agosto");
        break;
      case 8:
        monthNames.push("Setembro");
        break;
      case 9:
        monthNames.push("Outubro");
        break;
      case 10:
        monthNames.push("Novembro");
        break;
      case 11:
        monthNames.push("Dezembro");
        break;
    }
  });

  return monthNames;
};
