// Array of quotes
const quotes = [
    "“Life is like riding a bicycle. To keep your balance, you must keep moving.” - Albert Einstein",
    "“A friend is someone who understands your past, believes in your future, and accepts you just the way you are.” - Unknown",
  ];
  
  // Get quote element
  const quoteElement = document.getElementById("quotes");
  
  // Get new quote button
  const newQuoteBtn = document.getElementById("newQuote");
  
  // Function to get random quote
  function getRandomQuote() {
    // Get random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Return random quote
    return quotes[randomIndex];
  }
  
  // Load random quote on page load
  loadQuote();
  
  // Function to load quote
  function loadQuote() {
    // Get random quote
    const quote = getRandomQuote();
  
    // Display in element
    quoteElement.innerHTML = quote;
  
    // Save to localStorage
    localStorage.setItem("quote", quote);
  }
  
  // Load quote from localStorage on page load
  const storedQuote = localStorage.getItem("quote");
  if (storedQuote) {
    quoteElement.innerHTML = storedQuote;
  }
  
  // Handle new quote button click
  newQuoteBtn.addEventListener("click", loadQuote);
  