document.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/14622df7511a482a82c4d28359cb8204/jungari")
    .then(response=>{
        console.log(response.data);
        showUserOnScreen(response.data)
    })
    .catch(err=>{
        console.log(err);
    })
})

function showUserOnScreen(data)
{
    var table1=document.getElementById('t1')
    var table2=document.getElementById('t2')
    var table3=document.getElementById('t3')
    for(var i=0;i<data.length;i++)
    {
    var li=document.createElement('li');
    li.textContent=`${data[i].price}-${data[i].dish}-${data[i].table}`
    //creating delete button
    var deletebtn=document.createElement('input');
    deletebtn.type='button'
    deletebtn.value='Delete Order'
    li.appendChild(deletebtn)
    //deletebutton on click event
    deletebtn.onclick = function (id) {
        return function () {
            deleteItem(id);
        };
    }(data[i]._id);

   



    if(data[i].table=="Table 1")
    table1.appendChild(li);
    else if (data[i].table=="Table 2")
    table2.appendChild(li);
     else if (data[i].table=="Table 3")
     table3.appendChild(li);


}
}
/// delete function
function deleteItem(id)
{
    axios.delete(`https://crudcrud.com/api/14622df7511a482a82c4d28359cb8204/jungari/${id}`)
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })

}


function hello(event)
{
    event.preventDefault();
    var price=document.getElementById('price').value;
    var dish=document.getElementById('dish').value;
    var table=document.getElementById('table').value;
    var inputdata={price,dish,table}
    //post data to crud crud
    axios.post("https://crudcrud.com/api/14622df7511a482a82c4d28359cb8204/jungari",inputdata)
    .then(response=>{
        console.log(response);
    })
    .catch(err=>{
        console.log(err);
    })

}