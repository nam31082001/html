let input = document.getElementById('text');
const Api = '4V7xC1CD0FHNonfPp7g34VPCf1Axe7Nw'
document.getElementById('button').addEventListener('click', () => {
  console.log(input.value)
  fetch(`http://api.giphy.com/v1/gifs/search?q=${input.value}&rating=g&api_key=${Api}`)
    .then( (data) => {
      return data.json()
    })
    .then((json)=>{
      let ima=document.createElement("img");
      var a=json.data[0].images.fixed_height.url;
      console.log(a)
      ima.setAttribute("src",a);
      document.getElementById('body').appendChild(ima)
    })
})