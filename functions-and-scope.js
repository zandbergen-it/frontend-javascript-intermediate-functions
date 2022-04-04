// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// Stappenplan:
// 1. Variabele maken voor aantal cumlaude studenten
// 2. For loop maken voor het doorlopen van de array van cijfers, check hierbij de lengte van de array als referentie voor de duur van de loop
// 3. Checken of cijfer hoger of gelijk is dan 8
// 4. Wanneer hoger of gelijk dan 8 +1 op cumlaude studenten variabele
// 5. Log resultaat van cumlaude studenten variabele naar console

let cumLaudeGraduates = 0

for(let i = 0; i != grades.length; i++)
{
    if (grades[i] >= 8 )
    {
        cumLaudeGraduates++
    }
}

console.log(cumLaudeGraduates)


// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(grades){
    let cumLaudeGraduates = 0

    for(let i = 0; i != grades.length; i++)
    {
        if (grades[i] >= 8 )
        {
            cumLaudeGraduates++
        }
    }

    return cumLaudeGraduates
}
console.log(cumLaude(grades))
console.log(cumLaude([6,4,5]))
console.log(cumLaude([8, 9, 4, 6, 10]))

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// Stappenplan
// 1. Maak een variabele voor totaal van alle cijfers
// 2. Tel alle waardes in de array bij elkaar op en stop dit in de eerder aangemaakte variabele
// 3. Deel de uitkomst van de variabele door de lengte van de array en sla het resultaat op in een variabele
// 4. Output de uitkomst via een console.log

let totalGrades = 0

for(let i = 0; i != grades.length; i++)
{ 
    totalGrades = totalGrades + grades[i]
}

const averageGradeVar = totalGrades / grades.length
console.log(averageGradeVar)


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(grades)
{
    let totalGrades = 0

    for(let i = 0; i != grades.length; i++)
    { 
        totalGrades = totalGrades + grades[i]
    }

    const averageGradeVar = totalGrades / grades.length

    return averageGradeVar
}

console.log(averageGrade(grades))
console.log(averageGrade([6, 4, 5]))
console.log(averageGrade([8, 9, 4, 6, 10]))

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeFixed(grades)
{
    let totalGrades = 0

    for(let i = 0; i != grades.length; i++)
    { 
        totalGrades = totalGrades + grades[i]
    }

    const averageGradeVar = totalGrades / grades.length

    return averageGradeVar.toFixed(2)
}

console.log(averageGradeFixed(grades))
console.log(averageGradeFixed([6, 4, 5]))
console.log(averageGradeFixed([8, 9, 4, 6, 10]))


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// Stappenplan
// 1. Maak een variabele om het hoogste cijfer in op te slaan
// 2. Maak een for loop om alle cijfers langs te gaan
// 3. In de for loop controleren of dit getal hoger is dan hoogste cijfer in de variabele, als waar dan variabele overschrijven
// 4. Output hoogste cijfer variabele

let highestGrade = 0

for (let i = 0; i != grades.length; i++)
{
    if (grades[i] > highestGrade)
    {
        highestGrade = grades[i]
    }
}

console.log(highestGrade)


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function getHighestGrade(grades)
{
    let highestGrade = 0

    for (let i = 0; i != grades.length; i++)
    {
        if (grades[i] > highestGrade)
        {
            highestGrade = grades[i]
        }
    }

    return highestGrade
}

console.log(getHighestGrade(grades))
console.log(getHighestGrade([6, 4, 5]))
console.log(getHighestGrade([8, 9, 4, 6, 10]))
