This repository contains my learning projects on **web scraping** using Node.js, Request, Axios, and Cheerio.

---

## Technologies Used

* Node.js
* Request
* Axios
* Cheerio

---

## Projects

### 1. COVID-19 Stats Scraper

Scrapes real-time COVID-19 statistics from [Worldometer](https://www.worldometers.info/coronavirus/).
*Technologies:* Node.js, Request, Cheerio

---

### 2. Books to Scrape — Book Titles & Details Scraper

Scrapes book details (title, price, availability) from [Books to Scrape](https://books.toscrape.com/), a website designed for web scraping practice.
*Technologies:* Node.js, Axios, Cheerio

---

## Usage

1. Clone the repo:

```bash
git clone https://github.com/yourusername/learning-web-scraping.git
cd learning-web-scraping
```

2. Install dependencies:

```bash
npm install
```

3. Run the scrapers:

```bash
node scraper.js          # COVID-19 stats scraper
node booksScraper.js     # Books to Scrape scraper using Request
node bookinfo.js         # Books to Scrape scraper using Axios & Cheerio
```

---

## Future Enhancements

* Pagination scraping
* Export data to CSV or JSON files
* Scrape detailed book descriptions
* Build CLI tools for scraping options
* Add error handling and tests

---


