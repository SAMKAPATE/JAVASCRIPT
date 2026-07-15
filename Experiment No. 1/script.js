function showEnvironment() {

    let browser = navigator.userAgent;
    let language = navigator.language;
    let platform = navigator.platform;

    let output = `
    <h2>Welcome User!</h2>

    <h3>Student Information</h3>

    <p><b>Name :</b> Samprada Kapate</p>

    <p><b>PRN :</b> 25070521514 </p>

    <p><b>File Path :</b> C:/Users/Samprada/Documents/JavaScript/Practical-1/index.html</p>

    <hr>

    <h3>User Environment Information</h3>

    <p><b>Browser :</b> ${browser}</p>

    <p><b>Language :</b> ${language}</p>

    <p><b>Platform :</b> ${platform}</p>
    `;

    document.getElementById("output").innerHTML = output;

    console.log("Name : Samprada Kapate");
    console.log("PRN : 1234567890");
    console.log("File Path : C:/Users/Samprada/Documents/JavaScript/Practical-1/index.html");

    console.log("JavaScript Practical Started Successfully.");
    console.error("This is a sample error message.");

    console.table([
        {
            Name: "Samprada Kapate",
            PRN: "1234567890",
            Branch: "Computer Engineering"
        }
    ]);

    console.trace("Trace Method Executed");
}
