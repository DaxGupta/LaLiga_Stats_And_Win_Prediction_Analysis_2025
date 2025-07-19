# ⚽La Liga Stats & Win🏆Prediction Analysis 2025 📊

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-blue.svg)](https://opensource.org/licenses/AFL-3.0)
<br>
<br>
Link to the page: https://laligastats2025-dw48h.sevalla.page/

## Table of Contents
- [Project Overview](#project-overview)
- [Analysis Hypothesis](#analysis-hypothesis)
- [Directory Structure](#directory-structure)
- [Data Sources](#data-sources)
- [Website Preview](#website-preview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Analysis](#running-the-analysis)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)


## Project Overview📝
This repository contains a comprehensive analysis of La Liga seasons from 2014 to 2024, focusing on performance trends and predicting the outcomes for the 2025 season. It includes data scraping notebooks, detailed data analysis, and a web-based visualization to present the findings. The project also features an interactive website to visualize the data.

## Analysis Hypothesis🚀
Our analysis aims to answer critical questions about the current and upcoming La Liga season:

* "Given the current state of the table and past seasons' data, what's the realistic probability that each team could still win La Liga?"
* Who is most likely to win La Liga this year based on previous 10 years? 🏆
* Who are the 2 teams that will most likely be relegated? 📉
* Which team will most likely go to the Conference League (7th position)? 🌍

## Directory Structure📂
<pre>
  Directory structure:
└── daxgupta-laliga_stats_and_win_prediction_analysis_2025/
    ├── README.md                          <-- 📄 This file!
    ├── index.html                         <-- 🌐 Main web visualization page
    ├── index2.html                        <-- 🌐 (Optional) Another HTML page, perhaps for different visualizations/analysis
    ├── La_Liga_Data_Analysis.ipynb      <-- 📊 Jupyter Notebook for data analysis and predictions
    ├── Data Scraping/                   <-- 🛠️ Contains data scraping tools
    │   ├── la_liga_data_2014_2025.csv   <-- 💾 Scraped La Liga data
    │   └── scrap.ipynb                  <-- 🐍 Jupyter Notebook for data scraping
    └── Separate/                        <-- 🎨 Frontend assets for the main visualization
        ├── index.html                   <-- 🌐 (Duplicate/Alternative) HTML for the web app
        ├── script.js                    <-- 💻 JavaScript for interactive charts and background
        └── style.css                    <-- 🖌️ CSS for styling the web application

</pre>
`Data Scraping/la_liga_data_2014_2025.csv`: Contains La Liga match statistics from 2014 to 2025.

## Data Sources
The data in the `la_liga_data_2014_2025.csv` file was primarily sourced by scraping HTML tables from the sports statistics website Fbref.com 📊. The Jupyter Notebook, `scrap.ipynb`, demonstrates that data for the 2014-2015 La Liga season, and likely other seasons, was extracted from specific URLs on this site, such as `https://fbref.com/en/comps/12/2014-2015/2014-2015-La-Liga-Stats` ⚽.

## Website Preview🌐
The project includes a website to visualize the data analysis.
>![LaLiga image](https://github.com/user-attachments/assets/036ba099-3ab0-4c8b-8d60-f73eb85b7717)

-   `index.html`: Main entry point for the website.
-   `index2.html`: An optional or alternative entry point.
-   `Separate/index.html`: Another web page, possibly with a different visualization or feature.

## Features✨
* **Data Scraping:** Automated collection of La Liga historical data from 2014 to 2024.
* **In-depth Analysis:** Statistical breakdown of team performances, including points, goals, and expected goals (xG).
* **Championship Prediction:** Utilizes historical data to predict the likely winner of the 2025 La Liga season.
* **Relegation & Conference League Predictions:** Identifies teams most likely to be relegated and those qualifying for the Conference League.
* **Interactive Visualizations:** Web-based interface `(index.html)` to display key insights and predictions using Plotly.js and Vanta.js for a dynamic background.

## Technologies Used💻
    -   Python
    -   Pandas
    -   NumPy
    -   Beautiful Soup (for web scraping)
    -   Scikit-learn (for machine learning, if applicable)
    -   HTML
    -   CSS
    -   JavaScript

## Setup and Installation🛠

### Prerequisites
* **Python 3.x**
* **Jupyter Notebook**
* **Required Python libraries:** `pandas`, `numpy`, `plotly`, `scikit-learn` (if a model is used in `La_Liga_Data_Analysis.ipynb`).
* **A web browser to view** `index.html`.

### Installation
1. Clone the repository:
<pre> git clone https://github.com/daxgupta/daxgupta-laliga_stats_and_win_prediction_analysis_2025.git
 cd daxgupta-laliga_stats_and_win_prediction_analysis_2025</pre>

2. Install Python dependencies:
<pre> pip install pandas numpy plotly scikit-learn</pre>

### Running the Analysis
1. Data Scraping:
    * Navigate to the `Data Scraping/` directory.
    * Open `scrap.ipynb` in Jupyter Notebook.
    * Run all cells to scrape the latest La Liga data and save it as `la_liga_data_2014_2025.csv`.

2. Data Analysis and Prediction:
    * Open `La_Liga_Data_Analysis.ipynb` in Jupyter Notebook.
    * Run all cells to perform the analysis and generate predictions. This notebook will output the key findings.

3. Viewing the Web Visualization:
    * Open `index.html` (or `Separate/index.html` if you prefer that version) in your web browser.
    * The page will display interactive charts and analysis based on the data. The `script.js` and `style.css` files in the `Separate/` directory are used for the visual presentation and interactivity.

## Usage🚀
1.  Run the `La_Liga_Data_Analysis.ipynb` Jupyter Notebook to explore the data and analysis.
2.  Open the `index.html` file in your browser to view the interactive visualizations.

> *Provide specific examples of how to use the project, including code snippets or commands.*

## Future Enhancements🔬
-   Implement a machine learning model for win prediction.
-   Add more interactive visualizations to the website.
-   Include data from additional seasons.
-   Improve the data scraping process.

## Contribution🤝
Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.

## License📜
This project is licensed under the MIT License, GPL, and AFL. See the `LICENSE` file for details.

## Contact📧
> Daksh Gupta - [dakshg508@gmail.com](mailto:dakshg508@gmail.com)
