# BrrrGrrr - A Burger Customization Web App 🍔

![BrrrGrrr Banner](https://via.placeholder.com/1200x400.png?text=BrrrGrrr+Banner)

## Overview

**BrrrGrrr** is a frontend-only web application built with React, designed to let users customize their perfect burger. With an intuitive interface, users can select ingredients, see dynamic pricing updates, and place their orders—all enhanced with smooth animations. This project showcases modern web development practices with a focus on user experience and responsive design.

### 🌟 Key Features
- **Burger Customization**: Add or remove ingredients like patties, cheese, lettuce, and more.
- **Dynamic Pricing**: Real-time price updates based on selected ingredients.
- **Order Placement**: Simulate placing an order with a confirmation modal.
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS.
- **Smooth Animations**: Enhanced user experience with Framer Motion.

## 🚀 Demo & Links

- **Live Demo**: [https://brrrgrrr-taupe.vercel.app/](https://brrrgrrr-taupe.vercel.app/)
- **Video Demonstration**: Watch the demo on YouTube: [BrrrGrrr Burger Maker Demo: Create Your Perfect Burger!](https://youtu.be/sbvl1FZiB4o)

## 🛠️ Tech Stack

### Frontend
- **React (v18)**: For building a dynamic and interactive UI.
- **Tailwind CSS**: For responsive and modern styling.
- **Shadcn UI**: For reusable and customizable UI components.
- **Framer Motion**: For smooth animations and transitions.
- **Vite**: For fast development and build tooling.

### Deployment
- **Vercel**: Hosted on Vercel for seamless deployment.

## 📐 Architecture

BrrrGrrr is a frontend-only application built with a component-based architecture in React:
- **Components**: Modular components like `BurgerBuilder`, `IngredientSelector`, and `OrderSummary` handle specific functionalities.
- **State Management**: Uses React’s `useState` and `useEffect` hooks to manage ingredient selections, pricing, and order state.
- **Animations**: Framer Motion is used for transitions, such as ingredient additions and modal animations.

### Workflow
- Users interact with the UI to select ingredients.
- The app updates the burger preview and price dynamically using React state.
- On order placement, a confirmation modal appears with a summary of the order.

## 🖥️ Screenshots

### Burger Builder
![Burger Builder](https://via.placeholder.com/800x400.png?text=BrrrGrrr+Burger+Builder)

### Ingredient Selector
![Ingredient Selector](https://via.placeholder.com/800x400.png?text=BrrrGrrr+Ingredient+Selector)

### Order Confirmation
![Order Confirmation](https://via.placeholder.com/800x400.png?text=BrrrGrrr+Order+Confirmation)

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/brrrgrrr.git
   cd brrrgrrr
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the App**:
   - Open your browser and go to `http://localhost:5173` to view the app locally.

## 🛠️ Challenges Faced
- **Dynamic Pricing**: Ensured accurate price updates by managing state efficiently with React hooks.
- **Responsive Design**: Used Tailwind CSS to make the UI adaptable across devices.
- **Animations**: Fine-tuned Framer Motion animations to avoid performance issues on mobile devices.

## 📈 Future Improvements
- **Backend Integration**: Add a backend to save orders and user preferences.
- **More Ingredients**: Expand the ingredient list with more customization options.
- **User Accounts**: Allow users to save their favorite burger builds.
- **Payment Simulation**: Simulate a payment gateway for a more realistic experience.

## 🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project’s style guidelines.

## 📧 Contact
For any inquiries, reach out to me at [chayankhetan36@gmail.com](mailto:chayankhetan36@gmail.com).

## 📜 License
This project is licensed under the MIT License.

---

**Made with ❤️ by Chayan Khetan**