## Complete the following tasks

- [x] Transfer the project to TypeScript
 - Converted the project from JavaScript to TypeScript to leverage static typing and enhance code reliability.
- [x]  Create a List Component
 - Developed a React component designed to fetch and display data from an API in a list format.
  - Component Features:
    - Displays a list of items with the following keys:
      - *id*
      - *name*
      - *email*
      - *dateOfBirth* (Note: This key does not exist in the data)
      - *phone*

- [x] Create a Form Generator Component
- Developed a scalable and reusable React component with the following capabilities:
    - Validation Schema: Implemented using Zod.
    - API Hook Call: Integrated with react-hook-form for form handling.
    - Callback Function for Form Rendering: Added a renderForm callback prop to dynamically render form elements and handle their state.
  - Component Implementation:
    - Created a form with two fields:
      - Input Field (`title`)
      - Textarea Field (`body`)
      Both fields display error messages when the input does not meet the criteria specified by the validation schema.

- [x] Create a Page Generator Component
- Dynamic Layout Handling: The component handles different page layouts based on provided data.
  - Scalability and Reusability: Designed to be scalable for future layout types and reusable across different pages.
  - Prop Structure: Accepts an array of objects where each object represents a section of the page, including its layout and components.

## How to run project

1. **Clone the repository**
   ``` git clone git@github.com:hinagawa/polina-salimullina-fatcat-task.git ```

2. **Install dependencies**
   ``` npm install ```

3. **Run the project**
    ``` npm run dev ```

4. **Open the project in your browser**
    ``` http://localhost:3000/ ```
