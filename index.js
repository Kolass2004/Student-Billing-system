const url = 'https://jkdevolpers.000webhostapp.com/cse/students.json';
        let totalAmount = 0; // Declare totalAmount as a global variable

        // Define the updateTotalAmount function in the global scope
        function updateTotalAmount() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const amountInput = document.getElementById("amountInput");
            totalAmount = 0; // Reset totalAmount
            let checkedStudentsCount = 0;

            const amount = parseInt(amountInput.value);

            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalAmount += amount;
                    checkedStudentsCount++;
                }
            });

            // Update the collected amount, checked students count, and remaining amount
            document.getElementById("collectedAmount").textContent = totalAmount;
            document.getElementById("checkedStudentsCount").textContent = checkedStudentsCount;
             // Initially set to collected amount
            document.getElementById("uncheckedStudentsCount").textContent = checkboxes.length - checkedStudentsCount;
            document.getElementById("totAmount").textContent = totalAmount;
        }

        // Define the showUncheckedStudents function in the global scope
        function showUncheckedStudents() {
            // ... (Your existing code for showing unchecked students)

            // After calculating totalAmount and uncheckedStudents, update the remaining amount
            
            document.getElementById("uncheckedStudentsCount").textContent = uncheckedStudents.length;
        }

        let data; // Define the data variable in the global scope
//totAmount
        
        fetch(url)
            .then(res => res.json())
            .then(responseData => {
                data = responseData; // Assign the data once it's fetched
                console.log(data);

                // Function to display student names with checkboxes in a table
                function displayStudentNames() {
                    const studentList = document.getElementById("studentList");

                    data.forEach(student => {
                        const row = document.createElement("tr");

                        const nameCell = document.createElement("td");
                        const checkboxCell = document.createElement("td");

                        const checkbox = document.createElement("input");
                        checkbox.type = "checkbox";
                        checkbox.id = `student_${student.sNo}`;
                        checkbox.addEventListener("change", updateTotalAmount);

                        const label = document.createElement("label");
                        label.htmlFor = `student_${student.id}`;
                        label.appendChild(document.createTextNode(student.Name));

                        checkboxCell.appendChild(checkbox);
                        nameCell.appendChild(label);

                        row.appendChild(nameCell);
                        row.appendChild(checkboxCell);

                        studentList.appendChild(row);
                    });
                }

                // Call the function to display student names
                displayStudentNames();
            });

        // Function to uncheck all checkboxes
        function uncheckAll() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');

            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });

            // Set the total amount to 0
            totalAmount = 0;
            document.getElementById("collectedAmount").textContent = 0;
        }
 // Define the showUncheckedStudents function in the global scope
        function showUncheckedStudents() {
            if (!data) {
                alert("Data is not available yet. Please wait for it to load.");
                return;
            }

            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const uncheckedStudents = [];
            const amountInput = document.getElementById("amountInput");
            const amount = parseInt(amountInput.value);

            checkboxes.forEach(checkbox => {
                if (!checkbox.checked) {
                    // Get the student name corresponding to the checkbox
                    const studentId = checkbox.id.split("_")[1];
                    const student = data.find(student => student.sNo === parseInt(studentId));
                    if (student) {
                        uncheckedStudents.push(student.Name);
                    }
                }
            });

            const totalAmount = uncheckedStudents.length * amount; // Calculate the total amount for unchecked students
            document.getElementById("totAmount").innerHTML = uncheckedStudents.length * amount;
            // Create a popup message with unchecked student names and total amount
            const message = `\n\nREMAINING AMOUNT: ${totalAmount} ₹\n\nREMAINING STUDENTS:\n\n${uncheckedStudents.join("\n")}`;

            // Display the popup
            alert(message);
        }

        // Function to check all checkboxes
        function checkAll() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');

            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });

            // After checking all checkboxes, update the total amount
            updateTotalAmount();
        }
        
    