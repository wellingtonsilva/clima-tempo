const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

export const formatData = (data = new Date()) => {
  const day = String(data.getDate()).padStart(2, '0');
  const month = String(months[data.getMonth()].padStart(2, '0'));
  const year = data.getFullYear();
  return `${day} de ${month} ${year}` 
}