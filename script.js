function showSemester (sem,btn){
    let content = "";
    switch (sem){
        case 1:
            content = `   
            <h2 id="semester">semester 1</h2>
            <h3 id="semestet-c">CGPA:7.87</h3>
            <ul>
                <li>Fundamentals of Computers</li>
                <li>Programming in C</li>
                <li>Mathematical Foundation</li>
                <li>Accounting for Everyone</li>
                <li>Information technology-Lab</li>
                <li>Programming in C-Lab</li>
            </ul> `;        
        break;

        case 2:
            content = `
            <h2 id="semester">semester 2</h2>
            <h3 id="semestet-c">CGPA:7.97</h3>
            <ul>
                <li>Data Structures using C</li>
                <li>Object Oriented Concepts using Java</li>
                <li>Discrete Mathematical Structures</li>
                <li>Public Finance</li>
                <li>Digital Fluency</li>
                <li>Data Structures-Lab</li>
                <li>JAVA-Lab</li>
            </ul>`;
        break; 
