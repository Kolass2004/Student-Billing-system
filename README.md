# Student Amount Collecting System

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Usage](#usage)
4. [Code Explanation](#code-explanation)
5. [Sample Usage](#sample-usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The "Student Amount Collecting System" is a web-based application designed to facilitate the collection of fees from students. This system provides an interface for administrators to enter the amount to be collected and track payments. It also allows users to view the list of students and their payment status.

## Features

- Enter the amount to be collected.
- Checkboxes to mark the students who have paid.
- Real-time calculation of the total collected amount.
- Display of remaining amount and statistics.
- Buttons to check/uncheck all students.
- Alert for remaining students and amount.

## Usage

1. **Enter the Amount**: Type the amount you want to collect in the "ENTER AMOUNT" input field and click the right arrow button.

2. **Collect Payment**: Check the checkboxes next to the students who have paid. The collected amount will be updated automatically.

3. **View Statistics**: The application displays the total collected amount, remaining amount, and the number of students who have paid and haven't paid.

4. **Check/Uncheck Students**: Use the buttons to check or uncheck all students with a single click.

5. **Alert for Remaining Students and Amount**: Click the "history" button to view a list of students who haven't paid and the remaining amount. An alert will be displayed.

6. **Print Copy**: You can print a copy of the bill by clicking the "print" button.

## Code Explanation

- **HTML Structure**: The HTML file defines the structure and content of the web page. It contains elements for input, buttons, tables, and JavaScript references.

- **JavaScript Logic**: JavaScript is used to handle user interactions and perform calculations. Functions are defined to update the collected amount, check/uncheck students, and display alerts.

- **Data Loading**: The project loads student data from a JSON file via an HTTP request.

- **Styling**: CSS styles are applied to elements to improve the visual appearance and layout.

## Sample Usage

1. Enter the amount (e.g., 1000) and click the right arrow button.
2. Check some student names to simulate payments.
3. Observe the total collected amount and statistics.
4. Click the "history" button to view the alert for remaining students and amount.
5. Click the "print" button to print a copy of the bill.

## Contributing

Contributions to the project are welcome. You can contribute by adding new features, improving the user interface, or fixing issues. Feel free to fork the project and create a pull request.

## License

This project is open-source and released under the [MIT License](https://opensource.org/licenses/MIT).
