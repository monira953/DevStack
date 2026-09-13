#  Dev Stack

Dev Stack is a responsive web application that allows developers to explore popular web development technologies and build their own personalized technology stack.

Users can browse technology cards, view useful information about each technology, and add their preferred technologies to their stack.

---

##  Technologies Used

- **React** – For building the user interface
- **TypeScript** – For type-safe development
- **Tailwind CSS** – For styling and responsive design
- **DaisyUI** – For reusable UI components
- **React Toastify** – For displaying notifications
- **Vite** – For development and build tooling
- **JSON** – For storing and loading technology data

---

##  Features

### 1.  Explore Technologies

Users can explore different development technologies with information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology icon
- Badge

The technology data is loaded from a JSON file instead of being hardcoded in the component.

### 2.  Build Your Own Stack

Users can add technologies to their personal stack.

The stack allows users to:

- Add technologies
- Remove individual technologies
- See the total number of selected technologies
- Remove all selected technologies at once

Added technologies are automatically shown as disabled on their original cards.

### 3.  Responsive & Interactive UI

Dev Stack is designed to work across different screen sizes.

- **Desktop:** 3 technology cards per row
- **Tablet:** 2 technology cards per row
- **Mobile:** 1 technology card per row

The project also includes loading indicators and toast notifications for user actions.

---

#  React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It is used in React because it makes it easier to write and understand the structure of the UI.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data that is managed inside a component and can change over time.

## 3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to store and update data in a React component.

I used it in App.tsx to store the technologies selected by the user:

const [stack, setStack] = useState<ITechnology[]>([]);

I also used useState in TechnologyGrid.tsx to store the technology data and loading state.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to run code after a component renders.

I used it in TechnologyGrid.tsx to fetch the technology data from technologies.json when the component loads.

useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);

The empty dependency array means the effect runs when the component first loads.

## 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

It helps React understand which items have changed, been added, or been removed.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in StackSidebar.tsx to show an empty-stack message when no technologies have been selected:

{stack.length === 0 ? (
  <div>
    <h3>Your stack is empty</h3>
    <p>Add technologies to build your stack.</p>
  </div>
) : (
  <div>
    {/* Stack items */}
  </div>
)}

If the stack is empty, the empty message is displayed. Otherwise, the selected technologies are displayed.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through props.

A child can communicate back to the parent by calling a function that the parent passed through props.