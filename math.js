function showLevel(level) { // Define a function showLevel
    if (level === "home") { // If function 1
        window.location.href = "index.html"; // Change the page to index.html if and only if home button is pressed
    } else if (level === "basics") { // If function 2
        window.location.href = "basic.html"; // Change the page to basic.html if and only if Introduction button is pressed
    } else if (level === "moderate") { // If function 3
        window.location.href = "moderate.html"; // Change the page to moderate.html if and only if Deep Dive button is pressed
    } else if (level === "intricate") { // If function 4
        window.location.href = "intricate.html"; // Change the page to intricate.html if and only if Intricate Questions button is pressed
    } else if (level === "practice") {
        window.location.href = "practice.html"; // Change the page to practice.html if and only if Practice Questions button is pressed
    }
}

// CODE FOR QUESTION 1 (BASIC.HTML)
// 1. When dragging is started, remember which block it is
function dragBlock(event) {
    event.dataTransfer.setData("id", event.target.id);
}

// 2. When we drop it, move the block to the RHS
function dropBlock(event) {
    let id = event.dataTransfer.getData("id");
    let block = document.getElementById(id);
    event.target.appendChild(block);
    updateTilt();
}

// Update the angle of the seesaw
function updateTilt() {
    let rhs = document.getElementById("rhs");
    let count = rhs.getElementsByClassName("block").length;
    let seesaw = document.querySelector(".seesaw-area");
    let xValueDisplay = document.getElementById("x-value1");
    let statusDisplay = document.getElementById("status1");

    xValueDisplay.innerText = count;

    // Check the count and display text accordingly
    if (count === 0) {
        xValueDisplay.innerText = "𝑥";
    } else {
        xValueDisplay.innerText = count;
    }

    // Check count and tilt the seesaw accordingly
    if (count === 3) {
        seesaw.style.transform = "rotate(0deg)";
        statusDisplay.innerText = "(TRUE!)\n𝑥 = 3";
        statusDisplay.style.color = "green";
    } else if (count == 2) {
        seesaw.style.transform = "rotate(-3deg)";
        statusDisplay.innerText = "(Not balanced)";
        statusDisplay.style.color = "red";
    } else if (count === 1) {
        seesaw.style.transform = "rotate(-6.5deg)";
        statusDisplay.innerText = "(Not balanced)";
        statusDisplay.style.color = "red";
    } else if (count === 0) {
        seesaw.style.transform = "rotate(-10deg)";
        statusDisplay.innerText = "(Not balanced)";
        statusDisplay.style.color = "red";
    } else if (count === 4) {
        seesaw.style.transform = "rotate(4deg)";
        statusDisplay.innerText = "(Not balanced)";
        statusDisplay.style.color = "red";
    } else if (count > 4) {
        seesaw.style.transform = "rotate(10deg)";
        statusDisplay.innerText = "(Not balanced)";
        statusDisplay.style.color = "red";
    }
}

// Check the answer (basic.html)
function checkAnswer() {
    let rhs = document.getElementById("rhs");
    let count = rhs.getElementsByClassName("block").length;

    if (count === 3) {
        alert("Absolutely correct! 3 = 3. It is balanced!");
    } else {
        alert("Not balanced! You have " + count + " blocks, but you need 3.");
    }
}

// Reset the boocks on the seesaw to their oroginal position (basic.html)
function resetBlocks() {
    let rhs = document.getElementById("rhs"); // Find the RHS (where the draggable blocks are right now)
    let original_pile = document.querySelector(".blocks"); // Find the original blocks container (where they should go back to)
    while (rhs.getElementsByClassName("block").length > 0) {
        let blockToMove = rhs.getElementsByClassName("block")[0];
        original_pile.appendChild(blockToMove);
    }

    updateTilt();
}

// CODE FOR QUESTION 2 (BASIC.HTML)
// 1. When dragging is started, remember which block it is
function dragBlock(event) {
    event.dataTransfer.setData("id", event.target.id);
}

// 2. When we drop it, move the block to the RHS
function dropBlock2(event) {
    let id = event.dataTransfer.getData("id");
    let block = document.getElementById(id);
    event.target.appendChild(block);
    updateTilt2();
}

// Update tilt for second question
function updateTilt2() {
    let rhs = document.getElementById("rhs2");
    let count = rhs.getElementsByClassName("block").length;
    let seesaw = document.querySelectorAll(".seesaw-area")[1];

    let xValueDisplay = document.getElementById("x-value2");
    let statusDisplay = document.getElementById("status2");

    if (count === 1) {
        xValueDisplay.innerText = "𝑥"; // Shows '𝑥' when only the permanent block is present
    } else {
        xValueDisplay.innerText = count - 1; // Subtracts the permanent block to find 𝑥
    }

    // Logic for balancing 5 total blocks - check count and update seesaw and text accordingly
    if (count === 5) {
        seesaw.style.transform = "rotate(0deg)";
        statusDisplay.innerText = "(TRUE!)\n𝑥 = 4";
        statusDisplay.style.color = "green";
    } else {
        statusDisplay.innerText = "(Not Balanced)";
        statusDisplay.style.color = "red";
        
        // Dynamic tilt based on how many blocks are present
        if (count == 4) seesaw.style.transform = "rotate(-2deg)";
        else if (count == 3) seesaw.style.transform = "rotate(-4deg)";
        else if (count == 2) seesaw.style.transform = "rotate(-6deg)";
        else if (count == 1) seesaw.style.transform = "rotate(-8deg)";
        else if (count == 0) seesaw.style.transform = "rotate(-10deg)";
        else seesaw.style.transform = "rotate(10deg)";
    }
}

// Check answwer for thre second seesaw question (basic.html)
function checkAnswer2() {
    let rhs = document.getElementById("rhs2");
    let count = rhs.getElementsByClassName("block").length;

    if (count === 5) {
        alert("Absolutely correct! 5 = 5. It is balanced!");
    } else {
        alert("Not balanced! You have " + count + " blocks, but you need 5.");
    }
}

// Reset blocks for the second question (basic.html)
function resetBlocks2() {
    let rhs = document.getElementById("rhs2");
    let original_pile = document.querySelectorAll(".blocks")[1];
    
    // 1. Get a list of all blocks currently in the RHS class
    let blocksInRhs = rhs.getElementsByClassName("block");

    // 2. Loop BACKWARDS (essential when moving items) 
    // A for-loop to skip the permanent block
    for (let i = blocksInRhs.length - 1; i >= 0; i--) {
        let blockToMove = blocksInRhs[i];

        // 3. FIX: Only move the block if it DOES NOT have the 'permanent' class
        if (!blockToMove.classList.contains("permanent")) {
            original_pile.appendChild(blockToMove);
        }
    }

    // This updates the tilt AND the Equation text back to "5 = 𝑥 + 1"
    updateTilt2();
}

// Code for EXAMPLE 1 from DEEP DIVE page (moderate.html)
let step = 1;

function subtract() {
    if (step === 1) {
        document.getElementById("extra").style.display = "none"; 
        document.getElementById("total").innerText = "10"; 
        document.getElementById("feedback").innerText = "Great! Now click the '2' to divide 10 into two boxes.";
        document.getElementById("feedback").style.color = "orange";
        
        // --- VISUAL UPDATE FOR STEP 1 ---
        document.getElementById("visual-step-1").style.display = "none";
        document.getElementById("visual-step-2").style.display = "block";
        // --- END VISUAL UPDATE ---

        step = 2;
    }
}


// Division step where boths ides are divided by the coefficient of 𝑥
function divide() {
    if (step === 2) {
        document.getElementById("coefficient").style.display = "none"; 
        document.getElementById("total").innerText = "5"; 
        document.getElementById("feedback").innerText = "TRUE! 𝑥 = 5. You solved it!";
        document.getElementById("feedback").style.color = "green";
        
        // --- VISUAL UPDATE FOR STEP 2 ---
        document.getElementById("visual-step-2").style.display = "none";
        document.getElementById("visual-final").style.display = "block";
        // --- END VISUAL UPDATE ---

        step = 3;
    } else if (step === 1) {
        alert("Wait! Subtract the +5 first before dividing.");
    }
}

// Code for EXAMPLE 2 from DEEP DIVE page
let step2 = 1;

function subtract2() {
    if (step2 === 1) {
        document.getElementById("extra2").style.display = "none"; 
        document.getElementById("total2").innerText = "24"; 
        document.getElementById("feedback2").innerText = "Great! Now click the '6' to divide 24 into six boxes.";
        document.getElementById("feedback2").style.color = "orange";
        
        // --- VISUAL UPDATE FOR STEP 1 ---
        document.getElementById("visual-step-1-2").style.display = "none";
        document.getElementById("visual-step-2-2").style.display = "block";
        // --- END VISUAL UPDATE ---

        step2 = 2;
    }
}

// Second division (for second question - moderate.html)
function divide2() {
    if (step2 === 2) {
        document.getElementById("coefficient2").style.display = "none"; 
        document.getElementById("total2").innerText = "4"; 
        document.getElementById("feedback2").innerText = "TRUE! 𝑥 = 4. You solved it!";
        document.getElementById("feedback2").style.color = "green";
        
        // --- VISUAL UPDATE FOR STEP 2 ---
        document.getElementById("visual-step-2-2").style.display = "none";
        document.getElementById("visual-final2").style.display = "block";
        // --- END VISUAL UPDATE ---

        step2 = 3;
    } else if (step2 === 1) {
        alert("Wait! Subtract the +5 first before dividing.");
    }
}

// Effect of buttons below Question 3
function revealStep(id) {
    let element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Example for EXAMPLE 3 just to check the answer.
function checkJamalAge() {
    // 1. Get the value from the text box
    let guess = document.getElementById("jamal-guess").value;

    // 2. Logic check
    if (guess == "5") {
        alert("Absolutely correct! Awesome! 2(5) + 4 = 14. Jamal is 5!");
    } else if (guess === "") {
        alert("Type a number first!");
    } else {
        alert("Not quite! Try using the hints below to build the equation.");
    }
}

// Effect of buttons below Question 4
function revealStep2(id) {
    let element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Example for EXAMPLE 4 just to check the answer.
function checkBoxCost() {
    // 1. Get the value from the text box
    let guess = document.getElementById("box-guess").value;

    // 2. Logic check
    if (guess == "6") {
        alert("Absolutely correct! Awesome! 3(6) + 2 = 20. The cost of each toy box is $6!");
    } else if (guess === "") {
        alert("Type a number first!");
    } else {
        alert("Not quite! Try using the hints below to build the equation.");
    }
}

// Code for the Intricate Page (intricate.html)
// Keep track of the current equation state
let equationState = {
    lhsX: 3,
    lhsConst: 5,
    rhsX: 1,
    rhsConst: 11
};

// Merge the 𝑥 terms together
function mergeTerms(event) {
    event.preventDefault();
     // 1. Get the ID of the dragged element (small-x)
    let data = event.dataTransfer.getData("text");
    
    if (data === "small-x") {
        equationState.lhsX -= 1; // 3. Change '3x' to '2x'
        equationState.rhsX = 0;  // x is gone from RHS
        // 2. Hide the small x from the right side
        document.getElementById("small-x").style.display = "none";
        document.getElementById("big-x").innerText = equationState.lhsX + "𝑥";
        updateInstruction();
    }
}

// Merge the constants together
function moveNumber(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    // Check if they are dragging the +5 constant
    if (data === "const-left") {
        equationState.rhsConst -= equationState.lhsConst; // 2. This code updates the Right Hand Side to show the result (11 - 5 = 6)
        equationState.lhsConst = 0; // +5 is gone from LHS
        // 1. Hide the +5 from the left uaing the code below
        document.getElementById("const-left").style.display = "none";
        // 3. Final Step Instruction
        document.getElementById("const-right").innerText = "+" + equationState.rhsConst;
        updateInstruction();
    }
}

// Udaptes the instructions dictating the steps of how to solve the equation for question 1
function updateInstruction() {
    let instr = document.getElementById("instruction-text");
    
    // This code snippet check what's left on the board to decide what to say
    if (equationState.rhsX === 0 && equationState.lhsConst === 0) {
        instr.innerText = "Great! Now you have 2𝑥 = 6. What is 𝑥?";
        instr.style.color = "blue";
    } else if (equationState.rhsX === 0) {
        instr.innerText = "Variable gathered! Now move the +5 to the right.";
    } else if (equationState.lhsConst === 0) {
        instr.innerText = "Number moved! Now gather the 𝑥 terms on the left.";
    }
}

// This function allows dragging of items
function drag(event) {
    // This tells the browser exactly which capsule is being picked up
    event.dataTransfer.setData("text", event.target.id);
}

function checkxValue() {
    // 1. Get the value from the text box
    let guessx = document.getElementById("x-guess").value;

    // 2. Logic check
    if (guessx == "3") {
        alert("Absolutely correct! Awesome! 3(3) + 5 = 3 + 11 = 14.");
    } else if (guessx === "") {
        alert("Type a number first!");
    } else {
        alert("Not quite! Try using the illustrations to help.");
    }
}

// CODE for EXAMPLE 2 - Intricate Page (intricate.html)
// Keep track of the current equation state
let equationState2 = {
    lhsX2: 5,
    lhsConst2: 12,
    rhsX2: 2,
    rhsConst2: 27
};

function mergeTerms2(event) {
    event.preventDefault();
     // 1. Get the ID of the dragged element (small-x)
    let data = event.dataTransfer.getData("text");
    
    if (data === "small-x2") {
        equationState2.lhsX2 -= 2; // 3. Change '5x' to '3x'
        equationState2.rhsX2 = 0;  // x is gone from RHS
        // 2. Hide the small x from the right side
        document.getElementById("small-x2").style.display = "none";
        document.getElementById("big-x2").innerText = equationState2.lhsX2 + "𝑥";
        updateInstruction2();
    }
}

function moveNumber2(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    // Check if they are dragging the +5 constant
    if (data === "const-left2") {
        equationState2.rhsConst2 -= equationState2.lhsConst2; // 27 - 12 = 15
        equationState2.lhsConst2 = 0;
        document.getElementById("const-left2").style.display = "none";
        document.getElementById("const-right2").innerText = "+" + equationState2.rhsConst2;
        updateInstruction2();
    }
}

function updateInstruction2() {
    let instr = document.getElementById("instruction-text2");
    
    // Check state for Example 2 (with the '2' suffix on variables)
    if (equationState2.rhsX2 === 0 && equationState2.lhsConst2 === 0) {
        instr.innerText = "Great! Now you have 3𝑥 = 15. What is 𝑥?";
        instr.style.color = "blue";
    } else if (equationState2.rhsX2 === 0) {
        instr.innerText = "Variable gathered! Now move the +12 to the right.";
    } else if (equationState2.lhsConst2 === 0) {
        instr.innerText = "Number moved! Now gather the 𝑥 terms on the left.";
    }
}

// This function allows dragging of items
function drag2(event) {
    // This tells the browser exactly which capsule is being picked up
    event.dataTransfer.setData("text", event.target.id);
}

function checkxValue2() {
    let guessx = document.getElementById("x-guess2").value;

    if (guessx == "5") {
        alert("Absolutely correct! 5(5) + 12 = 37, and 2(5) + 27 = 37. Perfect balance!");
    } else if (guessx === "") {
        alert("Type a number first!");
    } else {
        alert("Not quite! If 3 boxes equal 15, how much is in one box?");
    }
}

// CODE for EXAMPLE 3 - Negative Coefficients
let equationState3 = {
    lhsConst: 7,
    rhsConst: 5,
    isXMoved: false
};

function moveNegativeX(event) {
    // This is used for handling user interaction in a custom way
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    if (data === "neg-x") {
        equationState3.isXMoved = true;
        // Hide the minus x on the left
        document.getElementById("neg-x").style.display = "none";
        // Show a plus x on the right
        document.getElementById("rhs-portal3").innerHTML += '<div class="term-capsule variable" id="moved-x">+𝑥</div>';
        
        let instr = document.getElementById("instruction-text3");
        instr.innerText = "Great! Now you have 7 = 5 + 𝑥. What is 𝑥?";
        instr.style.color = "blue";
    }
}

function checkxValue3() {
    let guess = document.getElementById("x-guess3").value;

    if (guess == "2") {
        alert("Correct! If 7 = 5 + 𝑥, then 𝑥 must be 2. Also, 7 - 2 = 5!");
    } else if (guess === "") {
        alert("Enter a number first!");
    } else {
        alert("Not quite. Think: 7 minus WHAT equals 5?");
    }
}

let finalStep = 1;

function advanceStep() {
    const desc = document.getElementById("step-desc");
    const line = document.getElementById("line1");
    const btn = document.getElementById("next-btn");

    if (finalStep === 1) {
        desc.innerHTML = "<b>Step 2:</b> Multiply the terms out.";
        line.innerText = "15 - 6𝑥 = 12𝑥 + 52 - 1";
        finalStep = 2;
    } else if (finalStep === 2) {
        desc.innerHTML = "<b>Step 3:</b> Clean up the constants.";
        line.innerText = "15 - 6𝑥 = 12𝑥 + 51";
        btn.style.display = "none";
        document.getElementById("final-input-area").style.display = "block";
    }
}

function checkFinalBoss() {
    let val = document.getElementById("x-guess-final").value;
    // Math: 15 - 6x = 12x + 51 -> -36 = 18x -> x = -2
    if (val == "-2") {
        alert("LEGENDARY! You solved the hardest type of equation. 𝑥 = -2.");
    } else {
        alert("Not quite. Hint: Move -6x to the right and 51 to the left. What is -36 divided by 18?");
    }
}

// CODE for the THIRD LAST BOSS QUESTION

var currentStep = 1;

function revealNextStep() {
    let stepId = "step" + currentStep;
    let element = document.getElementById(stepId);

    if (element) {
        element.style.display = "block";
        currentStep = currentStep + 1
    } else {
        alert("Finished this question! Move onto the next one.")
    }
}

function checkxValue4() {
    let guess = document.getElementById("x-guess4").value;

    if (guess === "-2") {
        alert("Correct! If -36 = 18𝑥, then 𝑥 must be -2. Also, -36 = 18(-2)");
    } else if (guess === "") {
        alert("Enter a number first!");
    } else if (guess === "2") {
        alert("Did you forget about the negative sign?")
    } else {
        alert("Not quite. Think: 18 multiplied by WHAT equals -36?");
    }
}

// CODE for the SECOND LAST "BOSS-LEVEL" QUESTION

var currentStep_a = 1;

function revealNextStepA() {
    let stepId = "step" + currentStep_a + "-a";
    let element = document.getElementById(stepId);

    if (element) {
        element.style.display = "block";
        currentStep_a = currentStep_a + 1
    } else {
        alert("Challenge completed! You're officially a master in solving linear equations!")
    }
}

function checkxValue5() {
    let guess = document.getElementById("x-guess5").value;

    if (guess === "4") {
        alert("Correct! If 2𝑥 = 8, then 𝑥 must be 4. Also, 2(4) = 8.");
    } else if (guess === "") {
        alert("Enter a number first!");
    } else {
        alert("Not quite. Think: 2 multiplied by WHAT equals 8?");
    }
}

// CODE for practice.html

// CODE for QUESTION 1:
function checkPractice() {
    let guess = document.getElementById("x-1").value;

    if (guess === "2") {
        alert("Correct! 14 - 3(2 + 2) = 14 - 12 = 2");
    } else if (guess === "") {
        alert("Enter a number first!");
    } else {
        alert("Not quite. Try again!\nDid you remember about the negative sign before the 3 when expanding the brackets?");
    }
}


// CODE for QUESTION 2
function checkPractice2() {
    let guess = document.getElementById("x-2").value;

    if (guess === "5") {
        alert("Correct! If 5n - 7 = 3n + 3, then n = 5");
    } else if (guess === "") {
        alert("Enter a number first!");
    } else {
        alert("Not quite. Try again!\nDid you try forming an equation with 'n' as your variable, and solve for 'n'?");
    }
}

// CODE for QUESTION 3
function checkPractice3() {
    let guess = document.getElementById("x-3").value;

    if (guess === "4") {
        alert("Correct! 𝑦 = 4! 4[2(4 - 1] + 3] - 14 = 2[4 + 7] = 22");
    } else if (guess === "") {
        alert("Enter a number first!");
    } else {
        alert("Not quite. Try again!\nDid you expand and get: 4(2𝑦 + 1) - 14 = 𝑦 + 14\nand then 6𝑦 = 24?");
    }
}


// CODE for QUESTION 4
function checkPractice4() {
    let guess = document.getElementById("x-4").value;

    if (guess === "16") {
        alert("Correct! 𝑥 = 16! 3[2(16) - 5] - (16 - 4) = 4(16 + 1) + 1 = 69");
    } else if (guess === "") {
        alert("Enter a number first!");
    } else {
        alert("Not quite. Try again!\nDid you notice the negative sign around (𝑥 - 4)? There is an invisible -1 around (𝑥 - 4), so the -4 actually changes signs.");
    }
}

// CODE for QUESTION 5

// Part-a
function checkPractice5() {
    let guess = document.getElementById("x-5").value;

    if (guess === "b+3" || guess === "b + 3" || guess === "b+ 3" || guess === "b +3") {
        alert("Correct! Now move onto part-b!");
    } else if (guess === "") {
        alert("Enter the expression for length first!");
    } else {
        alert("Not quite.\nHint: If width is b, just add 3 to it to find the length!");
    }
}

// Part-b
function checkPractice6() {
    let guess = document.getElementById("x-6").value;
    let guess2 = document.getElementById("x-7").value;

    if ((guess === "2b" && guess2 === "3(b+3)") || (guess === "2b" && guess2 === "3b+9)")) {
        alert("Correct! Now move onto part-c!");
    } else if (guess === "") {
        alert("Enter the expressions first!");
    } else {
        alert("Not quite.\nHint: Use a bracket for the length, like 3(b + 3), so you triple the whole thing.");
    }
}


// Part-c
function checkPractice7() {
    let guess = document.getElementById("x-8").value;

    if (guess === "2[3(b+3)+2b]=88" || guess === "2(3b+9+2b)=88" || guess === "2(5b+9)=88") {
        alert("Correct! Now move onto part-d!");
    } else if (guess === "") {
        alert("Enter the expression for length first!");
    } else {
        alert("Not quite.\nHint: Double the sum of your new width and length: 2(Width + Length) = 88.");
    }
}

// Part-d
function checkPractice8() {
    let guess = document.getElementById("x-9").value;

    if (guess === "7") {
        alert("Correct! Now move onto part-e (the final one)!");
    } else if (guess === "") {
        alert("Enter the expression for length first!");
    } else {
        alert("Not quite.\nHint: Hint: Expand the brackets first.\nDid you end up with 10b + 18 = 88.");
    }
}

// Part-e (The last one) - Hurray!
function checkPractice9() {
    let guess = document.getElementById("x-10").value;
    let guess2 = document.getElementById("x-11").value;

    if ((guess === "10m" && guess2 === "7m") || (guess === "10" && guess2 === "7m")) {
        alert("Correct! You're done with all the practice questions and have reached mastery level!");
    } else if ((guess === "" && guess2 === "") || guess === "" || guess2 === "") {
        alert("Enter both the values first!");
    } else {
        alert("Not quite.\nHint: You found b=7 (Width), now just add 3 to get the original Length!\nAlso, did you forget the units (metres)?");
    }
}

function login() {
    // 1. Get the values the user typed
    var userField = document.getElementById("username").value;
    var passField = document.getElementById("password").value;

    // 2. The Universal Username and Password that everyone needs to type
    var correctUser = "Admin";
    var correctPass = "Algebraisfun!";

    // 3. The Check - If the username and password match, show the website. Else, show an error message.
    if (userField === correctUser && passField === correctPass) {
        // Hide the login screen
        document.getElementById("login-screen").style.display = "none";
        // Show the actual website
        document.getElementById("main-content").style.display = "block";
    } else if (userField != correctUser && passField === correctPass) {
        // Show error message
        document.getElementById("error").innerHTML = "Incorrect username! Try again.";
    } else if (userField === correctUser && passField != correctPass) {
        // Show error message
        document.getElementById("error").innerHTML = "Incorrect password! Try again.";
    } else if (userField != correctUser && passField != correctPass) {
        // Show error message
        document.getElementById("error").innerHTML = "Incorrect username and password! Try again.";
    }
}

// Touch-to-click function for mobile devices - this allows users to tap on elements that have 'onclick' events (like buttons) and have it register as a click, improving mobile usability.
document.addEventListener("touchstart", function(e) {
    // Finds the element somebody touched and forces a 'click' event
    if (e.target.onclick || e.target.tagName === 'BUTTON') {
        e.target.click();
    }
}, {passive: true});