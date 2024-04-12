fetch('https://opentdb.com/api.php?amount=10&category=10')
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
