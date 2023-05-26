const listaTareas = new Set();
const listaCompletadas = new Set();
const tareasOk = new Map();
const check = document.querySelectorAll(".check");
const inputTarea = document.querySelectorAll(".tarea");

function Tareas(id, tarea) {
    this.id = id;
    this.tarea = tarea;
}

check.forEach(check => {
    check.addEventListener('change', function () {
        document.getElementById(`input${check.value}`).style.textDecoration = "line-through";
        listaTareas.forEach((tarea) => {
            if (tarea.id === check.value) {
                listaTareas.delete(tarea);
                listaCompletadas.add(tarea);
                tareasOk.clear();
                tareasOk.set(tarea.id, tarea.tarea);
                console.log(tareasOk);
            }
        })
    });
});

inputTarea.forEach(item => {
    item.addEventListener('change', function () {
        let tarea = new Tareas(document.getElementById(`check-${item.id}`).value, item.value)
        item.disabled = true;
        document.getElementById(`check-${item.id}`).disabled = false;
        listaTareas.add(tarea);
    })
});