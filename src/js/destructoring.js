export default function destructoring(character) {
  const result = [];
  character.special.forEach((element, index) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = element;
    result[index] = {
      id, name, description, icon,
    };
  });
  return result;
}
