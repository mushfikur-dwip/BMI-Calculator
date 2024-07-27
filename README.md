feat: Implement BMI Calculator with CSS and validation improvements

- Add BMI Calculator functionality in React
  - Includes weight and height input fields
  - Displays calculated BMI and corresponding health message
- Improve UI with custom CSS and Bootstrap
- Validate inputs to ensure valid weight and height values
  - Alert users to enter valid inputs if fields are empty
- Implement reset functionality to clear input fields and results
- Hide spinner arrows in number input fields for a cleaner UI

Changes:
- Added `BMI.css` for custom styles
  - Includes styles to hide spinner arrows on number inputs
- Updated component to initialize state values with empty strings
- Corrected BMI classification condition to include BMI of 30
- Updated reset function to clear input fields and set placeholders
- Added placeholder text for better user guidance
- Added alert for invalid input in the calculation function

This commit improves the user experience by enhancing input validation, providing clearer instructions, and cleaning up the UI with custom styles.
