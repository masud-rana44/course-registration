<h1 align="center">
Course Registration</h1>

<p align="center"><img src="./src/assets/screenshot.PNG" alt="Course registration homepage"></p>

## 📝 Features

1. **Course Selection**: User can select any course whatever he/she want. It immediately reflects in the cart ui.

2. **Dynamic Course Rendering**: Every course is rendered dynamically. Whenever we need to add a new course, we just need to add that course data in our json.

3. **Real Time Cart Updates**: The cart immediately reflects when we select a course. It displays available credit, the titles of selected courses, and the total price - all in real time.

4. **User-Friendly React Toasts**: Whenever there is any error occur the application communicate with a friendly toast message. It enhance the user experience.

5. **Responsive Layout**: Entire application is responsive. It fit's all the devices according to the screen size of the user.

## 🧩 State Management Discussion

Component tree of the application:

- App
  - AppLayout
    - Header
    - Cards
      - Card
      - Card
      - Card
      - ...
    - Cart

In this application, I needed to manage two types of state: one for **courses data** and another for **selected courses**.

### Courses Data State

For courses data, I wanted to access the state within the `Cards` component to render each card appropriately. To achieve this, I decided to store the courses' data in the `AppLayout` component. Initially, I sent this data to the `Cards` component via props. The `Cards` component then used this data to render each `Card` component accordingly.

### Selected Courses State

As per the application requirements, I needed to add an event handler to each card. When this event was triggered, the result should be displayed in the `Cart` component. Specifically, I aimed to add a click event to the "select" button of the `Card` component. When a user clicked the "select" button, the course's title should appear in the `Cart` component.

To achieve this, I created the selected courses state in a common ancestor component, namely the `AppLayout` component. Within this component, I set up the selected courses state and an associated selection handler function. I then passed this handler function to the `Card` component via props. This handler was attached to the "select" button of the `Card` component. When the button was clicked, the action was executed within the handler function in the `AppLayout` component. This action updated the state accordingly.

Additionally, I passed the selected courses state to the `Cart` component. This enabled me to display the updated data from the `Cart` component. This approach ensured that both the `Card` and `Cart` components could easily access and interact with the shared state for selected courses.
