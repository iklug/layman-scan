const formatResponse = (response) => {
  const dummyData =
    "hello: gooberbabberoif @ goodbye: zoomber mcijasd lkajsldkj asd @ onemore: you know what ti issss";
  const separateWords = response.split(/[:@]/);
  console.log(separateWords);
  const formattedArray = [];
  for (let i = 0; i < separateWords.length; i += 2) {
    const data = { word: separateWords[i], definition: separateWords[i + 1] };
    formattedArray.push(data);
  }
  return formattedArray;
};

export default formatResponse;
