let userInput=prompt('What would you like yo do?');
const list=['hello', 'world'];
while(userInput!=='quit' && userInput!=='q')
{
    if(userInput==='ls')
    {
        console.log('**********')
        for(let i=0;i<list.length;i++)
        {
            console.log(`${i}: ${list[i]}`);
        }
        console.log('**********')
    } 
    else if(userInput==='new')
    {
        console.log('**********')
        const newTask=prompt("Add New Task:");
        list.push(newTask);
        console.log("New Task added successfully!");
        console.log('**********')
    }
    else if(userInput==='del')
    {
        const delTask=parseInt(prompt("Which task should be deleted?"));
        console.log('**********')
        for(let i=0;i<list.length;i++)
        {
            console.log(`${i}: ${list[i]}`);
        }
        if(!Number.isNaN(delTask))
        {
            list.splice(delTask,1); 
        }
        else
        console.log("Invalid Index");
        console.log('**********')
               
    }
    userInput=prompt('What would you like yo do?'); 
}
console.log('You quit the app')