const someDiv = document.getElementById('some-div');

const sizeAndColorConfig = [
  {
    size: 250,
    color: 'white',
  },
  {
    size: 300,
    color: 'red',
  },
  {
    size: 350,
    color: 'green',
  },
  {
    size: 400,
    color: 'blue',
  },
  {
    size: 500,
    color: 'yellow',
  },
];
let currentSize = 0;

someDiv.addEventListener('click', () => {
  if (sizeAndColorConfig.length <= currentSize + 1) {
    currentSize = 0;
  } else {
    currentSize++;
  }
  const curProperty = sizeAndColorConfig[currentSize];
  console.log(currentSize, someDiv.style.width);
  someDiv.style.width = curProperty.size + 'px';
  someDiv.style.height = curProperty.size + 'px';
  someDiv.style['background-color'] = curProperty.color;
});
