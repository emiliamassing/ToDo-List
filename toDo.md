Vad sidan bör innehålla - 
✓ Någon form av styling
✓ Felmeddelande om man inte lägger till något i fältet
- Eventuellt två delar av listan (inte avklarat/avklarat), där första delen innehåller saker på listan som ska göras, på andra delen hamnar avklarade saker från listan
✓ Sortering efter deadline, namn, datum då punkten lades till
✓ Alla punkter ska ha en deadline
- När deadline närmar sig ska detta förtydligas med text/färg etc


Vad listan bör innehålla -
✓ Du ska kunna lägga till saker på listan
✓ Du ska kunna ta bort saker från listan
- Kunna ändra listan. Alltså redigera listans innehåll
✓ Förtydling som visar om du klarat av/är klar med punkten på listan eller inte (Kan lösas med symbol/överstrykning)

För G -
✓ Det ska gå att lägga till uppgifter
✓ Det ska gå att ta bort uppgifter
✓ Det ska gå att markera uppgifter som klara
✓ Uppgifter ska ha deadlines (datum)
✓ Uppgifter ska gå att sortera på deadline
✓ Uppgifter ska gå att sortera på namn
✓ Uppgifter ska gå att sortera på datum när de lades till

För VG -
✓ Placera avklarade punkter i den nedersta listan (Avklarat)
- Förtydliga vilka uppgifter som passerat deadline med ex färg
- Uppgifter som förfaller inom 5 dagar ska också förtydligas
- Det ska gå att kategorisera uppgifter med hjälp av symboler. Minst 3 kategorier.

Kategorier jag tänkt mig: Ska prioriteras/viktigast, jobb, fritid, hushåll/hem.


Lägg till ifall du hinner:
Felmeddelande om rutan inte fylls i korrekt
notis om att punkten lades till - (typ task added)


KOD JAG INTE ANVÄNDER - Ta bort när du vet helt säkert att den nya koden fungerar.
/* for (let i = 0; i < toDoList.length; i++) {
    const taskName: string = ToDoItem[i].newTaskName as string;
    /* const taskName = toDoList[i].taskName;
    const taskNode = document.createElement('li');
    const taskTextNode = document.createTextNode(taskName); */
    /*toDoListHtml += `
    <li>
      <input type="checkbox" class="checkCompleted">
      <label>
        ${taskName}
        <input type="text">
      </label>
      <i class="fa-solid fa-pen-to-square fa-lg" tabindex="0"></i>
      <i class="fa-solid fa-x fa-lg" tabindex="0"></i>
    </li> `;*/

    // const editIcon = document.createElement('button');
    // const editIconTextNode = document.createTextNode('edit');
    // editIcon.classList.add('i');

    /* const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid');
    editIcon.classList.add('fa-pen-to-square');
    editIcon.classList.add('fa-lg');

    editIcon.setAttribute('tabindex', '0'); */

    /* const removeIcon = document.createElement('button');
    const removeIconTextNode = document.createTextNode('Delete');
    removeIcon.setAttribute('data-name', taskName);
    removeIcon.appendChild(removeIconTextNode); */

    // Dubbelkolla att nedanstående text är okej innan du raderar de övre blockkomentarerna

    /* const removeIcon = document.createElement('i');
    removeIcon.classList.add('fa-solid');
    removeIcon.classList.add('fa-x');
    removeIcon.classList.add('fa-lg');
    removeIcon.setAttribute('data-name', taskName);

    taskNode.appendChild(taskTextNode);
    taskNode.appendChild(editIcon);
    taskNode.appendChild(removeIcon);
    incompleteTasks?.appendChild(taskNode); 
  } */

 <li>
      <div class="row">
        <input type="checkbox" id="toDoCheckbox" class="toDoCheckbox" data-id="${index}">
        <label>
          <input type="text" value="${task.taskName}" id="editInput" class="editInput" readonly>
        </label>
      </div>
      <div class="row">
        <span class"deadline">${task.deadline}</span>
        <i></i> <!--Till kategori-->
        <button class="editIcon" aria-label="Edit">
        <i class="editIcon fa-solid fa-pen-to-square fa-lg"></i>
        </button>
        <button class="removeIcon" aria-label="Remove">
          <i class="removeIcon fa-solid fa-x fa-lg" data-id="${index}"></i>
        </button>
      </div>
    </li> `;