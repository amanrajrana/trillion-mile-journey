## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup Locally](#setup-locally)
- [Production](#production)
- [Feedback](#feedback)
- [Authors](#authors)
- [About Me](#about-me)

---

## Tech Stack

The project utilizes the following tech stack:

- **NextJS**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
- **TypeScript**: A statically typed superset of JavaScript for enhanced code quality and developer productivity.
- **ShadCN UI**: A UI component library providing ready-to-use interface elements for faster frontend development. [Learn more](https://ui.shadcn.com/docs)
- **Firebase**: A for user auth [Learn more](https://firebase.google.com/docs/auth/web/start)

---

## Setup Locally

### Prerequisites

Make sure you have the following software installed on your local system:

- NodeJS version `18.15.*+` [Download](https://nodejs.org/en/download)
- Yarn [Get Started](https://yarnpkg.com/getting-started)
- Firebase account [Learn more](https://firebase.google.com/docs/auth/web/star)

You can also use npm without any issue.

1. **Clone the project**

```bash
git clone https://github.com/amanrajrana/trillion-mile-journey.git
```

2. **Navigate to the project directory**

```bash
cd trillion-mile-journey
```

3. **Install dependencies**

```bash
yarn
```

4. **Setup Environment variables**

- create a `.env.local` and add following API Keys. you will get api key from firebase [docs](https://firebase.google.com/docs/auth/web/start)

```js
NEXT_PUBLIC_API_KEY = "**************************";
NEXT_PUBLIC_AUTH_DOMAIN = "************";
NEXT_PUBLIC_PROJECT_ID = "***************";
NEXT_PUBLIC_STORAGE_BUCKET = "*********************";
NEXT_PUBLIC_MESSAGING_SENDER_ID = "**************";
NEXT_PUBLIC_APP_ID = "**************";
```

4. **Start the server in development environment**

```bash
yarn dev
```

5. **Preview in browser**

```bash
localhost:3000
```

## Production

### Production Build

```bash
yarn build
```

### Starting the Application

```bash
yarn start
```

## Feedback

If you have any feedback, please reach out to us via [LinkedIn](https://www.linkedin.com/in/amanrajrana).

---

## Authors

**Aman Raj Rana**

[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amanrajrana)
[![GitHub](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/amanrajrana)

## About Me

MERN developer | ReactJS 🚀 MongoDB 📊 Express 🛠️ NodeJS 💻 | Clean code enthusiast | Agile methodologies | Let's build amazing web apps! 🌐
