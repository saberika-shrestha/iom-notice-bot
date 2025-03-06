# 📢 **IOM Notice Bot**

A lightweight Telegram bot that automatically posts new results, routines and notices from IOM to a Telegram channel. Built using Node.js and TypeScript, leveraging Telegram's official API without any heavy dependencies.

## 📌 **Table of Contents**

- [Preview](#preview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)
- [Contributing](#contributing)

## 📸 **Preview**

<div align="center">
  <img src="./assets/preview.jpg?raw=true" height="700"/>
</div>

## ⚙ **Prerequisites**

- **Node.js** (v12 or higher)
- **npm** (v6 or higher)
- **Telegram account, channel and bot token**

## 🔧 **Installation**

### 1️⃣ Clone the repository

```sh
git clone https://github.com/saberika-shrestha/iom-notice-bot.git

cd iom-notice-bot
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory and add the following environment variables

```sh
BOT_TOKEN=your_telegram_bot_token

CHANNEL_ID=your_telegram_channel_id

ADMIN=your_telegram_account_id
```

### 4️⃣ Run the bot

```sh
npm start
```

## Dependencies

- **[axios](https://www.npmjs.com/package/axios)** - Promise based HTTP client for the browser and node.js
  
- **[cheerio](https://www.npmjs.com/package/cheerio)** - Fast, flexible & lean implementation of core jQuery designed specifically for the server

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
