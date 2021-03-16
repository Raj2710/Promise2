function randomImage()
{
  var breed = document.getElementById('in').value;
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response =>{
      return response.json();
    }).then((val) =>{        
      document.getElementById('out').innerText = val.message[breed];    
    }).catch(reason =>{ 
      document.getElementById('out').innerText = "Not Found";
    });
}
