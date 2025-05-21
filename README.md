# Habit Tracker

Een eenvoudige, door de natuur geïnspireerde webapp om je te helpen gezonde gewoontes op te bouwen en vol te houden in een kalme en vredige omgeving.

## Functies

- **Breathing Stillness:** Doe dagelijks een ademhalingsoefening van 1 minuut en houd je voortgang bij.
- **One Thought, One Line:** Schrijf elke dag een gedachte op en bekijk je eerdere reflecties.
- **Weekoverzicht:** Visualiseer je gewoonte-streaks van de afgelopen 7 dagen.
- **Responsief ontwerp:** Werkt goed op zowel desktop als mobiele apparaten.
- **Local Storage:** Alle gegevens worden in je browser opgeslagen, dus je voortgang is privé en blijft behouden.

## Gebruik

1. **Startpagina:**  
   Bekijk je gewoontes en hun huidige status. Klik op "Start activity" om aan een gewoonte te werken.

2. **Breathing Stillness:**  
   Klik op "Start" om een timer van 1 minuut te starten. Na afloop wordt je voortgang voor die dag opgeslagen.

3. **One Thought, One Line:**  
   Vul een gedachte in en verstuur deze. Je kunt je eerdere gedachten altijd terugzien.

4. **Weekoverzicht:**  
   Gekleurde cirkels tonen je streak per gewoonte over de afgelopen week.

## Demo Data voor Breathing Stillness

Wil je snel zien hoe het weekoverzicht werkt zonder 7 dagen te wachten?  
Gebruik de demo-functies in `index.js`:

- **Demo data toevoegen:**  
  Zoek bovenaan in `index.js` naar:

  ```js
  // addBreathingDemoData();
  ```

  Haal het commentaar weg (verwijder `//`) en refresh de pagina.  
  Dit vult de afgelopen 7 dagen als "gedaan" in het weekoverzicht.

- **Demo data verwijderen:**  
  Zoek naar:
  ```js
  // removeBreathingDemoData();
  ```
  Haal het commentaar weg en refresh de pagina om de demo data weer te verwijderen.

## Aanpassen

- Alle kleuren en stijlen kun je aanpassen in `style.css` naar eigen voorkeur.
- Geen account of backend nodig; alles draait in je browser.

## Aan de slag

1. Download of kloon deze repository.
2. Open `index.html` in je browser.
3. Begin met het bijhouden van je nieuwe habits!

---

**Geniet van een rustige, mindful manier om aan je nieuwe habits te werken!**
