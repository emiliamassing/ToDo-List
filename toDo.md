Vad sidan bör innehålla - 
✓ Någon form av styling
✓ Felmeddelande om man inte lägger till något i fältet
✓  Eventuellt två delar av listan (inte avklarat/avklarat), där första delen innehåller saker på listan som ska göras, på andra delen hamnar avklarade saker från listan
✓ Sortering efter deadline, namn, datum då punkten lades till
✓ Alla punkter ska ha en deadline
- När deadline närmar sig ska detta förtydligas med text/färg etc


Vad listan bör innehålla -
✓ Du ska kunna lägga till saker på listan
✓ Du ska kunna ta bort saker från listan
- Kunna ändra listan. Alltså redigera listans innehåll (Hinner ej med denna)
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

KOD JAG INTE ANVÄNDER - Ta bort när du vet garanterat att den inte behövs
<div class="btnContainer">
            <span class="text">Add Category</span>
          </div>
          <div class="radioInputContainer">
                <label>
                  <input type="radio" name="category" id="important">
                  <span><i class="fa-solid fa-circle-exclamation category"></i>Important</span>
                </label>
              <label>
                <input type="radio" name="category" id="work">
                <span><i class="fa-solid fa-briefcase category"></i>Work</span>
              </label>
              <label>
                <input type="radio" name="category" id="spareTime">
                <span><i class="fa-solid fa-star category"></i>Spare Time</span>
              </label>
              <label>
                <input type="radio" name="category" id="household">
                <span><i class="fa-solid fa-house category"></i>Household</span>
              </label>
          </div>

          .radioInputContainer{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 20px;
        width: 90%;
        margin: 0 auto;
    
        :hover{
            transition: 0.3s ease-in-out;
            background-color: #f7c6ecb9;
            border: 2px solid #bf7abf;
        }
    
        label{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            border: 2px solid var.$borderColor;
            border-radius: 4px;
            cursor: pointer;
    
            :hover{
                border: none;
            }
        }
    
        input[type=radio]{
            transform: scale(1.5);
            margin-bottom: 8px;
            cursor: pointer;
        }
    
        i.category{
            margin-right: 3px;
        }

        .fa-circle-exclamation {
            color: #ff76be;
        }

        .fa-briefcase {
            color: #cc47a9;
        }

        .fa-star {
            color: #705ec1;;
        }

        .fa-house {
            color: #448ec3;
        }
    }