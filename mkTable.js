import { h, html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

let tasks = []
// Arrow function to get all the GET parameters
function getParameters() {
    
    let attrs = ["task","date","time"]
    // Created a map which holds key value pairs
    let task = {}
    for (const item of attrs) {
        console.log(item)
        task[item] = document.querySelector("#" + item).value
        console.log(task[item])
    }
    tasks.push(task)
    // Returning the input values as an object
    return tasks
}

// Gets all the getParameters
const params = getParameters()
console.table(params)
//console.table(Object.fromEntries(getParameters()))





function App(props) {
    const params = getParameters()
    console.table(params)

    //ignore empty values, generate table rows
    let rows = params.filter( (p)=> p.task != '').map( 
        (t) => 
            html`<tr>
                <td class="task-td">${t.task}</td>
                <td class="task-td">${t.date}</td>
                <td class="task-td">${t.time}</td>
            </tr>`
        )


    return (
        html`<hr/>
        <style>
            #task-table, .task-td{
                border: 1px solid black;
                border-collapse: collapse;
            }
            .task-theader{
                background-color: teal;
            }
        </style>
            <h1>Tasks</h1>
        <table id="task-table">
            <tbody>
                ${rows}
            </tbody>
        </table>`
    );
}

function mkTable(e) {
    

    let container = document.querySelector("#tasks");
    render(html`<${App} />`, container)    
}

window.mkTable = mkTable;