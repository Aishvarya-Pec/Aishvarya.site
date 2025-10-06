# 🚀 AIshvarya Portfolio Website

Welcome to the repository for my personal portfolio website! This is where I showcase my skills, projects, and a bit of my personality through jaw-dropping 3D animations, slick interactions, and fluid motion. If you're into creative web design, you're in the right place.

![Portfolio Preview](public/assets/projects-screenshots/portfolio/landing.png)

## 🔥 Features

- **3D Animations**: Custom-made interactive keyboard using Spline with skills as keycaps that reveal titles and descriptions on hover.
- **Slick Interactions**: Powered by GSAP and Framer Motion for smooth animations on scroll, hover, and element reveal.
- **Space Theme**: Particles on a dark background to simulate a cosmic environment, making the experience out of this world.
- **Responsive Design**: Fully responsive across all devices to ensure the best user experience.
- **Innovative Web Design**: Combining creativity with functionality to push the boundaries of modern web design.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn, Aceternity UI
- **Animations**: GSAP, Framer Motion, Spline Runtime
- **Misc**: Resend, Socketio, Zod

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Aishvarya-Pec/Aishvarya.site.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Aishvarya.site
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic!

## 🚀 Deployment

This site is deployed on Vercel. For your own deployment, follow these steps:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Vercel will handle the deployment process.

## ✉️ Contact Form Email Setup

The contact form sends emails via Resend.

- Set your recipient email in `src/data/config.ts` under `config.email`.
- Create `.env.local` in the project root with your Resend API key:

  ```bash
  RESEND_API_KEY=your_resend_api_key_here
  ```

- Restart the dev server after adding env vars.

Notes:
- Default sender is `onboarding@resend.dev` which works for development. For production, set up a verified domain on Resend and use your domain email as the `from` address.
- If `RESEND_API_KEY` is missing, the API will respond with a clear error.

## 🤝 Contributing

If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
